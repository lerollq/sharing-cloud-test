module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**/*.(ts|tsx)'],
  testMatch: ['<rootDir>/src/**/*.spec.(ts|tsx)'],
  coverageReporters: ['lcov'],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 70,
      lines: 98,
      statements: 98,
    },
  },
}
