module.exports = {
  roots: ["<rootDir>"],
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageThreshold: {
      global: {
        branches: 75,
        functions: 75,
        lines: 75,
        statements: 75
      }
    },
};
