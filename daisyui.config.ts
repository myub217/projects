// /daisyui.config.ts
// ✅ DaisyUI Plugin Type-safe Configuration

import type plugin from 'tailwindcss/plugin';
import type { PluginCreator } from 'tailwindcss/types/config';

// ✅ ตัวแปร daisyui: ใช้ทั้งเป็น Tailwind Plugin และ PluginCreator
declare const daisyui: ReturnType<typeof plugin> & PluginCreator;

export default daisyui;

// ✅ รูปแบบ Custom Theme: { mytheme: { primary: "#000", ... } }
export type CustomTheme = Record<string, Record<string, string>>;

// ✅ รายชื่อธีมเริ่มต้นที่ DaisyUI รองรับ
export type Theme =
  | 'light'
  | 'dark'
  | 'cupcake'
  | 'bumblebee'
  | 'emerald'
  | 'corporate'
  | 'synthwave'
  | 'retro'
  | 'cyberpunk'
  | 'valentine'
  | 'halloween'
  | 'garden'
  | 'forest'
  | 'aqua'
  | 'lofi'
  | 'pastel'
  | 'fantasy'
  | 'wireframe'
  | 'black'
  | 'luxury'
  | 'dracula'
  | 'cmyk'
  | 'autumn'
  | 'business'
  | 'acid'
  | 'lemonade'
  | 'night'
  | 'coffee'
  | 'winter'
  | 'dim'
  | 'nord'
  | 'sunset';

// ✅ DaisyUI Configuration Interface
export interface Config {
  /**
   * ใช้ธีมทั้งหมด (true), ใช้เฉพาะ light/dark (false), หรือเลือก array
   */
  themes?: boolean | (Theme | CustomTheme)[];

  /**
   * ตั้งค่า default dark theme เมื่อระบบอยู่ใน dark mode
   */
  darkTheme?: string;

  /**
   * เปิด/ปิด base style เช่น body, html, font
   */
  base?: boolean;

  /**
   * เปิด/ปิด styled component ที่ DaisyUI ให้มา
   */
  styled?: boolean;

  /**
   * เปิด/ปิด utility class เพิ่มเติมของ DaisyUI
   */
  utils?: boolean;

  /**
   * รองรับการแสดงผล RTL (ขวาไปซ้าย)
   */
  rtl?: boolean;

  /**
   * เพิ่ม prefix ให้ class ทั้งหมด เช่น daisy-btn
   */
  prefix?: string;

  /**
   * เปิดแสดง log ตอน build เพื่อ debug
   */
  logs?: boolean;
}
