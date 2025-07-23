// src/components/SecretRoom/SystemCheckCard.tsx
// System health check with online status and LocalStorage availability, accessible and visually clear

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
          <FaCheckCircle
            className="text-green-600 text-2xl"
            aria-label="ออนไลน์"
            role="img"
            aria-hidden={false}
          />
        ) : (
          <FaExclamationTriangle
            className="text-red-600 text-2xl"
            aria-label="ออฟไลน์"
            role="img"
            aria-hidden={false}
          />
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
          <FaCheckCircle
            className="text-green-600 text-2xl"
            aria-label="LocalStorage พร้อมใช้งาน"
            role="img"
            aria-hidden={false}
          />
        ) : (
          <FaExclamationTriangle
            className="text-red-600 text-2xl"
            aria-label="LocalStorage ไม่พร้อมใช้งาน"
            role="img"
            aria-hidden={false}
          />
        ),
    },
  ]

  return (
    <section
      aria-label="สถานะการตรวจสอบระบบ"
      className="bg-base-100 dark:bg-zinc-800 border border-base-300 dark:border-base-700 rounded-xl p-6 shadow-md space-y-6 transition-shadow duration-200 ease-in-out focus-within:shadow-lg"
      tabIndex={-1}
      role="region"
    >
      <h3 className="text-xl font-bold text-primary select-none">สถานะระบบ</h3>
      <ul className="grid sm:grid-cols-2 gap-6" role="list">
        {systemItems.map(({ key, label, status, successLabel, failLabel, icon }) => (
          <li
            key={key}
            className="flex items-center gap-4 select-text"
            role="listitem"
            aria-live="polite"
            aria-atomic="true"
          >
            <span aria-label={`${label}: ${status ? successLabel : failLabel}`} role="img">
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