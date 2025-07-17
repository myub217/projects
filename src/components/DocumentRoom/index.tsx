// src/components/DocumentRoom/index.tsx

import React from 'react';
import { documentsList } from '@data/documentsList';
import DocumentCard from './DocumentCard';

const DocumentRoom: React.FC = () => {
  const isEmpty = !documentsList || documentsList.length === 0;

  return (
    <div className="w-full bg-base-100 p-4 sm:p-6 rounded-xl shadow-md border border-border">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center sm:text-left">
        📚 เอกสารที่มีอยู่ในระบบ
      </h2>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center text-center text-sm sm:text-base text-muted-content py-10">
          <span className="text-4xl mb-2">📂</span>
          <p>ยังไม่มีเอกสารในระบบ</p>
          <p>กรุณาอัปโหลดไฟล์เพื่อเริ่มต้นใช้งาน</p>
        </div>
      ) : (
        <section
          aria-label="รายการเอกสารพร้อมดาวน์โหลด"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {documentsList.map((doc) => (
            <DocumentCard key={doc.id} {...doc} />
          ))}
        </section>
      )}
    </div>
  );
};

export default DocumentRoom;