import React from "react";

const mockData = [
  { id: "a1", name: "ศรัณย์ พิทักษ์ชาญชัย", amount: 135000, date: "2025-07-09T09:15:00+07:00", status: "อนุมัติแล้ว" },
  { id: "a2", name: "อรินทรา ทองเจริญ", amount: 84500, date: "2025-07-08T10:45:00+07:00", status: "อนุมัติแล้ว" },
  { id: "a3", name: "ณัฐวัฒน์ ชัยวรรณ", amount: 102000, date: "2025-07-07T14:20:00+07:00", status: "รอดำเนินการ" },
  { id: "a4", name: "ปรียานุช ศรีทอง", amount: 67000, date: "2025-07-06T11:05:00+07:00", status: "อนุมัติแล้ว" },
  { id: "a5", name: "ธีรภัทร์ เจริญสุข", amount: 119000, date: "2025-07-05T15:40:00+07:00", status: "อนุมัติแล้ว" },
  { id: "a6", name: "สุนิสา ไชยพงศ์", amount: 93000, date: "2025-07-04T13:25:00+07:00", status: "รอดำเนินการ" },
  { id: "a7", name: "พงศกร วัฒนกิจ", amount: 58000, date: "2025-07-03T08:55:00+07:00", status: "อนุมัติแล้ว" },
];

const formatDate = (isoDate: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(isoDate).toLocaleDateString("th-TH", options);
};

const formatAmount = (amount: number) =>
  amount.toLocaleString("th-TH", { style: "currency", currency: "THB" });

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-600 dark:text-green-300 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-5 h-5 text-yellow-600 dark:text-yellow-300 animate-pulse flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

const StatusBadge = ({ status }: { status: string }) => {
  const isApproved = status === "อนุมัติแล้ว";

  const baseClasses =
    "inline-flex items-center space-x-2 px-3 py-1 rounded-full font-semibold text-xs uppercase select-none";
  const approvedClasses =
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
  const pendingClasses =
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";

  return (
    <span
      className={`${baseClasses} ${isApproved ? approvedClasses : pendingClasses}`}
      aria-label={`สถานะ: ${status}`}
      role="status"
    >
      {isApproved ? (
        <>
          <CheckIcon />
          <span>{status}</span>
        </>
      ) : (
        <>
          <ClockIcon />
          <span>{status}</span>
        </>
      )}
    </span>
  );
};

const Feature2: React.FC = () => {
  return (
    <section
      aria-label="รายชื่อลูกค้าอนุมัติสินเชื่อล่าสุด"
      className="max-w-5xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-3xl shadow-lg dark:shadow-black/40 transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 select-none">
        รายชื่อลูกค้าอนุมัติสินเชื่อล่าสุด
      </h2>

      <ul className="space-y-6">
        {mockData.map(({ id, name, amount, date, status }) => (
          <li
            key={id}
            tabIndex={0}
            role="listitem"
            aria-describedby={`desc-${id}`}
            className="
              flex flex-col
              sm:flex-row sm:justify-between sm:items-center
              bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-sm
              dark:shadow-none hover:shadow-md dark:hover:shadow-blue-900/50
              transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
              cursor-pointer
              flex-wrap
              gap-y-3
            "
          >
            <div
              className="
                flex-1 min-w-0
                flex flex-col sm:flex-row sm:items-center sm:gap-6
              "
            >
              <p
                className="text-xl font-semibold text-gray-900 dark:text-gray-100 truncate"
                title={name}
              >
                {name}
              </p>
              <p
                id={`desc-${id}`}
                className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap sm:ml-4"
              >
                วันที่: <time dateTime={date}>{formatDate(date)}</time>
              </p>
            </div>

            <div
              className="
                flex items-center space-x-8 sm:space-x-10
                text-gray-800 dark:text-gray-300 whitespace-nowrap
                flex-shrink-0
                min-w-[160px]
                justify-end
              "
            >
              <p className="text-lg font-medium truncate" title={formatAmount(amount)}>
                ยอดเงิน: <span className="font-semibold">{formatAmount(amount)}</span>
              </p>
              <StatusBadge status={status} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Feature2;