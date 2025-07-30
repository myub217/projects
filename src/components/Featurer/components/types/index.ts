// src/components/Featurer/components/types/index.ts

export interface AwardItem {
  title: string;
  description: string;
  icon: string; // ชื่อไอคอนจาก lucide-react
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureCardItem {
  icon: string; // ชื่อไอคอนจาก lucide-react
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
}
