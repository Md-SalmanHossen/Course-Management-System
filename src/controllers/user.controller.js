import User from '../models/User.Model.js';
import generateToken from '../utils/generate_token.utils.js';
import bcrypt from 'bcryptjs';

export const register=async(req ,res)=>{
   try {

      const {name,email,password,phoneNumber}=req.body;
      const userExists=await User.findOne({email});
      
      if(userExists){
         res.status(400).json({
            message:"User already exists",
         })
      }

      const hashedPassword=await bcrypt.hash(password,10);

      const user=await User.create({
         name,
         email,
         password:hashedPassword,
         phoneNumber
      });

      if(user){

         generateToken(res,user._id);
         return res.status(201).json({
            message:'User registration successfully',
            data:user
         })

      } else{
         return res.status(400).json({
            message:"Invalid user data"
         })
      }


   } catch (error) {
      res.status(500).json({
         message:"Server error occur during registration",
         error:error.message
      })
   }
}