import React from "react";

const JoinButtons: React.FC = () => {
  const handleApplyClick = () => {
    alert("ฟังก์ชันสมัครเลย ถูกเรียกใช้งาน");
  };

  const handleContactClick = () => {
    alert("ฟังก์ชันติดต่อเรา ถูกเรียกใช้งาน");
  };

  const handleMoreClick = () => {
    alert("ฟังก์ชันดูเพิ่มเติม ถูกเรียกใช้งาน");
  };

  return (
    <section className="py-10 text-center bg-base-100">
      <div
        role="group"
        aria-label="กลุ่มปุ่มสำหรับสมัคร ติดต่อ และดูเพิ่มเติม"
        className="join flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none px-4"
      >
        <button
          className="btn btn-primary join-item w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2"
          aria-label="สมัครเลย"
          type="button"
          onClick={handleApplyClick}
        >
          สมัครเลย
        </button>
        <button
          className="btn btn-secondary join-item w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2"
          aria-label="ติดต่อเรา"
          type="button"
          onClick={handleContactClick}
        >
          ติดต่อเรา
        </button>
        <button
          className="btn btn-accent join-item w-full sm:w-auto focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2"
          aria-label="ดูเพิ่มเติม"
          type="button"
          onClick={handleMoreClick}
        >
          ดูเพิ่มเติม
        </button>
      </div>
    </section>
  );
};

export default JoinButtons;