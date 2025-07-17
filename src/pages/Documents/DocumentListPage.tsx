// src/pages/Documents/DocumentListPage.tsx
import React from 'react';
import { documentsList, DocumentItem } from '@data/documentsList';

const DocumentCard: React.FC<{ doc: DocumentItem }> = ({ doc }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-lg font-semibold mb-1">{doc.title}</h3>
      <p className="text-sm text-muted mb-2">{doc.description}</p>
      <p className="text-xs text-gray-500 mb-2">
        หมวดหมู่: {doc.category || '-'} | ผู้จัดทำ: {doc.author || '-'}
      </p>
      <p className="text-xs text-gray-400 mb-4">
        อัปเดตล่าสุด: {doc.updatedAt ? new Date(doc.updatedAt).toLocaleDateString() : '-'}
      </p>
      <a
        href={doc.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        ดาวน์โหลด
      </a>
    </div>
  );
};

const DocumentListPage: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">รายการเอกสารธุรกิจ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {documentsList.map((doc) => (
          <DocumentCard key={doc.id} doc={doc} />
        ))}
      </div>
    </section>
  );
};

export default DocumentListPage;