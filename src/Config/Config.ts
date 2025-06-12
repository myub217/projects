// ประเภทธีมของเว็บไซต์
export type ThemeType = 'light' | 'dark';

// ข้อมูลสำหรับ SEO / Social Sharing
export interface MetaInfo {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  favicon?: string; // Optional: สำหรับ favicon หรือ app icon
}

// เมนูหลักใน Navbar
export interface NavLink {
  name: string;
  href: string;
}

// ลิงก์โซเชียลมีเดีย
export interface SocialLink {
  platform: 'line' | 'facebook' | 'instagram' | 'tiktok' | 'other';
  url: string;
  label?: string; // ใช้แสดงแทน platform ถ้าต้องการ
}

// รายการบริการ
export interface ServiceItem {
  title: string;
  slug: string; // ใช้ใน anchor เช่น #loan
  shortDescription?: string;
}

// การตั้งค่าหลักของแอป
export interface AppConfigType {
  siteName: string;
  defaultTheme: ThemeType;
  primaryColor: string;
  meta: MetaInfo;
  navLinks: NavLink[];
  socialLinks?: SocialLink[];
  services?: ServiceItem[];
}

// ค่าตั้งค่าเริ่มต้นของแอป
export const AppConfig: AppConfigType = {
  siteName: 'JP Visual & Docs',
  defaultTheme: 'light',
  primaryColor: 'blue',

  meta: {
    title: 'JP Visual & Docs | ยื่นกู้ วีซ่า เอกสาร',
    description: 'บริการยื่นกู้ วีซ่า เอกสาร โปรไฟล์ ระบบหลังบ้าน การตลาดและการเงินแบบครบวงจร โดยทีมงานมืออาชีพ',
    url: 'https://applicationlub.vercel.app/',
    ogImage: '/assets/og-image.jpg',
    favicon: '/assets/logo.svg',
  },

  navLinks: [
    { name: 'บริการ', href: '#services' },
    { name: 'รีวิว', href: '#reviews' },
    { name: 'ตัวอย่างผลงาน', href: '#portfolio' },
    { name: 'ติดต่อเรา', href: '#contact' },
  ],

  socialLinks: [
    { platform: 'line', url: 'https://lin.ee/xxx', label: 'LINE' },
    { platform: 'facebook', url: 'https://facebook.com/yourpage' },
    { platform: 'instagram', url: 'https://instagram.com/yourpage' },
    { platform: 'tiktok', url: 'https://tiktok.com/@yourpage' },
  ],

  services: [
    { title: 'ยื่นกู้', slug: 'loan' },
    { title: 'วีซ่า', slug: 'visa' },
    { title: 'แปลเอกสาร', slug: 'translation' },
    { title: 'แนะนำการเงิน', slug: 'finance' },
    { title: 'ทำโปรไฟล์', slug: 'profile' },
    { title: 'ระบบหลังบ้าน', slug: 'backend' },
    { title: 'ออกแบบโลโก้', slug: 'logo' },
    { title: 'ระบบการตลาด', slug: 'marketing' },
  ],
};