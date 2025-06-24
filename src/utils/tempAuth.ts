// src/utils/tempAuth.ts

/**
 * รายชื่อผู้ใช้และรหัสผ่านชั่วคราว
 * ใช้สำหรับจำลองระบบล็อกอินแบบ manual
 * มีวันหมดอายุเพื่อความปลอดภัย
 */

export interface TempUser {
  username: string;
  password: string;
  expiresAt: Date;
}

export const TEMP_USERS: TempUser[] = [
  {
    username: "admin",
    password: "1234", // 🔐 เปลี่ยนได้ตามต้องการ
    expiresAt: new Date("2025-07-31T23:59:59Z"), // ⏰ วันหมดอายุ (UTC)
  },
  {
    username: "tester",
    password: "5678",
    expiresAt: new Date("2025-07-15T00:00:00Z"),
  },
];