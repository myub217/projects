// src/pages/Documents/DocumentFormPage.tsx
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

interface DocumentForm {
  title: string
  content: string
}

const DocumentFormPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [form, setForm] = useState<DocumentForm>({
    title: '',
    content: '',
  })
  const [error, setError] = useState('')

  useEffect(() => {
    if (id) {
      // fetch document detail by id (simulate)
      // แก้ไขเป็นเรียก API จริงได้
      const fetchDocument = () => {
        const mockDoc = {
          title: 'ตัวอย่างเอกสาร',
          content: 'เนื้อหาเอกสารที่นี่...',
        }
        setForm(mockDoc)
      }
      fetchDocument()
    }
  }, [id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!form.title || !form.content) {
      setError('กรุณากรอกข้อมูลให้ครบ')
      return
    }

    // Save logic here (API call)

    // Redirect back to list
    navigate('/documents')
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{id ? 'แก้ไขเอกสาร' : 'สร้างเอกสารใหม่'}</h1>
      {error && <div className="mb-4 text-error font-semibold">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text">ชื่อเอกสาร</span>
          </label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">เนื้อหาเอกสาร</span>
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows={8}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? 'บันทึกการแก้ไข' : 'สร้างเอกสาร'}
        </button>
      </form>
    </div>
  )
}

export default DocumentFormPage