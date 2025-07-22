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
    <section
      aria-label="สถานะการตรวจสอบระบบล่าสุด"
      className="w-full bg-base-100 dark:bg-base-300 border border-base-300 dark:border-base-700 rounded-xl p-6 shadow-md transition-colors"
    >
      <h3 className="text-xl font-bold text-primary mb-6">สถานะระบบล่าสุด</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[{
          label: 'การเชื่อมต่ออินเทอร์เน็ต',
          status: isOnline,
          trueText: 'ออนไลน์',
          falseText: 'ออฟไลน์',
          trueIcon: <FaCheckCircle className="text-green-500 text-2xl" aria-label="สถานะออนไลน์" role="img" />,
          falseIcon: <FaExclamationTriangle className="text-red-500 text-2xl" aria-label="สถานะออฟไลน์" role="img" />,
        }, {
          label: 'LocalStorage',
          status: storageAvailable,
          trueText: 'พร้อมใช้งาน',
          falseText: 'ไม่พร้อมใช้งาน',
          trueIcon: <FaCheckCircle className="text-green-500 text-2xl" aria-label="LocalStorage พร้อมใช้งาน" role="img" />,
          falseIcon: <FaExclamationTriangle className="text-red-500 text-2xl" aria-label="LocalStorage ไม่พร้อมใช้งาน" role="img" />,
        }].map(({ label, status, trueText, falseText, trueIcon, falseIcon }) => (
          <div key={label} className="flex items-center gap-4">
            {status ? trueIcon : falseIcon}
            <span className="text-base-content font-medium">
              {label}: <span className="font-semibold">{status ? trueText : falseText}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SystemCheckCard