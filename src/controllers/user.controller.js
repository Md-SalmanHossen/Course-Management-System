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

export const login=async(req, res)=>{
   try {
      const {email,password}=req.body;
      const user=await User.findOne({email});
      
      if(!user){
         return res.status(401).json({
            message:'Invalid email or password',
         })
      }
      
      const validPassword=await bcrypt.compare(password,user.password,10);

      if(validPassword){

         generateToken(res , user._id);
         return res.status(200).json({
            message:'User login successfully',
            data:{
               _id:user._id,
               name:user.name,
               email:user.email,
            }
         })
      }else{
         return res.status(401).json({
            message:'Invalid email or password'
         });
      }

   } catch (error) {
      res.status(500).json({
         message:'Server error occur during login',
         error:error.message,
      })
   }
}

export const updateProfile=async(req , res)=>{
   try {
      const user=await User.findById(req.user._id);
      
      if(!user){
         return res.status(404).json({
            message:'User not found'
         })
      }
      user.name=req.body.name ||user.name;

      const newEmail=req.body.email;

      if(newEmail && newEmail !==user.email){

         const emailExists=await User.findOne({email:newEmail});

         if(emailExists){
            return res.status(400).json({
               message:'This email already taken'
            });
         }
         user.email=newEmail;
      }

      user.phoneNumber=req.body.phoneNumber || user.phoneNumber;

      const newPassword=req.body.password;
      if(newPassword){

         const salt=await bcrypt.genSalt(10);
         user.password= await bcrypt.hash(newPassword,salt);
         
      }
      const updateUser=await user.save();

      return res.status(200).json({
         message:"User updated successfully",
         data:{
            _id:updateUser._id,
            name:updateUser.name,
            email:updateUser.email,
            phoneNumber:updateUser.phoneNumber,
         }
      });

   } catch (error) {
      res.status(500).json({
         message:'Server error occur during update profile',
         error:error.message
      })
   }
}

