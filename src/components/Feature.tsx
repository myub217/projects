// src/components/Feature.tsx

import React, { useState } from "react";
import CustomerAssessmentForm from "./CustomerAssessmentForm";

// ==============================
// Types
// ==============================
interface CustomerApproval {
  id: string;
  name: string;
  loanAmount: number;
  approvalDate: string;
  status: "อนุมัติแล้ว" | "รอดำเนินการ";
}

// ==============================
// Mock Data
// ==============================
const approvedCustomers: CustomerApproval[] = [
  { id: "loan-001", name: "ศรัณย์ พิทักษ์ชาญชัย", loanAmount: 750_000, approvalDate: "2025-07-09T09:15:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-002", name: "อรินทรา ทองเจริญ", loanAmount: 1_500_000, approvalDate: "2025-07-08T10:45:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-003", name: "ณัฐวัฒน์ ชัยวรรณ", loanAmount: 4_500_000, approvalDate: "2025-07-07T14:20:00+07:00", status: "รอดำเนินการ" },
  { id: "loan-004", name: "ปรียานุช ศรีทอง", loanAmount: 2_380_000, approvalDate: "2025-07-06T11:05:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-005", name: "ธีรภัทร์ เจริญสุข", loanAmount: 3_150_000, approvalDate: "2025-07-05T15:40:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-006", name: "สุนิสา ไชยพงศ์", loanAmount: 1_780_000, approvalDate: "2025-07-04T13:25:00+07:00", status: "รอดำเนินการ" },
  { id: "loan-007", name: "พงศกร วัฒนกิจ", loanAmount: 700_000, approvalDate: "2025-07-03T08:55:00+07:00", status: "อนุมัติแล้ว" },
];

// ==============================
// Utility Functions
// ==============================
const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const formatCurrency = (value: number): string =>
  value.toLocaleString("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

const timeAgo = (iso: string): string => {
  const now = Date.now();
  const past = new Date(iso).getTime();
  const diffMs = now - past;

  if (diffMs < 0) return "เมื่อสักครู่";

  const diffDays = Math.floor(diffMs / 86400000);
  if (diffDays > 0) return `${diffDays} วันก่อน`;

  const diffHours = Math.floor(diffMs / 3600000);
  if (diffHours > 0) return `${diffHours} ชั่วโมงก่อน`;

  const diffMinutes = Math.floor(diffMs / 60000);
  if (diffMinutes > 0) return `${diffMinutes} นาทีที่แล้ว`;

  return "เมื่อสักครู่";
};

// ==============================
// Icons
// ==============================
const CheckIcon: React.FC = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg className="w-5 h-5 text-yellow-600 animate-pulse" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

// ==============================
// Main Component
// ==============================
const Feature: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      id="feature"
      aria-labelledby="feature-heading"
      className="py-20 bg-gradient-to-br from-base-200 to-base-300 dark:from-base-200 dark:to-base-300 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <header className="text-center max-w-xl mx-auto mb-14">
          <h2 id="feature-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white">
            ลูกค้าที่ได้รับการอนุมัติล่าสุด
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            ข้อมูลรายการสินเชื่อคุณภาพระดับพรีเมียม ภายใต้การดูแลอย่างมืออาชีพ
          </p>

          {/* Toggle Form Button */}
          <button
            type="button"
            onClick={() => setShowForm((prev) => !prev)}
            aria-expanded={showForm}
            aria-controls="customer-assessment-form"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {showForm ? "ซ่อนแบบฟอร์มประเมิน" : "แบบฟอร์มประเมินเบื้องต้น"}
            <svg
              className={`w-5 h-5 transition-transform ${showForm ? "rotate-180" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </header>

        {/* Content Section */}
        {showForm ? (
          <div id="customer-assessment-form" tabIndex={-1} aria-live="polite" className="max-w-xl mx-auto">
            <CustomerAssessmentForm />
          </div>
        ) : (
          <div
            className="overflow-x-auto focus:outline-none"
            tabIndex={0}
            aria-label="รายการลูกค้าที่ได้รับการอนุมัติสินเชื่อ"
            aria-live="polite"
          >
            <ul role="list" className="flex gap-6 sm:gap-8 px-1 py-2 min-w-full snap-x snap-mandatory scroll-pl-6 sm:scroll-pl-10">
              {approvedCustomers.map(({ id, name, loanAmount, approvalDate, status }) => (
                <li
                  key={id}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`ลูกค้า ${name}, สถานะ: ${status}, วงเงิน: ${formatCurrency(loanAmount)}`}
                  className="snap-start flex-shrink-0 min-w-[280px] sm:min-w-[320px] max-w-xs p-6 sm:p-7 rounded-3xl
                             bg-white/90 dark:bg-zinc-800/80 backdrop-blur-md shadow-2xl border border-zinc-200 dark:border-zinc-700
                             ring-1 ring-zinc-100 dark:ring-white/10 hover:ring-amber-400/50
                             hover:shadow-[0_0_12px_rgba(251,191,36,0.4)] transition-all duration-300
                             focus:ring-2 focus:ring-amber-400 focus:outline-none"
                >
                  <article className="flex flex-col gap-3 text-black dark:text-white">
                    <h3 className="text-lg font-semibold truncate" title={name}>
                      {name}
                    </h3>

                    <p className="text-sm text-black/80 dark:text-white/80">
                      วันที่อนุมัติ:{" "}
                      <time dateTime={approvalDate} title={formatDate(approvalDate)}>
                        {formatDate(approvalDate)} ({timeAgo(approvalDate)})
                      </time>
                    </p>

                    <p className="text-base">
                      วงเงิน: <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                    </p>

                    <span
                      role="status"
                      aria-label={`สถานะ: ${status}`}
                      className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full font-medium text-xs uppercase ${
                        status === "อนุมัติแล้ว"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {status === "อนุมัติแล้ว" ? <CheckIcon /> : <ClockIcon />}
                      <span>{status}</span>
                    </span>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature;