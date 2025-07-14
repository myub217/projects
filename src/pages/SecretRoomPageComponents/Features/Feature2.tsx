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
    className="h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-300"
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
    className="h-5 w-5 flex-shrink-0 animate-pulse text-yellow-600 dark:text-yellow-300"
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
      className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg transition-colors duration-500 dark:bg-gray-900 dark:shadow-black/40"
    >
      <h2 className="mb-12 select-none text-4xl font-extrabold text-gray-900 dark:text-gray-100">
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
              flex cursor-pointer
              flex-col flex-wrap gap-y-3
              rounded-xl bg-gray-50 p-5 shadow-sm transition-shadow
              hover:shadow-md focus:outline-none focus-visible:ring-2
              focus-visible:ring-blue-500 dark:bg-gray-800 dark:shadow-none dark:hover:shadow-blue-900/50
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div
              className="
                flex min-w-0
                flex-1 flex-col sm:flex-row sm:items-center sm:gap-6
              "
            >
              <p
                className="truncate text-xl font-semibold text-gray-900 dark:text-gray-100"
                title={name}
              >
                {name}
              </p>
              <p
                id={`desc-${id}`}
                className="whitespace-nowrap text-sm text-gray-600 dark:text-gray-400 sm:ml-4"
              >
                วันที่: <time dateTime={date}>{formatDate(date)}</time>
              </p>
            </div>

            <div
              className="
                flex min-w-[160px] flex-shrink-0 items-center
                justify-end space-x-8 whitespace-nowrap
                text-gray-800
                dark:text-gray-300
                sm:space-x-10
              "
            >
              <p className="truncate text-lg font-medium" title={formatAmount(amount)}>
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