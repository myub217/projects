// ✅ src/sw.ts – Service Worker สำหรับ JP Visual & Docs (Workbox + InjectManifest)

import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// 🗂️ Precache static assets ที่ inject โดย VitePWA
precacheAndRoute(self.__WB_MANIFEST || []);

// 📸 Cache รูปภาพแบบ StaleWhileRevalidate (โหลดใหม่หลังแสดงผล)
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images-cache',
  })
);

// 🛠️ ติดตั้งทันที
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// 🔄 Activate แล้ว take control
self.addEventListener('activate', (event) => {
  self.clients.claim();
});