import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();

//adding cors because api cannot be used directly from the client
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
console.log("CLIENT_URL:", process.env.CLIENT_URL);

app.use(express.json());
app.unsubscribe(cookieParser());

app.use("/api/posts", postRoute);
//go to /api/posts/test

//using authentication route here
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  console.log("Server is running");
});