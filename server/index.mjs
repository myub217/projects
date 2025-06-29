// index.mjs

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";

import loginRouter from "./routes/login.mjs";
import accessKeyRouter from "./routes/accessKey.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware ทั่วไป
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/login", loginRouter);              // 🔐 Login route
app.use("/api/check-access-key", accessKeyRouter); // 🔑 Access key route

// Default route
app.get("/", (req, res) => {
  res.send("🌐 JP Visual & Docs API is running.");
});

// Error handling
process.on("uncaughtException", (err) => {
  console.error("❗ Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❗ Unhandled Rejection at:", promise, "reason:", reason);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

export default app;