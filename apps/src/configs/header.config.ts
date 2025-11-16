/**
 * Description : header.config.ts - 📌 Json 사용하도록 Header 설정
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import languagesJson from '@/data/languages.json';
import menuJson from '@/data/menu.json';

/* 타입 정의 */
export interface LanguageItem {
  code: string;
  name: string;
}

export interface MenuLink {
  label: string;
  to: string;
  external?: boolean;
}

export interface MenuGroup {
  title?: string;
  links: MenuLink[];
}

export interface MenuColumn {
  id: string;
  title: string;
  groups?: MenuGroup[];
  links?: MenuLink[];
}

export interface MegaMenuConfig {
  columns: MenuColumn[];
}

export interface MobileMenuSection {
  title?: string;
  links: MenuLink[];
}

export interface MobileMenuConfig {
  sections: MobileMenuSection[];
}

export interface TopNavItem {
  id: string;
  label: string;
  path: string;
  megaMenu?: MegaMenuConfig;
  mobileMenu?: MobileMenuConfig;
}

export interface HeaderConfig {
  languages: LanguageItem[];
  navItems: TopNavItem[];
}

/* Type assertion을 통한 JSON 데이터 타이핑 */
export const languages = languagesJson as LanguageItem[];

// menuJson이 navItems 속성을 가지고 있는지 확인하고 타입 캐스팅
const menuData = menuJson as { navItems: TopNavItem[] };
export const navItems = menuData.navItems;

/* Export Unified Config */
export const headerConfig: HeaderConfig = {
  languages,
  navItems,
};

export default headerConfig;