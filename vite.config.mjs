import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react({
      // เปิดใช้งาน Babel Macros เช่น twin.macro
      babel: {
        plugins: ["macros"],
      },
      // หากต้องการ เปิด Fast Refresh, automatic JSX runtime สามารถตั้งค่าเพิ่มได้ที่นี่
      // jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173, // กำหนดพอร์ต dev server (ถ้าต้องการ)
    open: true, // เปิด browser อัตโนมัติเมื่อสตาร์ท
    // host: true, // ถ้าต้องการให้เข้าจาก IP ภายนอกได้
  },
  build: {
    sourcemap: true, // เปิด source map สำหรับดีบัก
  },
});