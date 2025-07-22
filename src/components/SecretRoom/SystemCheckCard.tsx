// src/components/SecretRoom/SystemCheckCard.tsx

import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa'

const SystemCheckCard: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)
  const [storageAvailable, setStorageAvailable] = useState<boolean>(false)

  useEffect(() => {
    const testLocalStorage = () => {
      try {
        const testKey = '__storage_test__'
        localStorage.setItem(testKey, testKey)
        localStorage.removeItem(testKey)
        setStorageAvailable(true)
      } catch {
        setStorageAvailable(false)
      }
    }

    const handleConnectionChange = () => setIsOnline(navigator.onLine)

    testLocalStorage()
    window.addEventListener('online', handleConnectionChange)
    window.addEventListener('offline', handleConnectionChange)

    return () => {
      window.removeEventListener('online', handleConnectionChange)
      window.removeEventListener('offline', handleConnectionChange)
    }
  }, [])

  const systemItems = [
    {
      key: 'network',
      label: 'การเชื่อมต่ออินเทอร์เน็ต',
      status: isOnline,
      successLabel: 'ออนไลน์',
      failLabel: 'ออฟไลน์',
      icon: (ok: boolean) =>
        ok ? (
          <FaCheckCircle className="text-green-600 text-2xl" aria-label="ออนไลน์" />
        ) : (
          <FaExclamationTriangle className="text-red-600 text-2xl" aria-label="ออฟไลน์" />
        ),
    },
    {
      key: 'storage',
      label: 'LocalStorage',
      status: storageAvailable,
      successLabel: 'พร้อมใช้งาน',
      failLabel: 'ไม่พร้อมใช้งาน',
      icon: (ok: boolean) =>
        ok ? (
          <FaCheckCircle className="text-green-600 text-2xl" aria-label="LocalStorage พร้อมใช้งาน" />
        ) : (
          <FaExclamationTriangle className="text-red-600 text-2xl" aria-label="LocalStorage ไม่พร้อมใช้งาน" />
        ),
    },
  ]

  return (
    <section
      aria-label="สถานะการตรวจสอบระบบ"
      className="bg-base-100 dark:bg-base-300 border border-base-300 dark:border-base-700 rounded-xl p-6 shadow-md space-y-6 transition-shadow"
    >
      <h3 className="text-xl font-bold text-primary select-none">สถานะระบบ</h3>
      <ul className="grid sm:grid-cols-2 gap-6">
        {systemItems.map(({ key, label, status, successLabel, failLabel, icon }) => (
          <li key={key} className="flex items-center gap-4 select-text">
            <span role="img" aria-label={`${label}: ${status ? successLabel : failLabel}`}>
              {icon(status)}
            </span>
            <div className="text-base-content font-medium">
              {label}:{' '}
              <span className={`font-semibold ${status ? 'text-green-700' : 'text-red-600'}`}>
                {status ? successLabel : failLabel}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SystemCheckCard