// server.ts

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";
import dotenv from "dotenv";
import apiRouter from "./api/apiAdmin"; // ✅ รองรับ TS build/dev

// ✨ Optional: If @types/connect-history-api-fallback ไม่ติดตั้ง ให้ declare module
// (ย้ายไปไว้ใน types/connect-history-api-fallback.d.ts ถ้าใช้จริง)
declare module "connect-history-api-fallback" {
  interface Context {
    parsedUrl: {
      pathname?: string;
    };
  }
  function historyFallback(
    options?: {
      rewrites?: { from: RegExp; to: (context: Context) => string }[];
    }
  ): import("express").RequestHandler;
  export = historyFallback;
}

/**
 * ✅ Express Server Config: JP Visual & Docs
 * - รองรับ Vite build output (dist)
 * - React SPA routing fallback (react-router)
 * - โหลด env variables จาก .env
 * - API routing prefix /api
 */

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ SPA fallback ยกเว้น /api/*
app.use(
  history({
    rewrites: [
      {
        from: /^\/api\/.*$/,
        to: (context: { parsedUrl: { pathname?: string } }) =>
          context.parsedUrl.pathname || "",
      },
    ],
  })
);

// ✅ Static files from Vite build
app.use(express.static(path.join(__dirname, "dist")));

// ✅ API routes prefix /api
app.use("/api", apiRouter);

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});