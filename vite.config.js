import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "dist/report.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
      template: "sunburst",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5173,
    open: true,
    // ใช้ fallback สำหรับ SPA routing ใน dev server
    historyApiFallback: true,
  },
});