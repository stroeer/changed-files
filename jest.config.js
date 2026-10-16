module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    // @actions/github >= 8 depends on the ESM-only @octokit/* packages
    '^.+\\.js$': ['ts-jest', {tsconfig: {allowJs: true}}]
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@octokit|universal-user-agent|before-after-hook|fast-content-type-parse|json-with-bigint)/)'
  ],
  verbose: true,
  testTimeout: 10000,
  setupFiles: [
    "<rootDir>/jest/setupEnv.cjs"
  ]
};
