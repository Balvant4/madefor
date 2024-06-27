import express from "express";
import mongoose from "mongoose";
import userRouter from "../api/routes/user.route.js";
import authRouter from "../api/routes/auth.route.js";
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
app.use(express.json());
const PORT = process.env.PORT || 4000; // Define a default port if not set in the environment variables

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
