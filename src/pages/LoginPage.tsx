// ✅ src/pages/LoginPage.tsx – เวอร์ชันสมบูรณ์ (Dev Partner Mode พร้อมตัวแปรจริง)

import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

// ✅ users จริง (รหัส admin25217 = md5)
const users: Record<string, { passwordHash: string; role: string }> = {
  admin25217: {
    passwordHash: '9d7db4cddf1a6a098fe2b1f4b2d40c06', // md5('myub25217')
    role: 'admin',
  },
  demo: {
    passwordHash: '202cb962ac59075b964b07152d234b70', // md5('123')
    role: 'client',
  },
}

// ✅ ฟังก์ชัน hashPassword จริง
const hashPassword = async (password: string): Promise<string> => {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const buffer = await crypto.subtle.digest('MD5', data)
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

const MAX_ATTEMPTS = 5

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const usernameRef = useRef<HTMLInputElement>(null)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const redirectPath =
    (location.state as { from?: Location })?.from?.pathname || '/secret'

  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  useEffect(() => {
    if (error) usernameRef.current?.focus()
  }, [error])

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    setError('')
    setIsSubmitting(true)

    const trimmedUsername = username.trim()
    if (!trimmedUsername) {
      setError('กรุณากรอกชื่อผู้ใช้')
      setIsSubmitting(false)
      return
    }

    const user = users[trimmedUsername]
    if (!user) {
      setError('ชื่อผู้ใช้ไม่ถูกต้อง')
      setLoginAttempts((prev) => prev + 1)
      setIsSubmitting(false)
      return
    }

    try {
      const hashed = await hashPassword(password)
      if (hashed === user.passwordHash) {
        localStorage.setItem('authUser', trimmedUsername)
        localStorage.setItem('authRole', user.role)
        navigate(redirectPath, { replace: true })
      } else {
        setError('รหัสผ่านไม่ถูกต้อง')
        setLoginAttempts((prev) => prev + 1)
      }
    } catch {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDisabled = isSubmitting || loginAttempts >= MAX_ATTEMPTS

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <section className="w-full max-w-md rounded-2xl bg-base-100 p-8 shadow-xl space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-primary">🔐 เข้าสู่ระบบ</h1>
          <p className="text-sm text-base-content">ระบบแอดมิน JP Visual</p>
        </header>

        {error && (
          <div className="alert alert-error text-sm font-medium">{error}</div>
        )}

        {loginAttempts >= MAX_ATTEMPTS && (
          <div className="alert alert-warning text-sm font-semibold">
            🚫 เกินจำนวนครั้งที่อนุญาต กรุณาลองใหม่ภายหลัง
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4" noValidate>
          <div className="form-control">
            <input
              ref={usernameRef}
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="ชื่อผู้ใช้"
              disabled={isDisabled}
              className="input input-bordered w-full"
              required
              aria-label="ชื่อผู้ใช้"
            />
          </div>
          <div className="form-control">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="รหัสผ่าน"
              disabled={isDisabled}
              className="input input-bordered w-full"
              required
              aria-label="รหัสผ่าน"
            />
          </div>
          <button
            type="submit"
            className={`btn btn-primary w-full ${
              isDisabled ? 'btn-disabled opacity-60' : ''
            }`}
            disabled={isDisabled}
          >
            {isSubmitting ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>

        <footer className="text-center text-xs text-base-content/70">
          © {new Date().getFullYear()} JP Visual & Docs. All rights reserved.
        </footer>
      </section>
    </main>
  )
}

export default LoginPage