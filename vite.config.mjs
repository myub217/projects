import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";
import strip from "@rollup/plugin-strip";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const env = loadEnv(mode, process.cwd());

  const defineEnv = Object.fromEntries(
    Object.entries(env)
      .filter(([key]) => key.startsWith("VITE_"))
      .map(([key, val]) => [`process.env.${key}`, JSON.stringify(val)])
  );

  return {
    base: "/",
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
      port: 5173,
      open: true,
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