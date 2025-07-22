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
    <div className="w-full bg-base-100 dark:bg-base-300 border border-base-300 dark:border-base-200 rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-primary mb-5">สถานะระบบล่าสุด</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-center gap-4">
          {isOnline ? (
            <FaCheckCircle className="text-green-500 text-xl" aria-label="ออนไลน์" />
          ) : (
            <FaExclamationTriangle className="text-red-500 text-xl" aria-label="ออฟไลน์" />
          )}
          <span className="text-base-content font-medium">
            การเชื่อมต่ออินเทอร์เน็ต: <span className="font-semibold">{isOnline ? 'ออนไลน์' : 'ออฟไลน์'}</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          {storageAvailable ? (
            <FaCheckCircle className="text-green-500 text-xl" aria-label="LocalStorage พร้อมใช้งาน" />
          ) : (
            <FaExclamationTriangle className="text-red-500 text-xl" aria-label="LocalStorage ไม่พร้อมใช้งาน" />
          )}
          <span className="text-base-content font-medium">
            LocalStorage: <span className="font-semibold">{storageAvailable ? 'พร้อมใช้งาน' : 'ไม่พร้อมใช้งาน'}</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default SystemCheckCard