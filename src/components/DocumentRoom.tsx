// src/components/DocumentRoom.tsx

import React, { useState } from 'react';
import { FiDownload, FiEye, FiSearch } from 'react-icons/fi';

interface DocumentItem {
  id: string;
  title: string;
  fileUrl: string;
  description?: string;
  tags?: string[];
}

const documents: DocumentItem[] = [
  {
    id: 'certificate',
    title: 'หนังสือรับรองบริษัท',
    fileUrl: '/docs/certificate.pdf',
    description: 'เอกสารยืนยันการจดทะเบียนบริษัทจากกรมพัฒนาธุรกิจการค้า',
    tags: ['ทะเบียน', 'บริษัท', 'รับรอง'],
  },
  {
    id: 'registration',
    title: 'รายการจดทะเบียนบริษัท',
    fileUrl: '/docs/registration.pdf',
    description: 'รายละเอียดกรรมการและวัตถุประสงค์ของบริษัท',
    tags: ['จดทะเบียน', 'กรรมการ'],
  },
  {
    id: 'contract',
    title: 'สัญญาว่าจ้างงาน',
    fileUrl: '/docs/contract.pdf',
    description: 'ตัวอย่างสัญญาว่าจ้างที่ใช้กับลูกค้าองค์กร',
    tags: ['สัญญา', 'ลูกค้า', 'บริการ'],
  },
];

const DocumentRoom: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = documents.filter((doc) => {
    const keyword = search.toLowerCase();
    return (
      doc.title.toLowerCase().includes(keyword) ||
      doc.description?.toLowerCase().includes(keyword) ||
      doc.tags?.some((tag) => tag.toLowerCase().includes(keyword))
    );
  });

  return (
    <section className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      {/* 🔍 Search Input */}
      <div className="flex items-center gap-3">
        <FiSearch className="w-5 h-5 text-base-content/60" />
        <input
          type="text"
          placeholder="ค้นหาเอกสาร เช่น สัญญา หรือ ทะเบียน"
          className="input input-bordered w-full max-w-2xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 📄 Document List */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((doc) => (
            <article
              key={doc.id}
              className="card bg-base-100 shadow-lg transition hover:shadow-xl border border-base-200 dark:border-base-300 rounded-xl p-6 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-base-content">{doc.title}</h2>
                {doc.description && (
                  <p className="text-sm text-base-content/70">{doc.description}</p>
                )}
                {doc.tags && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {doc.tags.map((tag) => (
                      <span key={tag} className="badge badge-outline text-xs">{tag}</span>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary flex-1"
                  title="ดูเอกสาร"
                >
                  <FiEye className="mr-1" />
                  ดู
                </a>
                <a
                  href={doc.fileUrl}
                  download
                  className="btn btn-sm btn-outline flex-1"
                  title="ดาวน์โหลดเอกสาร"
                >
                  <FiDownload className="mr-1" />
                  ดาวน์โหลด
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-base-content/60">ไม่พบเอกสารที่ตรงกับคำค้นหา</p>
      )}
    </section>
  );
};

export default DocumentRoom;