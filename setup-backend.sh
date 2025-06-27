#!/bin/bash

mkdir -p server/routes server/middleware server/config

cat > server/index.js <<'EOF'
const express = require("express");
const app = express();

const checkAccessKeyRouter = require("./routes/checkAccessKey");

app.use(express.json());

app.use("/api/check-access-key", checkAccessKeyRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
EOF

cat > server/routes/checkAccessKey.js <<'EOF'
const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");
const { VALID_ACCESS_KEYS } = require("../config/keys");

router.post("/", verifyToken, (req, res) => {
  const { accessKey } = req.body;
  if (!accessKey) {
    return res.status(400).json({ success: false, message: "Missing accessKey" });
  }

  if (VALID_ACCESS_KEYS.includes(accessKey)) {
    return res.json({ success: true, message: "Access granted" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid access key" });
  }
});

module.exports = router;
EOF

cat > server/middleware/auth.js <<'EOF'
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
EOF

cat > server/config/keys.js <<'EOF'
const VALID_ACCESS_KEYS = ["JP2025KEY", "ADMIN123", "SPECIALKEY"];

module.exports = { VALID_ACCESS_KEYS };
EOF

echo "สร้างโฟลเดอร์และไฟล์ backend API ในโฟลเดอร์ server เรียบร้อยแล้ว"
