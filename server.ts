// server.ts
import express, { Request, Response } from "express";
import path from "path";
import history from "connect-history-api-fallback";
import { fileURLToPath } from "url";

// สำหรับใช้กับ ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Middleware: SPA fallback (React Router)
app.use(history());

// ✅ Middleware: body-parser
app.use(express.json());

// ✅ Static file: dist หลัง build ด้วย Vite
app.use(express.static(path.join(__dirname, "dist")));

// ✅ Load API จาก TypeScript module (ESM)
(async () => {
  try {
    const apiAdmin = await import("./api/apiAdmin.ts");
    app.use("/api", apiAdmin.default); // ต้อง export default จาก apiAdmin.ts

    // ✅ Fallback เส้นทาง frontend อื่น ๆ -> index.html
    app.get("*", (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  }
})();