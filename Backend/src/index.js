import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";
// import dotenv from 'dotenv';
// dotenv.config();


connectDB()
  .then(() => {
    app.listen(() => {
      console.log("⚙️ Server is running on Vercel");
    });
    
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed!!", err);
  });
