import mongoose from "mongoose";

const connectDB=async()=>{
   try {
      
      const connect_with_db=await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${connect_with_db.connection.host}`);
      console.log(`MongoDB Connected: ${connect_with_db.connection.name}`);
   } catch (error) {

      console.log(`Database error: ${error.message}`);
      process.exit(1);

   }
}

export default connectDB;