/**
 * Description : layout.types.ts - 📌 레이아웃 컴포넌트 전용 타입 정의
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import type { ReactNode } from 'react';

/**
 * 레이아웃 종류 정의
 * - default : 일반 사용자 페이지 (기본 흰 배경)
 * - admin   : 관리자 페이지 (사이드바 + Blue Header)
 * - auth    : 로그인/회원가입 화면 (중앙 정렬)
 * - minimal : 여백 최소화된 화면
 */
export type LayoutVariant = 'default' | 'admin' | 'auth' | 'minimal';

/**
 * AppShell 레이아웃 props 정의
 */
export interface AppShellProps {
  /* 레이아웃 종류 */
  variant?: LayoutVariant;

  /* Header 표시 여부 */
  showHeader?: boolean;

  /* Footer 표시 여부 */
  showFooter?: boolean;

  /* Sidebar 표시 여부 (기본값: variant === 'admin') */
  showSidebar?: boolean;

  /* 사용자 정의 Header (slot) */
  headerSlot?: ReactNode;

  /* 사용자 정의 Sidebar (slot) */
  sidebarSlot?: ReactNode;

  /* 사용자 정의 Footer (slot) */
  footerSlot?: ReactNode;

  /* 메인 콘텐츠 */
  children?: ReactNode;

  /* 레이아웃 전체에 적용할 클래스 */
  className?: string;
}
