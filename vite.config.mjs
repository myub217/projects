// vite.config.mjs
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "JP Visual & Docs",
        short_name: "JPDocs",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#2563EB",
        icons: [
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        mode: "development", // ✅ ใน production แนะนำลบออกหรือใช้ "production"
      },
    }),
    viteCompression(), // ✅ gzip compression
    svgr(), // ✅ สำหรับ import SVG เป็น React Component
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~": path.resolve(__dirname, "src"),
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      hooks: path.resolve(__dirname, "src/hooks"),
      context: path.resolve(__dirname, "src/context"),
      utils: path.resolve(__dirname, "src/utils"),
      assets: path.resolve(__dirname, "src/assets"),
      lib: path.resolve(__dirname, "src/lib"),
      data: path.resolve(__dirname, "src/data"),
      documents: path.resolve(__dirname, "src/documents"),
      layout: path.resolve(__dirname, "src/layout"),
      types: path.resolve(__dirname, "src/types"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});