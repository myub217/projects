import {
  defineConfig
} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig( {
  plugins: [
    react( {
      babel: {
        plugins: ["macros"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ตั้ง alias @ -> ./src
    },
  },
  server: {
    port: 5173,
    open: true,
    // ถ้าต้องการให้เข้าจากเครือข่ายอื่น (เช่น LAN, มือถือ) ให้ uncomment
    // host: true,
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000, // เพิ่ม limit เตือนจาก 500KB เป็น 1000KB
    rollupOptions: {
      output: {
        manualChunks: {
          html2canvas: ['html2canvas'],
          jspdf: ['jspdf'],
        },
      },
    },
  },
});