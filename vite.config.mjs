import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import strip from "@rollup/plugin-strip";
import history from "connect-history-api-fallback";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const isDev = mode === "development";

  // แปลง .env → process.env.VITE_*
  const defineEnv = Object.fromEntries(
    Object.entries(env)
      .filter(([key]) => key.startsWith("VITE_"))
      .map(([key, val]) => [`process.env.${key}`, JSON.stringify(val)])
  );

  return {
    base: env.VITE_BASE_URL || "/",

    plugins: [
      react(),
      !isDev &&
        visualizer({
          filename: "dist/report.html",
          open: env.VITE_OPEN_REPORT === "true",
          gzipSize: true,
          brotliSize: true,
          template: "sunburst",
        }),
      !isDev &&
        strip({
          include: ["**/*.ts", "**/*.tsx"],
          functions: ["console.log", "debug"],
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    define: defineEnv,

    server: {
      port: Number(env.VITE_DEV_SERVER_PORT) || 5173,
      open: env.VITE_OPEN_BROWSER === "true",
      fs: {
        allow: ["."],
      },
      middlewareMode: false,
      configureServer(server) {
        server.middlewares.use(history());
      },
    },

    preview: {
      port: Number(env.VITE_PREVIEW_SERVER_PORT) || 4173,
      open: env.VITE_OPEN_BROWSER === "true",
    },

    build: {
      outDir: env.VITE_BUILD_OUTDIR || "dist",
      sourcemap: true,
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks(id) {
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