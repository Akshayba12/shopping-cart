module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'operator-linebreak': ['error', 'after'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-alert': 'off',
    'no-console': 'off',
    'react/state-in-constructor': 0,
    'jsx-a11y/anchor-is-valid': 0,
  },
  // endOfLine: 'crlf',
};
