// vite.config.ts
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

export default defineConfig({
  plugins: [
    react(),

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
          },
        ],
      },
    }),

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
