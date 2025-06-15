import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",          // 👉 ระบุว่าไฟล์อยู่ใน src
      filename: "sw.ts",      // 👉 ใช้ชื่อ sw.ts ไม่ใช่ sw.js
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "JP Visual & Docs",
        short_name: "JPVD",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#8c52ff",
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
        ],
      },
    }),
  ],
});