import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const AdminUserManagement: React.FC = () => {
  const { addUser, users } = useAuth();

  // State ของฟอร์ม
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"member" | "admin">("member");
  const [expiresMinutes, setExpiresMinutes] = useState(10);
  const [message, setMessage] = useState("");

  // ล้างข้อความแจ้งเตือนอัตโนมัติหลัง 5 วินาที
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // ฟังก์ชันเพิ่มผู้ใช้
  const handleAddUser = () => {
    // ตรวจสอบข้อมูลเบื้องต้น
    if (!username.trim() || !password.trim() || expiresMinutes < 1) {
      setMessage(
        "กรุณากรอกข้อมูลให้ครบถ้วนและระบุเวลาหมดอายุให้ถูกต้อง (1 นาทีขึ้นไป)"
      );
      return;
    }

    // ตรวจสอบซ้ำ username
    if (users.some((u) => u.username === username.trim())) {
      setMessage(`ชื่อผู้ใช้ "${username.trim()}" นี้มีอยู่แล้ว กรุณาใช้ชื่ออื่น`);
      return;
    }

    // เรียก addUser จาก context
    addUser({ username: username.trim(), password, role, expiresMinutes });
    setMessage(`เพิ่มผู้ใช้ "${username.trim()}" สำเร็จ หมดอายุใน ${expiresMinutes} นาที`);

    // ล้างฟอร์ม
    setUsername("");
    setPassword("");
    setRole("member");
    setExpiresMinutes(10);
  };

  return (
    <section
      aria-labelledby="admin-user-management-title"
      className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-6"
    >
      <h2
        id="admin-user-management-title"
        className="text-2xl font-bold text-center text-primary dark:text-accent"
      >
        ระบบจัดการผู้ใช้ (Admin)
      </h2>

      {message && (
        <div
          className={`text-center font-medium ${
            message.includes("สำเร็จ")
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
          role="alert"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddUser();
        }}
        className="space-y-4"
        noValidate
      >
        <label htmlFor="username" className="sr-only">
          ชื่อผู้ใช้
        </label>
        <input
          id="username"
          type="text"
          placeholder="ชื่อผู้ใช้"
          className="input input-bordered w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          aria-required="true"
          aria-label="ชื่อผู้ใช้"
          disabled={false}
        />

        <label htmlFor="password" className="sr-only">
          รหัสผ่าน
        </label>
        <input
          id="password"
          type="password"
          placeholder="รหัสผ่าน"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          aria-required="true"
          aria-label="รหัสผ่าน"
          disabled={false}
        />

        <label htmlFor="role" className="sr-only">
          สิทธิ์ผู้ใช้
        </label>
        <select
          id="role"
          className="select select-bordered w-full"
          value={role}
          onChange={(e) => setRole(e.target.value as "member" | "admin")}
          aria-label="สิทธิ์ผู้ใช้"
          disabled={false}
        >
          <option value="member">สมาชิก (Member)</option>
          <option value="admin">ผู้ดูแลระบบ (Admin)</option>
        </select>

        <label htmlFor="expiresMinutes" className="sr-only">
          เวลาหมดอายุ (นาที)
        </label>
        <input
          id="expiresMinutes"
          type="number"
          placeholder="เวลาหมดอายุ (นาที)"
          className="input input-bordered w-full"
          value={expiresMinutes}
          min={1}
          onChange={(e) => setExpiresMinutes(Number(e.target.value))}
          aria-label="เวลาหมดอายุ (นาที)"
          aria-required="true"
          disabled={false}
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
          aria-label="เพิ่มผู้ใช้ใหม่"
          disabled={false}
        >
          เพิ่มผู้ใช้ใหม่
        </button>
      </form>
    </section>
  );
};

export default AdminUserManagement;