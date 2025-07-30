// src/types/user.ts

export interface User {
  id: string;
  username: string;
  email: string;
  role: "admin" | "user" | "guest";
  avatarUrl?: string;
  createdAt: string; // ISO date string
  updatedAt?: string; // ISO date string, optional
}