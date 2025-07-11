// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  // โหลด .env ทุกตัวแปร
  const env = loadEnv(mode, process.cwd());

  // เฉพาะตัวแปรที่ขึ้นต้นด้วย VITE_
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
      // รองรับ SPA (react-router)
      fs: {
        allow: ["."],
      },
    },

    preview: {
      port: 4173,
      open: true,
    },

    build: {
      outDir: "dist",
      sourcemap: true,
    },
  };
});