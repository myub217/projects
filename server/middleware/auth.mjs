// middleware/auth.mjs

/**
 * Middleware ตรวจสอบ token แบบง่าย ๆ
 * - อ่าน token จาก header Authorization (รูปแบบ Bearer <token>)
 * - ถ้า token ตรงกับค่าในระบบ ให้ผ่าน
 * - ถ้าไม่ถูกต้อง ให้ส่ง 401 หรือ 403 ตามสถานะ
 */

export function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  // ตรวจสอบว่ามี Authorization header และขึ้นต้นด้วย "Bearer "
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Missing or invalid Authorization header",
    });
  }

  // ดึง token ออกมา
  const token = authHeader.split(" ")[1];

  // ตัวอย่างตรวจสอบ token แบบง่าย (ควรเปลี่ยนเป็นระบบตรวจสอบจริงใน production)
  const VALID_TOKENS = ["valid-token-demo", "Myub25217"]; // เพิ่ม token ที่อนุญาตได้

  if (VALID_TOKENS.includes(token)) {
    // กำหนดข้อมูลผู้ใช้ใน req.user (ตัวอย่างข้อมูล)
    req.user = {
      username: token === "valid-token-demo" ? "demo" : "myubuser",
      role: "member",
    };
    return next();
  } else {
    return res.status(403).json({
      success: false,
      message: "Forbidden: Invalid token",
    });
  }
}