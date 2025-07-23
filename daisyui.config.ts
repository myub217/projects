// daisyui.config.ts

import type plugin from 'tailwindcss/plugin'
import type { PluginCreator } from 'tailwindcss/types/config'

// กำหนด daisyui เป็น plugin ของ Tailwind
declare const daisyui: ReturnType<typeof plugin> & PluginCreator

export default daisyui

// กำหนดรูปแบบ custom theme เช่น { mytheme: { primary: "#000", ... } }
type CustomTheme = Record<string, Record<string, string>>

// รายชื่อธีมที่ daisyUI รองรับโดย default
type Theme =
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
  | 'sunset'

// กำหนด config ของ daisyUI แบบ type-safe
interface DaisyUIConfig {
  /**
   * true = ทุกธีม, false = light/dark เท่านั้น, array = เลือกเฉพาะธีม
   */
  themes?: boolean | (Theme | CustomTheme)[]
  /**
   * ตั้งค่า default dark theme ที่ใช้เวลาเครื่องอยู่ใน dark mode
   */
  darkTheme?: string
  /**
   * เปิด/ปิด base style (body, html, font)
   */
  base?: boolean
  /**
   * เปิด/ปิด styled component
   */
  styled?: boolean
  /**
   * เปิด/ปิด utility class ที่ daisyUI เพิ่มมา
   */
  utils?: boolean
  /**
   * รองรับ RTL layout (ใส่ dir="rtl" บน <html>)
   */
  rtl?: boolean
  /**
   * เพิ่ม prefix เช่น daisy-btn เพื่อหลีกเลี่ยงการชนกับ class อื่น
   */
  prefix?: string
  /**
   * แสดง log ตอน build
   */
  logs?: boolean
}

// export type ทั้งหมด
export type { DaisyUIConfig as Config, Theme, CustomTheme }
