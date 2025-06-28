/* eslint-disable */
/* global self, __WB_MANIFEST */
import { precacheAndRoute } from 'workbox-precaching';

// ✅ Precache ไฟล์ที่กำหนดใน __WB_MANIFEST (ถูก inject โดย Workbox ตอน build)
precacheAndRoute(self.__WB_MANIFEST || []);

// ✅ รับ message SKIP_WAITING เพื่อให้ service worker ตัวใหม่ทำงานทันที
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});