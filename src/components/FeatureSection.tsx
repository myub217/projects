import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section
      id="features"
      className="bg-gray-50 px-6 py-12 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
      aria-label="Features section"
    >
      <h2 className="mb-6 text-center text-3xl font-semibold">ฟีเจอร์เด่นของเรา</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <svg
            className="mb-4 h-12 w-12 text-blue-600 dark:text-blue-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} />
          </svg>
          <h3 className="mb-2 text-xl font-medium">รวดเร็วและแม่นยำ</h3>
          <p>บริการที่ส่งมอบงานไว พร้อมคุณภาพสูงตรงตามความต้องการ</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <svg
            className="mb-4 h-12 w-12 text-green-600 dark:text-green-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="mb-2 text-xl font-medium">มาตรฐานสูง</h3>
          <p>ทุกขั้นตอนดำเนินการตามระบบมาตรฐานมืออาชีพเพื่อความน่าเชื่อถือ</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <svg
            className="mb-4 h-12 w-12 text-purple-600 dark:text-purple-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20l9-5-9-5-9 5 9 5z"
            />
          </svg>
          <h3 className="mb-2 text-xl font-medium">ปลอดภัยและเป็นความลับ</h3>
          <p>ข้อมูลของลูกค้าจะถูกเก็บรักษาอย่างปลอดภัยตามนโยบายความเป็นส่วนตัว</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
