// src/pages/LoginPage.tsx

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { users } from '@/data/users';
import { hashPassword } from '@/utils/hashPassword';

const MAX_ATTEMPTS = 5;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const usernameRef = useRef<HTMLInputElement>(null);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const redirectPath =
    (location.state as { from?: Location })?.from?.pathname || '/secret';

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  useEffect(() => {
    if (error) usernameRef.current?.focus();
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
        navigate(redirectPath, { replace: true });
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
    <main className="flex min-h-screen items-center justify-center bg-base-200 px-4 py-8 sm:px-6 lg:px-8">
      <section
        role="region"
        aria-labelledby="login-title"
        className="w-full max-w-md rounded-2xl bg-base-100 p-8 shadow-xl"
      >
        <h1
          id="login-title"
          className="mb-6 text-center text-2xl sm:text-3xl font-bold text-primary"
        >
          🔐 เข้าสู่ระบบ
        </h1>

        {error && (
          <div
            id="login-error"
            role="alert"
            aria-live="assertive"
            className="mb-4 rounded bg-error/10 p-3 text-sm font-medium text-error"
          >
            {error}
          </div>
        )}

        {loginAttempts >= MAX_ATTEMPTS && (
          <div
            role="alert"
            aria-live="assertive"
            className="mb-4 rounded bg-warning/10 p-3 text-sm font-semibold text-warning"
          >
            🚫 เกินจำนวนครั้งที่อนุญาต กรุณาลองใหม่ภายหลัง
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5" noValidate>
          <div className="form-control">
            <input
              ref={usernameRef}
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
              placeholder="ชื่อผู้ใช้"
              disabled={isDisabled}
              className="input input-bordered w-full"
              aria-describedby={error ? 'login-error' : undefined}
            />
          </div>

          <div className="form-control">
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              placeholder="รหัสผ่าน"
              disabled={isDisabled}
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            aria-label="เข้าสู่ระบบ"
            disabled={isDisabled}
            className={`btn btn-primary w-full ${
              isDisabled ? 'btn-disabled opacity-60' : ''
            }`}
          >
            {isSubmitting ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;