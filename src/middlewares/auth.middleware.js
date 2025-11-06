import jwt from 'jsonwebtoken';
import User from '../models/User.Model.js';

const authMiddleware=async(req ,res , next)=>{
   try {
      let token;

      if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
         token = req.headers.authorization.split(' ')[1];
      }
      else if(req.cookies.jwt){
         token=req.cookies.jwt
      }
      if(!token){
         return res.status(401).json({
            message:'No token, authorization denied'
         })
      }
      const decode=jwt.verify(token, process.env.JWT_SECRET);
      console.log('decode token :',decode);

      const user=await User.findById(decode.userId).select('-password');
      console.log("user found from db:",user);

      if(!user){
         return res.status(404).json({ 
            message: "User not found from token" 
         });  
      }
      req.user=user;
      next();
      
   } catch (error) {
      res.status(500).json({
         message:"Server error in auth middleware",
         error:error.message,
      })
   }
}

export default authMiddleware;