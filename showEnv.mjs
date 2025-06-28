// showEnv.mjs

import os from "os";
import dotenv from "dotenv";

// โหลดค่า environment variables จากไฟล์ .env (ถ้ามี)
dotenv.config();

console.log("=== ข้อมูลระบบ (System Info) ===");
console.log(`ระบบปฏิบัติการ: ${os.type()} ${os.release()}`);
console.log(`สถาปัตยกรรม CPU: ${os.arch()}`);
console.log(`จำนวน CPU Cores: ${os.cpus().length}`);
console.log(`หน่วยความจำทั้งหมด: ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`หน่วยความจำว่าง: ${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
console.log(`โฮสต์เนม: ${os.hostname()}`);

console.log("\n=== ข้อมูล Node.js ===");
console.log(`เวอร์ชัน Node.js: ${process.version}`);
console.log(`เส้นทางโปรแกรม: ${process.execPath}`);

console.log("\n=== Environment Variables ที่สำคัญ ===");
console.log(`PORT: ${process.env.PORT || "ไม่ได้ตั้งค่า"}`);

const validAccessKeysRaw = process.env.VALID_ACCESS_KEYS || "";
const validAccessKeysArray = validAccessKeysRaw
  ? validAccessKeysRaw.split(",").map(k => k.trim())
  : [];

console.log("VALID_ACCESS_KEYS (raw):", validAccessKeysRaw || "ไม่ได้ตั้งค่า");
console.log("VALID_ACCESS_KEYS (parsed):", validAccessKeysArray.length > 0 ? validAccessKeysArray : "ไม่ได้ตั้งค่า");