/// <reference lib="webworker" />

import { precacheAndRoute } from "workbox-precaching";

// บอก TypeScript ว่านี่คือ ServiceWorkerGlobalScope
declare const self: ServiceWorkerGlobalScope;

// precache ไฟล์ที่ถูกสร้างโดย Vite (inject มาอัตโนมัติ)
precacheAndRoute(self.__WB_MANIFEST);

// ติดตั้ง service worker แล้วบังคับข้าม waiting state
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// เมื่อ activate แล้วให้ service worker ควบคุมหน้าเว็บทันที
self.addEventListener("activate", (event) => {
  self.clients.claim();
});

// ดักจับ fetch event (สามารถเพิ่ม logic cache ได้ที่นี่)
self.addEventListener("fetch", (event: FetchEvent) => {
  // ตัวอย่าง: ใช้ network ก่อน fallback ไป cache (ถ้ามี)
  // event.respondWith(
  //   fetch(event.request).catch(() => caches.match(event.request))
  // );

  // ตอนนี้ยังปล่อยผ่าน fetch ตามปกติ
});