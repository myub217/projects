import React from "react";

type LineButtonProps = {
  lineUrl: string;
};

const LineButton: React.FC<LineButtonProps> = ({ lineUrl }) => {
  return (
    <a
      href={lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      title="สอบถามผ่าน LINE"
      aria-label="ติดต่อผ่าน LINE"
      className="fixed bottom-6 right-20 z-50 p-3 rounded-full shadow-lg transition-transform duration-300 bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
    >
      <svg
        className="w-6 h-6"
        viewBox="0 0 512 512"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M407.1 93.8C366.1 52.2 307.6 32 248 32 112.2 32 0 128.3 0 248c0 73.2 43.8 136.8 111.6 176.3 3.2 1.8 6.7 3.1 10.2 3.6 11.3 1.6 37.7 4.9 38.8 5 3.5.4 7.1-.9 9.7-3.4 2.4-2.4 3.7-5.7 3.7-9.1-.1-2.5-.3-6.7-.5-12.5l-.1-1.9c-1.4-23.8-9.4-32.6-17.3-41.4-2.5-2.8-5-5.4-7.2-8-6.5-7.5-13-15-16.1-26.4-1.3-4.7-1.9-9.6-1.9-14.5 0-25.4 21.7-46 48.4-46 19.5 0 38.8 12.7 47.1 29.8l1.4 2.9 2.7-1.6c9.3-5.3 20.2-8.2 31.5-8.2 36.3 0 67.1 27.4 67.1 61.1 0 5.6-.7 11.1-2.1 16.5-3.1 11.5-10.1 19-16.8 26.7-2.2 2.5-4.5 5-6.6 7.5-8.1 9.3-16.6 18.8-18.1 42.2l-.1 1.7c-.2 5.5-.3 9.8-.3 12.3 0 3.3 1.3 6.6 3.6 9s5.6 3.7 8.9 3.7h.9c.6 0 27.1-3.4 38.8-5 3.5-.5 7-1.8 10.2-3.6C468.2 384.8 512 321.2 512 248c0-61.1-29.6-118.5-80.9-154.2z" />
      </svg>
    </a>
  );
};

export default LineButton;