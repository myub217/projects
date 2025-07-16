// src/components/CustomerAssessmentForm.tsx

import React, { useState } from 'react';

interface FormData {
  fullName: string;
  phone: string;
  occupation: string;
  income: string;
  collateralAssets: string;
  businessManagement: string;
  requestedAmount: string;
  legalIssues: string;
  creditIssues: string;
  teamRequirements: string;
}

const CustomerAssessmentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    occupation: '',
    income: '',
    collateralAssets: '',
    businessManagement: '',
    requestedAmount: '',
    legalIssues: '',
    creditIssues: '',
    teamRequirements: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  // Validate input fields
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'กรุณากรอกชื่อ-นามสกุล';
    if (!formData.phone.trim()) newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์';
    else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim()))
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง';
    if (!formData.occupation.trim()) newErrors.occupation = 'กรุณาระบุอาชีพ';
    if (!formData.income.trim()) newErrors.income = 'กรุณาระบุรายได้โดยประมาณ';
    if (!formData.collateralAssets.trim())
      newErrors.collateralAssets = 'กรุณาระบุสินทรัพย์ค้ำประกันหรือจำนอง';
    if (!formData.businessManagement.trim())
      newErrors.businessManagement = 'กรุณาระบุสถานะการบริหารธุรกิจหรือการทำงาน';
    if (!formData.requestedAmount.trim()) newErrors.requestedAmount = 'กรุณาระบุยอดเงินที่ต้องการ';
    if (!formData.legalIssues.trim())
      newErrors.legalIssues = 'กรุณาระบุประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา';
    if (!formData.creditIssues.trim())
      newErrors.creditIssues = 'กรุณาระบุปัญหาบูโรหรือ blacklist หากมี';
    if (!formData.teamRequirements.trim())
      newErrors.teamRequirements = 'กรุณาระบุสิ่งที่ต้องการจากทีมงานเรา';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change and clear errors on change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Reset form state to initial
  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      occupation: '',
      income: '',
      collateralAssets: '',
      businessManagement: '',
      requestedAmount: '',
      legalIssues: '',
      creditIssues: '',
      teamRequirements: '',
    });
    setErrors({});
    setSubmitted(false);
  };

  // On submit: validate & open LINE with pre-filled message (user must tap send)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `
ชื่อ-นามสกุล: ${formData.fullName}
เบอร์โทรศัพท์: ${formData.phone}
ประกอบอาชีพ: ${formData.occupation}
รายได้โดยประมาณ: ${formData.income}

สินทรัพย์ค้ำประกัน / จำนอง:
${formData.collateralAssets}

สถานะบริหารธุรกิจ/การทำงาน:
${formData.businessManagement}

ยอดเงินที่ต้องการ: ${formData.requestedAmount}

ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา:
${formData.legalIssues}

ปัญหาบูโรหรือ blacklist:
${formData.creditIssues}

