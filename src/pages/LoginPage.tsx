// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const success = login(username.trim(), password);
    if (success) {
      navigate("/secret-room");
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow w-full max-w-sm">
        <h1 className="text-xl font-bold mb-4 text-center">เข้าสู่ระบบ</h1>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="ชื่อผู้ใช้" className="input input-bordered w-full mb-3" />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="รหัสผ่าน" className="input input-bordered w-full mb-4" />
        <button type="submit" className="btn btn-primary w-full">เข้าสู่ระบบ</button>
      </form>
    </main>
  );
};

export default LoginPage;