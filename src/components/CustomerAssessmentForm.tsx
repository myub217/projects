// src/components/CustomerAssessmentForm.tsx

import React, { useState } from 'react'

interface FormData {
  fullName: string
  phone: string
  occupation: string
  income: string
  collateralAssets: string
  businessManagement: string
  requestedAmount: string
  legalIssues: string
  creditIssues: string
  teamRequirements: string
}

const initialFormData: FormData = {
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
}

const CustomerAssessmentForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.fullName.trim()) newErrors.fullName = 'กรุณากรอกชื่อ-นามสกุล'
    if (!formData.phone.trim()) newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์'
    else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim()))
      newErrors.phone = 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง'
    if (!formData.occupation.trim()) newErrors.occupation = 'กรุณาระบุอาชีพ'
    if (!formData.income.trim()) newErrors.income = 'กรุณาระบุรายได้โดยประมาณ'
    if (!formData.collateralAssets.trim())
      newErrors.collateralAssets = 'กรุณาระบุสินทรัพย์ค้ำประกันหรือจำนอง'
    if (!formData.businessManagement.trim())
      newErrors.businessManagement = 'กรุณาระบุสถานะการบริหารธุรกิจหรือการทำงาน'
    if (!formData.requestedAmount.trim()) newErrors.requestedAmount = 'กรุณาระบุยอดเงินที่ต้องการ'
    if (!formData.legalIssues.trim())
      newErrors.legalIssues = 'กรุณาระบุประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา'
    if (!formData.creditIssues.trim())
      newErrors.creditIssues = 'กรุณาระบุปัญหาบูโรหรือ blacklist หากมี'
    if (!formData.teamRequirements.trim())
      newErrors.teamRequirements = 'กรุณาระบุสิ่งที่ต้องการจากทีมงานเรา'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleReset = () => {
    setFormData(initialFormData)
    setErrors({})
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

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
`.trim()

    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`
    window.open(lineUrl, '_blank')
    setSubmitted(true)
  }

  const FieldGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">{children}</div>
  )

  const InputField: React.FC<{
    label: string
    name: keyof FormData
    type?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string
    placeholder?: string
    required?: boolean
    helpText?: string
  }> = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    placeholder,
    required = false,
    helpText,
  }) => (
    <div>
      <label htmlFor={name} className="block font-semibold text-sm mb-1">
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
        className={`w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${
          error ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-400'
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {helpText && <p className="text-xs text-gray-500 mt-1">{helpText}</p>}
      {error && (
        <p className="text-xs text-red-600 mt-1" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  )

  const TextareaField: React.FC<{
    label: string
    name: keyof FormData
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    error?: string
    placeholder?: string
    required?: boolean
    rows?: number
  }> = ({
    label,
    name,
    value,
    onChange,
    error,
    placeholder,
    required = false,
    rows = 3,
  }) => (
    <div className="mb-5">
      <label htmlFor={name} className="block font-semibold text-sm mb-1">
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
        className={`w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition-all duration-200 resize-y ${
          error ? 'border-red-500 ring-red-300' : 'border-gray-300 focus:ring-blue-400'
        }`}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p className="text-xs text-red-600 mt-1" id={`${name}-error`}>
          {error}
        </p>
      )}
    </div>
  )

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl p-6 rounded-lg bg-green-50 border border-green-200 text-green-800 text-center">
        <h2 className="text-2xl font-bold mb-3">ส่งข้อมูลสำเร็จ</h2>
        <p>ระบบได้เปิดแอป LINE แล้ว กรุณาตรวจสอบข้อความก่อนกดส่ง</p>
        <button
          onClick={handleReset}
          className="mt-5 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="button"
        >
          ส่งใหม่อีกครั้ง
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl bg-white p-6 sm:p-10 rounded-xl shadow-lg"
      noValidate
      aria-live="polite"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">ฟอร์มประเมินลูกค้าเบื้องต้น</h1>

      <fieldset className="mb-8" aria-describedby="personal-info-desc">
        <legend className="text-lg font-semibold mb-4">ข้อมูลส่วนตัว</legend>
        <p id="personal-info-desc" className="sr-only">
          กรุณากรอกข้อมูลส่วนตัวให้ครบถ้วน
        </p>
        <FieldGroup>
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
            helpText="กรุณากรอกเบอร์ให้ถูกต้อง"
          />
          <InputField
            label="อาชีพ"
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
            placeholder="30,000 บาท/เดือน"
          />
        </FieldGroup>
      </fieldset>

      <fieldset className="mb-8" aria-describedby="business-finance-desc">
        <legend className="text-lg font-semibold mb-4">ธุรกิจ / การเงิน</legend>
        <p id="business-finance-desc" className="sr-only">
          กรุณากรอกข้อมูลเกี่ยวกับธุรกิจและการเงิน
        </p>
        <TextareaField
          label="สินทรัพย์ค้ำประกัน / จำนอง"
          name="collateralAssets"
          value={formData.collateralAssets}
          onChange={handleChange}
          error={errors.collateralAssets}
          required
          placeholder="บ้าน / รถ / ที่ดิน ฯลฯ"
        />
        <TextareaField
          label="บริหารธุรกิจ/ทำงานอยู่หรือไม่"
          name="businessManagement"
          value={formData.businessManagement}
          onChange={handleChange}
          error={errors.businessManagement}
          required
          placeholder="อธิบายสถานะของคุณ"
        />
        <InputField
          label="ยอดเงินที่ต้องการ"
          name="requestedAmount"
          value={formData.requestedAmount}
          onChange={handleChange}
          error={errors.requestedAmount}
          required
          placeholder="100,000 บาท"
        />
      </fieldset>

      <fieldset className="mb-8" aria-describedby="history-needs-desc">
        <legend className="text-lg font-semibold mb-4">ประวัติและความต้องการ</legend>
        <p id="history-needs-desc" className="sr-only">
          กรุณาระบุประวัติและความต้องการของท่าน
        </p>
        <TextareaField
          label="ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา"
          name="legalIssues"
          value={formData.legalIssues}
          onChange={handleChange}
          error={errors.legalIssues}
          required
          placeholder="ใส่ 'ไม่มี' หากไม่มี"
          rows={4}
        />
        <TextareaField
          label="ปัญหาบูโรหรือ blacklist"
          name="creditIssues"
          value={formData.creditIssues}
          onChange={handleChange}
          error={errors.creditIssues}
          required
          placeholder="ใส่ 'ไม่มี' หากไม่มี"
          rows={4}
        />
        <TextareaField
          label="สิ่งที่ต้องการจากทีมงาน"
          name="teamRequirements"
          value={formData.teamRequirements}
          onChange={handleChange}
          error={errors.teamRequirements}
          required
          placeholder="ต้องการให้ทีมงานช่วยอะไรบ้าง"
          rows={4}
        />
      </fieldset>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        aria-label="ส่งข้อมูลประเมิน"
      >
        ส่งข้อมูลประเมิน
      </button>
    </form>
  )
}

export default CustomerAssessmentForm