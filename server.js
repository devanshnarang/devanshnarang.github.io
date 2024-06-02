import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

//configure dotenv;
dotenv.config();

//database connect
connectDB()
 
//rest api object
const app=express();


//middleware
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes)

app.get("/",(req,res)=>{
    res.send({
        message:"Welcome to my portfolio website"
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`Website is running on ${process.env.DEV_MODE}`);
})
