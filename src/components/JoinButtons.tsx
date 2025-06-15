import React from "react";

export interface JoinButtonsProps {
  className?: string;
}

const JoinButtons: React.FC<JoinButtonsProps> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href="#services"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow transition"
      >
        ดูบริการทั้งหมด
      </a>
      <a
        href="https://lin.ee/XJZ7H4u"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow transition ml-4"
      >
        LINE: @462FQTFC
      </a>
    </div>
  );
};

export default JoinButtons;