import dotenv from "dotenv";
dotenv.config();

export function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  const expected = `Bearer ${process.env.ACCESS_TOKEN_SECRET}`;

  if (!token || token !== expected) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  next();
}