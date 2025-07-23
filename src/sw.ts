// ✅ Final: src/sw.ts – Service Worker สำหรับ JP Visual & Docs (Workbox + InjectManifest)

import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

// 🗂️ Precache static assets ที่ inject โดย VitePWA (ใช้ __WB_MANIFEST จาก injectManifest)
precacheAndRoute(self.__WB_MANIFEST || [])

// 📸 Cache รูปภาพแบบ StaleWhileRevalidate (โหลดจาก cache ทันที และโหลดใหม่ในเบื้องหลัง)
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images-cache',
  })
)

// 🛠️ ติดตั้งทันที ไม่รอรอบถัดไป
self.addEventListener('install', () => {
  self.skipWaiting()
})

// 🔄 Activate แล้ว take control โดยไม่ต้อง refresh
self.addEventListener('activate', () => {
  self.clients.claim()
})