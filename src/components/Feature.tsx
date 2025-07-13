import React, { useState, useMemo } from "react";
import CustomerAssessmentForm from "./CustomerAssessmentForm";

// Types
interface CustomerApproval {
  id: string;
  name: string;
  loanAmount: number;
  approvalDate: string;
  status: "อนุมัติแล้ว" | "รอดำเนินการ";
}

// Mock Data
const approvedCustomers: CustomerApproval[] = [
  { id: "loan-001", name: "ศรัณย์ พิทักษ์ชาญชัย", loanAmount: 750_000, approvalDate: "2025-07-09T09:15:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-002", name: "อรินทรา ทองเจริญ", loanAmount: 1_500_000, approvalDate: "2025-07-08T10:45:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-003", name: "ณัฐวัฒน์ ชัยวรรณ", loanAmount: 4_500_000, approvalDate: "2025-07-07T14:20:00+07:00", status: "รอดำเนินการ" },
  { id: "loan-004", name: "ปรียานุช ศรีทอง", loanAmount: 2_380_000, approvalDate: "2025-07-06T11:05:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-005", name: "ธีรภัทร์ เจริญสุข", loanAmount: 3_150_000, approvalDate: "2025-07-05T15:40:00+07:00", status: "อนุมัติแล้ว" },
  { id: "loan-006", name: "สุนิสา ไชยพงศ์", loanAmount: 1_780_000, approvalDate: "2025-07-04T13:25:00+07:00", status: "รอดำเนินการ" },
  { id: "loan-007", name: "พงศกร วัฒนกิจ", loanAmount: 700_000, approvalDate: "2025-07-03T08:55:00+07:00", status: "อนุมัติแล้ว" },
];

// Utility
const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("th-TH", { year: "numeric", month: "short", day: "numeric" });

const formatCurrency = (value: number): string =>
  value.toLocaleString("th-TH", { style: "currency", currency: "THB", minimumFractionDigits: 0 });

const timeAgo = (iso: string): string => {
  const now = Date.now();
  const past = new Date(iso).getTime();
  const diff = now - past;
  if (diff < 0) return "เมื่อสักครู่";
  const d = Math.floor(diff / 86400000);
  if (d > 0) return `${d} วันก่อน`;
  const h = Math.floor(diff / 3600000);
  if (h > 0) return `${h} ชั่วโมงก่อน`;
  const m = Math.floor(diff / 60000);
  if (m > 0) return `${m} นาทีที่แล้ว`;
  return "เมื่อสักครู่";
};

