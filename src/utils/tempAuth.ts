// src/utils/authHelpers.ts

import { TEMP_USERS } from "./tempAuth";

/**
 * ตรวจสอบว่าผู้ใช้และรหัสผ่านตรงกับบัญชีที่มี และไม่หมดอายุ
 * @param username ชื่อผู้ใช้ที่ต้องการตรวจสอบ
 * @param password รหัสผ่านที่ต้องการตรวจสอบ
 * @returns true ถ้าผู้ใช้และรหัสผ่านถูกต้องและยังไม่หมดอายุ, false หากไม่ตรงหรือหมดอายุ
 */
export function isValidUser(username: string, password: string): boolean {
  const now = new Date();

  return TEMP_USERS.some(
    (user) =>
      user.username === username &&
      user.password === password &&
      new Date(user.expiresAt) > now
  );
}