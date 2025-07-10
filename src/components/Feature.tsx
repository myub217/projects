// src/components/Feature.tsx

import React from "react";

// ✅ ประเภทลูกค้าระดับ Premium
interface CustomerApproval {
  id: string;
  name: string;
  loanAmount: number;
  approvalDate: string;
  status: "อนุมัติแล้ว" | "รอดำเนินการ";
}

const approvedCustomers: CustomerApproval[] = [
  { id: "loan-001", name: "ศรัณย์ พิทักษ์ชาญชัย", loanAmount: 750_000, approvalDate: "2025-07-09T09:15:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-002", name: "อรินทรา ทองเจริญ", loanAmount: 1_500_000, approvalDate: "2025-07-08T10:45:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-003", name: "ณัฐวัฒน์ ชัยวรรณ", loanAmount: 4_500_000, approvalDate: "2025-07-07T14:20:00+07:00", status: "รอดำเนินการ" },
  { id: "loan-004", name: "ปรียานุช ศรีทอง", loanAmount: 2_380_000, approvalDate: "2025-07-06T11:05:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-005", name: "ธีรภัทร์ เจริญสุข", loanAmount: 3_150_000, approvalDate: "2025-07-05T15:40:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-006", name: "สุนิสา ไชยพงศ์", loanAmount: 1_780_000, approvalDate: "2025-07-04T13:25:00+07:00", status: "รอดำเนินการ" },
  { id: "loan-007", name: "พงศกร วัฒนกิจ", loanAmount: 700_000, approvalDate: "2025-07-03T08:55:00+07:00", status: "อนุมัติแล้ว" },
];

// ✅ Utility ฟอร์แมตวันที่ & เงิน
const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const formatCurrency = (value: number) =>
  value.toLocaleString("th-TH", { style: "currency", currency: "THB" });

// ✅ Icon สำหรับสถานะ
const CheckIcon = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5 text-emerald-500"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5 text-yellow-600 animate-pulse"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

// ✅ แสดงเวลาแบบ relative เช่น "2 ชั่วโมงก่อน"
const timeAgo = (iso: string) => {
  const now = new Date();
  const past = new Date(iso);
  const diffMs = now.getTime() - past.getTime();
  if (diffMs < 0) return "เมื่อสักครู่";

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffDays > 0) return `${diffDays} วันก่อน`;
  if (diffHours > 0) return `${diffHours} ชั่วโมงก่อน`;
  if (diffMinutes > 0) return `${diffMinutes} นาทีที่แล้ว`;
  return "เมื่อสักครู่";
};

// ✅ Main Feature Component
const Feature: React.FC = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-base-200 to-base-300 dark:from-base-200 dark:to-base-300 transition-colors duration-300"
      aria-labelledby="features-section-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Heading */}
        <div className="text-center mb-14 max-w-xl mx-auto">
          <h2
            id="features-section-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-black dark:text-white"
          >
            ลูกค้าที่ได้รับการอนุมัติล่าสุด
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
            ข้อมูลรายการสินเชื่อคุณภาพระดับพรีเมียม ภายใต้การดูแลอย่างมืออาชีพ
          </p>
        </div>

        {/* Horizontal Scrollable List */}
        <div
          className="overflow-x-auto"
          tabIndex={0}
          aria-label="รายการลูกค้าที่ได้รับการอนุมัติสินเชื่อ"
          aria-live="polite"
        >
          <ul
            className="flex gap-6 sm:gap-8 px-1 py-2 min-w-full snap-x snap-mandatory scroll-pl-6 sm:scroll-pl-10"
            role="list"
          >
            {approvedCustomers.map(({ id, name, loanAmount, approvalDate, status }) => (
              <li
                key={id}
                tabIndex={0}
                role="listitem"
                aria-label={`ลูกค้า ${name}, สถานะ: ${status}, วงเงิน: ${formatCurrency(loanAmount)}`}
                className="snap-start flex-shrink-0 min-w-[280px] sm:min-w-[320px] max-w-xs p-6 sm:p-7 rounded-3xl backdrop-blur-md
                           bg-white/90 dark:bg-zinc-800/80 shadow-2xl border border-zinc-200 dark:border-zinc-700
                           ring-1 ring-zinc-100 dark:ring-white/10 hover:ring-amber-400/50
                           hover:shadow-[0_0_12px_rgba(251,191,36,0.4)]
                           transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <div className="flex flex-col gap-3 text-black dark:text-white">
                  <h3 className="text-lg font-bold truncate" title={name}>
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
                    className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full font-medium text-xs uppercase ${
                      status === "อนุมัติแล้ว"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                    role="status"
                    aria-label={`สถานะ: ${status}`}
                  >
                    {status === "อนุมัติแล้ว" ? <CheckIcon /> : <ClockIcon />}
                    <span>{status}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feature;