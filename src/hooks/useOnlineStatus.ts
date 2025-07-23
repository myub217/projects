// src/hooks/useOnlineStatus.ts
// Reliable React hook for tracking online/offline browser status with cleanup

import { useState, useEffect } from 'react'

export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(() => navigator.onLine)

  useEffect(() => {
    const updateOnlineStatus = () => setIsOnline(true)
    const updateOfflineStatus = () => setIsOnline(false)

    window.addEventListener('online', updateOnlineStatus)
    window.addEventListener('offline', updateOfflineStatus)

    return () => {
      window.removeEventListener('online', updateOnlineStatus)
      window.removeEventListener('offline', updateOfflineStatus)
    }
  }, [])

  return isOnline
}
