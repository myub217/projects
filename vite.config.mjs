import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest", // ใช้ service worker แบบ custom
      srcDir: "src",
      filename: "sw.ts", // ใช้ TypeScript

      devOptions: {
        enabled: true,
        type: "module",
      },

      manifest: {
        name: "JP Visual & Docs",
        short_name: "JPVD",
        description: "บริการเอกสาร ยื่นกู้ วีซ่า โปรไฟล์และระบบหลังบ้านครบวงจร",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#8c52ff",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
  },
});