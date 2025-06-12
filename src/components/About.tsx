import React from "react";
import aboutImg from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl font-extrabold text-red-600 mb-10 text-center tracking-widest uppercase drop-shadow-lg">
          JP Visual & Docs — “กุญแจปลดล็อก” ทุกข้อจำกัด
        </h2>
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <article className="text-gray-100 space-y-7 text-lg leading-relaxed font-semibold tracking-wide">
            <p>
              <strong className="text-red-500 font-black">JP Visual & Docs</strong> ไม่ใช่แค่ผู้ให้บริการทั่วไป —  
              เราคือทีมผู้เชี่ยวชาญที่ลึกซึ้งในระบบ “สีเทา” ที่หลายคนกลัวจะเข้าไปยุ่ง เก่งกาจในการนำพาคุณผ่านโลกของเอกสารและการเงินที่ซับซ้อน  
              ที่ไม่มีใน Google หรือ YouTube เราทำงานเบื้องหลังอย่างมืออาชีพ เหมือน “กุญแจปลดล็อก” เพื่อเปิดทางไปสู่เป้าหมายของคุณอย่างมั่นใจและปลอดภัย
            </p>
            <p>
              ด้วยประสบการณ์กว่า 8 ปีในวงการ ที่ไม่ใช่แค่ความรู้ทั่วไปแต่เป็น “เคล็ดลับ” ที่เราสั่งสมมา  
              เราแก้ปัญหาที่คนอื่นมองไม่เห็นและกล้าทำในสิ่งที่ถูกต้องโดยไม่เสียจรรยาบรรณ  
              <em className="text-red-400 font-semibold">“ความลับของลูกค้า คือกฎเหล็กสูงสุดของเรา”</em> — สิ่งนี้คือหัวใจที่ทำให้ลูกค้าทุกคนมั่นใจได้ว่าข้อมูลจะปลอดภัย 100%
            </p>
            <section>
              <p className="mb-2">บริการหลักที่เราเชี่ยวชาญ:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-normal text-base">
                <li>วางแผนและยื่นกู้ตรงจุด ตรงตามเงื่อนไขธนาคารที่ซับซ้อน</li>
                <li>จัดการเอกสารวีซ่าที่ทุกขั้นตอนครบถ้วน ราบรื่น ไม่มีสะดุด</li>
                <li>สร้างและแก้ไขสลิปเงินเดือน ใบโอนเงิน และบัญชีธนาคารที่สมจริงเหมือนของจริง</li>
                <li>ผลิตบัตรแข็ง บัตรพนักงาน บัตรส่วนลด ฯลฯ ด้วยคุณภาพสูงระดับมืออาชีพ</li>
                <li>ออกแบบโลโก้ แบรนด์ดิ้ง โปรไฟล์บริษัท พร้อมระบบตลาดออนไลน์ที่ตรงใจลูกค้า</li>
                <li>วางระบบหลังบ้านครบวงจร ให้ธุรกิจของคุณเติบโตอย่างมั่นคงและรวดเร็ว</li>
              </ul>
            </section>
            <p className="text-red-500 font-bold text-xl mt-6">
              หากคุณเหนื่อยกับทางตันและสิ่งที่ “ไม่มีใครกล้าบอก” <br className="block md:hidden" />
              <span className="text-white">JP Visual & Docs คือคำตอบสุดท้ายที่คุณต้องการ</span>
            </p>

            <address className="mt-8 space-y-3 text-sm text-gray-400 not-italic font-normal">
              <p className="text-base font-semibold text-white">📲 ติดต่อเราได้ที่:</p>
              <p>
                LINE:{" "}
                <a
                  href="https://lin.ee/XJZ7H4u"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
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
                  rel="nofollow noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  คลิกที่นี่
                </a>
              </p>
              <p>
                เพจธุรกิจอย่างเป็นทางการ:<br />
                <a
                  href="https://www.facebook.com/profile.php?id=61575050976562"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-red-500 hover:underline"
                >
                  JP Visual & Docs by เจ้าป่า
                </a>
              </p>
            </address>
          </article>

          <div className="overflow-hidden rounded-3xl shadow-[0_25px_50px_-12px_rgba(220,38,38,0.7)] border-4 border-red-700">
            <img
              src={aboutImg}
              alt="ทีมงาน JP Visual & Docs มืออาชีพ"
              className="w-full object-cover transform hover:scale-110 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;