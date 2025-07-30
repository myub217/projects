import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    const success = await login(username, password);
    if (!success) {
      setErrorMsg("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      return;
    }

    // ถ้าสำเร็จ ให้ redirect ตาม role ที่ AuthContext เก็บไว้
    // หรือเช็ค user จาก context ถ้าจำเป็น
    navigate(username === "admin2517" ? "/admin" : "/secret");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-6 bg-base-100 rounded-2xl shadow-xl space-y-6"
      >
        <h1 className="text-2xl font-bold text-center text-primary">เข้าสู่ระบบ</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text">ชื่อผู้ใช้</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">รหัสผ่าน</span>
          </label>
          <input
            type="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        {errorMsg && (
          <div className="text-error text-sm text-center">{errorMsg}</div>
        )}

        <button className="btn btn-primary w-full" type="submit">
          เข้าสู่ระบบ
        </button>
      </form>
    </div>
  );
};

export default LoginPage;