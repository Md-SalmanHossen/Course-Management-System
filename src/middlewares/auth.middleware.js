import jwt from 'jsonwebtoken';
import User from '../models/Course.Model.js';

const protect=async(req ,res , next)=>{
   try {
      let token=req.cookies.jwt;

      if(token){
         const decode=jwt.verify(token, process.env.JWT_SECRET);
         req.user=await User.findById(decode.userId).select('-password');
         next();

      }else{
         return res.status(401).json({
            message:"Not Authorized,no token"
         })
      }
      
   } catch (error) {
      res.status(500).json({
         message:"Server error in auth middleware",
         error:error.message,
      })
   }
}

export default protect;