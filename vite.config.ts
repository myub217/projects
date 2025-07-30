// vite.config.ts
<<<<<<< HEAD
// ✅ JP Visual & Docs :: Full Vite Config (Fixed)
// Stack: React + Tailwind + AutoImport + PWA + Static Assets
// Aliases, Proxy toggle (USE_MOCK), Optimized build, ESLint support

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'node:path';
import fs from 'node:fs';

// 🛠️ Auto-check + fallback for missing assets
const publicDir = path.resolve(__dirname, 'public');
const missing: string[] = [];

const requiredFiles = ['images/icon-192.png', 'images/icon-512.png', 'favicon.ico'];

for (const file of requiredFiles) {
  if (!fs.existsSync(path.resolve(publicDir, file))) {
    missing.push(`public/${file}`);
  }
}

if (missing.length) {
  console.warn(
    '\n⚠️  Missing public assets:',
    missing.map((f) => `\n - ${f}`).join(''),
  );
  console.warn('👉 Please ensure all required files exist in /public.\n');
}
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
>>>>>>> bbe22dc9 (update)

export default defineConfig({
  plugins: [
    react(),
<<<<<<< HEAD

    AutoImport({
      imports: ['react', 'react-router-dom'],
      dirs: ['src/hooks', 'src/utils', 'src/api'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: 'readonly',
      },
      eslintrcRoot: true,
    }),

    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      injectManifest: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,html,webmanifest,woff2}'],
        globIgnores: ['**/node_modules/**/*', 'sw.js', '**/*.map'],
      },
      devOptions: {
        enabled: true,
        type: 'module',
      },
      manifest: {
        name: 'JP Visual & Docs',
        short_name: 'JPDocs',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#2563eb',
        icons: [
          {
            src: '/images/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/images/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
=======
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      devOptions: {
        enabled: false,
      },
      workbox: {
        cleanupOutdatedCaches: true,
        navigateFallback: "index.html",
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "document",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
            },
          },
          {
            urlPattern: ({ request }) =>
              ["script", "style"].includes(request.destination),
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "assets-cache",
            },
          },
          {
            urlPattern: ({ request }) =>
              ["image", "font"].includes(request.destination),
            handler: "CacheFirst",
            options: {
              cacheName: "media-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 วัน
              },
            },
          },
        ],
      },
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "robots.txt",
        "assets/jp-logo.webp",
        "icons/pwa-192x192.png",
        "icons/pwa-512x512.png",
      ],
      manifest: {
        name: "JP Visual & Docs",
        short_name: "JPDocs",
        description: "JP Visual & Docs - Digital Marketing & Documents",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
>>>>>>> bbe22dc9 (update)
          },
        ],
      },
    }),
<<<<<<< HEAD

    viteStaticCopy({
      targets: [
        fs.existsSync(path.resolve(publicDir, 'images')) && {
          src: path.resolve(publicDir, 'images'),
          dest: 'images',
        },
        fs.existsSync(path.resolve(publicDir, 'favicon.ico')) && {
          src: path.resolve(publicDir, 'favicon.ico'),
          dest: '.',
        },
      ].filter(Boolean),
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@data': path.resolve(__dirname, './src/data'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true,
    proxy:
      process.env.USE_MOCK === 'true'
        ? {}
        : {
            '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              secure: false,
            },
          },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'esnext',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },

  optimizeDeps: {
    include: ['react', 'react-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
});
=======
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      crypto: "crypto-browserify",
      stream: "stream-browserify",
      buffer: "buffer",
    },
  },
  optimizeDeps: {
    include: ["buffer", "process"],
  },
  define: {
    "process.env": {},
  },
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        defaults: true,
      },
      format: {
        comments: false,
      },
    },
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "vendor_react";
            if (id.includes("lodash")) return "vendor_lodash";
            if (id.includes("bcryptjs")) return "vendor_bcryptjs";
            return "vendor";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
>>>>>>> bbe22dc9 (update)
