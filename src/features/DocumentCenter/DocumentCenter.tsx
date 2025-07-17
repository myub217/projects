import React from 'react';
import UploadPanel from './UploadPanel';
import DocumentGrid from './DocumentGrid';

const DocumentCenter: React.FC = () => {
  return (
    <section className="min-h-screen bg-base-100 text-base-content p-4 space-y-6">
      <h1 className="text-2xl font-bold text-primary">📄 Document Center</h1>
      <UploadPanel />
      <DocumentGrid />
    </section>
  );
};

export default DocumentCenter;