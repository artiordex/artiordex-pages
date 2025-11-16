/**
 * Description : Breadcrumb.tsx - 📌 브레드크럼 컴포넌트
 * Author : Shiwoo Min
 * Date : 2025-11-16
 */

import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getBreadcrumbLabel, breadcrumbConfig } from '@/configs/breadcrumb.config';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ customItems, className = '' }: BreadcrumbProps) => {
  const location = useLocation();

  const breadcrumbItems = useMemo(() => {
    if (customItems) {
      return customItems;
    }

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

  if (location.pathname === '/') return null;

  return (
    <>
      {/* SEO Structured Data */}
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

      {/* Desktop */}
      <nav 
        className={`hidden md:block bg-gray-50 border-b border-gray-200 ${className}`}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <ol className="flex items-center space-x-2 text-sm">
              {breadcrumbItems.map((item, index) => (
                <li key={item.path} className="flex items-center">
                  {index > 0 && (
                    <i className="ri-arrow-right-s-line text-gray-400 mx-2"></i>
                  )}

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

      {/* Mobile */}
      <nav 
        className={`md:hidden bg-gray-50 border-b border-gray-200 ${className}`}
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center py-3">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  {breadcrumbConfig.homeLabel}
                </Link>
              </li>

              {breadcrumbItems.length > 2 && (
                <>
                  <i className="ri-arrow-right-s-line text-gray-400 mx-1"></i>
                  <li><span className="text-gray-400">...</span></li>
                </>
              )}

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
