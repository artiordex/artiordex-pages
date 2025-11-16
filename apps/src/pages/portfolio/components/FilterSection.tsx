
import { useState } from 'react';

interface FilterSectionProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const FilterSection = ({ activeFilter, setActiveFilter }: FilterSectionProps) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filters = [
    { id: 'all', label: '전체 프로젝트', icon: 'ri-apps-line', count: '50+' },
    { id: 'ax-rpa', label: 'AX/RPA 자동화', icon: 'ri-robot-line', count: '10' },
    { id: 'microsoft-dx', label: 'Microsoft DX', icon: 'ri-microsoft-line', count: '10' },
    { id: 'web-app', label: 'Web/App 개발', icon: 'ri-code-s-slash-line', count: '10' },
    { id: 'platform', label: '예약/중개 플랫폼', icon: 'ri-calendar-check-line', count: '8' },
    { id: 'ai-intelligence', label: 'AI 인텔리전스', icon: 'ri-brain-line', count: '7' },
    { id: 'dx-consulting', label: 'DX 컨설팅', icon: 'ri-lightbulb-line', count: '5' }
  ];

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    setIsFilterMenuOpen(false);
  };

  return (
    <section className="py-8 md:py-12 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Filter Navigation */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`
                    group relative inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap min-h-[44px]
                    ${activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-200'
                    }
                  `}
                >
                  <i className={`${filter.icon} mr-2 text-lg`}></i>
                  <span>{filter.label}</span>
                  <span className={`
                    ml-2 px-2 py-1 text-xs rounded-full font-semibold
                    ${activeFilter === filter.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                    }
                  `}>
                    {filter.count}
                  </span>
                  
                  {/* Active indicator */}
                  {activeFilter === filter.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tablet Filter Navigation */}
          <div className="hidden md:block lg:hidden">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`
                    inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm min-h-[44px]
                    ${activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                    }
                  `}
                >
                  <i className={`${filter.icon} mr-1 text-base`}></i>
                  <span className="hidden sm:inline">{filter.label}</span>
                  <span className="sm:hidden">{filter.label.split(' ')[0]}</span>
                  <span className={`
                    ml-1 px-1.5 py-0.5 text-xs rounded-full font-semibold
                    ${activeFilter === filter.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                    }
                  `}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filter Navigation */}
          <div className="md:hidden">
            {/* Filter Toggle Button */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">프로젝트 필터</h3>
              <button
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors min-h-[44px]"
              >
                <i className={`${filters.find(f => f.id === activeFilter)?.icon} mr-2 text-lg`}></i>
                <span className="font-medium">
                  {filters.find(f => f.id === activeFilter)?.label}
                </span>
                <i className={`ri-arrow-down-s-line ml-2 transition-transform ${isFilterMenuOpen ? 'rotate-180' : ''}`}></i>
              </button>
            </div>

            {/* Collapsible Filter Menu */}
            <div className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${isFilterMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-4 space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200 min-h-[44px]
                      ${activeFilter === filter.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <i className={`${filter.icon} mr-3 text-lg`}></i>
                      <span>{filter.label}</span>
                    </div>
                    <span className={`
                      px-2 py-1 text-xs rounded-full font-semibold
                      ${activeFilter === filter.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Horizontal Swipe Filters for Mobile */}
            <div className="mt-4 overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 pb-2" style={{ width: 'max-content' }}>
                {filters.map((filter) => (
                  <button
                    key={`mobile-${filter.id}`}
                    onClick={() => handleFilterChange(filter.id)}
                    className={`
                      flex-shrink-0 inline-flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm min-h-[44px] min-w-[120px] justify-center
                      ${activeFilter === filter.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-200'
                      }
                    `}
                  >
                    <i className={`${filter.icon} mr-2 text-base`}></i>
                    <span className="truncate">{filter.label.split(' ')[0]}</span>
                    <span className={`
                      ml-1 px-1.5 py-0.5 text-xs rounded-full font-semibold
                      ${activeFilter === filter.id
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search and Sort Options */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full sm:w-auto">
              <input
                type="text"
                placeholder="프로젝트 검색 (기술, 산업, 솔루션 유형)"
                className="w-full sm:w-80 pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 mr-2">보기:</span>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button className="px-3 py-1.5 bg-white rounded-md shadow-sm text-sm font-medium text-gray-700 min-h-[36px]">
                  <i className="ri-grid-line mr-1"></i>
                  그리드
                </button>
                <button className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-700 min-h-[36px]">
                  <i className="ri-list-check mr-1"></i>
                  리스트
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Summary */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <i className="ri-filter-line mr-2"></i>
              <span>
                {activeFilter === 'all' 
                  ? '전체 프로젝트 표시 중' 
                  : `${filters.find(f => f.id === activeFilter)?.label} 필터 적용 중`
                }
              </span>
            </div>
            {activeFilter !== 'all' && (
              <button
                onClick={() => setActiveFilter('all')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                필터 초기화
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default FilterSection;
