/**
 * Description : Header.tsx - 📌 헤더 컴포넌트
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

const Header: React.FC = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('KOR');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // Check if current path is active
  const isActive = (path: string): boolean => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Handle desktop menu hover
  const handleMouseEnter = (menuId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(menuId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  // Handle language selection
  const handleLanguageSelect = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    setShowLanguageDropdown(false);
  };

  // Mobile menu handlers
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

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close language dropdown
      if (
        showLanguageDropdown &&
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguageDropdown(false);
      }

      // Close mobile menu
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest('.mobile-menu-container')
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Control body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, showLanguageDropdown]);

  // Get selected language label
  const selectedLanguageLabel =
    headerConfig.languages.find(lang => lang.code === selectedLanguage)?.name || selectedLanguage;

  // Render menu links
  const renderMenuLinks = (links: MenuLink[]) => (
    <ul className="space-y-2">
      {links.map((link) => (
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

  // Render menu column
  const renderMenuColumn = (column: MenuColumn) => (
    <div key={column.id} className="space-y-3">
      <div className="border-b border-gray-100 pb-2">
        <h3 className="text-sm font-semibold md:font-bold text-gray-900">
          {column.title}
        </h3>
      </div>

      {/* Render groups if exists */}
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

  // Render mega menu
  const renderMegaMenu = (item: TopNavItem) => {
    if (!item.megaMenu) return null;

    const columnCount = item.megaMenu.columns.length;
    const gridCols = columnCount <= 3 ? 'md:grid-cols-3' : columnCount === 4 ? 'md:grid-cols-4' : 'md:grid-cols-5';

    return (
      <div
        className="absolute left-0 right-0 top-full bg-white shadow-lg border-b border-gray-100 z-40"
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-6">
          <div className={`grid grid-cols-1 ${gridCols} gap-8 md:gap-12`}>
            {item.megaMenu.columns.map(renderMenuColumn)}
          </div>
        </div>
      </div>
    );
  };

  // Render mobile menu section
  const renderMobileMenuSection = (section: MobileMenuSection, index: number) => (
    <div key={index} className="space-y-1">
      {section.title && (
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
          {section.title}
        </p>
      )}
      {section.links.map((link) => (
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
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <h1
                  className="text-2xl font-bold text-blue-600"
                  style={{ fontFamily: '"Pacifico", serif' }}
                >
                  Artiordex
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              {headerConfig.navItems.map((item) => (
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

                  {/* Render mega menu if active */}
                  {activeMenu === item.id && renderMegaMenu(item)}
                </div>
              ))}

              {/* Language Selector */}
              <div className="relative" ref={languageDropdownRef}>
                <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
                  aria-label="언어 선택"
                  aria-expanded={showLanguageDropdown ? "true" : "false"}
                  aria-haspopup="listbox"
                >
                  <i className="ri-global-line text-base mr-1" />
                  <span>{selectedLanguageLabel}</span>
                  <i className={`ri-arrow-${showLanguageDropdown ? 'up' : 'down'}-s-line text-sm`} />
                </button>
              </div>

                {/* Language Dropdown */}
                {showLanguageDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1 max-h-64 overflow-y-auto">
                      {headerConfig.languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageSelect(language.code)}
                          className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                            selectedLanguage === language.code
                              ? 'bg-blue-50 text-blue-600 font-medium'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                          }`}
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                실시간 상담
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={showLanguageDropdown as React.AriaAttributes['aria-expanded']}
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden mobile-menu-container">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile menu panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
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
                  aria-label="메뉴 닫기"
                >
                  <i className="ri-close-line text-xl" />
                </button>
              </div>

              {/* Mobile menu content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-4">
                  {headerConfig.navItems.map((item) => (
                    <div key={item.id}>
                      {item.mobileMenu ? (
                        <>
                          <button
                            onClick={() => toggleMobileSubmenu(item.id)}
                            className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                          >
                            <span>{item.label}</span>
                            <i
                              className={`ri-arrow-${
                                activeMobileSubmenu === item.id ? 'up' : 'down'
                              }-s-line text-sm`}
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

                  {/* Language selector in mobile */}
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
                        className={`ri-arrow-${
                          activeMobileSubmenu === 'language' ? 'up' : 'down'
                        }-s-line text-sm`}
                      />
                    </button>

                    {activeMobileSubmenu === 'language' && (
                      <div className="mt-2 ml-4 space-y-2">
                        {headerConfig.languages.map((language) => (
                          <button
                            key={language.code}
                            onClick={() => {
                              handleLanguageSelect(language.code);
                              setActiveMobileSubmenu(null);
                            }}
                            className={`block w-full text-left text-sm py-1 ${
                              selectedLanguage === language.code
                                ? 'text-blue-600 font-medium'
                                : 'text-gray-600'
                            }`}
                          >
                            {language.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </nav>
              </div>

              {/* Mobile menu footer */}
              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={closeMobileMenu}
                  className="w-full px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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
