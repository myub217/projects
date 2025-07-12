import React from "react";
import { ShieldCheck } from "lucide-react";

const Feature1: React.FC = () => {
  const handleClick = () => {
    alert("รายละเอียด: ระบบความปลอดภัยกำลังพัฒนา");
  };

  return (
    <div
      className="bg-base-100 text-base-content shadow-md rounded-xl p-6 hover:shadow-lg dark:bg-base-300 cursor-pointer"
      tabIndex={0}
      role="button"
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <div className="flex items-center mb-3 group">
        <ShieldCheck className="w-6 h-6 text-secondary mr-2 group-hover:text-primary transition-colors" />
        <h3 className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors">
          ระบบความปลอดภัย
        </h3>
      </div>
      <p className="opacity-80 dark:opacity-90">Coming soon</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClick();
        }}
        className="mt-4 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
        type="button"
      >
        รายละเอียด
      </button>
    </div>
  );
};

export default Feature1;