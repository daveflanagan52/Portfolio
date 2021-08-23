module.exports = {
  modulePaths: ['src'],
  testRegex: 'src/.*/__tests__/.*\\.test\\.[jt]sx?$',
  moduleNameMapper: {
    '\\.(css|scss|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/assetsTransformer.js',
  },
  transform: {
    '^.+\\.jsx?$': '<rootDir>/tools/jestBabelTransform.js',
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['lcov'],
  testResultsProcessor: 'jest-sonar-reporter',
  setupFilesAfterEnv: ['<rootDir>/tools/setupTests.js'],
};
