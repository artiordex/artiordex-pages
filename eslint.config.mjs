/**
 * Description : eslint.config.mjs - 📌 React + TS + Vite ESLint 설정
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  eslint.configs.recommended,
  prettier, // Prettier와 충돌 제거

  {
    files: ['**/*.{ts,tsx,js,jsx}'],

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },

      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'jsx-a11y': a11y,
    },

    settings: {
      react: { version: 'detect' },

      // import resolver 고급 설정
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },

        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },

        typescript: false,
      },
    },

    rules: {
      /* TypeScript 규칙 */
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'off',

      /* React 규칙 */
      'react/react-in-jsx-scope': 'off',
      "react/button-has-type": "off",
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      /* 접근성(A11Y) */
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/no-autofocus': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',

      /* import 규칙 */
      'import/no-duplicates': 'warn',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      /* 기타 스타일 규칙 */
      semi: ['error', 'always'],
      quotes: 'off',
      indent: 'off',

      /* 환경 규칙 */
      'no-console': 'off',
      'no-undef': 'off',
    },
  },

  /* ESLint 무시 */
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '*.config.js',
      '*.config.mjs',
      'pnpm-lock.yaml',
    ],
  },
];
