// src/hooks/useLineAuth.ts
// ✅ Custom Hook สำหรับ LINE Login ด้วย LIFF SDK พร้อมจัดการสถานะ loading/error/profile

import { useEffect, useState } from 'react'

interface LineProfile {
  userId: string
  displayName: string
  pictureUrl?: string
  statusMessage?: string
}

export const useLineAuth = () => {
  const [profile, setProfile] = useState<LineProfile | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const liff = await import('@line/liff')
        const liffId = import.meta.env.VITE_LINE_LIFF_ID

        if (!liffId) throw new Error('⛔️ VITE_LINE_LIFF_ID ไม่ได้ระบุไว้')

        await liff.default.init({ liffId })

        if (!liff.default.isLoggedIn()) {
          liff.default.login({ redirectUri: window.location.href })
          return
        }

        const userProfile = await liff.default.getProfile()
        setProfile({
          userId: userProfile.userId,
          displayName: userProfile.displayName,
          pictureUrl: userProfile.pictureUrl,
          statusMessage: userProfile.statusMessage,
        })
      } catch (err) {
        console.error('🔐 LINE Auth Error:', err)
        setError('ไม่สามารถเข้าสู่ระบบด้วย LINE ได้')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return { profile, loading, error }
}
