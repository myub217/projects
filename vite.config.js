// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import { visualizer } from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // ✅ เพิ่มตรงนี้เลย
  server: {
    historyApiFallback: true,
  },
});