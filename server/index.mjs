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

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/login", loginRouter);
app.use("/api/check-access-key", accessKeyRouter);

app.get("/", (req, res) => {
  res.send("🌐 JP Visual & Docs API is running.");
});

process.on("uncaughtException", (err) => console.error("Uncaught Exception:", err));
process.on("unhandledRejection", (reason, p) => console.error("Unhandled Rejection:", p, reason));

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

export default app;