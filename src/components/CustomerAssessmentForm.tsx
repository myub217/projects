import React, { useState } from "react";

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
    fullName: "",
    phone: "",
    occupation: "",
    income: "",
    collateralAssets: "",
    businessManagement: "",
    requestedAmount: "",
    legalIssues: "",
    creditIssues: "",
    teamRequirements: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Validate input fields
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "กรุณากรอกชื่อ-นามสกุล";
    if (!formData.phone.trim()) newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์";
    else if (!/^[0-9+() -]{7,20}$/.test(formData.phone.trim()))
      newErrors.phone = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง";
    if (!formData.occupation.trim()) newErrors.occupation = "กรุณาระบุอาชีพ";
    if (!formData.income.trim()) newErrors.income = "กรุณาระบุรายได้โดยประมาณ";
    if (!formData.collateralAssets.trim())
      newErrors.collateralAssets = "กรุณาระบุสินทรัพย์ค้ำประกันหรือจำนอง";
    if (!formData.businessManagement.trim())
      newErrors.businessManagement = "กรุณาระบุสถานะการบริหารธุรกิจหรือการทำงาน";
    if (!formData.requestedAmount.trim())
      newErrors.requestedAmount = "กรุณาระบุยอดเงินที่ต้องการ";
    if (!formData.legalIssues.trim())
      newErrors.legalIssues = "กรุณาระบุประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา";
    if (!formData.creditIssues.trim())
      newErrors.creditIssues = "กรุณาระบุปัญหาบูโรหรือ blacklist หากมี";
    if (!formData.teamRequirements.trim())
      newErrors.teamRequirements = "กรุณาระบุสิ่งที่ต้องการจากทีมงานเรา";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change and clear errors on change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Reset form state to initial
  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      occupation: "",
      income: "",
      collateralAssets: "",
      businessManagement: "",
      requestedAmount: "",
      legalIssues: "",
      creditIssues: "",
      teamRequirements: "",
    });
    setErrors({});
    setSubmitError(null);
    setSubmitted(false);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) return;

    setSubmitting(true);

    try {
      // *** กำหนด URL API ของคุณที่นี่ ***
      const API_ENDPOINT = "https://your-api-endpoint.example.com/submit-form";

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`เกิดข้อผิดพลาด: ${response.statusText}`);

      setSubmitted(true);
    } catch (error: any) {
      setSubmitError(error.message || "เกิดข้อผิดพลาดไม่ทราบสาเหตุ");
    } finally {
      setSubmitting(false);
    }
  };

  // Reusable input component
  const InputField = ({
    label,
    name,
    type = "text",
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
      <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
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
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
        }`}
      />
      {helpText && (
        <p className="mt-1 text-xs text-gray-500">{helpText}</p>
      )}
      {error && (
        <p id={`error-${name}`} className="mt-1 text-red-600 text-sm">
          {error}
        </p>
      )}
    </div>
  );

  // Reusable textarea component
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
      <label htmlFor={name} className="block mb-1 font-medium text-gray-700">
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
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 resize-y ${
          error ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
        }`}
      />
      {error && (
        <p id={`error-${name}`} className="mt-1 text-red-600 text-sm">
          {error}
        </p>
      )}
    </div>
  );

  // UI when form is successfully submitted
  if (submitted) {
    return (
      <div
        className="max-w-3xl mx-auto p-8 bg-green-50 rounded-lg border border-green-300 text-green-900 text-center shadow"
        role="alert"
        aria-live="polite"
      >
        <h3 className="text-2xl font-semibold mb-4">ขอบคุณสำหรับการส่งข้อมูลค่ะ</h3>
        <p className="mb-2">ทีมงานจะติดต่อกลับโดยเร็วที่สุด</p>
        <p className="text-sm italic text-gray-600 max-w-md mx-auto">
          คุณมั่นใจว่าข้อมูลของคุณจะเป็นความลับ เพราะกฎของเราความลับของลูกค้าคือสิ่งสำคัญ
          <br />
          ผมไม่ใช่คนเก่งแต่ทีมงานผมเก่งแน่นอน
          <br />
          <strong>By. เจ้าป่า</strong>
        </p>
        <button
          onClick={handleReset}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="ส่งข้อมูลใหม่"
        >
          ส่งข้อมูลใหม่
        </button>
      </div>
    );
  }

  // Main form UI
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md"
      noValidate
      aria-label="แบบฟอร์มประเมินเบื้องต้นสำหรับลูกค้ายื่นกู้"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        แบบฟอร์มประเมินเบื้องต้นสำหรับลูกค้ายื่นกู้
      </h2>

      {/* Personal Information */}
      <fieldset className="mb-8 border border-gray-200 rounded-lg p-6">
        <legend className="text-xl font-semibold mb-4">ข้อมูลส่วนตัว</legend>
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
      <fieldset className="mb-8 border border-gray-200 rounded-lg p-6">
        <legend className="text-xl font-semibold mb-4">ข้อมูลธุรกิจ/การเงิน</legend>
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
      <fieldset className="mb-8 border border-gray-200 rounded-lg p-6">
        <legend className="text-xl font-semibold mb-4">ประวัติและความต้องการ</legend>
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

      {submitError && (
        <p
          className="text-red-600 mb-6 text-center font-semibold"
          role="alert"
          aria-live="assertive"
        >
          {submitError}
        </p>
      )}

      <button
        type="submit"
        className={`w-full bg-blue-600 text-white py-3 rounded shadow-md transition-colors flex justify-center items-center ${
          submitting ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        disabled={submitting}
        aria-busy={submitting}
        aria-live="polite"
      >
        {submitting && (
          <svg
            className="animate-spin h-5 w-5 mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {submitting ? "กำลังส่งข้อมูล..." : "ส่งข้อมูลประเมิน"}
      </button>
    </form>
  );
};

export default CustomerAssessmentForm;