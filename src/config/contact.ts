import { FaLine, FaFacebook, FaFacebookMessenger, FaEnvelope } from 'react-icons/fa';

// ประเภทช่องทางติดต่อที่รองรับ
export type ContactType = 'line' | 'facebook' | 'messenger' | 'email';

// โครงสร้างลิงก์ติดต่อ
export interface ContactLink {
  type: ContactType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

// ข้อมูลลิงก์ติดต่อที่แสดงใน UI
export const contactLinks: ContactLink[] = [
  {
    type: 'line',
    label: 'LINE',
    icon: FaLine,
  },
  {
    type: 'facebook',
    label: 'Facebook',
    icon: FaFacebook,
  },
  {
    type: 'messenger',
    label: 'Messenger',
    icon: FaFacebookMessenger,
  },
  {
    type: 'email',
    label: 'Email',
    icon: FaEnvelope,
  },
];

// ฟังก์ชันสำหรับสร้าง href ที่จะใช้งานจริง
export const getContactHref = (type: ContactType, message?: string): string => {
  switch (type) {
    case 'line': {
      const lineOAID = '@462fqtfc'; // ✅ OA ID จริง
      const encodedMsg = message ? `?text=${encodeURIComponent(message)}` : '';
      const directURL = `https://line.me/R/oaMessage/${lineOAID}/${encodedMsg}`;
      const fallbackURL = 'https://lin.ee/uhMtuSB';
      return message ? directURL : fallbackURL;
    }

    case 'facebook':
      return 'https://www.facebook.com/profile.php?id=61573307616115&mibextid=kFxxJD';

    case 'messenger':
      return 'https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share';

    case 'email':
      return 'mailto:contact@bannerdigital.co';

    default:
      return '';
  }
};
