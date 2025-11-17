
/**
 * Description : - 📌 i18next 초기화 - Google 번역 API 사용
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: { translation: {} },
      ko: { translation: {} },
      jp: { translation: {} },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
