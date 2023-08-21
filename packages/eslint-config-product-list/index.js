module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
    {
      files: ['*.{jsx,tsx}'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
      ],
    },
  ],
}
