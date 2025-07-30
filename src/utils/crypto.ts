// src/utils/crypto.ts
import { randomBytes as nodeRandomBytes, createHash as nodeCreateHash } from "crypto";

// ฟังก์ชันสร้าง random bytes รองรับ browser และ node
export function randomBytes(size: number): Uint8Array {
  if (typeof window !== "undefined" && window.crypto?.getRandomValues) {
    // Browser environment
    const array = new Uint8Array(size);
    window.crypto.getRandomValues(array);
    return array;
  } else {
    // Node environment
    return nodeRandomBytes(size);
  }
}

// ฟังก์ชัน hash string ด้วย sha256
export function sha256(input: string): string {
  if (typeof window !== "undefined" && window.crypto?.subtle) {
    // Browser environment: ใช้ subtle crypto (Promise-based)
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    return window.crypto.subtle.digest("SHA-256", data).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    });
  } else {
    // Node environment: ใช้ crypto module แบบ synchronous
    return nodeCreateHash("sha256").update(input).digest("hex");
  }
}