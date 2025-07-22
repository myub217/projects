// src/components/SecretRoom/FileUpload.tsx

import React, { useState } from 'react'

interface FileUploadProps {
  onFileSelect: (file: File) => void
  accept?: string
  multiple?: boolean
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, accept = '*', multiple = false }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files)
      setSelectedFiles(filesArray)
      // If multiple, you may want to pass all files, here passing first only for compatibility
      onFileSelect(filesArray[0])
    }
  }

  return (
    <section
      aria-label="อัปโหลดเอกสาร"
      className="p-4 bg-base-200 rounded-lg shadow-md max-w-md mx-auto"
    >
      <label
        htmlFor="fileUpload"
        className="block mb-2 font-semibold text-base-content cursor-pointer hover:text-primary transition-colors"
      >
        เลือกไฟล์เอกสาร (PDF, DOCX, JPG, PNG ฯลฯ)
      </label>
      <input
        id="fileUpload"
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full"
        aria-describedby="fileHelp"
      />
      <p id="fileHelp" className="mt-2 text-sm text-base-content/70 truncate">
        {selectedFiles.length > 0
          ? `ไฟล์ที่เลือก: ${selectedFiles.map(f => f.name).join(', ')}`
          : 'ยังไม่ได้เลือกไฟล์'}
      </p>
    </section>
  )
}

export default FileUpload