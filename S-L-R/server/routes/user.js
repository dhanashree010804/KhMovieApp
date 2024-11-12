import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import nodemailer from 'nodemailer';

const router = express.Router();

// Sign-up Route
router.post('/signup', async (req, res) => {
    const { name, username, email, age, password } = req.body;

    // Check if the username or email already exists
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (user) {
        return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
        name,
        username,
        email,
        age,
        password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
});

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password is valid
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' });

    // Set the token in a cookie and send the response
    res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });
    return res.json({ status: true, message: 'Login successful' });
});

// Forgot Password Route
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate a reset token
        const token = jwt.sign({ username: user.username }, process.env.KEY, { expiresIn: '1h' });

        // Nodemailer configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,  // Use environment variables for email credentials
                pass: process.env.EMAIL_PASS,  // Use environment variables for email password
            },
        });

        const resetLink = `http://localhost:5174/reset-password/${token}`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Reset Password',
            text: `Click on the following link to reset your password: ${resetLink}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Error sending mail', error);
                return res.status(500).json({ message: 'Error sending email' });
            } else {
                console.log('Email sent:', info.response);
                return res.status(200).json({ message: 'Password reset email sent' });
            }
        });
    } catch (err) {
        console.log('Error in forgot-password route:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Reset Password Route
router.post('/reset-password', async (req, res) => {
    const { token } = req.body;  // Token should come from the body, not from params
    const { password } = req.body;

    try {
        // Decode the token to get the username
        const decodedToken = jwt.verify(token, process.env.KEY);
        if (!decodedToken) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        const user = await User.findOne({ username: decodedToken.username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

        // Save the updated password
        await user.save();
        return res.status(200).json({ message: 'Password reset successfully' });

    } catch (err) {
        console.log('Error in reset-password route:', err);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

export { router as UserRouter };
