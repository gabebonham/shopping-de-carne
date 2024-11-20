// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  extends: [
    'next/core-web-vitals',
    'next/typescript',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-key': 'off',
    '@next/next/no-img-element': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
  },
});
