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

  const items = [
    {
      label: 'การเชื่อมต่ออินเทอร์เน็ต',
      status: isOnline,
      successLabel: 'ออนไลน์',
      failLabel: 'ออฟไลน์',
      successIcon: <FaCheckCircle className="text-green-600 text-2xl" aria-label="ออนไลน์" role="img" />,
      failIcon: <FaExclamationTriangle className="text-red-600 text-2xl" aria-label="ออฟไลน์" role="img" />,
    },
    {
      label: 'LocalStorage',
      status: storageAvailable,
      successLabel: 'พร้อมใช้งาน',
      failLabel: 'ไม่พร้อมใช้งาน',
      successIcon: <FaCheckCircle className="text-green-600 text-2xl" aria-label="LocalStorage พร้อมใช้งาน" role="img" />,
      failIcon: <FaExclamationTriangle className="text-red-600 text-2xl" aria-label="LocalStorage ไม่พร้อมใช้งาน" role="img" />,
    },
  ]

  return (
    <section
      aria-label="สถานะการตรวจสอบระบบ"
      className="bg-base-100 dark:bg-base-300 border border-base-300 dark:border-base-700 rounded-xl p-6 shadow-md transition-shadow"
    >
      <h3 className="text-xl font-bold text-primary mb-6 select-none">สถานะระบบ</h3>
      <ul className="grid sm:grid-cols-2 gap-6">
        {items.map(({ label, status, successLabel, failLabel, successIcon, failIcon }) => (
          <li key={label} className="flex items-center gap-4 select-text">
            <span role="img" aria-label={`${label} ${status ? 'ปกติ' : 'มีปัญหา'}`}>
              {status ? successIcon : failIcon}
            </span>
            <span className="text-base-content font-medium">
              {label}: <span className="font-semibold">{status ? successLabel : failLabel}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SystemCheckCard