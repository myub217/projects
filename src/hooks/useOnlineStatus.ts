// src/hooks/useOnlineStatus.ts
// ✅ React Hook ตรวจสอบสถานะการเชื่อมต่อออนไลน์/ออฟไลน์ของเบราว์เซอร์ พร้อม cleanup

import { useState, useEffect } from 'react';

export function useOnlineStatus(): boolean {
  const [isOnline, setIsOnline] = useState<boolean>(
    () =>
      typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
        ? navigator.onLine
        : true, // ✅ fallback: ถือว่าออนไลน์หากไม่สามารถตรวจสอบได้
  );

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}
