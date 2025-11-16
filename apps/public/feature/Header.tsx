
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState('KOR');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const languages = [
    { code: 'KOR', name: '한국어' },
    { code: 'ENG', name: 'English' },
    { code: 'JPN', name: '日本語' },
    { code: 'CHN', name: '中文' },
    { code: 'ESP', name: 'Español' },
    { code: 'FRA', name: 'Français' },
    { code: 'DEU', name: 'Deutsch' },
    { code: 'ITA', name: 'Italiano' },
    { code: 'RUS', name: 'Русский' },
    { code: 'ARA', name: 'العربية' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleLanguageSelect = (language: { code: string; name: string }) => {
    setSelectedLanguage(language.code);
    setShowLanguageDropdown(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileSubmenu(null);
  };

  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  };

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
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                  Artiordex
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-5">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/about"
                  className={`font-medium text-sm px-3 py-2 transition-colors flex items-center space-x-1 ${
                    isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>회사소개</span>
                  <i className="ri-arrow-down-s-line text-sm"></i>
                </Link>
              </div>
              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('solutions')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/solutions"
                  className={`font-medium text-sm px-3 py-2 transition-colors flex items-center space-x-1 ${
                    isActive('/solutions') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>솔루션</span>
                  <i className="ri-arrow-down-s-line text-sm"></i>
                </Link>
              </div>
              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('portfolio')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/portfolio"
                  className={`font-medium text-sm px-3 py-2 transition-colors flex items-center space-x-1 ${
                    isActive('/portfolio') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>포트폴리오</span>
                  <i className="ri-arrow-down-s-line text-sm"></i>
                </Link>
              </div>
              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/resources"
                  className={`font-medium text-sm px-3 py-2 transition-colors flex items-center space-x-1 ${
                    isActive('/resources') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>리소스</span>
                  <i className="ri-arrow-down-s-line text-sm"></i>
                </Link>
              </div>
              
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/contact"
                  className={`font-medium text-sm px-3 py-2 transition-colors flex items-center space-x-1 ${
                    isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  <span>문의하기</span>
                  <i className="ri-arrow-down-s-line text-sm"></i>
                </Link>
              </div>
              
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1"
                >
                  <span>{selectedLanguage}</span>
                  <i className="ri-arrow-down-s-line text-sm"></i>
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageSelect(language)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                실시간 상담
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                aria-label="메뉴 열기"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  {isMobileMenuOpen ? (
                    <i className="ri-close-line text-xl"></i>
                  ) : (
                    <i className="ri-menu-line text-xl"></i>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden mobile-menu-container">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMobileMenu}></div>
          
          {/* Menu Panel */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                  Artiordex
                </h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
                >
                  <i className="ri-close-line text-xl"></i>
                </button>
              </div>

              {/* Menu Content */}
              <div className="flex-1 overflow-y-auto">
                <nav className="p-6 space-y-4">
                  {/* 회사소개 */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu('company')}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    >
                      <span>회사소개</span>
                      <i className={`ri-arrow-${activeMobileSubmenu === 'company' ? 'up' : 'down'}-s-line text-sm`}></i>
                    </button>
                    {activeMobileSubmenu === 'company' && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link to="/about" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">회사 개요</Link>
                        <Link to="/about/vision-mission" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">비전 & 미션</Link>
                        <Link to="/about/ceo-message" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">CEO 인사말</Link>
                        <Link to="/about/history" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">회사 연혁</Link>
                        <Link to="/about/core-values" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">핵심 가치</Link>
                        <Link to="/about/organization" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">조직도</Link>
                        <Link to="/about/teams" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">핵심 멤버</Link>
                        <Link to="/about/careers" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">채용 정보</Link>
                        <Link to="/about/partnerships" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">파트너십</Link>
                        <Link to="/location" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">오시는 길</Link>
                      </div>
                    )}
                  </div>

                  {/* 솔루션 */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu('solutions')}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    >
                      <span>솔루션</span>
                      <i className={`ri-arrow-${activeMobileSubmenu === 'solutions' ? 'up' : 'down'}-s-line text-sm`}></i>
                    </button>
                    {activeMobileSubmenu === 'solutions' && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link to="/solutions" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">솔루션 개요</Link>
                        <Link to="/solutions/artiflow" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">Artiflow</Link>
                        <Link to="/solutions/smarthub" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">SmartHub</Link>
                        <Link to="/solutions/connectstack" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">ConnectStack</Link>
                        <Link to="/solutions/ai-automation" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">AI & 자동화</Link>
                        <Link to="/solutions/data-integration" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">데이터 통합</Link>
                        <Link to="/solutions/power-platform" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">Power Platform</Link>
                      </div>
                    )}
                  </div>

                  {/* 포트폴리오 */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu('portfolio')}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    >
                      <span>포트폴리오</span>
                      <i className={`ri-arrow-${activeMobileSubmenu === 'portfolio' ? 'up' : 'down'}-s-line text-sm`}></i>
                    </button>
                    {activeMobileSubmenu === 'portfolio' && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link to="/portfolio" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">포트폴리오 전체</Link>
                        <Link to="/portfolio/ai" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">AI 프로젝트</Link>
                        <Link to="/portfolio/dx" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">DX 전환 사례</Link>
                        <Link to="/portfolio/data" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">데이터 통합</Link>
                        <Link to="/portfolio/industry" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">산업별 솔루션</Link>
                        <Link to="/portfolio/product" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">제품 기반 구축</Link>
                      </div>
                    )}
                  </div>

                  {/* 리소스 */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu('resources')}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    >
                      <span>리소스</span>
                      <i className={`ri-arrow-${activeMobileSubmenu === 'resources' ? 'up' : 'down'}-s-line text-sm`}></i>
                    </button>
                    {activeMobileSubmenu === 'resources' && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link to="/resources" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">리소스 센터</Link>
                        <Link to="/resources/blog" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">기술 블로그</Link>
                        <Link to="/resources/whitepapers" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">백서 & 가이드</Link>
                        <Link to="/resources/webinars" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">웨비나 & 이벤트</Link>
                        <Link to="/resources/tools" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">도구 & 템플릿</Link>
                      </div>
                    )}
                  </div>

                  {/* 문의하기 */}
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu('contact')}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    >
                      <span>문의하기</span>
                      <i className={`ri-arrow-${activeMobileSubmenu === 'contact' ? 'up' : 'down'}-s-line text-sm`}></i>
                    </button>
                    {activeMobileSubmenu === 'contact' && (
                      <div className="mt-2 ml-4 space-y-2">
                        <Link to="/contact" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">일반 문의</Link>
                        <Link to="/contact/projects/ai-estimate" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">AI 프로젝트 견적</Link>
                        <Link to="/contact/projects/dx-consulting" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">DX 컨설팅</Link>
                        <Link to="/contact/projects/power-platform" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">Power Platform</Link>
                        <Link to="/contact/support/maintenance" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">기술 지원</Link>
                        <Link to="/contact/partners/proposal" onClick={closeMobileMenu} className="block text-sm text-gray-600 py-1">파트너십</Link>
                      </div>
                    )}
                  </div>

                  {/* Language Selector */}
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={() => toggleMobileSubmenu('language')}
                      className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-2"
                    >
                      <span>언어 선택 ({selectedLanguage})</span>
                      <i className={`ri-arrow-${activeMobileSubmenu === 'language' ? 'up' : 'down'}-s-line text-sm`}></i>
                    </button>
                    {activeMobileSubmenu === 'language' && (
                      <div className="mt-2 ml-4 space-y-2">
                        {languages.map((language) => (
                          <button
                            key={language.code}
                            onClick={() => {
                              handleLanguageSelect(language);
                              setActiveMobileSubmenu(null);
                            }}
                            className={`block w-full text-left text-sm py-1 ${
                              selectedLanguage === language.code ? 'text-blue-600 font-medium' : 'text-gray-600'
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

              {/* Footer */}
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

      {/* Company Mega Menu */}
      {activeMenu === 'company' && (
        <div 
          className="bg-white shadow-lg border-b border-gray-100 relative z-40"
          onMouseEnter={() => handleMouseEnter('company')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="grid grid-cols-4 gap-8">
              {/* 아티올덱스 소개 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    아티올덱스 소개
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about/vision-mission" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      비전 & 미션
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/ceo-message" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      CEO 인사말
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/history" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      회사 연혁
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/core-values" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      핵심 가치
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/certifications" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      인증 & 브로슈어
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 팀 소개 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    팀 소개
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about/organization" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      조직도
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/teams" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      핵심 멤버 프로필
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/careers" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      채용 정보
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/culture" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      기업문화 & 일하는 방식
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 파트너십 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    파트너십
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/about/partnerships" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      Microsoft Partner 인증
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/partnerships" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      기술 파트너
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/partnerships" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      고객사 & 레퍼런스
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 오시는 길 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    오시는 길
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/location" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      오시는 길
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solutions Mega Menu */}
      {activeMenu === 'solutions' && (
        <div 
          className="bg-white shadow-lg border-b border-gray-100 relative z-40"
          onMouseEnter={() => handleMouseEnter('solutions')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-4 gap-12">
              {/* 핵심 솔루션 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    핵심 솔루션
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/solutions/artiflow" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      Artiflow — AI Workflow OS
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/smarthub" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      SmartHub — Data Integration
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/connectstack" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      ConnectStack — Local Operations
                    </Link>
                  </li>
                </ul>
              </div>

              {/* AI & 자동화 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    AI & 자동화
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/solutions/ai-automation" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI & Automation Solutions
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/ai-automation/rpa-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      RPA + AI 통합
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/ai-automation/document-automation" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      문서 자동화
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/ai-automation/ai-agent" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI Agent 운영
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/ai-automation/ai-consulting" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI 도입 컨설팅
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 데이터 통합 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    데이터 통합
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/solutions/data-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      데이터 통합 서비스
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/data-integration/api-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      API 통합 서비스
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/data-integration/data-migration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      데이터 마이그레이션
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/data-integration/system-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      시스템 연동 개발
                    </Link>
                  </li>
                  <li>
                    <Link to="/solutions/data-integration/enterprise-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      엔터프라이즈 연계 구조 개선
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Power Platform & 맞춤 개발 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    Power Platform & 맞춤 개발
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-600 mb-2">Power Platform</h4>
                    <ul className="space-y-1">
                      <li>
                        <Link to="/solutions/power-platform" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          Power Platform Solutions
                        </Link>
                      </li>
                      <li>
                        <a href="/solutions/power-apps" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          Power Apps 구축
                        </a>
                      </li>
                      <li>
                        <a href="/solutions/power-automate" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          Power Automate 워크플로우
                        </a>
                      </li>
                      <li>
                        <a href="/solutions/power-bi" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          Power BI 대시보드
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-medium text-gray-600 mb-2">Custom Development</h4>
                    <ul className="space-y-1">
                      <li>
                        <a href="/solutions/enterprise-development" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          엔터프라이즈 솔루션 개발
                        </a>
                      </li>
                      <li>
                        <a href="/solutions/web-app-development" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          웹/앱 커스텀 개발
                        </a>
                      </li>
                      <li>
                        <a href="/solutions/erp-crm-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          ERP/CRM 연동
                        </a>
                      </li>
                      <li>
                        <a href="/solutions/maintenance-support" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                          유지보수 & 기술 지원
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-100 mt-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">contact@artiordex.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <a href="/contact/quote" className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                    견적 요청
                  </a>
                  <a href="/contact/consultation" className="px-3 py-1 border border-blue-600 text-blue-600 text-xs font-medium rounded hover:bg-blue-50 transition-colors whitespace-nowrap">
                    상담 예약
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Mega Menu */}
      {activeMenu === 'portfolio' && (
        <div 
          className="bg-white shadow-lg border-b border-gray-100 relative z-40"
          onMouseEnter={() => handleMouseEnter('portfolio')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="grid grid-cols-5 gap-8">
              {/* AI 프로젝트 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    AI 프로젝트
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/portfolio/ai-projects" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI 프로젝트 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/ai-projects/workflow-automation" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI 워크플로우 자동화
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/ai-projects/document-intelligence" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      지능형 문서 처리
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/ai-projects/predictive-analytics" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      예측 분석 시스템
                    </Link>
                  </li>
                </ul>
              </div>

              {/* DX 전환 사례 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    DX 전환 사례
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/portfolio/dx-transformation" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      DX 전환 사례 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/dx-transformation/enterprise" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      대기업 DX 전환
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/dx-transformation/public-sector" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      공공기관 디지털화
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/dx-transformation/smes" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      중소기업 자동화
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 데이터 통합 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    데이터 통합
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/portfolio/data-integration" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      데이터 통합 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/data-integration/multi-system" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      다중 시스템 통합
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/data-integration/realtime-sync" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      실시간 데이터 동기화
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/data-integration/legacy-modernization" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      레거시 시스템 현대화
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 산업별 솔루션 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    산업별 솔루션
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/portfolio/industry" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      산업별 솔루션 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/industry/manufacturing" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      제조업 DX 솔루션
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/industry/finance" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      금융업 DX 솔루션
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/industry/healthcare" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      헬스케어 자동화
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/industry/retail" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      리테일 자동화
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 제품 기반 구축 사례 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    제품 기반 구축 사례
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/portfolio/products" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      제품 기반 사례 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/products/artiflow" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      Artiflow 적용 사례
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/products/smarthub" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      SmartHub 연동 사례
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio/products/connectstack" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      ConnectStack 운영 사례
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Resources Mega Menu */}
      {activeMenu === 'resources' && (
        <div 
          className="bg-white shadow-lg border-b border-gray-100 relative z-40"
          onMouseEnter={() => handleMouseEnter('resources')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="grid grid-cols-4 gap-8">
              {/* 기술 블로그 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    기술 블로그
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resources/blog" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      기술 블로그 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/blog/ai-trends" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI 트렌드 & 인사이트
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/blog/dx-best-practices" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      DX 베스트 프랙티스
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/blog/tech-tutorials" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      기술 튜토리얼
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 백서 & 가이드 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    백서 & 가이드
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resources/whitepapers" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      백서 & 가이드 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/whitepapers/ai-implementation-guide" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI 도입 가이드
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/whitepapers/dx-strategy-whitepaper" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      DX 전략 백서
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/whitepapers/data-integration-best-practices" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      데이터 통합 베스트 프랙티스
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 웨비나 & 이벤트 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    웨비나 & 이벤트
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resources/webinars" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      웨비나 & 이벤트 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/webinars/upcoming-webinars" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      예정된 웨비나
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/webinars/past-events" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      지난 이벤트
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/webinars/conference-presentations" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      컨퍼런스 발표자료
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 도구 & 템플릿 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-semibold text-gray-900">
                    도구 & 템플릿
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/resources/tools" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      도구 & 템플릿 전체
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/tools/roi-calculator" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      ROI 계산기
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/tools/dx-maturity-assessment" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      DX 성숙도 평가
                    </Link>
                  </li>
                  <li>
                    <Link to="/resources/tools/project-templates" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      프로젝트 템플릿
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Mega Menu */}
      {activeMenu === 'contact' && (
        <div 
          className="bg-white shadow-lg border-b border-gray-100 relative z-40"
          onMouseEnter={() => handleMouseEnter('contact')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-4 gap-8">
              {/* 프로젝트 문의 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    프로젝트 문의
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/contact/projects/ai-estimate" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      AI 프로젝트 견적 요청
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/projects/dx-consulting" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      DX 전환 컨설팅 문의
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/projects/power-platform" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      Power Platform 구축 문의
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/projects/custom-dev" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      맞춤형 개발 문의
                    </Link>
                  </li>
                </ul>
              </div>

              {/* 기술 지원 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    기술 지원
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/contact/support/maintenance" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      유지보수 지원 문의
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/support/emergency" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      긴급 장애 대응 요청
                    </Link>
                  </li>
                  <li>
                    <a href="/contact/support/portal" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      고객사 기술지원 포털 안내
                    </a>
                  </li>
                  <li>
                    <a href="/contact/support/update-guide" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      업데이트 / 패치 배포 안내
                    </a>
                  </li>
                </ul>
              </div>

              {/* 파트너십 / 제휴 제안 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    파트너십 / 제휴 제안
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/contact/partners/proposal" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      제휴 제안
                    </Link>
                  </li>
                  <li>
                    <a href="/contact/partners/microsoft" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      Microsoft 파트너 협업 문의
                    </a>
                  </li>
                  <li>
                    <a href="/contact/partners/co-development" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      솔루션 공동 개발 문의
                    </a>
                  </li>
                </ul>
              </div>

              {/* 고객 성공 & 기업 전용 */}
              <div className="space-y-3">
                <div className="border-b border-gray-100 pb-2">
                  <h3 className="text-sm font-bold text-gray-900">
                    고객 성공 & 기업 전용
                  </h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <Link to="/contact/enterprise/consulting" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      도입 컨설팅
                    </Link>
                  </li>
                  <li>
                    <a href="/contact/enterprise/onboarding" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      교육 & 온보딩 지원
                    </a>
                  </li>
                  <li>
                    <a href="/contact/enterprise/guide-request" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      사용 가이드 요청
                    </a>
                  </li>
                  <li>
                    <a href="/contact/enterprise/public-sector" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      공공기관 프로젝트 문의
                    </a>
                  </li>
                  <li>
                    <a href="/contact/enterprise/dx-partnership" className="block text-sm text-gray-700 hover:text-blue-600 transition-colors py-1">
                      기업 단위 DX 전략 파트너십
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="border-t border-gray-100 mt-6 pt-4">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">contact@artiordex.com</span> | 
                  <span className="ml-2">02-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Link to="/contact/projects/ai-estimate" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors whitespace-nowrap">
                    견적 요청
                  </Link>
                  <Link to="/contact/enterprise/consulting" className="px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded hover:bg-blue-50 transition-colors whitespace-nowrap">
                    상담 예약
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
