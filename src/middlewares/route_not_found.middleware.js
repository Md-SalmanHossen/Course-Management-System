
const routeNotFound=(req ,res,next)=>{
   try {
      res.status(404).json({
         message:"Route not found",
      })
   } catch (error) {
      res.status(500).json({
         message:"Server error",
         error:error.message
      })
   }
}

export default routeNotFound;