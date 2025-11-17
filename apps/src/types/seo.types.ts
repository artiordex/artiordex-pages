/**
 * Description : seo.types.ts - 📌 SEO 타입 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */


export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;

  // OpenGraph
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;

  // Twitter
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;

  // JSON-LD (필요한 페이지에서만 사용)
  jsonLd?: Record<string, any> | Record<string, any>[];
}
