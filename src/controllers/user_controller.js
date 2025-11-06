import User from '../models/User.Model.js';
import generateToken from '../utils/generate_token.utils.js';

const register=async(req ,res)=>{
   try {
      const {name,email,password,phoneNumber}=req.body;

      const userExists=await User.findOne({email});
      
      if(userExists){
         res.status(400).json({
            message:"User already exists",
         })
      }

      const user=await User.create({
         name,
         email,
         password,
         phoneNumber
      });

      if(user){
         generateToken(res,user._id);
         register.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            phoneNumber:user.phoneNumber
         })
      } else{
         res.status(400),json({
            message:"Invalid user data"
         })
      }


   } catch (error) {
      res.status(500).json({
         message:"Server error occur during registration",
         error:error
      })
   }
}