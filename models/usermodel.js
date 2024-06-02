import { kMaxLength } from "buffer";
import { timeStamp } from "console";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        trim:true,
        maxLength:200
    }
},{timestamps:true})


export default mongoose.model('users',userSchema);