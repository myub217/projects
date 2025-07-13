import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

/**
 * ✅ Vite Config: JP Visual & Docs
 * - React + TypeScript + Tailwind + DaisyUI
 * - รองรับ alias `@` → `src/`
 * - เปิดใช้งาน env variables ที่ขึ้นต้นด้วย VITE_
 * - ใช้ visualizer ใน production build
 * - รองรับ react-router ด้วย SPA fallback
 */

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const env = loadEnv(mode, process.cwd());

  const defineEnv = Object.fromEntries(
    Object.entries(env)
      .filter(([key]) => key.startsWith("VITE_"))
      .map(([key, val]) => [`process.env.${key}`, JSON.stringify(val)])
  );

  return {
    plugins: [
      react(),
      !isDev &&
        visualizer({
          filename: "dist/report.html",
          open: true,
          gzipSize: true,
          brotliSize: true,
          template: "sunburst",
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    define: defineEnv,

    server: {
      port: 5173,
      open: true,
      fs: {
        allow: ["."],
      },
      // แก้ชื่อ property เป็น correct option สำหรับ SPA fallback ใน Vite dev server
      historyApiFallback: true,
    },

    preview: {
      port: 4173,
      open: true,
    },

    build: {
      outDir: "dist",
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes("node_modules")) {
              if (id.includes("react")) return "vendor-react";
              if (id.includes("tailwindcss")) return "vendor-tailwind";
              return "vendor";
            }
          },
        },
      },
    },

    css: {
      devSourcemap: true,
    },
  };
});