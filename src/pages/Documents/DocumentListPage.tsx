// ✅ src/pages/Documents/DocumentListPage.tsx – เวอร์ชันสมบูรณ์ Responsive พร้อมใช้งานจริง

import React from 'react';
import { Link } from 'react-router-dom';
import { documentsList } from '@data/documentsList';

type DocumentItem = {
  id: string;
  title: string;
  description?: string;
  url: string;
  uploadedAt: string;
};

const DocumentListPage: React.FC = () => {
  const docs: DocumentItem[] = documentsList;

  return (
    <main className="min-h-screen bg-base-100 text-base-content px-4 py-8 md:py-12 max-w-7xl mx-auto">
      {/* 🔺 Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          📄 รายการเอกสารทั้งหมด
        </h1>
        <Link
          to="/documents/new"
          className="btn btn-primary btn-outline self-end md:self-auto"
        >
          ➕ เพิ่มเอกสารใหม่
        </Link>
      </div>

      {/* 📑 List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs && docs.length > 0 ? (
          docs.map((doc) => (
            <div
              key={doc.id}
              className="card bg-base-200 shadow-lg p-5 rounded-xl transition-transform hover:scale-[1.01]"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-lg md:text-xl font-semibold text-primary">
                  {doc.title}
                </h2>
                {doc.description && (
                  <p className="text-sm text-base-content/70">{doc.description}</p>
                )}
                <p className="text-xs text-muted">
                  📅 อัปโหลด: {doc.uploadedAt}
                </p>
                <div className="flex flex-wrap gap-2 pt-3">
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline"
                  >
                    👁️‍🗨️ ดูเอกสาร
                  </a>
                  <a href={doc.url} download className="btn btn-sm btn-primary">
                    ⬇️ ดาวน์โหลด
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-error text-lg">
            ❌ ไม่มีรายการเอกสาร
          </div>
        )}
      </div>
    </main>
  );
};

export default DocumentListPage;