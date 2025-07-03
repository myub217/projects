// src/data/users.ts

export type UserRole = "admin" | "user";

export interface User {
  password: string;
  role: UserRole;
}

export const users: Record<string, User> = {
  // 🔑 Admins
  "admin2517": { password: "myub2517", role: "admin" },

  // 👤 Regular users
  "JPKYETONKEY201": { password: "CODSLOUVPJ301", role: "user" },
  "JPKYETONKEY222": { password: "CODSLOUVPJ337", role: "user" },
  "JPKYETONKEY233": { password: "CODSLOUVPJ379", role: "user" },
  "JPKYETONKEY244": { password: "CODSLOUVPJ305", role: "user" },
  "JPKYETONKEY255": { password: "CODSLOUVPJ398", role: "user" },
  "JPKYETONKEY266": { password: "CODSLOUVPJ320", role: "user" },
  "JPKYETONKEY277": { password: "CODSLOUVPJ341", role: "user" },
  "JPKYETONKEY288": { password: "CODSLOUVPJ359", role: "user" },
  "JPKYETONKEY299": { password: "CODSLOUVPJ407", role: "user" },
  "JPKYETONKEY300": { password: "CODSLOUVPJ399", role: "user" },
};