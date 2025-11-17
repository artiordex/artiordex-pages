/**
 * Description : Header.tsx - 📌 헤더 컴포넌트 (MegaMenuLayout 적용)
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import {
  headerConfig,
  type MenuColumn,
  type MenuGroup,
  type MenuLink,
  type MobileMenuSection,
  type TopNavItem
} from '@/configs/header.config';

import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// 메가메뉴 레이아웃 적용
import MegaMenuLayout from '@/layouts/MegaMenu';

const Header: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('KOR');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // 현재 페이지와 메뉴 path 비교
  const isActive = (path: string): boolean => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // 데스크톱 메뉴 hover 시작
  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuId);
  };

  // hover 종료 → 딜레이 후 닫힘
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  // 언어 변경
  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    setShowLanguageDropdown(false);
  };

  // 모바일 메뉴 열기/닫기
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menuId: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menuId ? null : menuId);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

  // 언마운트 시 timeout 제거
  useEffect(() => {
    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  // 외부 클릭 시 언어 / 모바일 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showLanguageDropdown &&
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }

      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest('.mobile-menu-container')
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, showLanguageDropdown]);

  const selectedLanguageLabel =
    headerConfig.languages.find(lang => lang.code === selectedLanguage)?.name ||
    selectedLanguage;

  // 메가메뉴 내부의 링크 렌더링
  const renderMenuLinks = (links: MenuLink[]) => (
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.to}>
          {link.external ? (
            <a
              href={link.to}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
            >
              {link.label}
              <i className="ri-external-link-line text-xs ml-1" />
            </a>
          ) : (
            <Link
              to={link.to}
              className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1"
              onClick={() => setActiveMenu(null)}
            >
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  // 메가메뉴 컬럼 렌더링
  const renderMenuColumn = (column: MenuColumn) => (
    <div key={column.id} className="space-y-3">
      <div className="border-b border-gray-100 pb-2">
        <h3 className="text-sm font-semibold md:font-bold text-gray-900">
          {column.title}
        </h3>
      </div>

      {column.groups ? (
        column.groups.map((group: MenuGroup, index: number) => (
          <div key={group.title || `group-${index}`} className="space-y-2">
            {group.title && (
              <h4 className="text-xs font-medium text-gray-600 mb-1">
                {group.title}
              </h4>
            )}
            {renderMenuLinks(group.links)}
          </div>
        ))
      ) : column.links ? (
        renderMenuLinks(column.links)
      ) : null}
    </div>
  );

  // ⚡ 기존 renderMegaMenu 유지 + 내부 구조는 MegaMenuLayout으로 대체
  const renderMegaMenu = (item: TopNavItem) => {
    if (!item.megaMenu) return null;

    return (
      <div
        className="absolute left-0 right-0 top-full z-40"
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={handleMouseLeave}
      >
        {/* 📌 여기서 MegaMenuLayout 렌더링 */}
        <MegaMenuLayout menu={item.megaMenu} />
      </div>
    );
  };

  // 모바일 서브 메뉴 렌더링
  const renderMobileMenuSection = (section: MobileMenuSection, index: number) => (
    <div key={index} className="space-y-1">
      {section.title && (
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
          {section.title}
        </p>
      )}
      {section.links.map(link => (
        <Link
          key={link.to}
          to={link.to}
          onClick={closeMobileMenu}
          className="block text-sm text-gray-600 hover:text-blue-600 py-1 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {/* =======================
          📌 데스크톱 헤더
      ======================== */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">

            {/* 로고 */}
            <Link to="/" className="flex-shrink-0">
              <h1
                className="text-2xl font-bold text-blue-600"
                style={{ fontFamily: '"Pacifico", serif' }}
              >
                Artiordex
              </h1>
            </Link>

            {/* 데스크톱 메뉴 */}
            <nav className="hidden lg:flex items-center space-x-5">
              {headerConfig.navItems.map(item => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`font-medium text-sm px-3 py-2 transition-colors flex items-center space-x-1 ${
                      isActive(item.path)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.megaMenu && (
                      <i className="ri-arrow-down-s-line text-sm" />
                    )}
                  </Link>

                  {/* 📌 MegaMenuLayout 적용 */}
                  {activeMenu === item.id && renderMegaMenu(item)}
                </div>
              ))}

              {/* 언어 선택 */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
                >
                  <i className="ri-global-line text-base mr-1" />
                  <span>{selectedLanguageLabel}</span>
                  <i className={`ri-arrow-${showLanguageDropdown ? 'up' : 'down'}-s-line text-sm`} />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1 max-h-64 overflow-y-auto">
                      {headerConfig.languages.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedLanguage === lang.code
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA 버튼 */}
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                실시간 상담
              </button>
            </nav>

            {/* 모바일 메뉴 버튼 */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {isMobileMenuOpen ? (
                    <i className="ri-close-line text-xl" />
                  ) : (
                    <i className="ri-menu-line text-xl" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =======================
          📌 모바일 전체 메뉴
      ======================== */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden mobile-menu-container">
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">

              {/* 상단 */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2
                  className="text-xl font-bold text-blue-600"
                  style={{ fontFamily: '"Pacifico", serif' }}
                >
                  Artiordex
                </h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                >
                  <i className="ri-close-line text-xl" />
                </button>
              </div>

              {/* 메뉴 리스트 */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-4">
                  {headerConfig.navItems.map(item => (
                    <div key={item.id}>
                      {item.mobileMenu ? (
                        <>
                          <button
                            onClick={() => toggleMobileSubmenu(item.id)}
                            className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                          >
                            <span>{item.label}</span>
                            <i
                              className={`ri-arrow-${activeMobileSubmenu === item.id ? 'up' : 'down'}-s-line text-sm`}
                            />
                          </button>

                          {activeMobileSubmenu === item.id && (
                            <div className="mt-2 ml-4 space-y-2">
                              {item.mobileMenu.sections.map((section, idx) =>
                                renderMobileMenuSection(section, idx)
                              )}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={closeMobileMenu}
                          className="block font-medium text-gray-900 py-2"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}

                  {/* 모바일 언어 선택 */}
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => toggleMobileSubmenu('language')}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    >
                      <span className="flex items-center">
                        <i className="ri-global-line text-base mr-2" />
                        언어 선택 ({selectedLanguageLabel})
                      </span>
                      <i
                        className={`ri-arrow-${activeMobileSubmenu === 'language' ? 'up' : 'down'}-s-line text-sm`}
                      />
                    </button>

                    {activeMobileSubmenu === 'language' && (
                      <div className="mt-2 ml-4 space-y-2">
                        {headerConfig.languages.map(lang => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              handleLanguageSelect(lang.code);
                              setActiveMobileSubmenu(null);
                            }}
                            className={`block w-full text-left text-sm py-1 ${
                              selectedLanguage === lang.code
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-600'
                            }`}
                          >
                            {lang.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>
              </div>

              {/* 하단 CTA */}
              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={closeMobileMenu}
                  className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
                >
                  실시간 상담
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Header;
