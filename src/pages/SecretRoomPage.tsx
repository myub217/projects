// ✅ src/pages/SectionRoomPage.tsx – ห้องลับสำหรับลูกค้าที่ได้รับสิทธิ์เท่านั้น

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUserSecret, FaLock, FaBusinessTime } from 'react-icons/fa'

const SectionRoomPage: React.FC = () => {
  const navigate = useNavigate()
  const [authUser, setAuthUser] = useState<string | null>(null)

  useEffect(() => {
    const user = localStorage.getItem('authUser')
    const role = localStorage.getItem('authRole')
    if (!user || !role || role !== 'client') {
      navigate('/login', { replace: true })
    } else {
      setAuthUser(user)
    }
  }, [navigate])

  if (!authUser) return null

  return (
    <main className="min-h-screen bg-neutral text-neutral-content flex items-center justify-center p-6">
      <motion.section
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl rounded-2xl shadow-2xl bg-base-100 text-base-content p-8 space-y-6"
      >
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
            <FaUserSecret className="text-secondary" />
            ห้องลับธุรกิจสีเทา
          </h1>
          <p className="text-sm text-base-content/70">
            ยินดีต้อนรับคุณ <strong>{authUser}</strong> สู่ระบบเฉพาะลูกค้า
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card bg-neutral text-neutral-content shadow-lg">
            <div className="card-body">
              <h2 className="card-title">
                <FaBusinessTime className="text-primary" />
                รายงานภายใน
              </h2>
              <p>เข้าถึงข้อมูลเชิงลึกสำหรับการตัดสินใจเชิงกลยุทธ์</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-primary">
                  เข้าดู
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-neutral text-neutral-content shadow-lg">
            <div className="card-body">
              <h2 className="card-title">
                <FaLock className="text-warning" />
                ข้อมูลลับเฉพาะ
              </h2>
              <p>สำหรับผู้ได้รับอนุญาตเท่านั้นในการดูเอกสารสำคัญ</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-warning">
                  ดูเอกสาร
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center text-xs text-base-content/60 pt-4 border-t border-base-200">
          © {new Date().getFullYear()} JP Visual & Docs. Confidential Only.
        </footer>
      </motion.section>
    </main>
  )
}

export default SectionRoomPage