"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    // ใช้ dark mode แบบ class เพื่อสลับธีมด้วยการเพิ่ม class="dark" ใน html/body
    darkMode: 'class',
    // ไฟล์ที่จะตรวจสอบ class สำหรับ Tailwind CSS (purge)
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        // ตั้งค่า container ให้กึ่งกลาง และมี padding ตามขนาดหน้าจอ
        container: {
            center: true,
            padding: '1rem',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
        extend: {
            // ฟอนต์หลักของโปรเจกต์
            fontFamily: {
                kanit: ['Kanit',
                    'sans-serif'],
                orbitron: ['Orbitron',
                    'sans-serif'],
            },
            // สีหลักของธีม พร้อมชื่อที่อ่านง่าย
            colors: {
                primary: '#1A237E',
                // กรมท่าเข้ม (Navy Blue)
                secondary: '#3949AB',
                // กรมท่ากลาง (Indigo Blue)
                accent: '#FF6F00',
                // ส้มสดใส (Vibrant Orange)
                muted: '#F5F5F5',
                // เทาอ่อน (พื้นหลัง)
                dark: '#121212',
                // พื้นหลัง dark mode
            },
            // กำหนดระยะห่างเพิ่มเติมสำหรับใช้ใน Layout
            spacing: {
                header: '4.5rem',
                // ความสูง header
                section: '6rem',
                // ความสูง section หรือตัวเว้นวรรค
            },
            // ขอบมนเพิ่มสำหรับการดีไซน์
            borderRadius: {
                xl: '1rem',
                '2xl': '1.5rem',
            },
            // เงาเงานุ่ม ๆ สำหรับกล่องต่าง ๆ
            boxShadow: {
                soft: '0 2px 12px rgba(0, 0, 0, 0.06)',
                glow: '0 0 20px rgba(26, 35, 126, 0.5)',
                // เงาสี primary
            },
            // กำหนด Animation Keyframes เพื่อใช้กับ animate-* classes
            keyframes: {
                fadeIn: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    },
                },
                slideUp: {
                    '0%': {
                        transform: 'translateY(20px)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'translateY(0)',
                        opacity: '1'
                    },
                },
                zoomIn: {
                    '0%': {
                        transform: 'scale(0.95)',
                        opacity: '0'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: '1'
                    },
                },
                wiggle: {
                    '0%, 100%': {
                        transform: 'rotate(-3deg)'
                    },
                    '50%': {
                        transform: 'rotate(3deg)'
                    },
                },
            },
            // ชื่อและระยะเวลาของ animation ที่จะใช้งานใน class animate-*
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'zoom-in': 'zoomIn 0.4s ease-out forwards',
                wiggle: 'wiggle 0.6s ease-in-out infinite',
            },
        },
    },
    // Plugins สำหรับช่วยจัดการ Typography, Forms, และ Aspect Ratio
    plugins: [
        require('@tailwindcss/typography'),
        // สไตล์บทความ/ข้อความยาว
        require('@tailwindcss/forms'),
        // ปรับปรุงสไตล์ฟอร์ม
        require('@tailwindcss/aspect-ratio'),
        // ควบคุมอัตราส่วนภาพหรือ iframe
    ],
    // (ถ้าต้องการ กำหนด variants สำหรับ responsive หรือ dark mode เพิ่มเติมได้)
    // variants: {
    //   extend: {
    //     backgroundColor: ['dark', 'hover'],
    //     textColor: ['dark', 'hover'],
    //   },
    // },
};
exports.default = config;
