function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = authHeader.substring(7);
  // TODO: ใส่ logic ตรวจสอบ token จริง เช่น JWT, session ฯลฯ
  if (token !== "valid-user-token") {
    return res.status(403).json({ success: false, message: "Forbidden" });
  }

  req.user = { id: "user123", username: "เจ้าป่า" };
  next();
}

module.exports = { verifyToken };
