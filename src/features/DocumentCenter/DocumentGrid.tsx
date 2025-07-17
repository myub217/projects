// ✅ src/features/documents/DocumentGrid.tsx – ใช้งานร่วมกับ Zustand Store + Responsive

import React from 'react';
import { useDocumentStore } from './useDocumentStore';
import DocumentItem from './DocumentItem';

const DocumentGrid: React.FC = () => {
  const { documents } = useDocumentStore();

  if (!documents || documents.length === 0) {
    return (
      <div className="col-span-full text-center py-12 text-error text-lg">
        ❌ ไม่มีรายการเอกสาร
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {documents.map((doc) => (
        <DocumentItem key={doc.id || doc.url} doc={doc} />
      ))}
    </div>
  );
};

export default DocumentGrid;