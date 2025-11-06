import jwt from 'jsonwebtoken';

const generateToken=(req,res,userID)=>{
   try {
      const token=jwt.sign({userID},process.env.JWT_SECRET);
      expiresIn:'30d';

      res.cookie('jwt',token,{
         httpOnly:true,
         secure:process.env.Node_ENV!=='development',
         sameSite:'strict',
         maxAge:30*24*60*60*1000
      });

   } catch (error) {
      console.log(`Server error for generate token : ${error.message}`);
   }
}

export default generateToken;