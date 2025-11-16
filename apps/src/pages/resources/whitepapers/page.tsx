import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';
import Header from '../../../components/feature/Header';

const WhitepapersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: '전체', count: 24 },
    { id: 'ai-guide', name: 'AI 도입 가이드', count: 8 },
    { id: 'dx-strategy', name: 'DX 전략 백서', count: 9 },
    { id: 'data-integration', name: '데이터 통합 베스트 프랙티스', count: 7 }
  ];

  const whitepapers = [
    {
      id: 1,
      title: 'AI 도입 완전 가이드: 기업 AI 전환을 위한 단계별 로드맵',
      description: '기업의 AI 도입부터 운영까지 전 과정을 다루는 종합 가이드. 데이터 준비, 모델 선택, 인프라 구축, ROI 측정까지 실무진이 알아야 할 모든 내용을 담았습니다.',
      category: 'AI 도입 가이드',
      pages: 45,
      publishDate: '2024-01-15',
      downloadCount: 1247,
      tags: ['AI 도입', '로드맵', 'ROI', '데이터 준비'],
      fileSize: '3.2MB',
      image: 'https://readdy.ai/api/search-image?query=Professional%20AI%20implementation%20guide%20document%20cover%20with%20corporate%20charts%20and%20AI%20technology%20icons%2C%20clean%20business%20design%20with%20blue%20and%20white%20color%20scheme&width=300&height=400&seq=wp1&orientation=portrait'
    },
    {
      id: 2,
      title: 'DX 전략 수립 백서: 디지털 전환 성공을 위한 전략 프레임워크',
      description: '성공적인 디지털 전환을 위한 전략 수립 방법론. 조직 변화 관리, 기술 선택, 인력 개발, 성과 측정 등 DX 추진 시 고려해야 할 핵심 요소들을 체계적으로 정리했습니다.',
      category: 'DX 전략 백서',
      pages: 52,
      publishDate: '2024-01-10',
      downloadCount: 892,
      tags: ['DX 전략', '조직 변화', '프레임워크', '성과 측정'],
      fileSize: '4.1MB',
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20strategy%20whitepaper%20cover%20with%20modern%20business%20graphics%20and%20transformation%20arrows%2C%20professional%20corporate%20design&width=300&height=400&seq=wp2&orientation=portrait'
    },
    {
      id: 3,
      title: '데이터 통합 아키텍처 설계 가이드: 엔터프라이즈 데이터 통합 전략',
      description: '복잡한 엔터프라이즈 환경에서의 데이터 통합 전략과 아키텍처 설계 방법. API 통합, ETL/ELT 전략, 실시간 데이터 동기화, 데이터 품질 관리까지 포괄적으로 다룹니다.',
      category: '데이터 통합 베스트 프랙티스',
      pages: 38,
      publishDate: '2024-01-08',
      downloadCount: 654,
      tags: ['데이터 통합', 'API', 'ETL', '아키텍처'],
      fileSize: '2.8MB',
      image: 'https://readdy.ai/api/search-image?query=Data%20integration%20architecture%20guide%20with%20network%20diagrams%20and%20database%20connections%2C%20technical%20documentation%20design%20with%20clean%20layout&width=300&height=400&seq=wp3&orientation=portrait'
    },
    {
      id: 4,
      title: 'AI 보안 및 거버넌스 가이드: 기업 AI 시스템의 안전한 운영',
      description: '기업 환경에서 AI 시스템을 안전하게 운영하기 위한 보안 및 거버넌스 가이드. 데이터 보안, 모델 보안, 편향성 관리, 규제 준수 등을 다룹니다.',
      category: 'AI 도입 가이드',
      pages: 41,
      publishDate: '2024-01-05',
      downloadCount: 723,
      tags: ['AI 보안', '거버넌스', '규제 준수', '편향성'],
      fileSize: '3.5MB',
      image: 'https://readdy.ai/api/search-image?query=AI%20security%20and%20governance%20guide%20cover%20with%20shield%20icons%20and%20security%20elements%2C%20professional%20cybersecurity%20design%20theme&width=300&height=400&seq=wp4&orientation=portrait'
    },
    {
      id: 5,
      title: 'Power Platform 도입 전략: Microsoft 생태계 활용 가이드',
      description: 'Microsoft Power Platform을 활용한 기업 디지털화 전략. Power Apps, Power Automate, Power BI의 통합 활용 방안과 실제 구축 사례를 제시합니다.',
      category: 'DX 전략 백서',
      pages: 35,
      publishDate: '2024-01-03',
      downloadCount: 567,
      tags: ['Power Platform', 'Microsoft', '디지털화', '통합 활용'],
      fileSize: '2.9MB',
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20Power%20Platform%20strategy%20guide%20with%20modern%20interface%20elements%20and%20business%20process%20diagrams%2C%20corporate%20blue%20color%20scheme&width=300&height=400&seq=wp5&orientation=portrait'
    },
    {
      id: 6,
      title: '레거시 시스템 현대화 전략: 단계적 마이그레이션 접근법',
      description: '기존 레거시 시스템을 현대적 아키텍처로 전환하는 전략과 방법론. 리스크 최소화, 비즈니스 연속성 보장, 단계적 마이그레이션 계획 수립 방법을 다룹니다.',
      category: '데이터 통합 베스트 프랙티스',
      pages: 43,
      publishDate: '2024-01-01',
      downloadCount: 445,
      tags: ['레거시 현대화', '마이그레이션', '아키텍처', '리스크 관리'],
      fileSize: '3.7MB',
      image: 'https://readdy.ai/api/search-image?query=Legacy%20system%20modernization%20guide%20with%20transformation%20arrows%20and%20modern%20architecture%20diagrams%2C%20technical%20documentation%20style&width=300&height=400&seq=wp6&orientation=portrait'
    }
  ];

  const filteredWhitepapers = whitepapers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         paper.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'ai-guide' && paper.category === 'AI 도입 가이드') ||
                           (selectedCategory === 'dx-strategy' && paper.category === 'DX 전략 백서') ||
                           (selectedCategory === 'data-integration' && paper.category === '데이터 통합 베스트 프랙티스');
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb 
            items={[
              { label: '홈', href: '/' },
              { label: '리소스', href: '/resources' },
              { label: '백서 & 가이드', href: '/resources/whitepapers' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              백서 & 가이드
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              기업 의사결정자와 프로젝트 리더를 위한 전문 문서 컬렉션. 
              AI 도입부터 DX 전략 수립까지, 실무에 바로 활용할 수 있는 깊이 있는 인사이트를 제공합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-purple-500/30 text-purple-100 text-sm rounded-full">전략 수립</span>
              <span className="px-3 py-1 bg-purple-500/30 text-purple-100 text-sm rounded-full">실무 가이드</span>
              <span className="px-3 py-1 bg-purple-500/30 text-purple-100 text-sm rounded-full">베스트 프랙티스</span>
              <span className="px-3 py-1 bg-purple-500/30 text-purple-100 text-sm rounded-full">ROI 분석</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="제목, 내용, 태그로 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                />
              </div>
            </div>
            <div className="text-sm text-gray-600">
              총 <span className="font-semibold text-gray-900">{filteredWhitepapers.length}</span>개의 문서가 있습니다.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">카테고리</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                          selectedCategory === category.id
                            ? 'bg-purple-100 text-purple-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-sm">{category.name}</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Download Stats */}
                <div className="mt-8 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">다운로드 통계</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">이번 달</span>
                      <span className="font-medium">2,847</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">전체</span>
                      <span className="font-medium">15,623</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Whitepapers Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredWhitepapers.map((paper) => (
                  <div key={paper.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={paper.image}
                        alt={paper.title}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded">
                          {paper.category}
                        </span>
                        <span className="text-xs text-gray-500">{paper.pages}페이지</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {paper.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {paper.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {paper.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span>{paper.publishDate}</span>
                        <span>{paper.fileSize}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <i className="ri-download-line"></i>
                          <span>{paper.downloadCount.toLocaleString()}</span>
                        </div>
                        <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded hover:bg-purple-700 transition-colors whitespace-nowrap flex items-center gap-2">
                          <i className="ri-download-line"></i>
                          다운로드
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                  더 많은 문서 보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            맞춤형 전략 문서가 필요하신가요?
          </h2>
          <p className="text-purple-100 mb-8">
            귀하의 비즈니스에 특화된 AI 도입 전략이나 DX 로드맵 문서를 제작해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/enterprise/consulting"
              className="px-6 py-3 bg-white text-purple-600 font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              전략 컨설팅 문의
            </Link>
            <Link
              to="/contact/projects/dx-consulting"
              className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              맞춤 문서 제작 요청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhitepapersPage;