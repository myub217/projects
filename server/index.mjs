// index.mjs
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import accessKeyRouter from "./routes/accessKey.mjs";

const app = express();
const port = process.env.PORT || 3000;

// ✅ Middleware
app.use(cors());          // เปิดใช้งาน CORS
app.use(express.json());  // แปลง JSON body อัตโนมัติ

// ✅ Routes
app.use("/api/check-access-key", accessKeyRouter);

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("🌐 JP Visual & Docs API is running.");
});

// ✅ Global Error Handlers
process.on("uncaughtException", (err) => {
  console.error("💥 Uncaught Exception:", err);
});
process.on("unhandledRejection", (reason, promise) => {
  console.error("⚠️ Unhandled Rejection at:", promise, "reason:", reason);
});

// ✅ Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

export default app;