// Icons
const CheckIcon: React.FC = () => (
  <svg
    className="w-5 h-5 text-emerald-500"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon: React.FC = () => (
  <svg
    className="w-5 h-5 text-yellow-600 animate-pulse"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

// Main Component
const Feature: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [sortOrder, setSortOrder] = useState<"ล่าสุด" | "วงเงิน" | "สถานะ">("ล่าสุด");

  const sortedCustomers = useMemo(() => {
    const copy = [...approvedCustomers];
    switch (sortOrder) {
      case "วงเงิน":
        return copy.sort((a, b) => b.loanAmount - a.loanAmount);
      case "สถานะ":
        return copy.sort((a, b) => {
          if (a.status === b.status) return 0;
          if (a.status === "อนุมัติแล้ว") return -1;
          return 1;
        });
      case "ล่าสุด":
      default:
        return copy.sort(
          (a, b) => new Date(b.approvalDate).getTime() - new Date(a.approvalDate).getTime()
        );
    }
  }, [sortOrder]);

  const handleViewDetail = (customer: CustomerApproval) => {
    alert(`ดูรายละเอียดของ ${customer.name}`);
  };

  return (
    <section
      id="feature"
      aria-labelledby="feature-heading"
      className="py-20 bg-gradient-to-br from-base-200 to-base-300 dark:from-zinc-900 dark:to-zinc-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Header */}
        <header className="text-center max-w-xl mx-auto mb-10 space-y-4">
          <h2
            id="feature-heading"
            className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white"
          >
            ลูกค้าที่ได้รับการอนุมัติล่าสุด
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-400">
            ข้อมูลรายการสินเชื่อคุณภาพระดับพรีเมียม ภายใต้การดูแลอย่างมืออาชีพ
          </p>
        </header>

        {/* Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div
            className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300"
            role="region"
            aria-label="การเลือกเรียงลำดับลูกค้า"
          >
            ทั้งหมด <span className="font-semibold">{approvedCustomers.length}</span> รายการ
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "ล่าสุด" | "วงเงิน" | "สถานะ")}
              className="ml-2 px-2 py-1 rounded border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="เรียงลำดับลูกค้า"
            >
              <option value="ล่าสุด">เรียงตามล่าสุด</option>
              <option value="วงเงิน">เรียงตามวงเงิน</option>
              <option value="สถานะ">เรียงตามสถานะ</option>
            </select>
          </div>

          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 focus:ring-4 focus:ring-blue-400 transition"
              aria-expanded={showForm}
              aria-controls="customer-assessment-form"
              aria-haspopup="true"
              type="button"
            >
              {showForm ? "ซ่อนแบบฟอร์มประเมิน" : "แบบฟอร์มประเมินเบื้องต้น"}
              <svg
                className={`w-4 h-4 transition-transform ${showForm ? "rotate-180" : "rotate-0"}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <button
              onClick={() => alert("ดูทั้งหมด")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-600 focus:ring-4 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition"
              aria-label="ดูทั้งหมด"
              type="button"
            >
              ดูทั้งหมด
            </button>
          </div>
        </div>

        {/* Conditional View */}
        {showForm ? (
          <div id="customer-assessment-form" className="max-w-xl mx-auto" aria-live="polite">
            <CustomerAssessmentForm />
          </div>
        ) : (
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"
            aria-label="รายชื่อลูกค้าที่ได้รับการอนุมัติ"
          >
            {sortedCustomers.map((customer) => (
              <li
                key={customer.id}
                className="
                  bg-white
                  dark:bg-zinc-800/90
                  rounded-2xl
                  p-6
                  shadow-md
                  border
                  border-zinc-200
                  dark:border-zinc-700
                  hover:ring-amber-400/50
                  hover:shadow-lg
                  transition-all
                  focus-within:ring-2
                  focus-within:ring-amber-400
                  outline-none
                  flex
                  flex-col
                  justify-between
                "
                tabIndex={0}
                aria-labelledby={`${customer.id}-name`}
                aria-describedby={`${customer.id}-details`}
              >
                <article
                  className="flex flex-col gap-3 h-full"
                  aria-label={`ข้อมูลลูกค้า ${customer.name}`}
                >
                  <h3
                    id={`${customer.id}-name`}
                    className="text-lg font-semibold truncate text-black dark:text-white"
                    title={customer.name}
                  >
                    {customer.name}
                  </h3>

                  <p id={`${customer.id}-details`} className="text-sm text-black/70 dark:text-white/70">
                    วันที่อนุมัติ:{" "}
                    <time dateTime={customer.approvalDate} title={formatDate(customer.approvalDate)}>
                      {formatDate(customer.approvalDate)} ({timeAgo(customer.approvalDate)})
                    </time>
                  </p>

                  <p className="text-base text-black dark:text-white">
                    วงเงิน:{" "}
                    <span className="font-semibold">{formatCurrency(customer.loanAmount)}</span>
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span
                      role="status"
                      className={`
                        inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase select-none
                        ${
                          customer.status === "อนุมัติแล้ว"
                            ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }
                      `}
                    >
                      {customer.status === "อนุมัติแล้ว" ? <CheckIcon /> : <ClockIcon />}
                      {customer.status}
                    </span>

                    <button
                      onClick={() => handleViewDetail(customer)}
                      className="ml-auto px-3 py-1 text-xs font-medium text-blue-600 hover:underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                      aria-label={`ดูรายละเอียดเพิ่มเติมของ ${customer.name}`}
                      type="button"
                    >
                      รายละเอียดเพิ่มเติม
                    </button>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Feature;