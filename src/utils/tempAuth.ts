// src/utils/authHelpers.ts

import { TEMP_USERS } from "./tempAuth";

/**
 * ตรวจสอบว่าผู้ใช้และรหัสผ่านตรงกับบัญชีที่มี และไม่หมดอายุ
 */
export function isValidUser(username: string, password: string): boolean {
  const now = new Date();

  return TEMP_USERS.some(
    (user) =>
      user.username === username &&
      user.password === password &&
      user.expiresAt > now
  );
}