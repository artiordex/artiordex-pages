/**
 * Description : layout.types.ts - 📌 레이아웃 컴포넌트 전용 타입 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { HTMLAttributes, ReactNode } from "react";

/**
 * 레이아웃 종류 정의
 * - default : 일반 사용자 페이지 (기본 흰 배경)
 * - admin   : 관리자 페이지 (사이드바 + Blue Header)
 * - auth    : 로그인/회원가입 화면 (중앙 정렬)
 * - minimal : 여백 최소화된 화면
 */
export type LayoutVariant = "default" | "admin" | "auth" | "minimal";

/**
 * AppShell 레이아웃 Props
 */
export interface AppShellProps {
  variant?: LayoutVariant;
  showHeader?: boolean;
  showFooter?: boolean;
  showSidebar?: boolean;
  headerSlot?: ReactNode;
  sidebarSlot?: ReactNode;
  footerSlot?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/**
 * Container 사이즈 옵션
 */
export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full";

/**
 * Container padding 옵션
 */
export type ContainerPadding =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl";

/**
 * Container Props
 * - forwardRef + div 속성 확장
 */
export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize;
  padding?: ContainerPadding;
  centered?: boolean;
  children?: ReactNode;
}

/**
 * FooterProps
 */
export interface FooterWithLinkProps extends FooterProps {
  LinkComponent?: React.ComponentType<{
    href: string;
    children: React.ReactNode;
    className?: string;
    external?: boolean;
  }>;
}

export interface FooterCompanyInfo {
  ceo?: string;
  ceo_kor?: string;
  expertise?: string;
  business_number?: string;
  business_email?: string;
  location?: string;
}

export interface FooterBrand {
  name?: string;
  logo?: ReactNode;
  description?: string;
  company?: FooterCompanyInfo;
}

/**
 * Footer 브랜드 정보
 */
export interface FooterBrand {
  name?: string;
  logo?: ReactNode;
  description?: string;
}

/**
 * Footer 컬럼 내부 링크
 */
export interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * Footer 컬럼
 */
export interface FooterColumn {
  title: string;
  links: FooterLinkItem[];
}

/**
 * Footer 소셜 링크
 */
export interface FooterSocialItem {
  label: string;
  href: string;
  icon?: ReactNode;
  external?: boolean;
}

/**
 * Footer 법적 정보 (이용약관 / 개인정보 처리방침 등)
 */
export interface FooterLegalItem {
  label: string;
  href: string;
  external?: boolean;
}

/**
 * FooterProps - 전체 Footer 전달 props
 */
export interface FooterProps {
  brand?: FooterBrand;
  columns?: FooterColumn[];
  social?: FooterSocialItem[];
  legal?: FooterLegalItem[];
  year?: number;
  className?: string;
  containerClassName?: string;
  bottomRightSlot?: ReactNode;
}

/**
 * GridProps - 그리드 레이아웃 컴포넌트 전용 타입
 */
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12;
  gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  responsive?: boolean;
  className?: string;
}

/**
 * HeroCarousel 슬라이드 항목 타입
 */
export interface HeroCarouselSlide {
  image: string;
  alt?: string;
  title: string;
  highlight?: string;
  description?: string;
}

/**
 * HeroCarouselProps - Hero Carousel 컴포넌트 전체 Props
 */
export interface HeroCarouselProps {
  slides: HeroCarouselSlide[];
  interval?: number;
  autoPlay?: boolean;
  align?: 'left' | 'center';
  className?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
  renderCtas?: (currentIndex: number) => React.ReactNode;
  onSlideChange?: (index: number) => void;
  contentPaddingClass?: string;
  maxWidthClass?: string;
}

/**
 * QuickMenuItem - 플로팅 퀵메뉴 버튼 항목
 */
export interface QuickMenuItem {
  id: string;
  icon: string | React.ReactNode;
  label: string;
  onClick: () => void;
  href?: string;
  target?: '_self' | '_blank';
  className?: string;
}

/**
 * QuickMenuProps - 퀵메뉴 전체 옵션
 */
export interface QuickMenuProps {
  items?: QuickMenuItem[];
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  showScrollToTop?: boolean;
  scrollThreshold?: number;
  className?: string;
  buttonColor?: string;
  enableAnimation?: boolean;
  isClient?: boolean;
}

/**
 * SectionProps - 섹션 레이아웃 컴포넌트 Props
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'transparent' | 'muted' | 'soft';
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Stack 레이아웃 컴포넌트 Props
 */
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

