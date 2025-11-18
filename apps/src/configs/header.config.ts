/**
 * Description : header.config.ts - 📌 JSON 기반 Header 설정
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import languagesJson from '@/data/languages.json'
import menuJson from '@/data/menu.json'

/* 단일 언어 아이템 설정 */
export interface LanguageItem {
  code: string
  name: string
  flag: string
}

/* 메가메뉴/모바일 공통 링크 타입 */
export interface MenuLink {
  label: string
  to: string
  external?: boolean
}

/* 그룹형 메뉴 (문단 제목 + links) */
export interface MenuGroup {
  title?: string
  links: MenuLink[]
}

/* 컬럼 구조 (title or groups or direct links) */
export interface MenuColumn {
  id: string
  title?: string
  groups?: MenuGroup[]
  links?: MenuLink[]
}

/** 메가메뉴 Footer 연락처 타입 */
export interface MegaMenuFooterContact {
  type: string
  icon: string
  label: string
  href: string
}

/* 메가메뉴 Footer CTA 버튼 타입 */
export interface MegaMenuFooterAction {
  label: string
  to: string
}

/* 메가메뉴 전체 구조 */
export interface MegaMenuConfig {
  columns: MenuColumn[]

  /* footer */
  footer?: {
    contacts: MegaMenuFooterContact[]
    actions: MegaMenuFooterAction[]
  }
}

/* 모바일 메뉴 단일 섹션 */
export interface MobileMenuSection {
  title?: string
  links: MenuLink[]
}

/* 모바일 메뉴 구조 */
export interface MobileMenuConfig {
  sections: MobileMenuSection[]
}

/* Top Navigation 단일 메뉴 */
export interface TopNavItem {
  id: string
  label: string
  path: string
  megaMenu?: MegaMenuConfig
  mobileMenu?: MobileMenuConfig
}

/* 전체 HeaderConfig 루트 타입 */
export interface HeaderConfig {
  languages: LanguageItem[]
  navItems: TopNavItem[]
}

/* 언어 목록 로드 */
export const languages = languagesJson as LanguageItem[]  // export: 언어 설정 리스트

/* 메뉴 JSON 로드 */
const menuData = menuJson as { navItems: TopNavItem[] }

/* 상단 네비게이션 메뉴 리스트 */
export const navItems = menuData.navItems  // export: Top Navigation 구조

/* HeaderConfig 완성본 */
export const headerConfig: HeaderConfig = {
  languages,
  navItems,
}  // export: 최종 Header 설정

/* 기본 Export */
export default headerConfig
