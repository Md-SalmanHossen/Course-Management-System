import jwt from 'jsonwebtoken';

const generateToken=(res,userId)=>{
   try {
      const token=jwt.sign({userId},process.env.JWT_SECRET,{
         expiresIn:'30d'
      });
      console.log('Generate JWT token for postman testing: ',token);
      res.cookie('jwt',token,{
         httpOnly:false,
         secure:process.env.NODE_ENV!=='development',
         sameSite:'strict',
         maxAge:30*24*60*60*1000
      });
      return token;
   } catch (error) {
      console.log(`Server error for generate token : ${error.message}`);
   }
}

export default generateToken;