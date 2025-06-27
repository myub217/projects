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
