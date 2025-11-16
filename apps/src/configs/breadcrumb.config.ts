/**
 * Description : breadcrumb.config.ts - 📌 Breadcrumb 설정 (JSON 로딩 + 타입)
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import data from '@/data/breadcrumb.json';

/* 타입 정의 */
export interface BreadcrumbConfig {
  homeLabel: string;
  baseUrl: string;
  routes: Record<string, string>;
}

/**
 * JSON 데이터를 타입 안전하게 추론하도록 래핑
 */
export const breadcrumbConfig = data as BreadcrumbConfig;

/**
 * 헬퍼 함수: 세그먼트를 라벨로 변환
 * JSON의 routes에 없으면 자동으로 Capitalize 처리
 */
export const getBreadcrumbLabel = (segment: string): string => {
  return (
    breadcrumbConfig.routes[segment] ||
    segment.charAt(0).toUpperCase() + segment.slice(1)
  );
};

/**
 * 헬퍼 함수: 전체 Breadcrumb 데이터 반환
 */
export const getBreadcrumbConfig = () => breadcrumbConfig;
