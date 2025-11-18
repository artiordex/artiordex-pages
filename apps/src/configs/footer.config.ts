/**
 * Description : footer.config.ts - 📌 Footer JSON 기반 설정 파일
 * Author : Shiwoo Min
 * Date : 2025-11-19
 */

import type {
  FooterBrand,
  FooterColumn,
  FooterSocialItem,
  FooterLegalItem,
} from '@/types/layout.types'

import brandJson from '@/data/footerBrand.json'
import menuJson from '@/data/footerMenu.json'
import socialJson from '@/data/footerSocial.json'

/* 브랜드 정보 */
export const footerBrand = brandJson as FooterBrand

/* 메뉴 컬럼 */
export const footerColumns = menuJson.columns as FooterColumn[]

/* 법적 항목 (이용약관, 개인정보 등) */
export const footerLegal = menuJson.legal as FooterLegalItem[]

/* SNS 소셜 목록 */
export const footerSocial = socialJson.social as FooterSocialItem[]

/* FooterConfig 타입 정의 */
export interface FooterConfig {
  brand: FooterBrand
  columns: FooterColumn[]
  social: FooterSocialItem[]
  legal: FooterLegalItem[]
  year: number
}

/* Footer 설정 통합 객체 */
export const footerConfig: FooterConfig = {
  brand: footerBrand,
  columns: footerColumns,
  social: footerSocial,
  legal: footerLegal,
  year: new Date().getFullYear(),
}

export default footerConfig
