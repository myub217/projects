// src/pages/Documents/BusinessDocumentRequest.tsx
import React from 'react'
import { BusinessDocumentRequests, BusinessDocumentRequest } from '@config/BusinessConfigDocumentRequest'

const BusinessDocumentRequestPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">คำขอเอกสารธุรกิจ</h1>
      <div className="space-y-8">
        {BusinessDocumentRequests.map((doc: BusinessDocumentRequest) => (
          <section
            key={doc.id}
            className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
            <p className="mb-4 text-gray-700">{doc.description}</p>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">เอกสารที่ต้องเตรียม</h3>
              <ul className="list-disc list-inside text-gray-600">
                {doc.requiredDocuments.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4 flex flex-wrap gap-4 text-sm text-gray-600">
              <div>ระยะเวลาประมวลผล: <span className="font-medium">{doc.processingTimeDays} วันทำการ</span></div>
              <div>ค่าธรรมเนียม: <span className="font-medium">{doc.feeTHB.toLocaleString()} บาท</span></div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">ติดต่อสอบถาม</h3>
              <p>อีเมล: <a href={`mailto:${doc.contactEmail}`} className="text-blue-600 underline">{doc.contactEmail}</a></p>
              <p>โทร: <a href={`tel:${doc.contactPhone}`} className="text-blue-600 underline">{doc.contactPhone}</a></p>
            </div>

            {doc.relatedLinks && doc.relatedLinks.length > 0 && (
              <div>
                <h3 className="font-semibold mb-1">ลิงก์ที่เกี่ยวข้อง</h3>
                <ul className="list-disc list-inside text-blue-600">
                  {doc.relatedLinks.map((link, idx) => (
                    <li key={idx}>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

export default BusinessDocumentRequestPage