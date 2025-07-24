// src/components/AdminBoard/widgets/CertificateExporter.tsx
// ✅ ปุ่ม export PDF จาก CertificatePreview พร้อม handle โหลดไฟล์และจัดการข้อผิดพลาด

import React from 'react'
import { toPng } from 'html-to-image'
import jsPDF from 'jspdf'
import toast from 'react-hot-toast'

interface CertificateExporterProps {
  targetId: string // ID ของ element ที่ต้องการ export
  filename?: string
}

const CertificateExporter: React.FC<CertificateExporterProps> = ({
  targetId,
  filename = 'certificate.pdf',
}) => {
  const handleExport = async () => {
    const element = document.getElementById(targetId)
    if (!element) {
      toast.error('ไม่พบใบรับรอง')
      return
    }

    try {
      const dataUrl = await toPng(element, { cacheBust: true })
      const pdf = new jsPDF('p', 'mm', 'a4')
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const imgProps = pdf.getImageProperties(dataUrl)
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width

      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(filename)
      toast.success('บันทึกไฟล์ PDF สำเร็จ')
    } catch (error) {
      console.error('Export PDF error:', error)
      toast.error('เกิดข้อผิดพลาดขณะ export PDF')
    }
  }

  return React.createElement(
    'button',
    {
      onClick: handleExport,
      className: 'btn btn-primary',
      'aria-label': 'ส่งออกใบรับรองเป็น PDF',
      type: 'button',
    },
    '📄 ส่งออก PDF'
  )
}

export default CertificateExporter
