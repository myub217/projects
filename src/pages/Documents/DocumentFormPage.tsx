// src/pages/Documents/DocumentFormPage.tsx

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DocumentFormPage: React.FC = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) return alert('กรุณาเลือกไฟล์ PDF')

    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', title)
    formData.append('description', description)

    // 🔸 Replace with real API later
    console.log('[UPLOAD]:', { file, title, description })
    alert('✔️ อัปโหลดสำเร็จ (mock)')
    navigate('/documents')
  }

  return (
    <div className="min-h-screen container py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">
        อัปโหลดเอกสารใหม่
      </h1>

      <form onSubmit={handleUpload} className="doc-upload space-y-6">
        <div>
          <label>ชื่อเอกสาร</label>
          <input
            type="text"
            placeholder="ระบุชื่อเอกสาร"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>คำอธิบายเอกสาร</label>
          <textarea
            rows={3}
            placeholder="สรุปเนื้อหาโดยย่อ"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <label>เลือกไฟล์ PDF</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              const selected = e.target.files?.[0]
              setFile(selected || null)
            }}
            required
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="btn btn-primary">
            📤 อัปโหลดเอกสาร
          </button>
        </div>
      </form>
    </div>
  )
}

export default DocumentFormPage