import bcrypt from "bcryptjs";

// ฟังก์ชันช่วย hash password
const hashPassword = (plain) => bcrypt.hashSync(plain, 10);

// ผู้ใช้ทั้งหมด
export const ALL_USERS = [
  { username: "admin", password: hashPassword("admin25217"), role: "admin" },
  { username: "myub25217", password: hashPassword("25217"), role: "member" },
  { username: "JPLOGTOKEN728", password: hashPassword("JPLOGTOKEN728_2025"), role: "customer" },
  { username: "JPLOGTOKEN729", password: hashPassword("JPLOGTOKEN729_2025"), role: "customer" },
  { username: "JPLOGTOKEN730", password: hashPassword("JPLOGTOKEN730_2025"), role: "customer" },
  { username: "JPLOGTOKEN731", password: hashPassword("JPLOGTOKEN731_2025"), role: "customer" },
  { username: "JPLOGTOKEN732", password: hashPassword("JPLOGTOKEN732_2025"), role: "customer" },
  { username: "souldocs2581", password: hashPassword("souldocs2581_2025"), role: "customer" },
  { username: "souldocs2582", password: hashPassword("souldocs2582_2025"), role: "customer" },
  { username: "souldocs2583", password: hashPassword("souldocs2583_2025"), role: "customer" },
  { username: "souldocs2584", password: hashPassword("souldocs2584_2025"), role: "customer" },
  { username: "souldocs2585", password: hashPassword("souldocs2585_2025"), role: "customer" },
];