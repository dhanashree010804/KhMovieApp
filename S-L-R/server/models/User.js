import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Added the name field
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }, // Added the age field
    password: { type: String, required: true }
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel as User };