สิ่งที่ต้องการจากทีมงาน:
${formData.teamRequirements}
`.trim();

    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;

    window.open(lineUrl, '_blank');

    setSubmitted(true);
  };

  // Input & Textarea reusable components
  const InputField = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    placeholder,
    required = false,
    helpText,
  }: {
    label: string;
    name: keyof FormData;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    helpText?: string;
  }) => (
    <div className="mb-5">
      <label htmlFor={name} className="mb-1 block font-medium text-gray-700">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `error-${name}` : undefined}
        className={`w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
        }`}
      />
      {helpText && <p className="mt-1 text-xs text-gray-500">{helpText}</p>}
      {error && (
        <p id={`error-${name}`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );

  const TextareaField = ({
    label,
    name,
    value,
    onChange,
    error,
    placeholder,
    required = false,
    rows = 3,
  }: {
    label: string;
    name: keyof FormData;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    placeholder?: string;
    required?: boolean;
    rows?: number;
  }) => (
    <div className="mb-5">
      <label htmlFor={name} className="mb-1 block font-medium text-gray-700">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `error-${name}` : undefined}
        className={`w-full resize-y rounded border px-4 py-2 focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-blue-400'
        }`}
      />
      {error && (
        <p id={`error-${name}`} className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );

  if (submitted) {
    return (
      <div
        className="mx-auto max-w-3xl rounded-lg border border-green-300 bg-green-50 p-8 text-center text-green-900 shadow"
        role="alert"
        aria-live="polite"
      >
        <h3 className="mb-4 text-2xl font-semibold">ขอบคุณสำหรับการส่งข้อมูลค่ะ</h3>
        <p className="mb-2">ระบบได้เปิดแอป LINE เพื่อให้คุณส่งข้อความเรียบร้อยแล้ว</p>
        <button
          onClick={handleReset}
          className="mt-6 rounded bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="ส่งข้อมูลใหม่"
        >
          ส่งข้อมูลใหม่
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl rounded-lg bg-white p-8 shadow-md"
      noValidate
      aria-label="แบบฟอร์มประเมินเบื้องต้นสำหรับลูกค้ายื่นกู้"
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
        แบบฟอร์มประเมินเบื้องต้นสำหรับลูกค้ายื่นกู้
      </h2>

      {/* Personal Information */}
      <fieldset className="mb-8 rounded-lg border border-gray-200 p-6">
        <legend className="mb-4 text-xl font-semibold">ข้อมูลส่วนตัว</legend>
        <InputField
          label="ชื่อ-นามสกุล"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={errors.fullName}
          required
          placeholder="กรอกชื่อ-นามสกุล"
        />
        <InputField
          label="เบอร์โทรศัพท์"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="0812345678"
          helpText="กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง เช่น 0812345678"
        />
        <InputField
          label="ประกอบอาชีพ"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          error={errors.occupation}
          required
          placeholder="ระบุอาชีพของท่าน"
        />
        <InputField
          label="รายได้โดยประมาณ"
          name="income"
          value={formData.income}
          onChange={handleChange}
          error={errors.income}
          required
          placeholder="เช่น 30,000 บาท/เดือน"
        />
      </fieldset>

      {/* Business & Finance */}
      <fieldset className="mb-8 rounded-lg border border-gray-200 p-6">
        <legend className="mb-4 text-xl font-semibold">ข้อมูลธุรกิจ/การเงิน</legend>
        <TextareaField
          label="สินทรัพย์ค้ำประกัน / จำนอง"
          name="collateralAssets"
          value={formData.collateralAssets}
          onChange={handleChange}
          error={errors.collateralAssets}
          required
          placeholder="ระบุสินทรัพย์ที่ใช้ค้ำประกันหรือจำนอง"
          rows={3}
        />
        <TextareaField
          label="บริหารธุรกิจหรือทำงานอยู่หรือไม่"
          name="businessManagement"
          value={formData.businessManagement}
          onChange={handleChange}
          error={errors.businessManagement}
          required
          placeholder="ระบุสถานะการบริหารธุรกิจหรือการทำงานปัจจุบัน"
          rows={2}
        />
        <InputField
          label="ยอดเงินที่ต้องการ"
          name="requestedAmount"
          value={formData.requestedAmount}
          onChange={handleChange}
          error={errors.requestedAmount}
          required
          placeholder="ระบุยอดเงินที่ต้องการขออนุมัติ"
        />
      </fieldset>

      {/* Legal History & Requests */}
      <fieldset className="mb-8 rounded-lg border border-gray-200 p-6">
        <legend className="mb-4 text-xl font-semibold">ประวัติและความต้องการ</legend>
        <TextareaField
          label="ประวัติการฟ้องร้องทางแพ่งและอาญาใน 3 ปีที่ผ่านมา"
          name="legalIssues"
          value={formData.legalIssues}
          onChange={handleChange}
          error={errors.legalIssues}
          required
          placeholder="ถ้ามี โปรดระบุรายละเอียด หากไม่มีให้ใส่คำว่า 'ไม่มี'"
          rows={3}
        />
        <TextareaField
          label="ปัญหาบูโรหรือ blacklist หากมี"
          name="creditIssues"
          value={formData.creditIssues}
          onChange={handleChange}
          error={errors.creditIssues}
          required
          placeholder="ถ้ามี โปรดระบุรายละเอียด หากไม่มีให้ใส่คำว่า 'ไม่มี'"
          rows={3}
        />
        <TextareaField
          label="สิ่งที่ต้องการจากทีมงานเรา"
          name="teamRequirements"
          value={formData.teamRequirements}
          onChange={handleChange}
          error={errors.teamRequirements}
          required
          placeholder="ระบุสิ่งที่ต้องการให้ทีมงานช่วยเหลือ"
          rows={3}
        />
      </fieldset>

      <button
        type="submit"
        className="flex w-full items-center justify-center rounded bg-blue-600 py-3 text-white shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-live="polite"
      >
        ส่งข้อมูลประเมิน
      </button>
    </form>
  );
};

export default CustomerAssessmentForm;