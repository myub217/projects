// src/pages/LoginPage.tsx – Secure Login with Hash Check, Role Routing, and UX Feedback

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
      className="min-h-screen flex items-center justify-center bg-base-100 px-4"
      aria-label="หน้าเข้าสู่ระบบ"
    >
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-base-200 p-6 rounded-xl shadow-xl space-y-6"
        aria-label="ฟอร์มเข้าสู่ระบบ"
      >
        <h1 className="text-3xl font-bold text-primary text-center">
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            role="alert"
            className="text-error text-sm font-medium text-center"
            aria-live="assertive"
          >
            {error}
          </div>
        )}

        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text">ชื่อผู้ใช้</span>
          </label>
          <input
            id="username"
            type="text"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            placeholder="กรอกชื่อผู้ใช้"
            aria-required="true"
            disabled={loading}
          />
        </div>

        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text">รหัสผ่าน</span>
          </label>
          <input
            id="password"
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            placeholder="กรอกรหัสผ่าน"
            aria-required="true"
            disabled={loading}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="ปุ่มเข้าสู่ระบบ"
          disabled={loading}
        >
          {loading ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
        </button>
      </form>
    </main>
  )
}

export default LoginPage