import express from 'express'
import dotenv from 'dotenv'
import './config/db.js'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app=express()
dotenv.config({path: "./config/.env"})
//dotenv.config()
import {UserRouter}from './routes/user.js'
app.use(cookieParser())
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    allowedHeaders: ["Content-Type", "test"],
}))
app.use('/auth',UserRouter)

//mongoose.connect('mongodb://127.0.0.1:27017/test')
app.listen(process.env.PORT,()=>{
    console.log("Server is Running")
})