// src/components/DocumentRoom/DocumentForm.tsx

import React, { useState } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
}

const DocumentForm: React.FC = () => {
  const [formData, setFormData] = useState<DocumentMeta>({ title: '', description: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📝 Metadata Submitted:', formData);
    // 🔽 TODO: call upload + save API
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-base-100 p-4 sm:p-6 rounded-xl shadow border border-border mt-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 text-center sm:text-left">
        📝 รายละเอียดเอกสาร
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
        <div>
          <label htmlFor="title" className="label p-0 mb-1 text-sm text-foreground font-semibold">
            ชื่อเอกสาร <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="กรอกชื่อเอกสาร เช่น ใบเสนอราคา Q1/2566"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="label p-0 mb-1 text-sm text-foreground font-semibold">
            คำอธิบายเพิ่มเติม
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            placeholder="ระบุรายละเอียด เช่น หมวดหมู่, ประเภทเอกสาร, ผู้เกี่ยวข้อง ฯลฯ"
            rows={3}
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-2">
          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            💾 บันทึกข้อมูลเอกสาร
          </button>

          {submitted && (
            <div className="text-sm text-success font-medium text-center sm:text-left">
              ✅ ข้อมูลเอกสารถูกบันทึกเรียบร้อย
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default DocumentForm;