// postcss.config.js

import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('postcss').ProcessOptions} */
export default {
  plugins: [
    tailwindcss(), // ไม่ต้องใส่ path
    autoprefixer(),
  ],
};
