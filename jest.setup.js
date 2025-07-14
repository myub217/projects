// /data/data/com.termux/files/home/projects/jest.setup.ts

import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

// เปิด mock fetch ทุกกรณี
fetchMock.enableMocks();

// กรอง console.error ที่ไม่จำเป็นระหว่าง test
const originalConsoleError = console.error;

beforeAll(() => {
  console.error = (...args: unknown[]) => {
    const [firstArg] = args;
    if (typeof firstArg === 'string' && firstArg.startsWith('Warning:')) {
      return; // skip React warnings
    }
    originalConsoleError(...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});