import jpLogo from "../assets/jp-logo.png"; // ปรับ path ให้ถูกต้อง

const LINE_LINK = "https://line.me/ti/p/@462FQTFC";
const FACEBOOK_LINK = "https://www.facebook.com/yourpage";

export default function Header() {
  return (
    <header
      className="py-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
      role="banner"
      aria-label="Header of JP Visual & Docs"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* โลโก้ + ชื่อเว็บ */}
        <div className="flex items-center space-x-3 cursor-default">
          <a href="/" aria-label="หน้าแรก JP Visual & Docs" tabIndex={0}>
            <img
              src={jpLogo}
              alt="โลโก้ JP Visual & Docs เจ้าป่า"
              className="h-10 w-10 object-contain"
              loading="lazy"
              draggable={false}
            />
          </a>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 leading-tight select-none">
              JP Visual & Docs
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 -mt-1 select-none">
              เจ้าป่า
            </p>
          </div>
        </div>

        {/* เมนูนำทาง */}
        <nav
          className="hidden md:block"
          aria-label="เมนูนำทางหลักของเว็บไซต์"
        >
          <ul className="flex gap-8 text-gray-700 dark:text-gray-300 font-medium">
            <li>
              <a
                href="/services"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                บริการทั้งหมด
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                ตัวอย่างผลงาน
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                ติดต่อเรา
              </a>
            </li>
            <li>
              <a
                href="/secret-room"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
              >
                ห้องลับเจ้าป่า
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* ข้อความติดต่อ */}
      <p className="text-center mt-4 text-sm text-gray-700 dark:text-gray-300 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        ติดต่อเราได้ที่ LINE ID:&nbsp;
        <a
          href={LINE_LINK}
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ติดต่อผ่านไลน์ JP Visual & Docs"
        >
          @462FQTFC
        </a>
        <br />
        หรือเยี่ยมชม Facebook Page:&nbsp;
        <a
          href={FACEBOOK_LINK}
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="เยี่ยมชม Facebook Page JP Visual & Docs"
        >
          JP Visual & Docs
        </a>
      </p>
    </header>
  );
}