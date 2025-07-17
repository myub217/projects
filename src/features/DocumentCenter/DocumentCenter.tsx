// src/features/DocumentCenter/DocumentCenter.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DocumentCenter: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-base-100 text-base-content p-6">
      <section className="max-w-4xl mx-auto rounded-2xl shadow-xl bg-neutral text-neutral-content p-8 space-y-6">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold">ศูนย์เอกสาร</h1>
          <p className="text-sm">จัดการและดูเอกสารทั้งหมดในที่เดียว</p>
        </header>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card bg-base-200 text-base-content shadow-md">
            <div className="card-body">
              <h2 className="card-title">เอกสารทั่วไป</h2>
              <p className="text-sm">ดูและจัดการเอกสารทั่วไป</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => navigate('/documents/list')}
                >
                  เปิดดู
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 text-base-content shadow-md">
            <div className="card-body">
              <h2 className="card-title">เอกสารลับ</h2>
              <p className="text-sm">จัดการเอกสารที่ต้องการสิทธิ์พิเศษ</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => navigate('/documents/confidential')}
                >
                  ดูเอกสารลับ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DocumentCenter