import React, { useState } from 'react';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';
import { Link } from 'react-router-dom';

interface Template {
  id: number;
  title: string;
  description: string;
  category: string;
  type: string;
  pages: number;
  downloads: number;
  lastUpdated: string;
  tags: string[];
  icon: string;
  color: string;
}

const ProjectTemplatesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedType, setSelectedType] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');

  const templates: Template[] = [
    {
      id: 1,
      title: 'AI 프로젝트 요구사항 정의서',
      description: 'AI 도입 프로젝트의 요구사항을 체계적으로 정의하고 관리할 수 있는 템플릿입니다.',
      category: 'AI/ML',
      type: '요구사항 정의서',
      pages: 24,
      downloads: 1247,
      lastUpdated: '2024-01-15',
      tags: ['AI', '요구사항', 'RFP', '프로젝트 관리'],
      icon: 'ri-robot-line',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'DX 전략 기획서 템플릿',
      description: '조직의 디지털 전환 전략을 수립하고 실행 계획을 세울 수 있는 포괄적인 기획서입니다.',
      category: 'DX 전략',
      type: '전략 기획서',
      pages: 32,
      downloads: 892,
      lastUpdated: '2024-01-10',
      tags: ['DX', '전략', '로드맵', '조직변화'],
      icon: 'ri-lightbulb-line',
      color: 'from-indigo-500 to-cyan-600'
    },
    {
      id: 3,
      title: 'Power Platform PoC 체크리스트',
      description: 'Power Platform 기반 솔루션의 PoC 진행 시 필요한 모든 체크포인트를 정리한 가이드입니다.',
      category: 'Power Platform',
      type: 'PoC 가이드',
      pages: 16,
      downloads: 634,
      lastUpdated: '2024-01-08',
      tags: ['Power Platform', 'PoC', '체크리스트', '검증'],
      icon: 'ri-checkbox-line',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 4,
      title: '업무 프로세스 매핑 워크시트',
      description: '현재 업무 프로세스를 분석하고 자동화 대상을 식별하기 위한 체계적인 매핑 도구입니다.',
      category: '프로세스 분석',
      type: '분석 도구',
      pages: 12,
      downloads: 756,
      lastUpdated: '2024-01-05',
      tags: ['프로세스', '매핑', '분석', '자동화'],
      icon: 'ri-flow-chart',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: '데이터 통합 설계 문서',
      description: 'API 기반 데이터 통합 프로젝트의 설계 단계에서 활용할 수 있는 상세 문서 템플릿입니다.',
      category: '데이터 통합',
      type: '설계 문서',
      pages: 28,
      downloads: 423,
      lastUpdated: '2024-01-03',
      tags: ['데이터', 'API', '통합', '설계'],
      icon: 'ri-database-line',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      title: 'ROI 분석 및 비용 산정 도구',
      description: '자동화 프로젝트의 투자 효과를 정량적으로 분석하고 비용을 산정하는 Excel 기반 도구입니다.',
      category: '비즈니스 분석',
      type: '분석 도구',
      pages: 8,
      downloads: 1156,
      lastUpdated: '2023-12-28',
      tags: ['ROI', '비용분석', 'Excel', '투자효과'],
      icon: 'ri-calculator-line',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 7,
      title: '사용자 교육 계획서',
      description: '새로운 시스템 도입 시 사용자 교육을 체계적으로 계획하고 실행할 수 있는 가이드입니다.',
      category: '교육/훈련',
      type: '교육 계획서',
      pages: 20,
      downloads: 567,
      lastUpdated: '2023-12-25',
      tags: ['교육', '훈련', '사용자', '변화관리'],
      icon: 'ri-graduation-cap-line',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 8,
      title: '프로젝트 위험 관리 매트릭스',
      description: 'IT 프로젝트 진행 중 발생할 수 있는 위험을 식별하고 관리하기 위한 체계적인 도구입니다.',
      category: '프로젝트 관리',
      type: '위험 관리',
      pages: 14,
      downloads: 389,
      lastUpdated: '2023-12-20',
      tags: ['위험관리', '프로젝트', '매트릭스', '리스크'],
      icon: 'ri-shield-check-line',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const categories = ['전체', ...Array.from(new Set(templates.map(t => t.category)))];
  const types = ['전체', ...Array.from(new Set(templates.map(t => t.type)))];

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === '전체' || template.category === selectedCategory;
    const matchesType = selectedType === '전체' || template.type === selectedType;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesType && matchesSearch;
  });

  const handleDownload = (templateId: number) => {
    // 실제 다운로드 로직 구현
    console.log(`Downloading template ${templateId}`);
  };

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '리소스 센터', href: '/resources' },
    { label: '도구 & 템플릿', href: '/resources/tools' },
    { label: '프로젝트 템플릿' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-700 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbItems} className="mb-8" />
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <i className="ri-file-text-line text-2xl"></i>
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-2">프로젝트 템플릿</h1>
                <p className="text-xl text-slate-200">실무에 바로 활용할 수 있는 검증된 문서 템플릿</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <p className="text-lg leading-relaxed">
                AI, DX, 자동화 프로젝트 진행 시 필요한 핵심 문서들을 템플릿 형태로 제공합니다. 
                요구사항 정의부터 위험 관리까지, 프로젝트 성공을 위한 모든 도구를 만나보세요.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                검색
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="템플릿 검색..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                />
                <i className="ri-search-line absolute left-3 top-2.5 text-gray-400"></i>
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                카테고리
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                문서 유형
              </label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent"
              >
                {types.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            총 <span className="font-semibold text-slate-700">{filteredTemplates.length}</span>개의 템플릿
          </p>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((template) => (
              <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className={`bg-gradient-to-r ${template.color} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className={`${template.icon} text-xl`}></i>
                    </div>
                    <div>
                      <span className="inline-block bg-white/20 text-xs font-medium px-2 py-1 rounded-full">
                        {template.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                  <p className="text-sm opacity-90">{template.description}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <i className="ri-file-line"></i>
                        {template.pages}페이지
                      </span>
                      <span className="flex items-center gap-1">
                        <i className="ri-download-line"></i>
                        {template.downloads.toLocaleString()}
                      </span>
                    </div>
                    <span className="text-xs">
                      {template.lastUpdated}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Type Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                      {template.type}
                    </span>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(template.id)}
                    className="w-full bg-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <i className="ri-download-line"></i>
                    다운로드
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-file-search-line text-3xl text-gray-400"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
            <p className="text-gray-600 mb-6">다른 검색어나 필터를 시도해보세요.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('전체');
                setSelectedType('전체');
              }}
              className="bg-slate-600 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              필터 초기화
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-700 to-gray-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">맞춤형 템플릿이 필요하신가요?</h2>
          <p className="text-lg mb-6 text-slate-200">
            귀하의 프로젝트에 특화된 문서 템플릿을 제작해드립니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/projects/custom-dev"
              className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              맞춤 템플릿 요청
            </Link>
            <Link
              to="/contact/enterprise/consulting"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              프로젝트 컨설팅 문의
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplatesPage;