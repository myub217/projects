// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer"; // ✅ เพิ่ม plugin

// 🔧 แก้ปัญหา __dirname ใน ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/report.html", // 📄 ตำแหน่งไฟล์รายงาน
      open: true,                    // ✅ เปิด browser ให้อัตโนมัติ
      gzipSize: true,                // 📦 แสดงขนาด gzip ด้วย
      brotliSize: true,              // 📦 แสดงขนาด brotli ด้วย (ถ้ามี)
      template: "sunburst",          // 🌞 เลือก style ได้: 'treemap' | 'sunburst' | 'network'
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});