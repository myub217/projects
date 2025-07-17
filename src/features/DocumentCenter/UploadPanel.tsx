// ✅ src/components/UploadPanel.tsx – Drag & Drop Upload PDF (React Dropzone + DaisyUI)

import { useDropzone } from 'react-dropzone';
import { useDocumentStore } from './useDocumentStore';

const UploadPanel = () => {
  const { addDocument } = useDocumentStore();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const url = URL.createObjectURL(file);
      const doc = {
        id: crypto.randomUUID(),
        name: file.name,
        file,
        url,
        uploadedAt: new Date().toISOString(),
      };
      addDocument(doc);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="p-6 border-2 border-dashed rounded-xl bg-base-200 cursor-pointer hover:bg-base-300 transition text-center"
    >
      <input {...getInputProps()} />
      <p className="text-sm text-muted-content">
        📤 ลากและวางไฟล์ PDF ที่นี่ หรือคลิกเพื่ออัปโหลด
      </p>
    </div>
  );
};

export default UploadPanel;