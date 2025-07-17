// src/utils/hashPassword.ts

/**
 * แฮชรหัสผ่านด้วย SHA-256 โดยใช้ Web Crypto API (ฝั่ง client)
 * รองรับการใช้งานในเบราว์เซอร์อย่างปลอดภัยแบบ async
 *
 * @param password - รหัสผ่าน plain text
 * @returns ค่า SHA-256 hash เป็น hex string (64 ตัวอักษร)
 */
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((byte) => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
}