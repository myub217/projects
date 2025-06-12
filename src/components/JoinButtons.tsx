import React from "react";
import { PhoneCall, UserPlus, Info } from "lucide-react";

interface JoinButtonsProps {
  applyUrl?: string;
  contactLineUrl?: string;
  moreInfoUrl?: string;
}

const isValidUrl = (url: string): boolean => {
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
};

const JoinButtons: React.FC<JoinButtonsProps> = ({
  applyUrl = "https://your-apply-form-link.com",
  contactLineUrl = "https://lin.ee/yourlineid",
  moreInfoUrl = "https://your-website.com/services",
}) => {
  // ฟังก์ชันช่วยเปิดลิงก์อย่างปลอดภัย
  const openLink = (url: string) => {
    if (isValidUrl(url)) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("ลิงก์ไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง");
      console.error("Invalid URL: ", url);
    }
  };

  return (
    <section
      className="py-12 px-6 bg-base-100 dark:bg-gray-900 transition-colors duration-300"
      aria-labelledby="join-buttons-title"
    >
      <h2 id="join-buttons-title" className="sr-only">
        กลุ่มปุ่มเข้าร่วมและติดต่อ JP Visual & Docs
      </h2>

      <div
        role="group"
        aria-label="กลุ่มปุ่มสำหรับสมัคร ติดต่อ และดูข้อมูลเพิ่มเติมเกี่ยวกับบริการของ JP Visual & Docs"
        className="join flex flex-col sm:flex-row justify-center items-center gap-6 max-w-3xl mx-auto"
      >
        {/* สมัครเลย */}
        <button
          type="button"
          onClick={() => openLink(applyUrl)}
          className="btn btn-success join-item w-full sm:w-auto text-white shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 rounded-lg inline-flex items-center justify-center gap-2"
          aria-label="สมัครเลย เริ่มต้นสมัครบริการกับ JP Visual & Docs"
          aria-describedby="apply-desc"
        >
          <UserPlus className="w-5 h-5" aria-hidden="true" />
          สมัครเลย
          <span id="apply-desc" className="sr-only">
            เริ่มต้นสมัครบริการยื่นกู้ วีซ่า เอกสาร และระบบธุรกิจกับเรา
          </span>
        </button>

        {/* ติดต่อเรา */}
        <button
          type="button"
          onClick={() => openLink(contactLineUrl)}
          className="btn btn-primary join-item w-full sm:w-auto shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2 rounded-lg inline-flex items-center justify-center gap-2"
          aria-label="ติดต่อเรา เพื่อสอบถามข้อมูลและขอคำปรึกษา"
          aria-describedby="contact-desc"
        >
          <PhoneCall className="w-5 h-5" aria-hidden="true" />
          ติดต่อเรา
          <span id="contact-desc" className="sr-only">
            ติดต่อทีมงาน JP Visual & Docs เพื่อสอบถามข้อมูลและรับคำปรึกษาฟรี
          </span>
        </button>

        {/* ดูเพิ่มเติม */}
        <button
          type="button"
          onClick={() => openLink(moreInfoUrl)}
          className="btn btn-accent join-item w-full sm:w-auto shadow-lg hover:scale-105 active:scale-95 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2 rounded-lg inline-flex items-center justify-center gap-2"
          aria-label="ดูเพิ่มเติม เพื่อดูรายละเอียดและบริการอื่นๆ ของเรา"
          aria-describedby="more-desc"
        >
          <Info className="w-5 h-5" aria-hidden="true" />
          ดูเพิ่มเติม
          <span id="more-desc" className="sr-only">
            ดูข้อมูลเพิ่มเติมเกี่ยวกับบริการยื่นกู้ วีซ่า เอกสาร โปรไฟล์ และระบบธุรกิจ
          </span>
        </button>
      </div>
    </section>
  );
};

export default JoinButtons;