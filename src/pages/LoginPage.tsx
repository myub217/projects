// src/pages/LoginPage.tsx

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '@/data/users';
import { hashPassword } from '@/utils/hashPassword';

const MAX_ATTEMPTS = 5;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (error) {
      usernameRef.current?.focus();
    }
  }, [error]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setError('');
    setIsSubmitting(true);

    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      setError('กรุณากรอกชื่อผู้ใช้');
      setIsSubmitting(false);
      return;
    }

    const user = users[trimmedUsername];
    if (!user) {
      setError('ชื่อผู้ใช้ไม่ถูกต้อง');
      setLoginAttempts((prev) => prev + 1);
      setIsSubmitting(false);
      return;
    }

    try {
      const hashed = await hashPassword(password);
      if (hashed === user.passwordHash) {
        localStorage.setItem('authUser', trimmedUsername);
        localStorage.setItem('authRole', user.role);
        navigate('/secret');
      } else {
        setError('รหัสผ่านไม่ถูกต้อง');
        setLoginAttempts((prev) => prev + 1);
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDisabled = isSubmitting || loginAttempts >= MAX_ATTEMPTS;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <section
        role="region"
        aria-labelledby="login-title"
        className="w-full max-w-md rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg"
      >
        <h1
          id="login-title"
          className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-white"
        >
          เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            id="login-error"
            role="alert"
            aria-live="assertive"
            className="mb-4 text-center font-medium text-red-600 dark:text-red-400"
          >
            {error}
          </div>
        )}

        {loginAttempts >= MAX_ATTEMPTS && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-4 text-center font-semibold text-yellow-700 dark:text-yellow-400"
          >
            เกินจำนวนครั้งที่อนุญาต กรุณาลองใหม่ภายหลัง
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5" noValidate>
          <input
            ref={usernameRef}
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
            aria-required="true"
            aria-describedby={error ? 'login-error' : undefined}
            placeholder="ชื่อผู้ใช้"
            disabled={isDisabled}
            className={`rounded-md border px-4 py-3 transition placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${
              isDisabled
                ? 'cursor-not-allowed border-gray-400 bg-gray-100 dark:bg-gray-600'
                : 'border-gray-300 bg-white'
            }`}
          />

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
            aria-required="true"
            placeholder="รหัสผ่าน"
            disabled={isDisabled}
            className={`rounded-md border px-4 py-3 transition placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary ${
              isDisabled
                ? 'cursor-not-allowed border-gray-400 bg-gray-100 dark:bg-gray-600'
                : 'border-gray-300 bg-white'
            }`}
          />

          <button
            type="submit"
            aria-label="เข้าสู่ระบบ"
            disabled={isDisabled}
            className={`rounded-md py-3 text-primary-contrastText transition focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50 ${
              isDisabled
                ? 'bg-primary opacity-50 cursor-not-allowed'
                : 'bg-primary hover:bg-primary-dark'
            }`}
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;