// vite.config.mjs

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import history from 'connect-history-api-fallback';
import { VitePWA } from 'vite-plugin-pwa';

// 🛠️ Modular Onepage App – Vite Config

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // 🌐 Flags
  const isDev = mode === 'development';
  const isBuild = command === 'build';

  // 🌐 Environment Variables
  const base = env.VITE_BASE_URL?.trim() || '/';
  const outDir = env.VITE_BUILD_OUTDIR?.trim() || 'dist';
  const devPort = Number(env.VITE_DEV_SERVER_PORT || 5173);
  const previewPort = Number(env.VITE_PREVIEW_SERVER_PORT || 4173);
  const openBrowser = env.VITE_OPEN_BROWSER === 'true';
  const openReport = env.VITE_OPEN_REPORT === 'true';

  // ✅ Expose only `VITE_` variables to client
  const defineEnv = Object.fromEntries(
    Object.entries(env)
      .filter(([k]) => k.startsWith('VITE_'))
      .map(([k, v]) => [`process.env.${k}`, JSON.stringify(v)])
  );

  return {
    base,
    define: defineEnv,
    envPrefix: 'VITE_',

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },

    plugins: [
      react(),

      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'script',
        devOptions: { enabled: isDev },
        manifest: {
          name: 'Applicationlubmobile',
          short_name: 'AppLub',
          start_url: base,
          display: 'standalone',
          background_color: '#ffffff',
          theme_color: '#1e40af',
          icons: [
            {
              src: '/icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),

      isBuild &&
        visualizer({
          filename: `${outDir}/build-report.html`,
          open: openReport,
          gzipSize: true,
          brotliSize: true,
          template: 'sunburst',
        }),
    ].filter(Boolean),

    server: {
      port: devPort,
      open: openBrowser,
      fs: { allow: ['.'] },
      middlewareMode: false,
      configureServer(server) {
        server.middlewares.use(history());
      },
    },

    preview: {
      port: previewPort,
      open: openBrowser,
    },

    build: {
      outDir,
      sourcemap: true,
      assetsInlineLimit: 4096,
      preloadModules: true,
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react')) return 'vendor-react';
              if (id.includes('framer-motion')) return 'vendor-framer';
              if (id.includes('tailwindcss')) return 'vendor-tailwind';
              return 'vendor';
            }
          },
        },
      },
    },

    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        'framer-motion',
      ],
    },

    css: {
      devSourcemap: true,
    },
  };
});