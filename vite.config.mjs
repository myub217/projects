// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr(),

    // PWA Support
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest", // Requires sw.ts in /src
      srcDir: "src",
      filename: "sw.ts",
      devOptions: {
        enabled: true,
        type: "module",
      },
      manifest: {
        name: "JP Visual & Docs",
        short_name: "JPVD",
        description: "บริการเอกสาร ยื่นกู้ วีซ่า โปรไฟล์ และระบบหลังบ้านครบวงจร",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#8c52ff",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/applicationlubmobile\.vercel\.app\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Use @ to import from src
    },
  },

  assetsInclude: [
    "**/*.webp",
    "**/*.avif",
    "**/*.svg"
  ],

  build: {
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true,
    minify: "esbuild",
    target: "esnext",
  },

  server: {
    port: 5173,
    open: true,
    strictPort: true,
    cors: true,
  },
});