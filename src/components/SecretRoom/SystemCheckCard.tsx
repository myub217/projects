// src/components/SecretRoom/SystemCheckCard.tsx

import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

const SystemCheckCard: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)
  const [storageAvailable, setStorageAvailable] = useState<boolean>(false)

  useEffect(() => {
    const checkLocalStorage = () => {
      try {
        const testKey = '__storage_test__'
        localStorage.setItem(testKey, testKey)
        localStorage.removeItem(testKey)
        setStorageAvailable(true)
      } catch {
        setStorageAvailable(false)
      }
    }

    const updateOnlineStatus = () => setIsOnline(navigator.onLine)

    checkLocalStorage()
    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOnlineStatus)

    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOnlineStatus)
    }
  }, [])

  return (
    <div className="card bg-base-200 p-6 rounded-xl shadow-lg">
      <h3 className="card-title text-lg font-semibold mb-4">ตรวจสอบระบบ</h3>
      <ul className="space-y-3 text-base">
        <li className="flex items-center gap-3">
          {isOnline ? (
            <FaCheckCircle
              className="text-green-500"
              aria-label="ออนไลน์"
              role="img"
              aria-live="polite"
            />
          ) : (
            <FaExclamationTriangle
              className="text-red-500"
              aria-label="ออฟไลน์"
              role="img"
              aria-live="assertive"
            />
          )}
          <span>สถานะการเชื่อมต่อ: {isOnline ? 'ออนไลน์' : 'ออฟไลน์'}</span>
        </li>
        <li className="flex items-center gap-3">
          {storageAvailable ? (
            <FaCheckCircle
              className="text-green-500"
              aria-label="LocalStorage พร้อมใช้งาน"
              role="img"
              aria-live="polite"
            />
          ) : (
            <FaExclamationTriangle
              className="text-red-500"
              aria-label="LocalStorage ไม่พร้อมใช้งาน"
              role="img"
              aria-live="assertive"
            />
          )}
          <span>LocalStorage: {storageAvailable ? 'พร้อมใช้งาน' : 'ไม่พร้อมใช้งาน'}</span>
        </li>
      </ul>
    </div>
  )
}

export default SystemCheckCard