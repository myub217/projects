// postcss.config.cjs

module.exports = {
  plugins: [
    require("tailwindcss"),     // 📦 ใช้ Tailwind CSS
    require("autoprefixer"),    // ✅ เพิ่ม vendor prefixes ให้ CSS รองรับหลาย browser
    // สามารถเพิ่มปลั๊กอินอื่น ๆ ได้ เช่น postcss-nesting, postcss-import ฯลฯ
  ],
};