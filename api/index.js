import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import dotenv from 'dotenv'
dotenv.config()
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('connected to MongoDb')
})
.catch((err)=>{
    console.log(err);
})
const app = express()
app.use(express.json());
app.listen(5000,(req,res)=>{
    console.log('Server is running on port number 5000.....')
})
app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use((err,req,res,next) =>{
    const statuscode = err.statuscode || 500;
    const message = err.message || "internal Server Error";
    return res.status(statuscode).json({
        sucess: false,
        statuscode,
        message
    })
})