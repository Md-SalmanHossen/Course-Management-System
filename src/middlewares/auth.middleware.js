import jwt from 'jsonwebtoken';
import User from '../models/Course.Model.js';

const protect=async(req ,res , next)=>{
   try {
      let token=req.cookies.jwt;

      if(!token){
         const decode=jwt.verify(token, process.env.JWT_SECRET);
         req.user=await User.findById(decode.userId).select('_password');
         next();
      }
      
   } catch (error) {
      
   }
}