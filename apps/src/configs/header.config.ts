/**
 * Description : header.config.ts - 📌 Json 기반 Header 설정
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import languagesJson from '@/data/languages.json'
import menuJson from '@/data/menu.json'

/* 타입 정의  */
export interface LanguageItem {
  code: string
  name: string
}

export interface MenuLink {
  label: string
  to: string
  external?: boolean
}

export interface MenuGroup {
  title?: string
  links: MenuLink[]
}

export interface MenuColumn {
  id: string
  title?: string
  groups?: MenuGroup[]
  links?: MenuLink[]
}

export interface MegaMenuConfig {
  columns: MenuColumn[]
}

export interface MobileMenuSection {
  title?: string
  links: MenuLink[]
}

export interface MobileMenuConfig {
  sections: MobileMenuSection[]
}

export interface TopNavItem {
  id: string
  label: string
  path: string
  megaMenu?: MegaMenuConfig
  mobileMenu?: MobileMenuConfig
}

export interface HeaderConfig {
  languages: LanguageItem[]
  navItems: TopNavItem[]
}

/* JSON 데이터 병합 */
export const languages = languagesJson as LanguageItem[]

const menuData = menuJson as { navItems: TopNavItem[] }
export const navItems = menuData.navItems

/* 통합 HeaderConfig Export  */
export const headerConfig: HeaderConfig = {
  languages,
  navItems,
}

export default headerConfig
