module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: ['/node_modules/'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'src/components/**/*.{ts,vue}',
    'src/providers/**/*.{ts,vue}',
    'src/hooks/**/*.ts',
    'src/services/**/*.ts',
    'src/utils/**/*.ts'
  ]
};
