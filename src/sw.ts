/// <reference lib="webworker" />

import { precacheAndRoute } from "workbox-precaching";

// บอก TypeScript ว่านี่คือ ServiceWorkerGlobalScope
declare const self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  self.clients.claim();
});

self.addEventListener("fetch", (event: FetchEvent) => {
  // ถ้าจะใส่ custom fetch handler ใส่ตรงนี้
});