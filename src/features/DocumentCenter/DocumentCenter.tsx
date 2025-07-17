// ✅ src/pages/DocumentCenter.tsx – หน้า Document Center พร้อม UI สำหรับอัปโหลด/ดู PDF

import React from 'react';
import UploadPanel from './UploadPanel';
import DocumentGrid from './DocumentGrid';

const DocumentCenter: React.FC = () => {
  return (
    <section className="min-h-screen bg-base-100 text-base-content px-4 py-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <header className="text-center">
          <h1 className="text-3xl font-bold text-primary">📄 Document Center</h1>
          <p className="text-sm text-muted-content">ศูนย์รวมเอกสาร PDF สำหรับการเข้าถึงและจัดการไฟล์</p>
        </header>

        <UploadPanel />

        <div>
          <h2 className="text-xl font-semibold mb-2 text-secondary">📚 เอกสารที่อัปโหลด</h2>
          <DocumentGrid />
        </div>
      </div>
    </section>
  );
};

export default DocumentCenter;