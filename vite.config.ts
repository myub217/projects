// vite.config.ts
// ✅ Vite config for JP Visual & Docs
// - React + Tailwind + AutoImport + PWA + StaticCopy
// - Organized aliases, proxy toggle (USE_MOCK), proper build target

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { VitePWA } from 'vite-plugin-pwa';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),

    // 🔁 Auto-import hooks, utils, api, react
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

    // 🔋 PWA: Custom service worker strategy
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      injectManifest: {
        globDirectory: 'dist',
        globPatterns: ['**/*.{js,css,html,wasm,webmanifest}'],
        globIgnores: ['**/node_modules/**/*', 'sw.js', '**/sw.js.map'],
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
          { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
    }),

    // 🗂️ Static assets
    viteStaticCopy({
      targets: [
        {
          src: 'public/images',
          dest: 'images',
        },
      ],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@data': path.resolve(__dirname, '/src/data'),
      '@utils': path.resolve(__dirname, '/src/utils'),
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@pages': path.resolve(__dirname, '/src/pages'),
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
