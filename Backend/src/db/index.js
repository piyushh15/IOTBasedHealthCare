import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    //console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected!!');
  } catch (error) {
    console.log("MongoDB Connection Failed!!", error);
    process.exit(1);
  }
};

export default connectDB;