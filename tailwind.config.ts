import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // ใช้ class "dark" ในการสลับโหมดมืด
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // สแกนไฟล์ใน src ทุกไฟล์ js, ts, jsx, tsx
  ],
  theme: {
    container: {
      center: true, // กำหนด container ให้อยู่กึ่งกลาง
      padding: '1rem', // กำหนด padding ซ้ายขวา
      screens: {      // กำหนดขนาดจอสำหรับ responsive container
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: '#1A237E',   // สีน้ำเงินกรมท่า
        secondary: '#3949AB', // สีฟ้าน้ำทะเลเข้ม
        accent: '#FF6F00',    // สีส้มสด
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'zoom-in': 'zoomIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),   // ใช้งาน typography plugin
    require('@tailwindcss/forms'),        // ใช้งาน forms plugin
    require('@tailwindcss/aspect-ratio'), // ใช้งาน aspect-ratio plugin
    // ไม่ต้องเพิ่ม line-clamp เพราะ Tailwind 3.3+ รวมมาให้แล้ว
  ],
};

export default config;