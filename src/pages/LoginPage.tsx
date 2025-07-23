// src/pages/LoginPage.tsx
// ✅ Secure Login with password hashing, role-based routing, and improved accessibility & UX

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { users } from '@data/users'
import { hashPassword } from '@utils/hashPassword'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return

    setError('')
    setLoading(true)

    const trimmedUsername = username.trim()
    const trimmedPassword = password.trim()

    if (!trimmedUsername || !trimmedPassword) {
      setError('กรุณากรอกข้อมูลให้ครบ')
      setLoading(false)
      return
    }

    const user = users[trimmedUsername]
    if (!user) {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
      setPassword('')
      setLoading(false)
      return
    }

    try {
      const hashed = await hashPassword(trimmedPassword)
      if (hashed !== user.passwordHash) {
        setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
        setPassword('')
        setLoading(false)
        return
      }
    } catch {
      setError('เกิดข้อผิดพลาดในการตรวจสอบรหัสผ่าน')
      setLoading(false)
      return
    }

    localStorage.setItem('loggedInUser', trimmedUsername)
    localStorage.setItem('userRole', user.role)
    setLoading(false)

    navigate(user.role === 'admin' ? '/admin' : '/secret', { replace: true })
  }

  return (
    <main
      role="main"
      aria-label="หน้าเข้าสู่ระบบ"
      className="flex min-h-screen items-center justify-center bg-base-100 px-4"
    >
      <form
        onSubmit={handleLogin}
        aria-label="ฟอร์มเข้าสู่ระบบ"
        className="w-full max-w-sm space-y-6 rounded-xl bg-base-200 p-6 shadow-xl"
      >
        <h1 className="select-none text-center text-3xl font-bold text-primary">เข้าสู่ระบบ</h1>

        {error && (
          <div
            role="alert"
            aria-live="assertive"
            className="text-center text-sm font-semibold text-error"
          >
            {error}
          </div>
        )}

        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text font-medium">ชื่อผู้ใช้</span>
          </label>
          <input
            id="username"
            type="text"
            className="input input-bordered"
            value={username}
            onChange={e => setUsername(e.target.value)}
            autoComplete="username"
            required
            placeholder="กรอกชื่อผู้ใช้"
            disabled={loading}
            aria-disabled={loading}
            aria-required="true"
            aria-describedby="username-desc"
          />
          <small id="username-desc" className="text-muted">
            กรอกชื่อผู้ใช้ที่ลงทะเบียนไว้
          </small>
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text font-medium">รหัสผ่าน</span>
          </label>
          <input
            id="password"
            type="password"
            className="input input-bordered"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            placeholder="กรอกรหัสผ่าน"
            disabled={loading}
            aria-disabled={loading}
            aria-required="true"
            aria-describedby="password-desc"
          />
          <small id="password-desc" className="text-muted">
            รหัสผ่านต้องตรงกับบัญชีผู้ใช้ของคุณ
          </small>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="ปุ่มเข้าสู่ระบบ"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
        </button>
      </form>
    </main>
  )
}

export default LoginPage
