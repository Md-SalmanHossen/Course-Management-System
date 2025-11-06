const errorHandler=(err,req ,res ,next)=>{
   try {
      let statusCode=res.statusCode===200?500: res.statusCode;
      let message=err.message;

      res.status(statusCode).json({
         message:message,
         stack:process.env.Node_ENV==='protection'?null: err.stack
      });
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message
      })
   }
}
export default errorHandler;