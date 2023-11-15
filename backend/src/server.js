import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});