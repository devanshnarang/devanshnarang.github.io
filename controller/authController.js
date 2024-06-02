import usermodel from "../models/usermodel.js";

export const messageController = async(req,res)=>{
    try {
        const {name,email,message} = req.body;
        if(!name)return res.send({error:"Name is required"})
        if(!email)return res.send({error:"Email is required"})
        
        //const user
        const newuser =new usermodel({name,email,message}).save();

        res.status(200).send({
            success:true,
            message:"Message sent successfully",
            newuser
        })
    } catch (error) {
        console.log("Error in registration")
        res.status(500).send({
            success:false,
            message:"Error in sending message",
            error
        })
    }
}