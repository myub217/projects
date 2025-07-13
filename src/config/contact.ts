// src/config/contact.ts
import {
  FaLine,
  FaFacebook,
  FaFacebookMessenger,
  FaEnvelope,
} from "react-icons/fa";

export type ContactType = "line" | "facebook" | "messenger" | "email";

export interface ContactLink {
  type: ContactType;
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const contactLinks: ContactLink[] = [
  {
    type: "line",
    href: "https://lin.ee/Z5ofPAu",
    label: "LINE",
    icon: FaLine,
  },
  {
    type: "facebook",
    href: "https://www.facebook.com/profile.php?id=61573307616115&mibextid=kFxxJD",
    label: "Facebook",
    icon: FaFacebook,
  },
  {
    type: "messenger",
    href: "https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share",
    label: "Messenger",
    icon: FaFacebookMessenger,
  },
  {
    type: "email",
    href: "mailto:contact@yourdomain.com",
    label: "Email",
    icon: FaEnvelope,
  },
];

export const getContactHref = (type: ContactType): string =>
  contactLinks.find((c) => c.type === type)?.href || "#";