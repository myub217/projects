// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users } from '@data/users';
import { hashPassword } from '@utils/hashPassword';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    const user = users[trimmedUsername];
    if (!user) {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      return;
    }

    const hashed = await hashPassword(trimmedPassword);
    if (hashed !== user.passwordHash) {
      setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      return;
    }

    localStorage.setItem('loggedInUser', trimmedUsername);
    localStorage.setItem('userRole', user.role);

    if (user.role === 'admin') {
      navigate('/admin', { replace: true });
    } else {
      navigate('/secret', { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-base-200 p-6 rounded-lg shadow-md"
        aria-label="Login Form"
      >
        <h2 className="text-2xl font-bold mb-6 text-primary text-center">เข้าสู่ระบบ</h2>
        {error && (
          <div
            className="mb-4 text-error font-semibold text-center"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </div>
        )}
        <div className="form-control mb-4">
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
            aria-required="true"
            aria-describedby="usernameHelp"
            placeholder="กรอกชื่อผู้ใช้"
          />
        </div>
        <div className="form-control mb-6">
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
            aria-required="true"
            placeholder="กรอกรหัสผ่าน"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="เข้าสู่ระบบ"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default LoginPage;