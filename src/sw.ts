/// <reference lib="webworker" />

import { precacheAndRoute } from "workbox-precaching";

// ประกาศ global scope ของ Service Worker
declare const self: ServiceWorkerGlobalScope;

// 👉 preload ไฟล์ที่ถูก inject โดย Vite ผ่าน __WB_MANIFEST
precacheAndRoute(self.__WB_MANIFEST);

// ✅ ติดตั้งและข้าม waiting state เพื่อ activate ทันที
self.addEventListener("install", (event) => {
  console.log("[SW] Installed");
  self.skipWaiting();
});

// ✅ ควบคุมทุก client ทันทีหลังจาก activate
self.addEventListener("activate", (event) => {
  console.log("[SW] Activated");
  self.clients.claim();
});

// ✅ สามารถดักจับ fetch เพื่อจัดการ offline หรือ caching เองได้
self.addEventListener("fetch", (event: FetchEvent) => {
  // Optional: กำหนดการทำงานแบบ Network First + fallback to cache
  // event.respondWith(
  //   fetch(event.request).catch(() => caches.match(event.request))
  // );

  // 📦 ตอนนี้ปล่อยให้ browser จัดการ fetch ปกติ
});