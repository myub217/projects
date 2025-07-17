// ✅ src/pages/LoginPage.tsx – เวอร์ชันสมบูรณ์พร้อมใช้งานจริง (Dev Partner Mode)

import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { users } from '@/data/users'
import { hashPassword } from '@/utils/hashPassword'

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