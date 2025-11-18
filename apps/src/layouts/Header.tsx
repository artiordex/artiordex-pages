/**
 * Description : Header.tsx - 📌 헤더 컴포넌트 (MegaMenuLayout, SearchMenu 적용)
 * Author : Shiwoo Min
 * Date : 2025-11-17
 */

import {
  headerConfig,
  type MobileMenuSection
} from '@/configs/header.config';
import MegaMenuLayout from '@/layouts/MegaMenu';
import SearchMenuLayout from '@/layouts/SearchMenu';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // 검색 레이어 상태
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedLanguage, setSelectedLanguage] = useState('KOR');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const searchLayerRef = useRef<HTMLDivElement>(null);

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
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // 외부 클릭 처리 — 메가메뉴, 언어, 검색, 모바일 메뉴
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      // 언어 드롭다운 닫기
      if (
        showLanguageDropdown &&
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }

      // 검색 레이어 닫기
      if (
        showSearch &&
        searchLayerRef.current &&
        !searchLayerRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }

      // 모바일 메뉴 닫기
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest('.mobile-menu-container')
      ) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, showLanguageDropdown, showSearch]);

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    setShowLanguageDropdown(false);
  };

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

  const selectedLanguageLabel =
    headerConfig.languages.find(lang => lang.code === selectedLanguage)?.name ||
    selectedLanguage;

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
      {/* ⭐ 헤더 */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16 relative">

            {/* 로고 */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="/images/logo/Artiordex_logo.png"
                alt="Artiordex"
                className="h-10 w-auto mr-2"
              />
              <h1 className="text-2xl font-bold text-blue-600 font-pretendard">
                아티올덱스
              </h1>
            </Link>

            {/* ⬅ 메뉴 */}
            <nav className="hidden lg:flex items-center space-x-3 ml-auto">

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

                  {activeMenu === item.id && item.megaMenu && (
                    <div
                      className="fixed left-0 right-0 w-full z-40"
                      style={{ top: '64px' }}
                    >
                      <MegaMenuLayout
                        menu={item.megaMenu}
                        menuId={item.id}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* 🔍 검색 버튼 */}
              <button
                type="button"
                aria-label="검색"
                onClick={() => {
                  setShowSearch(!showSearch);
                  setActiveMenu(null); // 메가메뉴 닫기
                }}
                className="px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <i className="ri-search-line text-lg"></i>
              </button>

              {/* 🌍 언어 선택 */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2 min-w-[140px]"
                >
                  <img
                    src={`https://flagcdn.com/24x18/${headerConfig.languages.find(l => l.code === selectedLanguage)?.flag}.png`}
                    alt=""
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span className="flex-1 text-left">{selectedLanguageLabel}</span>
                  <i className={`ri-arrow-${showLanguageDropdown ? 'up' : 'down'}-s-line text-sm`} />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[140px]">
                    <div className="py-1 max-h-64 overflow-y-auto">
                      {headerConfig.languages.map(lang => (
                        <button
                          type="button"
                          key={lang.code}
                          onClick={() => handleLanguageSelect(lang.code)}
                          className={`block w-full text-left px-3 py-2 text-sm transition-colors ${
                            selectedLanguage === lang.code
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span className={`fi fi-${lang.flag} fis rounded-sm`}></span>
                            <span className={selectedLanguage === lang.code ? 'font-medium' : ''}>
                              {lang.name}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 상담 CTA */}
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                실시간 상담
              </button>
            </nav>

            {/* 모바일 메뉴 */}
            <div className="lg:hidden">
              <button
                type="button"
                aria-label={isMobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
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

      {/* 검색 레이어 — MegaMenu와 동일한 위치/스타일 */}
      <div
        ref={searchLayerRef}
        className={`
          fixed left-0 right-0 z-40 overflow-hidden transition-all duration-200 ease-out
          ${showSearch ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ top: '64px' }}
      >
        <SearchMenuLayout
          query={searchQuery}
          onQueryChange={setSearchQuery}
          onClose={() => setShowSearch(false)}
        />
      </div>

      {/* 모바일 메뉴 */}
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
                <h2 className="text-xl font-bold text-blue-600">
                  아티올덱스
                </h2>
                <button
                  type="button"
                  aria-label="메뉴 닫기"
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-blue-600"
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
                            type="button"
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
                      type="button"
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
                            type="button"
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
                  type="button"
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
