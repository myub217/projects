// src/sw.js

const CACHE_NAME = 'jp-visual-docs-cache-v1';
const ASSETS_TO_CACHE = [
  '/', // root path
  '/index.html',
  // เพิ่มไฟล์ assets ที่ต้องการ cache เช่น CSS, JS, รูปภาพ ฯลฯ
];

// ติดตั้ง Service Worker และแคชไฟล์ที่กำหนด
self.addEventListener('install', event => {
  console.log('Service Worker installing.');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Service Worker และล้าง cache เก่าที่ไม่ใช้แล้ว
self.addEventListener('activate', event => {
  console.log('Service Worker activating.');
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// ดักจับ fetch event เพื่อเสิร์ฟไฟล์จาก cache ก่อน (ถ้ามี)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResp => {
      if (cachedResp) {
        return cachedResp;
      }
      return fetch(event.request);
    })
  );
});