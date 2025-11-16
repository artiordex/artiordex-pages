/**
 * Description : prettier.config.mjs - 📌 Prettier 설정
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

export default {
  arrowParens: 'avoid',
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  printWidth: 150,
  bracketSpacing: true,
  semi: true,

  // 플러그인 (정렬 + Tailwind)
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],

  // IDE 호환성 (Nx + pnpm workspace 환경에서 플러그인 탐색 방지)
  pluginSearchDirs: false,

  // import 순서 설정
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderCaseInsensitive: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy', 'classProperties'],
};
