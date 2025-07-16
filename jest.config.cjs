// jest.config.cjs

/** @type {import('jest').Config} */
const config = {
  displayName: 'modular-onepage',

  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    resources: 'usable',
  },

  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },

  // ✅ ใช้งานจริงได้ทันที (fallback ไป .js ถ้า .ts ไม่มี)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  testMatch: [
    '**/__tests__/**/*.(spec|test).(ts|tsx|js)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],

  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/coverage/',
    '/build/',
  ],

  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text-summary', 'lcov', 'json'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/__mocks__/',
    '/types/',
    'jest.setup.ts',
    'setupTests.ts',
    'test-utils.tsx',
  ],

  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
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

  verbose: true,
};

module.exports = config;