"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var daisyui_1 = require("daisyui");
var config = {
    content: ["./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#4f46e5",
                // indigo-600
                secondary: "#10b981",
                // emerald-500
            },
        },
    },
    plugins: [daisyui_1.default],
    daisyui: {
        themes: ["light",
            "dark"],
        // หรือเพิ่ม custom เช่น "synthwave", "modern"
    },
};
exports.default = config;
