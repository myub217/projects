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

    // ✅ Progressive Web App
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
        mode: process.env.NODE_ENV === "production" ? "production" : "development",
      },
    }),

    // ✅ บีบอัด gzip เพื่อลดขนาด bundle
    viteCompression(),

    // ✅ import SVG เป็น React component
    svgr(),
  ],

  // ✅ ตั้ง alias สำหรับ import สั้น ๆ
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

  // ✅ Dev server config
  server: {
    port: 5173,
    open: true,
  },
});