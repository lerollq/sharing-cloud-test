module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['serviceWorker.ts', 'setupTests.ts'],
  extends: ['airbnb-typescript'],
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 0,
    '@typescript-eslint/semi': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'class-methods-use-this': 0,
    radix: 0,
  },
}
