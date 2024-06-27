import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const PORT = process.env.PORT || 4000; // Define a default port if not set in the environment variables

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
