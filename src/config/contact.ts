// src/config/contact.ts

import {
  FaLine,
  FaFacebook,
  FaFacebookMessenger,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobeAsia,
} from 'react-icons/fa';

export type ContactType =
  | 'line'
  | 'facebook'
  | 'messenger'
  | 'email'
  | 'phone'
  | 'website';

export interface ContactLink {
  type: ContactType;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

export const contactLinks: ContactLink[] = [
  {
    type: 'line',
    label: 'LINE',
    icon: FaLine,
    description: 'ติดต่อเราผ่าน LINE Official',
  },
  {
    type: 'facebook',
    label: 'Facebook',
    icon: FaFacebook,
    description: 'เข้าชมเพจ Facebook ของเรา',
  },
  {
    type: 'messenger',
    label: 'Messenger',
    icon: FaFacebookMessenger,
    description: 'ส่งข้อความผ่าน Messenger',
  },
  {
    type: 'email',
    label: 'Email',
    icon: FaEnvelope,
    description: 'ติดต่อผ่านอีเมลธุรกิจ',
  },
  {
    type: 'phone',
    label: 'โทรศัพท์',
    icon: FaPhoneAlt,
    description: 'ติดต่อสายตรงฝ่ายบริการลูกค้า',
  },
  {
    type: 'website',
    label: 'เว็บไซต์',
    icon: FaGlobeAsia,
    description: 'เยี่ยมชมเว็บไซต์หลักของบริษัท',
  },
];

// ข้อมูลติดต่อ
const lineOAID = '@462fqtfc';
const facebookPageID = '61573307616115';
const messengerHash = 'AbZf0L5cSZ8XvIYw';
const emailAddress = 'contact@bannerdigital.co';
const phoneNumber = '+6621234567';
const websiteURL = 'https://www.bannerdigital.co';

// สร้างลิงก์ตามประเภท
export const getContactHref = (
  type: ContactType,
  message?: string
): string => {
  switch (type) {
    case 'line': {
      const encodedMsg = message ? encodeURIComponent(message) : '';
      return message
        ? `https://line.me/R/oaMessage/${lineOAID}/?text=${encodedMsg}`
        : 'https://lin.ee/uhMtuSB';
    }
    case 'facebook':
      return `https://www.facebook.com/profile.php?id=${facebookPageID}&mibextid=kFxxJD`;
    case 'messenger':
      return `https://m.me/${facebookPageID}?hash=${messengerHash}&source=qr_link_share`;
    case 'email':
      return `mailto:${emailAddress}`;
    case 'phone':
      return `tel:${phoneNumber}`;
    case 'website':
      return websiteURL;
    default:
      return '#';
  }
};