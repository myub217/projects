// middleware/auth.mjs

export function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  // สมมุติว่าตรวจสอบ token ง่าย ๆ ว่าตรงกับค่า "valid-token-demo"
  if (token === "valid-token-demo") {
    // กำหนดข้อมูลผู้ใช้ใน req.user เพื่อให้ route ถัดไปใช้งานได้
    req.user = { username: "demo", role: "member" };
    next();
  } else {
    return res.status(403).json({ success: false, message: "Forbidden" });
  }
}