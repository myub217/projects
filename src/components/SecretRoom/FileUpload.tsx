// src/components/SecretRoom/FileUpload.tsx
// Accessible file upload component with preview, flexible accept/multiple props, clear UX

import React, { useState } from 'react'

interface FileUploadProps {
  onFileSelect: (files: File[] | File | null) => void
  accept?: string
  multiple?: boolean
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept = '*/*',
  multiple = false,
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) {
      setSelectedFiles([])
      onFileSelect(null)
      return
    }
    const filesArray = Array.from(files)
    setSelectedFiles(filesArray)
    onFileSelect(multiple ? filesArray : filesArray[0])
  }

  return (
    <section
      aria-label="อัปโหลดเอกสาร"
      className="p-4 bg-base-200 rounded-lg shadow-md max-w-md mx-auto"
    >
      <label
        htmlFor="fileUpload"
        className="block mb-2 font-semibold text-base-content cursor-pointer hover:text-primary transition-colors select-none"
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
        aria-multiselectable={multiple}
      />

      <p
        id="fileHelp"
        className="mt-2 text-sm text-base-content/70 truncate select-text"
        aria-live="polite"
        aria-atomic="true"
      >
        {selectedFiles.length > 0
          ? `ไฟล์ที่เลือก: ${selectedFiles.map((f) => f.name).join(', ')}`
          : 'ยังไม่ได้เลือกไฟล์'}
      </p>
    </section>
  )
}

export default FileUpload