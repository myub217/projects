import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// รายชื่อผู้ใช้และรหัสผ่านแบบ plain text
const ALL_USERS = [
  { username: "admin", password: "admin25217", role: "admin" },
  { username: "myub25217", password: "25217", role: "member" },
  { username: "JPLOGTOKEN728", password: "JPLOGTOKEN728_2025", role: "customer" },
  { username: "JPLOGTOKEN729", password: "JPLOGTOKEN729_2025", role: "customer" },
  { username: "JPLOGTOKEN730", password: "JPLOGTOKEN730_2025", role: "customer" },
  { username: "JPLOGTOKEN731", password: "JPLOGTOKEN731_2025", role: "customer" },
  { username: "JPLOGTOKEN732", password: "JPLOGTOKEN732_2025", role: "customer" },
  { username: "souldocs2581", password: "souldocs2581_2025", role: "customer" },
  { username: "souldocs2582", password: "souldocs2582_2025", role: "customer" },
  { username: "souldocs2583", password: "souldocs2583_2025", role: "customer" },
  { username: "souldocs2584", password: "souldocs2584_2025", role: "customer" },
  { username: "souldocs2585", password: "souldocs2585_2025", role: "customer" },
];

// กำหนดจำนวนครั้งผิดสูงสุดก่อนลบข้อมูลออก
const MAX_FAILED_ATTEMPTS = 5;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // กำหนด path หลัง login สำเร็จ
  const fromPath = (location.state as { from?: string })?.from || "/secret-room";

  // อ่านค่า username/password จาก localStorage ถ้ามี
  const storedUsername = localStorage.getItem("savedUsername") || "";
  const storedPassword = localStorage.getItem("savedPassword") || "";

  const [username, setUsername] = useState(storedUsername);
  const [password, setPassword] = useState(storedPassword);
  const [message, setMessage] = useState("");

  // ฟังก์ชันอ่านจำนวนครั้งผิดจาก localStorage (แยกตาม username)
  const getFailedAttempts = (user: string) =>
    Number(localStorage.getItem(`failedAttempts_${user}`) || "0");

  // ฟังก์ชันบันทึกจำนวนครั้งผิด
  const setFailedAttempts = (user: string, count: number) => {
    localStorage.setItem(`failedAttempts_${user}`, count.toString());
  };

  // ฟังก์ชันลบจำนวนครั้งผิด
  const clearFailedAttempts = (user: string) => {
    localStorage.removeItem(`failedAttempts_${user}`);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const user = ALL_USERS.find((u) => u.username === username);
    if (!user) {
      setMessage("❌ ไม่พบชื่อผู้ใช้");
      return;
    }

    let failedCount = getFailedAttempts(username);

    if (failedCount >= MAX_FAILED_ATTEMPTS) {
      // ลบข้อมูล username/password saved และรีเซ็ตจำนวนครั้งผิด
      localStorage.removeItem("savedUsername");
      localStorage.removeItem("savedPassword");
      clearFailedAttempts(username);

      setMessage(
        "❌ คุณพิมพ์รหัสผ่านผิดเกิน 5 ครั้ง ระบบลบข้อมูลบันทึกอัตโนมัติ กรุณาลองใหม่อีกครั้ง"
      );
      return;
    }

    if (password !== user.password) {
      failedCount++;
      setFailedAttempts(username, failedCount);
      setMessage(
        `❌ รหัสผ่านไม่ถูกต้อง (ผิด ${failedCount} ครั้งจาก ${MAX_FAILED_ATTEMPTS})`
      );
      return;
    }

    // ล็อกอินสำเร็จ รีเซ็ตจำนวนครั้งผิด
    clearFailedAttempts(username);

    // บันทึก username/password สำหรับกรอกอัตโนมัติครั้งถัดไป
    localStorage.setItem("savedUsername", username);
    localStorage.setItem("savedPassword", password);

    // บันทึกสถานะ login
    localStorage.setItem("username", user.username);
    localStorage.setItem("role", user.role);
    localStorage.setItem("token", "mock-token");

    setMessage("✅ เข้าสู่ระบบสำเร็จ กำลังนำทาง...");

    setTimeout(() => {
      navigate(fromPath, { replace: true });
    }, 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-base-100">
      <form
        onSubmit={handleLogin}
        className="max-w-md w-full p-6 border rounded shadow bg-white"
        aria-label="แบบฟอร์มเข้าสู่ระบบ"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">เข้าสู่ระบบ</h1>

        {message && (
          <div
            role="alert"
            className={`mb-4 text-center ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
            aria-live="assertive"
          >
            {message}
          </div>
        )}

        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value.trim())}
          placeholder="ชื่อผู้ใช้"
          required
          className="input input-bordered w-full mb-3"
          autoComplete="username"
          aria-label="ชื่อผู้ใช้"
          spellCheck={false}
          autoFocus
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="รหัสผ่าน"
          required
          className="input input-bordered w-full mb-4"
          autoComplete="current-password"
          aria-label="รหัสผ่าน"
          spellCheck={false}
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="ปุ่มเข้าสู่ระบบ"
        >
          เข้าสู่ระบบ
        </button>
      </form>
    </section>
  );
};

export default LoginPage;