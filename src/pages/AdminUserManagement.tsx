import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

type UserRole = "member" | "vip" | "admin";

const AdminUserManagement: React.FC = () => {
  const navigate = useNavigate();
  const { addUser, users, setUserRole, revokeUser, activeUsers, role } = useAuth();

  const [username, setUsername] = useState("Myub25217");
  const [password, setPassword] = useState("22584566");
  const [roleInput, setRoleInput] = useState<UserRole>("admin");
  const [expiresMinutes, setExpiresMinutes] = useState(1440); // 1 วัน

  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // ⛔ Redirect ถ้าไม่ใช่ admin
  useEffect(() => {
    if (role && role !== "admin") {
      navigate("/login");
    }
  }, [role, navigate]);

  const handleAddUser = () => {
    const trimmed = username.trim();
    if (!trimmed || !password.trim() || expiresMinutes < 1) {
      setMessage("⚠️ กรุณากรอกข้อมูลให้ครบถ้วน และตั้งเวลาหมดอายุอย่างน้อย 1 นาที");
      return;
    }

    if (users.some((u) => u.username.toLowerCase() === trimmed.toLowerCase())) {
      setMessage(`❌ ผู้ใช้ "${trimmed}" มีอยู่แล้ว`);
      return;
    }

    const token = `t_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    addUser({ username: trimmed, password, role: roleInput, expiresMinutes, token });

    setMessage(`✅ เพิ่มผู้ใช้ "${trimmed}" สำเร็จ (หมดอายุใน ${expiresMinutes} นาที)`);

    setUsername("");
    setPassword("");
    setRoleInput("member");
    setExpiresMinutes(1440);
  };

  const handleRevoke = (username: string) => {
    if (window.confirm(`⚠️ ต้องการลบบัญชี "${username}" จริงหรือไม่?`)) {
      revokeUser(username);
      setMessage(`🗑️ บัญชี "${username}" ถูกลบแล้ว`);
    }
  };

  const handleRoleChange = (username: string, newRole: UserRole) => {
    if (newRole === "admin" && !window.confirm("⚠️ ยืนยันการมอบสิทธิ์ผู้ดูแลระบบให้ผู้ใช้นี้?")) return;
    setUserRole(username, newRole);
    setMessage(`🔄 อัปเดตสิทธิ์ของ "${username}" เป็น "${newRole}"`);
  };

  const filteredUsers = activeUsers.filter(
    (u) =>
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      (u.token?.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  if (!role) {
    return (
      <div className="text-center mt-20 text-gray-400" role="status">
        กำลังโหลดสิทธิ์ผู้ใช้...
      </div>
    );
  }

  if (role !== "admin") {
    return (
      <section className="text-center text-red-500 mt-20" role="alert" aria-live="assertive">
        ⛔ ไม่มีสิทธิ์เข้าถึงหน้านี้
      </section>
    );
  }

  return (
    <section
      className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-8"
      aria-label="ระบบจัดการผู้ใช้สำหรับแอดมิน"
    >
      <h2 className="text-2xl font-bold text-center text-primary dark:text-accent">
        🔐 ระบบจัดการผู้ใช้ (เฉพาะแอดมิน)
      </h2>

      {message && (
        <div
          className={`text-center font-medium ${
            message.includes("✅") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}
          role="alert"
          aria-live="assertive"
        >
          {message}
        </div>
      )}

      {/* ฟอร์มเพิ่มผู้ใช้ */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddUser();
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        aria-label="ฟอร์มเพิ่มผู้ใช้ใหม่"
      >
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          className="input input-bordered w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-required="true"
          autoComplete="username"
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-required="true"
          autoComplete="new-password"
        />
        <select
          className="select select-bordered w-full"
          value={roleInput}
          onChange={(e) => setRoleInput(e.target.value as UserRole)}
        >
          <option value="member">member</option>
          <option value="vip">vip</option>
          <option value="admin">admin</option>
        </select>
        <input
          type="number"
          min={1}
          placeholder="หมดอายุใน (นาที)"
          className="input input-bordered w-full"
          value={expiresMinutes}
          onChange={(e) => setExpiresMinutes(Number(e.target.value))}
          required
        />
        <div className="col-span-full">
          <button type="submit" className="btn btn-primary w-full">
            ✅ เพิ่มผู้ใช้
          </button>
        </div>
      </form>

      {/* ช่องค้นหา */}
      <div>
        <input
          type="text"
          placeholder="🔍 ค้นหาชื่อผู้ใช้หรือ token..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ตารางผู้ใช้ */}
      <div className="overflow-x-auto" role="region" aria-label="รายชื่อผู้ใช้">
        <table className="table w-full text-sm">
          <thead>
            <tr>
              <th>ชื่อผู้ใช้</th>
              <th>สิทธิ์</th>
              <th>Token</th>
              <th>สถานะ</th>
              <th>หมดอายุ</th>
              <th className="text-right">จัดการ</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.username, e.target.value as UserRole)}
                      className="select select-sm select-bordered"
                    >
                      <option value="member">member</option>
                      <option value="vip">vip</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td>
                    <code className="text-xs break-all">{user.token || "-"}</code>
                  </td>
                  <td>{new Date(user.expiresAt).getTime() > Date.now() ? "✅ ใช้งานได้" : "⛔ หมดอายุ"}</td>
                  <td>
                    {new Date(user.expiresAt).toLocaleString("th-TH", {
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleRevoke(user.username)}
                      className="btn btn-sm btn-outline btn-error"
                      type="button"
                    >
                      ลบ
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center text-gray-400 py-4">
                  ไม่พบผู้ใช้ที่ตรงกับคำค้นหา
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminUserManagement;