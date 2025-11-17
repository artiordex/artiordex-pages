/**
 * Description : Breadcrumb.tsx - 📌 브레드크럼 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getBreadcrumbLabel, breadcrumbConfig } from '@/configs/breadcrumb.config';
import type { BreadcrumbProps, BreadcrumbItem } from '@/types/components.types';

const Breadcrumb = ({ customItems, className = '' }: BreadcrumbProps) => {
  const location = useLocation();

  /**
   * Breadcrumb 경로 계산
   */
  const breadcrumbItems = useMemo(() => {
    if (customItems) return customItems;

    // URL을 세그먼트로 분할
    const pathSegments = location.pathname.split('/').filter(Boolean);

    const items: BreadcrumbItem[] = [
      { label: breadcrumbConfig.homeLabel, path: '/' } 
    ];

    let currentPath = '';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      items.push({
        label: getBreadcrumbLabel(segment),
        path: currentPath,
        isActive: index === pathSegments.length - 1 
      });
    });

    return items;
  }, [location.pathname, customItems]);

  // 홈("/")에서는 브레드크럼 숨김
  if (location.pathname === '/') return null;

  return (
    <>
      {/* SEO 개선을 위한 JSON-LD(구조화 데이터) 삽입 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbItems.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.label,
              "item": `${breadcrumbConfig.baseUrl}${item.path}`
            }))
          })
        }}
      />

      {/* 데스크톱용 Breadcrumb */}
      <nav 
        className={`hidden md:block bg-gray-50 border-b border-gray-200 ${className}`}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <li key={item.path} className="flex items-center">
                  
                  {/* 구분 화살표 */}
                  {index > 0 && (
                    <i className="ri-arrow-right-s-line text-gray-400 mx-2"></i>
                  )}

                  {/* 현재 페이지 표시 */}
                  {item.isActive ? (
                    <span className="text-gray-900 font-medium" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>

      {/* 모바일용 Breadcrumb */}
      <nav 
        className={`md:hidden bg-gray-50 border-b border-gray-200 ${className}`}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center py-3">
            <ol className="flex items-center space-x-2 text-sm">
              {/* 홈 버튼 */}
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {breadcrumbConfig.homeLabel}
                </Link>
              </li>

              {/* 3뎁스 중간 경로 표시 */}
              {breadcrumbItems.length > 3 && (
                <>
                  <i className="ri-arrow-right-s-line text-gray-400 mx-1"></i>
                  <li>
                    <span className="text-gray-400">...</span>
                  </li>
                </>
              )}

              {/* 마지막 페이지 이름만 표시 */}
              {breadcrumbItems.length > 1 && (
                <>
                  <i className="ri-arrow-right-s-line text-gray-400 mx-1"></i>
                  <li>
                    <span 
                      className="text-gray-900 font-medium truncate max-w-48"
                      aria-current="page"
                    >
                      {breadcrumbItems[breadcrumbItems.length - 1].label}
                    </span>
                  </li>
                </>
              )}
            </ol>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Breadcrumb };
export default Breadcrumb;