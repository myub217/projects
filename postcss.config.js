// postcss.config.js

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

/**
 * 🔧 PostCSS Config
 * 📦 Plugins: TailwindCSS + Autoprefixer
 * 🚀 Compatible with Vite / Next / CRA
 */

export default {
  plugins: [tailwindcss, autoprefixer],
};