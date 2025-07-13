// /data/data/com.termux/files/home/projects/jest.setup.js

// Setup file for Jest testing environment

import '@testing-library/jest-dom/extend-expect'; // เพิ่ม matchers สำหรับ DOM testing-library

// Mock global fetch ถ้าต้องใช้ใน tests
if (!global.fetch) {
  global.fetch = require('jest-fetch-mock');
  global.fetch.enableMocks();
}

// ตั้งค่าเพิ่มเติมอื่นๆ เช่น mock ฟังก์ชัน, polyfill, หรือ global variables ตามที่ต้องการ

// ตัวอย่าง: suppress console.error warnings ใน test
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning:') // กรอง warnings เฉพาะบางประเภท
    ) {
      return;
    }
    originalError(...args);
  };
});
afterAll(() => {
  console.error = originalError;
});