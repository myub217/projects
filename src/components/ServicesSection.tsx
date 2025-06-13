import config from "../Config/Config";
import type { Service } from "../Config/Config";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  const { services } = config;

  return (
    <section
      id="services"
      aria-label="บริการของเรา"
      className="py-16 bg-white dark:bg-gray-900 text-center"
    >
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-4">
          บริการของเรา
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          JP Visual & Docs ให้บริการครบวงจรด้านยื่นกู้ วีซ่า เอกสารการเงิน โปรไฟล์ และระบบหลังบ้าน
          พร้อมทีมงานมืออาชีพที่พร้อมช่วยเหลือคุณในทุกขั้นตอน เพื่อให้คุณมั่นใจและสะดวกสบายที่สุด
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto"
        role="list"
      >
        {services.map(({ id, title, description, image, link }: Service) => {
          const Content = (
            <>
              <img
                src={image}
                alt={`บริการ: ${title}`}
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/assets/fallback-image.png";
                }}
                className="h-40 w-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
              />
              <div className="px-6 py-4 text-left">
                <h3 className="text-lg font-semibold text-accent dark:text-yellow-300 mb-1">
                  {title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {description}
                </p>
              </div>
            </>
          );

          return (
            <article
              key={id}
              role="listitem"
              tabIndex={0}
              aria-label={title}
              className="bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow duration-300 hover:shadow-xl"
            >
              {link ? (
                <Link
                  to={link}
                  className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {Content}
                </Link>
              ) : (
                Content
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-16 max-w-3xl mx-auto text-center px-4">
        <h3 className="text-2xl font-semibold text-primary dark:text-white mb-4">
          ติดต่อสอบถาม หรือปรึกษาฟรี
        </h3>
        <p className="text-gray-700 dark:text-gray-400 mb-4 leading-relaxed">
          ทีมงานของเราพร้อมช่วยเหลือคุณในทุกขั้นตอนตั้งแต่เตรียมเอกสารจนถึงการเดินทาง
        </p>
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <p>
            📱 LINE:{" "}
            <a
              href="https://lin.ee/XJZ7H4u"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              @462FQTFC
            </a>
          </p>
          <p>
            📘 Facebook (เจ้าป่า):{" "}
            <a
              href="https://www.facebook.com/khaphcea.mi.nam.wa.cea.pa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              คลิกที่นี่
            </a>
          </p>
          <p>
            📄 เพจหลัก:{" "}
            <a
              href="https://www.facebook.com/profile.php?id=61575050976562"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              JP Visual & Docs By เจ้าป่า
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}