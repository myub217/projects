import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'node:path'
import fs from 'fs'

export default defineConfig({
  plugins: [
    react(),

    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: 'src/auto-imports.d.ts', // สร้าง typings อัตโนมัติ
      dirs: [
        'src/hooks', // auto import hooks
        'src/utils', // auto import utils
        'src/api', // auto import api functions
      ],
      eslintrc: {
        enabled: true, // สร้าง eslint config ลด lint error
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: [],
      vueTemplate: false,
    }),

    // Progressive Web App
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

    // Static Assets Copy
    viteStaticCopy({
      targets: [
        {
          src: 'public/images',
          dest: 'images',
        },
      ],
    }),

    // Mock API
    {
      name: 'mock-api',
      configureServer(server) {
        server.middlewares.use('/api/repos', (req, res, next) => {
          if (req.method !== 'GET') return next()
          const filePath = path.resolve(__dirname, 'src/data/repos.json')
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8')
            res.setHeader('Content-Type', 'application/json')
            res.end(data)
          } else {
            res.statusCode = 404
            res.end(JSON.stringify({ error: 'Not found' }))
          }
        })
      },
    },
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@config': path.resolve(__dirname, 'src/config'),
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
          if (id.includes('node_modules')) return 'vendor'
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
})
