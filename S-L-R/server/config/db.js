import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config({path: './config/.env'})
const Connection =async()=>{
    try{
        await mongoose.connect(process.env.URI)
        console.log("MongoDB connected successfully")
    }catch(error){
        console.log("Error while connecting MongoDB" +error.message)
    }
    }

Connection()