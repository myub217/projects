import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr(),

    // 🔋 PWA Plugin
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",

      devOptions: {
        enabled: true,
        type: "module",
      },

      manifest: {
        name: "JP Visual & Docs",
        short_name: "JPVD",
        description:
          "บริการยื่นกู้ วีซ่า เอกสาร การเงิน โปรไฟล์ และระบบหลังบ้านครบวงจร โดย JP Visual & Docs",
        start_url: "/?source=pwa",
        scope: "/",
        display: "standalone",
        orientation: "portrait-primary",
        background_color: "#FFFFFF",
        theme_color: "#1A237E",
        lang: "th",
        icons: [
          {
            src: "/assets/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "/assets/icons/maskable-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "/assets/icons/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,ttf}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/applicationlubmobile\.vercel\.app\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /\.(?:png|webp|jpg|jpeg|svg|woff2?)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "assets",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 60
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },

  assetsInclude: ["**/*.webp", "**/*.avif", "**/*.svg"],

  build: {
    outDir: "dist",
    sourcemap: false,
    emptyOutDir: true,
    minify: "esbuild",
    target: "esnext"
  },

  server: {
    port: 5173,
    open: true,
    strictPort: true,
    cors: true
  }
});