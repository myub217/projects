import React from "react";
import aboutImg from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-extrabold text-red-600 mb-8 text-center tracking-wide uppercase">
          เจาะลึก JP Visual & Docs
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-gray-200 space-y-6 text-lg leading-relaxed font-semibold">
            <p>
              <span className="text-red-500 font-black">JP Visual & Docs</span> คือ “กุญแจปลดล็อก” บนโลกที่ซับซ้อนของเอกสารและการเงิน  
              ที่ Google และ YouTube ไม่เคยเปิดเผย เราอยู่ในพื้นที่ “สีเทา” ที่กฎหมายไม่เอื้ออำนวย แต่สามารถยกระดับสู่มาตรฐานมืออาชีพ  
              เพื่อให้คุณเดินหน้าไปถึงเป้าหมายได้อย่างมั่นใจและปลอดภัย
            </p>
            <p>
              เราคือทีมงานเบื้องหลังที่เข้าใจลึกซึ้งในกลไกของธนาคาร การยื่นวีซ่า และระบบหลังบ้านต่าง ๆ ประสบการณ์กว่า 8-9 ปี  
              ทำให้เราสามารถแก้ปัญหาที่คนอื่นมองไม่เห็นได้ พร้อมยึดมั่นในหลักการ <span className="text-red-400">“รักษาความลับของลูกค้าเป็นกฎเหล็ก”</span>
            </p>
            <p>
              บริการของเราครอบคลุม:
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300 font-normal">
                <li>วางแผนและยื่นกู้ตรงจุด ตรงตามเงื่อนไขของธนาคาร</li>
                <li>ดูแลเอกสารวีซ่าแบบครบวงจร</li>
                <li>สร้าง-แก้ไขสลิปเงินเดือน ใบโอนเงิน บัญชีธนาคาร ให้สมจริง</li>
                <li>ผลิตบัตรแข็ง บัตรพนักงาน บัตรส่วนลด ฯลฯ ด้วยคุณภาพสูง</li>
                <li>ออกแบบโลโก้ แบรนด์ดิ้ง โปรไฟล์บริษัท และระบบตลาดออนไลน์</li>
                <li>วางระบบหลังบ้านที่ช่วยให้ธุรกิจเติบโตอย่างรวดเร็วและมั่นคง</li>
              </ul>
            </p>
            <p className="text-red-500 font-bold">
              หากคุณกำลังมองหาทางออกที่ “ไม่มีในที่อื่น” — <br className="block md:hidden" />
              <span className="text-white">JP Visual & Docs</span> คือคำตอบสุดท้ายของคุณ
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400 font-normal">
              <p className="text-base font-semibold text-white">📲 ช่องทางติดต่อ:</p>
              <p>
                LINE:{" "}
                <a
                  href="https://lin.ee/XJZ7H4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  @462FQTFC
                </a>
              </p>
              <p>
                Facebook ส่วนตัว:{" "}
                <a
                  href="https://www.facebook.com/khaphcea.mi.nam.wa.cea.pa?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  คลิกที่นี่
                </a>
              </p>
              <p>
                เพจธุรกิจอย่างเป็นทางการ:
                <br />
                <a
                  href="https://www.facebook.com/profile.php?id=61575050976562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  JP Visual & Docs by เจ้าป่า
                </a>
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl shadow-2xl border-4 border-red-600">
            <img
              src={aboutImg}
              alt="ทีมงาน JP Visual & Docs มืออาชีพ"
              className="w-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;