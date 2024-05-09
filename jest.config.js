/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/js-with-babel-esm',
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'cjs', 'mjs'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    // node_modules配下のemsをcjsに変換するために追加
    '^.+\\.m?js$': ['babel-jest', { configFile: './babel.config.test.js' }],
    // 当プロジェクトのtsをjsに変換するために追加
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!(tslib))/'],
};
