// src/config/contact.ts

import {
  FaLine,
  FaFacebook,
  FaFacebookMessenger,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobeAsia,
} from 'react-icons/fa'

export type ContactType =
  | 'line'
  | 'facebook'
  | 'messenger'
  | 'email'
  | 'phone'
  | 'website'

export interface ContactLink {
  type: ContactType
  label: string
  icon: React.ComponentType<{ className?: string }>
  description?: string
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
]

// ข้อมูลติดต่อ (ปรับปรุงให้คงที่และอ่านง่าย)
const CONTACTS = {
  lineOAID: '@462fqtfc',
  lineUrlDefault: 'https://lin.ee/uhMtuSB',
  facebookPageID: '61573307616115',
  messengerHash: 'AbZf0L5cSZ8XvIYw',
  emailAddress: 'contact@bannerdigital.co',
  phoneNumber: '+6621234567',
  websiteURL: 'https://www.bannerdigital.co',
}

/**
 * สร้างลิงก์ตามประเภทและข้อความ (ถ้ามี)
 * @param type ประเภทการติดต่อ
 * @param message ข้อความสำหรับ LINE (optional)
 * @returns URL string
 */
export const getContactHref = (
  type: ContactType,
  message?: string
): string => {
  switch (type) {
    case 'line': {
      if (message) {
        const encodedMsg = encodeURIComponent(message)
        return `https://line.me/R/oaMessage/${CONTACTS.lineOAID}/?text=${encodedMsg}`
      }
      return CONTACTS.lineUrlDefault
    }
    case 'facebook':
      return `https://www.facebook.com/profile.php?id=${CONTACTS.facebookPageID}&mibextid=kFxxJD`
    case 'messenger':
      return `https://m.me/${CONTACTS.facebookPageID}?hash=${CONTACTS.messengerHash}&source=qr_link_share`
    case 'email':
      return `mailto:${CONTACTS.emailAddress}`
    case 'phone':
      return `tel:${CONTACTS.phoneNumber}`
    case 'website':
      return CONTACTS.websiteURL
    default:
      return '#'
  }
}