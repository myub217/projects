// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

/**
 * Vite Config: JP Visual & Docs – SPA + Tailwind + DaisyUI
 * Features:
 * - SPA routing (React Router)
 * - Path aliasing "@/..."
 * - Bundle visualizer (treemap/sunburst)
 */

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    plugins: [
      react(),

      // Optional visualizer (open only in production build)
      !isDev &&
        visualizer({
          filename: "dist/report.html",
          open: true,
          gzipSize: true,
          brotliSize: true,
          template: "sunburst",
        }),
    ].filter(Boolean), // remove false plugins

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    server: {
      port: 5173,
      open: true,
      // รองรับ react-router-dom แบบ history fallback
      historyApiFallback: true,
    },

    preview: {
      port: 4173,
      open: true,
    },

    build: {
      outDir: "dist",
      sourcemap: true, // useful for debugging production
    },
  };
});