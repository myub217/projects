// src/pages/SecretRoomPage.tsx

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUserSecret, FaLock, FaBusinessTime } from 'react-icons/fa'

import AccessLogTable from '@components/SecretRoom/AccessLogTable'
import HeaderBlock from '@components/SecretRoom/HeaderBlock'
import SystemCheckCard from '@components/SecretRoom/SystemCheckCard'

import { useDocumentStore } from '@/features/DocumentCenter/useDocumentStore'

const SecretRoomPage: React.FC = () => {
  const navigate = useNavigate()
  const [authUser, setAuthUser] = useState<string | null>(null)
  const [isChecking, setIsChecking] = useState(true)

  const { fetchDocuments } = useDocumentStore()

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser')
    const role = localStorage.getItem('userRole')
    console.log('SecretRoomPage useEffect:', { user, role })

    if (!user || role !== 'user') {
      navigate('/login', { replace: true })
      return
    }

    setAuthUser(user)
    setIsChecking(false)
    fetchDocuments()
  }, [navigate, fetchDocuments])

  if (isChecking || !authUser) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-base-100">
        <p className="text-base-content text-lg">กำลังตรวจสอบสิทธิ์...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-base-100 text-base-content px-4 py-8 flex flex-col items-center md:items-start">
      <HeaderBlock user={authUser} />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-7xl mt-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8"
      >
        <section className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card bg-base-200 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between">
              <h2 className="card-title text-xl flex items-center gap-3 text-primary">
                <FaBusinessTime size={24} />
                รายงานวิเคราะห์ภายใน
              </h2>
              <p className="mt-4 flex-grow text-base leading-relaxed">
                ข้อมูลสรุปและแนวโน้มจากการวิเคราะห์เชิงกลยุทธ์ภายใน
              </p>
              <div className="card-actions justify-end mt-6">
                <button
                  className="btn btn-outline btn-primary btn-md"
                  onClick={() => navigate('/internal-reports')}
                  aria-label="เปิดดูรายงาน"
                >
                  เปิดดูรายงาน
                </button>
              </div>
            </div>

            <div className="card bg-base-200 shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between">
              <h2 className="card-title text-xl flex items-center gap-3 text-warning">
                <FaLock size={24} />
                เอกสารลับทางธุรกิจ
              </h2>
              <p className="mt-4 flex-grow text-base leading-relaxed">
                แบบฟอร์มร้องขอเอกสารบริษัท เช่น หนังสือรับรอง, ใบภพ.20, สัญญา ฯลฯ
              </p>
              <div className="card-actions justify-end mt-6">
                <button
                  className="btn btn-outline btn-warning btn-md"
                  onClick={() => navigate('/business-docs')}
                  aria-label="ขอเอกสาร"
                >
                  ขอเอกสาร
                </button>
              </div>
            </div>
          </div>

          <AccessLogTable />
        </section>

        <aside className="flex flex-col gap-8">
          <SystemCheckCard />
        </aside>
      </motion.section>

      <footer className="w-full max-w-7xl text-center text-xs text-neutral-content pt-6 border-t border-base-300 mt-10 md:mt-12">
        © {new Date().getFullYear()} JP Visual & Docs. All rights reserved.
      </footer>
    </main>
  )
}

export default SecretRoomPage