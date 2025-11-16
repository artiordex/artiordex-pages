/**
 * Description : eslint.config.mjs - 📌 React + TypeScript + Vite 프로젝트 기본 ESLint 설정
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';

export default [

  /* 자바스크립트 기본 규칙 */
  eslint.configs.recommended,

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
        globalThis: 'readonly',
      },
    },

    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
    },

    settings: {
      react: { version: 'detect' },

      /* import/resolver 충돌 제거 — 이걸로 문제 100% 해결됨 */
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        typescript: false, // ❗ FlatConfig 모드에서 resolver 충돌 방지 (핵심)
      },
    },

    rules: {
      /* TypeScript 규칙 */
      ...tseslint.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'off',

      /* React 규칙 */
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

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

      /* 스타일 규칙 (Prettier에서 처리) */
      semi: ['error', 'always'],
      quotes: 'off',
      indent: 'off',

      /* inline style 경고 제거 */
      'react/forbid-dom-props': 'off',
      'react/style-prop-object': 'off',
      'no-console': 'off',
      'no-undef': 'off',
    },
  },

  /* ESLint 무시 */
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      'vite.config.ts',
      'pnpm-lock.yaml',
    ],
  },
];
