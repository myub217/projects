import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Feature1: React.FC = () => {
  const handleClick = () => {
    alert('รายละเอียด: ระบบความปลอดภัยกำลังพัฒนา');
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
        <ShieldCheck className="mr-2 h-6 w-6 text-secondary transition-colors group-hover:text-primary" />
        <h3 className="text-lg font-semibold text-secondary transition-colors group-hover:text-primary">
          ระบบความปลอดภัย
        </h3>
      </div>
      <p className="opacity-80 dark:opacity-90">Coming soon</p>
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

export default Feature1;
