// src/types/index.d.ts

<<<<<<< HEAD
// Global type declarations

// Extend Window interface if needed
interface Window {
  // ตัวอย่าง เพิ่มเติม custom property
  __MY_CUSTOM_GLOBAL__?: any;
}

// Declare custom environment variables (ถ้ามี)
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly VITE_API_BASE_URL?: string;
  }
}

// เพิ่มเติม type helpers หรือ global types ที่ใช้ร่วมในโปรเจกต์ได้ที่นี่

export {};
=======
// Global declaration for importing image and asset types
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.pdf" {
  const content: string;
  export default content;
}

declare module "*.ico" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}
>>>>>>> bbe22dc9 (update)
