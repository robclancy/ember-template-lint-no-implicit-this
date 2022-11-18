module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["prettier"],
  env: {
    node: true,
  },
  rules: {
    "prettier/prettier": ["error"],
  },

  overrides: [
    {
      // CJS
      files: ['**/*.cjs'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      // Tests
      files: ['test/**/*.js'],
      env: {
        jest: true,
      },
      rules: {
        'import/no-dynamic-require': 'off',
      },
    },
    {
      // Rule tests
      files: ['test/unit/rules/*.js'],
      rules: {
        'jest/no-standalone-expect': 'off', // False positives from using: verifyResults(results) { expect(results).toMatchInlineSnapshot }
      },
    },
  ],
};
