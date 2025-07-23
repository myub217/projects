import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

// ใช้ self.__WB_MANIFEST หรือ fallback เป็น empty array
precacheAndRoute(self.__WB_MANIFEST || [])

// Cache รูปภาพแบบ StaleWhileRevalidate
registerRoute(
  ({ request }) => request.destination === 'image',
  new StaleWhileRevalidate({
    cacheName: 'images-cache',
  })
)

self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', () => {
  self.clients.claim()
})
