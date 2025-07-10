/**
 * สร้าง SHA-256 hash จากรหัสผ่านที่ป้อนเข้ามา
 * @param password - รหัสผ่านแบบ plain text
 * @returns string (SHA-256 ในรูปแบบ hex)
 */
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  // ใช้ Web Crypto API สำหรับ hashing
  const cryptoAPI = globalThis.crypto || (window as any).crypto;
  if (!cryptoAPI || !cryptoAPI.subtle) {
    throw new Error("Web Crypto API ไม่พร้อมใช้งานใน environment นี้");
  }

  const hashBuffer = await cryptoAPI.subtle.digest("SHA-256", data);

  // แปลง ArrayBuffer เป็น hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  return hashHex;
}