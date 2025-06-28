// server.mjs
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import accessKeyRouter from "./routes/accessKey.mjs";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors());          // เปิดใช้งาน CORS
app.use(express.json());  // แปลง JSON body ให้อัตโนมัติ

// ✅ Routes
app.use("/api/check-access-key", accessKeyRouter);

// ✅ Default route (optional)
app.get("/", (req, res) => {
  res.send("✅ JP Visual & Docs API is running.");
});

// ✅ Global error handlers (optional)
process.on("uncaughtException", (err) => {
  console.error("💥 Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Rejection:", reason);
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});