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
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    open: true,
    // host: true, // หากต้องการให้เข้าผ่าน IP ได้ ให้ uncomment บรรทัดนี้
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1000, // เพิ่ม limit เตือนจาก 500KB → 1000KB
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