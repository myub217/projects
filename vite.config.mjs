import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest', // 🔁 ใช้ injectManifest แทน
      srcDir: 'src',
      filename: 'sw.ts', // 👈 ชื่อไฟล์ service worker ที่คุณสร้าง
      manifest: {
        name: 'My App',
        short_name: 'App',
        description: 'My Vite React PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})