// ✅ src/types/user.ts – เวอร์ชันสมบูรณ์ พร้อมใช้งานจริง

// 🔹 Role ของผู้ใช้งานในระบบ JP - Visual & Docs
export type UserRole = 'admin' | 'staff' | 'auditor' | 'customer'

// 🔹 โครงสร้างข้อมูลผู้ใช้งาน
export interface User {
  id: string // UUID เช่น "2c38d7de-3d9e-42ff-8e3f-7645e3c935f7"
  username: string // เช่น "jp_admin"
  fullName: string // เช่น "คุณจารุวรรณ ทองคำ"
  email: string // เช่น "admin@jpdocs.com"
  phone?: string // เช่น "0812345678"
  role: UserRole // เช่น "admin"
  avatarUrl?: string // เช่น "/assets/users/avatar01.webp"
  isActive: boolean // true = ใช้งานอยู่
  lastLogin?: string // เช่น "2025-07-16T08:25:00Z"
  createdAt: string // เช่น "2024-11-01T10:00:00Z"
  updatedAt?: string // เช่น "2025-06-30T12:00:00Z"
}

// 🔸 ผลลัพธ์หลัง login สำเร็จ
export interface AuthUser {
  token: string // JWT เช่น "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  user: User // ข้อมูลผู้ใช้
}

// 🔸 ข้อมูลที่ใช้ login
export interface LoginCredentials {
  username: string // เช่น "jp_admin"
  password: string // เช่น "securePass2025"
}

// 🔹 ตัวอย่างข้อมูลจริง (mock ใช้งานภายในระบบ)
export const mockAuthUser: AuthUser = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyYzM4ZDdkZS0zZDllLTQyZmYtOGUzZi03NjQ1ZTNjOTM1ZjcifQ.xAzFZ9JxNS9YmS5TuWkPdo3aYeW4lKzrz4l6X9jAlZw',
  user: {
    id: '2c38d7de-3d9e-42ff-8e3f-7645e3c935f7',
    username: 'admin25217',
    fullName: 'คุณจารุวรรณ ทองคำ',
    email: 'admin@jpdocs.com',
    phone: '0812345678',
    role: 'admin',
    avatarUrl: '/assets/users/avatar01.webp',
    isActive: true,
    lastLogin: '2025-07-17T07:20:00Z',
    createdAt: '2024-11-01T10:00:00Z',
    updatedAt: '2025-07-01T12:00:00Z',
  },
}
