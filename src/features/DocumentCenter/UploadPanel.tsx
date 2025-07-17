import { useDropzone } from 'react-dropzone';
import { useDocumentStore } from './useDocumentStore';

const UploadPanel = () => {
  const { addDocument } = useDocumentStore();

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const url = URL.createObjectURL(file);
      addDocument({ name: file.name, file, url });
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
  });

  return (
    <div
      {...getRootProps()}
      className="p-6 border-2 border-dashed rounded-lg bg-base-200 cursor-pointer hover:bg-base-300 transition"
    >
      <input {...getInputProps()} />
      <p className="text-center text-sm text-muted-content">
        📤 ลากและวางไฟล์ PDF ที่นี่ หรือคลิกเพื่ออัปโหลด
      </p>
    </div>
  );
};

export default UploadPanel;