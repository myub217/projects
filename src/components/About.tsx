import React from "react";
import aboutImg from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 bg-gray-900 scroll-mt-24"
      aria-labelledby="about-title"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <h2
          id="about-title"
          className="text-5xl font-extrabold text-red-600 mb-12 text-center tracking-widest uppercase drop-shadow-lg select-none"
          title="JP Visual & Docs — กุญแจปลดล็อกทุกข้อจำกัด"
        >
          JP Visual & Docs — “กุญแจปลดล็อก” ทุกข้อจำกัด
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* เนื้อหาข้อความ */}
          <article
            className="text-gray-100 space-y-8 text-lg leading-relaxed font-semibold tracking-wide"
            tabIndex={0}
            aria-label="เกี่ยวกับ JP Visual & Docs"
          >
            <p className="first-line:uppercase first-line:tracking-widest first-line:font-bold first-line:text-red-500">
              <strong className="text-red-500 font-black">JP Visual & Docs</strong> ไม่ใช่แค่ผู้ให้บริการทั่วไป —  
              เราคือทีมผู้เชี่ยวชาญที่ลึกซึ้งในระบบ “สีเทา” ที่หลายคนกลัวจะเข้าไปยุ่ง เก่งกาจในการนำพาคุณผ่านโลกของเอกสารและการเงินที่ซับซ้อน  
              ที่ไม่มีใน Google หรือ YouTube เราทำงานเบื้องหลังอย่างมืออาชีพ เหมือน “กุญแจปลดล็อก” เพื่อเปิดทางไปสู่เป้าหมายของคุณอย่างมั่นใจและปลอดภัย
            </p>

            <p>
              ด้วยประสบการณ์กว่า 8 ปีในวงการ ที่ไม่ใช่แค่ความรู้ทั่วไปแต่เป็น “เคล็ดลับ” ที่เราสั่งสมมา  
              เราแก้ปัญหาที่คนอื่นมองไม่เห็นและกล้าทำในสิ่งที่ถูกต้องโดยไม่เสียจรรยาบรรณ  
              <em className="text-red-400 font-semibold italic" title="ความลับของลูกค้า คือกฎเหล็กสูงสุดของเรา">
                “ความลับของลูกค้า คือกฎเหล็กสูงสุดของเรา”
              </em> — สิ่งนี้คือหัวใจที่ทำให้ลูกค้าทุกคนมั่นใจได้ว่าข้อมูลจะปลอดภัย 100%
            </p>

            <div aria-labelledby="services-expertise-title">
              <p
                id="services-expertise-title"
                className="mb-3 font-semibold text-red-400 tracking-wide text-lg"
              >
                บริการหลักที่เราเชี่ยวชาญ:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 font-normal text-base marker:text-red-600" role="list">
                <li>วางแผนและยื่นกู้ตรงจุด ตรงตามเงื่อนไขธนาคารที่ซับซ้อน</li>
                <li>จัดการเอกสารวีซ่าที่ทุกขั้นตอนครบถ้วน ราบรื่น ไม่มีสะดุด</li>
                <li>สร้างและแก้ไขสลิปเงินเดือน ใบโอนเงิน และบัญชีธนาคารที่สมจริงเหมือนของจริง</li>
                <li>ผลิตบัตรแข็ง บัตรพนักงาน บัตรส่วนลด ฯลฯ ด้วยคุณภาพสูงระดับมืออาชีพ</li>
                <li>ออกแบบโลโก้ แบรนด์ดิ้ง โปรไฟล์บริษัท พร้อมระบบตลาดออนไลน์ที่ตรงใจลูกค้า</li>
                <li>วางระบบหลังบ้านครบวงจร ให้ธุรกิจของคุณเติบโตอย่างมั่นคงและรวดเร็ว</li>
              </ul>
            </div>

            <p className="text-red-500 font-extrabold text-2xl mt-8 tracking-wide drop-shadow-md select-text">
              หากคุณเหนื่อยกับทางตันและสิ่งที่ “ไม่มีใครกล้าบอก” <br className="block md:hidden" />
              <span className="text-white font-bold">
                JP Visual & Docs คือคำตอบสุดท้ายที่คุณต้องการ
              </span>
            </p>

            <address
              className="mt-10 space-y-3 text-sm text-gray-400 not-italic font-normal"
              aria-labelledby="contact-title"
            >
              <p id="contact-title" className="text-base font-semibold text-white">
                📲 ติดต่อเราได้ที่:
              </p>
              <p>
                LINE:{" "}
                <a
                  href="https://lin.ee/XJZ7H4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                  title="ติดต่อผ่าน LINE @462FQTFC"
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
                  className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                  title="Facebook ส่วนตัว คลิกที่นี่"
                >
                  คลิกที่นี่
                </a>
              </p>
              <p>
                เพจธุรกิจอย่างเป็นทางการ:<br />
                <a
                  href="https://www.facebook.com/profile.php?id=61575050976562"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                  title="เพจ JP Visual & Docs by เจ้าป่า"
                >
                  JP Visual & Docs by เจ้าป่า
                </a>
              </p>
            </address>
          </article>

          {/* รูปภาพ */}
          <figure
            className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(220,38,38,0.8)] border-4 border-red-700 transition-transform duration-700 hover:scale-[1.07]"
            aria-label="ภาพทีมงาน JP Visual & Docs มืออาชีพ"
          >
            <img
              src={aboutImg}
              alt="ทีมงาน JP Visual & Docs มืออาชีพ"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
              decoding="async"
              draggable={false}
              title="ทีมงานมืออาชีพ JP Visual & Docs"
            />
            <figcaption className="sr-only">ทีมงานมืออาชีพของเรา</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;