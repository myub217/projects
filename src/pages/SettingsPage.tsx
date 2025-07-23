// src/pages/SettingsPage.tsx
// ✅ User settings page with theme toggle, profile form, localStorage, validation, accessibility

import React, { useState, useEffect, useCallback } from 'react'
import MainLayout from '@components/Layout/MainLayout'
import { useTheme } from '@components/ThemeProvider'

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [statusMsg, setStatusMsg] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [initialUsername, setInitialUsername] = useState('')
  const [initialEmail, setInitialEmail] = useState('')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim() ?? ''
    const storedEmail = localStorage.getItem('userEmail')?.trim() ?? ''
    setUsername(storedUser)
    setEmail(storedEmail)
    setInitialUsername(storedUser)
    setInitialEmail(storedEmail)
  }, [])

  const handleSave = useCallback(() => {
    setErrorMsg(null)
    setStatusMsg(null)

    if (!username.trim()) {
      setErrorMsg('ชื่อผู้ใช้ไม่สามารถเว้นว่างได้')
      return
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('รูปแบบอีเมลไม่ถูกต้อง')
      return
    }

    localStorage.setItem('loggedInUser', username.trim())
    localStorage.setItem('userEmail', email.trim())
    setStatusMsg('บันทึกข้อมูลเรียบร้อยแล้ว')

    setInitialUsername(username.trim())
    setInitialEmail(email.trim())
  }, [username, email])

  const isDirty = username.trim() !== initialUsername || email.trim() !== initialEmail

  return (
    <MainLayout className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <section
        aria-label="ตั้งค่าผู้ใช้"
        className="w-full max-w-md rounded-xl bg-base-100 p-6 shadow-lg transition-colors duration-300"
      >
        <h1 className="mb-6 text-2xl font-bold text-primary">ตั้งค่าผู้ใช้</h1>

        <form
          onSubmit={e => {
            e.preventDefault()
            handleSave()
          }}
          className="flex flex-col gap-4"
          aria-describedby={
            `${errorMsg ? 'error-message' : ''} ${statusMsg && !errorMsg ? 'status-message' : ''}`.trim() ||
            undefined
          }
          noValidate
        >
          {/* Username Input */}
          <label htmlFor="username" className="font-medium">
            ชื่อผู้ใช้{' '}
            <span aria-hidden="true" className="text-error">
              *
            </span>
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className={`input input-bordered w-full ${errorMsg ? 'input-error' : ''}`}
            required
            aria-invalid={!!errorMsg}
            aria-describedby={errorMsg ? 'error-message' : undefined}
            autoComplete="username"
            spellCheck={false}
          />

          {/* Email Input */}
          <label htmlFor="email" className="font-medium">
            อีเมล
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input input-bordered w-full"
            autoComplete="email"
            aria-describedby={statusMsg && !errorMsg ? 'status-message' : undefined}
            spellCheck={false}
          />

          {/* Buttons */}
          <div className="mt-6 flex items-center justify-between gap-2">
            <button
              type="submit"
              className="btn btn-primary w-full"
              aria-label="บันทึกการตั้งค่า"
              disabled={!isDirty}
            >
              บันทึก
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-secondary w-full"
              aria-label={`สลับธีมเป็น ${theme === 'dark' ? 'สว่าง' : 'มืด'}`}
            >
              {theme === 'dark' ? 'ธีมสว่าง' : 'ธีมมืด'}
            </button>
          </div>

          {/* Messages */}
          {errorMsg && (
            <p id="error-message" role="alert" className="mt-4 select-none text-sm text-error">
              {errorMsg}
            </p>
          )}

          {statusMsg && !errorMsg && (
            <p id="status-message" role="status" className="mt-4 select-none text-sm text-success">
              {statusMsg}
            </p>
          )}
        </form>
      </section>
    </MainLayout>
  )
}

export default SettingsPage
