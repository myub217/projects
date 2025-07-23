// src/pages/SettingsPage.tsx
// User settings page with theme toggle, profile update form, validation, and accessibility

import React, { useState, useEffect, useCallback } from 'react'
import MainLayout from '@components/Layout/MainLayout'
import { useTheme } from '@components/ThemeProvider'

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [statusMsg, setStatusMsg] = useState<string | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  useEffect(() => {
    setUsername(localStorage.getItem('loggedInUser')?.trim() ?? '')
    setEmail(localStorage.getItem('userEmail')?.trim() ?? '')
  }, [])

  const handleSave = useCallback(() => {
    setErrorMsg(null)
    setStatusMsg(null)

    if (!username.trim()) {
      setErrorMsg('ชื่อผู้ใช้ไม่สามารถเว้นว่างได้')
      return
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMsg('รูปแบบอีเมลไม่ถูกต้อง')
      return
    }

    localStorage.setItem('loggedInUser', username.trim())
    localStorage.setItem('userEmail', email.trim())
    setStatusMsg('บันทึกข้อมูลเรียบร้อยแล้ว')
  }, [username, email])

  return (
    <MainLayout className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <section
        aria-label="ตั้งค่าผู้ใช้"
        className="w-full max-w-md rounded-lg bg-base-100 p-6 shadow-md dark:bg-zinc-900"
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
          <label htmlFor="username" className="font-semibold">
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
          />

          <label htmlFor="email" className="font-semibold">
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
          />

          <div className="mt-6 flex items-center justify-between">
            <button type="submit" className="btn btn-primary" aria-label="บันทึกการตั้งค่า">
              บันทึก
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="btn btn-secondary"
              aria-label={`สลับธีมเป็น ${theme === 'dark' ? 'สว่าง' : 'มืด'}`}
            >
              {theme === 'dark' ? 'ธีมสว่าง' : 'ธีมมืด'}
            </button>
          </div>

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
