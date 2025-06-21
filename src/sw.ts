/// <reference lib="webworker" />

import { precacheAndRoute } from "workbox-precaching";

// บอก TypeScript ว่านี่คือ ServiceWorkerGlobalScope
declare const self: ServiceWorkerGlobalScope;

// ✅ ดึงรายการไฟล์ที่ถูกสร้างโดย Vite มา precache
// __WB_MANIFEST จะถูก inject อัตโนมัติโดย Vite
precacheAndRoute(self.__WB_MANIFEST);

// ✅ เมื่อ install service worker ให้ skipWaiting ทันที
self.addEventListener("install", (event) => {
  self.skipWaiting(); // ทดแทน worker เก่าทันทีโดยไม่รอ reload
});

// ✅ เมื่อ activate แล้ว ให้ service worker เข้าควบคุม client ทันที
self.addEventListener("activate", (event) => {
  self.clients.claim(); // เข้าควบคุม client โดยไม่รอ
});

// ✅ ดักจับ fetch requests (สามารถเพิ่ม logic caching custom ได้ตรงนี้)
self.addEventListener("fetch", (event: FetchEvent) => {
  // ตัวอย่าง: ใช้ default network, fallback ถ้า offline
  // event.respondWith(fetch(event.request).catch(() => caches.match("/offline.html")));

  // ยังไม่ใช้งาน custom fetch (ปล่อยผ่าน)
});