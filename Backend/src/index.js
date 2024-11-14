import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

connectDB()
  .then(() => {
    console.log(`⚙️ MongoDB connected successfully.`);
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed!!", err);
  });

export default app;  // Export the app directly for Vercel to use
