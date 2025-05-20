const express = require("express");
const app = express();
const authRouter = require("./controller/authController");
const userRouter = require("./controller/userController");
const chatRouter = require("./controller/chatController");
// const paymentRouter = require("./controller/paymentController");
const messageRouter = require("./controller/messageController");

const rateLimit = require("express-rate-limit");
const cors = require("cors");

//This line is middleware that tells Express to parse incoming request bodies with Content-Type: application/json.

const limiter = rateLimit({
  //A rate limiter is a technique used to control how many requests a user or client can make to a server in a given time period.

  windowMs: 10 * 1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(cors()); // Allow requests from any origin

app.use(limiter);
app.use(express.json()); // Enables parsing of JSON request bodies

app.use("/api/auth", authRouter); // Mounts all auth-related routes under /api/auth
app.use("/api/user", userRouter); // Mounts all auth-related routes under /api/auth

app.use("/api/chat", chatRouter); // Mounts all auth-related routes under /api/auth

// app.use("/api/payment", paymentRouter);

app.use("/api/message", messageRouter);

module.exports = app;
