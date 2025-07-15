import React from 'react';
import { Clock } from 'lucide-react';

const Feature6: React.FC = () => {
  const handleClick = () => {
    alert('รายละเอียด: ระบบติดตามเวลาการทำงานและสถิติ');
  };

  return (
    <div
      className="cursor-pointer rounded-xl bg-base-100 p-6 text-base-content shadow-md hover:shadow-lg dark:bg-base-300"
      tabIndex={0}
      role="button"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick();
      }}
    >
      <div className="group mb-3 flex items-center">
        <Clock className="mr-2 h-6 w-6 text-secondary transition-colors group-hover:text-primary" />
        <h3 className="text-lg font-semibold text-secondary transition-colors group-hover:text-primary">
          ติดตามเวลาทำงาน
        </h3>
      </div>
      <p className="opacity-80 dark:opacity-90">บันทึกเวลาการทำงานและรายงาน</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
        className="mt-4 rounded text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary"
        type="button"
      >
        รายละเอียด
      </button>
    </div>
  );
};

export default Feature6;
