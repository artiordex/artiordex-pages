/**
 * Description : prettier.config.mjs - 📌 Prettier 설정
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

export default {
  /* 코드 스타일 */
  arrowParens: 'avoid',
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 120, // UI 중심이라 가독성 좋은 120 추천
  bracketSpacing: true,
  semi: true,

  /* 플러그인 설정 */
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // Nx + pnpm 환경에서 플러그인 검색 비활성화
  pluginSearchDirs: false,

  /* import 정렬 규칙 (가장 중요) */
  importOrder: [
    // Node built-in modules
    '^(node:.*)$',

    // 외부 라이브러리 (react, axios 등)
    '<THIRD_PARTY_MODULES>',

    // 절대경로 @/
    '^@/(.*)$',

    // 상대경로
    '^[./]',

    // CSS, 스타일 파일
    '.(css|scss)$',
  ],

  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,

  /* Parser 지원 플러그인 */
  importOrderParserPlugins: [
    'typescript',
    'jsx',
    'classProperties',
    ['decorators', { decoratorsBeforeExport: true }],
  ],
};
