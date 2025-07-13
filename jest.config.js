/** @type {import('jest').Config} */
const config = {
  displayName: 'modular-onepage',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    resources: 'usable', // จัดการ resource lifecycle jsdom
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // ถ้า setup เป็น TS
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/__tests__/',
    '/src/setupTests.ts',
    '/src/mocks/',
    '/src/types/',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
      diagnostics: true,
      isolatedModules: true,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  resetMocks: true,
  clearMocks: true,
  restoreMocks: true,
};

module.exports = config;