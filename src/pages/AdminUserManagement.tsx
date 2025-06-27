// src/components/AdminUserManagement.tsx
import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const AdminUserManagement: React.FC = () => {
  const { addUser, users, setUserRole, revokeUser, activeUsers } = useAuth();

  const [username, setUsername] = useState("Myub25217");
  const [password, setPassword] = useState("22584566");
  const [role, setRole] = useState<"member" | "vip" | "admin">("admin");
  const [expiresMinutes, setExpiresMinutes] = useState(1440); // default 1 วัน
  const [secondCode, setSecondCode] = useState("");
  const [isSecondLayerUnlocked, setSecondLayerUnlocked] = useState(false);

  const [message, setMessage] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleAddUser = () => {
    const trimmed = username.trim();
    if (!trimmed || !password.trim() || expiresMinutes < 1) {
      setMessage("⚠️ กรุณากรอกข้อมูลให้ครบถ้วนและเวลาหมดอายุอย่างน้อย 1 นาที");
      return;
    }

    if (users.some((u) => u.username === trimmed)) {
      setMessage(`❌ ผู้ใช้ "${trimmed}" มีอยู่แล้ว`);
      return;
    }

    const safeToken = `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    addUser({
      username: trimmed,
      password,
      role,
      expiresMinutes,
      token: safeToken,
    });

    setMessage(`✅ เพิ่มผู้ใช้ "${trimmed}" สำเร็จ (หมดอายุใน ${expiresMinutes} นาที)`);
  };

  const handleRevoke = (username: string) => {
    if (confirm(`⚠️ คุณแน่ใจหรือไม่ที่จะลบบัญชี "${username}"?`)) {
      revokeUser(username);
      setMessage(`🗑️ บัญชี "${username}" ถูกยกเลิกแล้ว`);
    }
  };

  const handleRoleChange = (username: string, newRole: "member" | "vip" | "admin") => {
    if (newRole === "admin" && !confirm("⚠️ ยืนยันการมอบสิทธิ์ผู้ดูแลระบบให้ผู้ใช้นี้?")) return;
    setUserRole(username, newRole);
    setMessage(`🔄 อัปเดตสิทธิ์ของ "${username}" เป็น "${newRole}"`);
  };

  const handleSecondLayerCheck = () => {
    if (secondCode.trim() === "852085") {
      setSecondLayerUnlocked(true);
    } else {
      alert("❌ รหัสชั้นที่ 2 ไม่ถูกต้อง");
    }
  };

  const filteredUsers = activeUsers.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase()) ||
    (u.token?.toLowerCase().includes(search.toLowerCase()) ?? false)
  );

  if (!isSecondLayerUnlocked) {
    return (
      <section className="max-w-sm mx-auto mt-20 p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-6">
        <h2 className="text-xl font-bold text-center text-primary dark:text-accent">🔐 ยืนยันรหัสชั้นที่ 2</h2>
        <input
          type="password"
          placeholder="กรอกรหัส 5 หลัก"
          className="input input-bordered w-full"
          value={secondCode}
          onChange={(e) => setSecondCode(e.target.value)}
        />
        <button className="btn btn-primary w-full" onClick={handleSecondLayerCheck}>
          ดำเนินการต่อ
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow space-y-8">
      <h2 className="text-2xl font-bold text-center text-primary dark:text-accent">
        🔐 ระบบจัดการผู้ใช้ (เฉพาะแอดมิน)
      </h2>

      {message && (
        <div
          className={`text-center font-medium ${
            message.includes("✅") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}
          role="alert"
        >
          {message}
        </div>
      )}

      {/* Form เพิ่มผู้ใช้ */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddUser();
        }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <input
          type="text"
          placeholder="ชื่อผู้ใช้"
          className="input input-bordered w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="รหัสผ่าน"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <select
          className="select select-bordered w-full"
          value={role}
          onChange={(e) => setRole(e.target.value as "member" | "vip" | "admin")}
        >
          <option value="member">member</option>
          <option value="vip">vip</option>
          <option value="admin">admin</option>
        </select>
        <input
          type="number"
          placeholder="หมดอายุใน (นาที)"
          className="input input-bordered w-full"
          min={1}
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

      {/* Search */}
      <div>
        <input
          type="text"
          placeholder="🔎 ค้นหาผู้ใช้หรือ token..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table แสดงผู้ใช้ */}
      <div className="overflow-x-auto">
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
            {filteredUsers.map((user) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.username, e.target.value as any)}
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
                <td>
                  {new Date(user.expiresAt).getTime() > Date.now() ? "✅ ใช้งานได้" : "⛔ หมดอายุ"}
                </td>
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
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-400">
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