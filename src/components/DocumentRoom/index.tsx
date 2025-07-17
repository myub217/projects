// src/components/DocumentRoom/index.tsx

import React from 'react';
import { documentsList } from '@data/documentsList';
import DocumentCard from './DocumentCard';

const DocumentRoom: React.FC = () => {
  if (!documentsList || documentsList.length === 0) {
    return (
      <div className="text-center text-sm text-muted-content py-10">
        📂 ยังไม่มีเอกสารในระบบ
      </div>
    );
  }

  return (
    <section
      aria-label="รายการเอกสารพร้อมดาวน์โหลด"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {documentsList.map((doc) => (
        <DocumentCard
          key={doc.id}
          {...doc}
        />
      ))}
    </section>
  );
};

export default DocumentRoom;