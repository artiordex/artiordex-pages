import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';
import Header from '../../../components/feature/Header';

const TechnicalBlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    { id: 'all', name: '전체', count: 48 },
    { id: 'ai-trends', name: 'AI 트렌드 & 인사이트', count: 18 },
    { id: 'dx-practices', name: 'DX 베스트 프랙티스', count: 15 },
    { id: 'tech-tutorials', name: '기술 튜토리얼', count: 15 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: '2024년 기업 AI 도입 트렌드: LLM에서 Agent 시스템으로의 전환',
      excerpt: '최신 AI 기술 동향과 기업 도입 사례를 통해 본 2024년 AI 트렌드 분석. LLM 기반 Agent 시스템이 업무 자동화에 미치는 영향과 실제 적용 방안을 살펴봅니다.',
      category: 'AI 트렌드 & 인사이트',
      author: '김민수',
      date: '2024-01-15',
      readTime: '8분',
      tags: ['AI', 'LLM', 'Agent', '자동화'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20AI%20technology%20trends%20with%20neural%20networks%20and%20automation%20systems%20in%20corporate%20environment%2C%20professional%20blue%20and%20white%20color%20scheme%2C%20clean%20minimalist%20background&width=400&height=240&seq=blog1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Power Platform 기반 DX 전환 성공 사례: 제조업체 생산성 85% 향상',
      excerpt: 'Microsoft Power Platform을 활용한 제조업체의 디지털 전환 사례. Power Apps, Power Automate, Power BI를 통합 활용하여 달성한 놀라운 성과를 분석합니다.',
      category: 'DX 베스트 프랙티스',
      author: '박지영',
      date: '2024-01-12',
      readTime: '12분',
      tags: ['Power Platform', 'DX', '제조업', '생산성'],
      image: 'https://readdy.ai/api/search-image?query=Manufacturing%20digital%20transformation%20with%20Power%20Platform%20interface%2C%20industrial%20automation%20systems%2C%20modern%20factory%20setting%20with%20digital%20dashboards&width=400&height=240&seq=blog2&orientation=landscape'
    },
    {
      id: 3,
      title: 'LangChain과 Node.js로 구축하는 AI Agent 시스템 완전 가이드',
      excerpt: '실무에서 바로 활용할 수 있는 AI Agent 구축 튜토리얼. LangChain 프레임워크와 Node.js를 활용한 단계별 구현 방법과 실제 코드 예제를 제공합니다.',
      category: '기술 튜토리얼',
      author: '이준호',
      date: '2024-01-10',
      readTime: '15분',
      tags: ['LangChain', 'Node.js', 'AI Agent', '튜토리얼'],
      image: 'https://readdy.ai/api/search-image?query=Programming%20tutorial%20with%20LangChain%20and%20Node.js%20code%20on%20modern%20development%20environment%2C%20AI%20agent%20architecture%20diagram%2C%20clean%20technical%20background&width=400&height=240&seq=blog3&orientation=landscape'
    },
    {
      id: 4,
      title: '데이터 품질이 AI 성능에 미치는 영향: 실제 프로젝트 분석',
      excerpt: '실제 AI 프로젝트에서 데이터 품질 문제로 인한 성능 저하 사례와 해결 방안. 데이터 전처리부터 모델 성능 최적화까지의 실무 경험을 공유합니다.',
      category: 'AI 트렌드 & 인사이트',
      author: '최서연',
      date: '2024-01-08',
      readTime: '10분',
      tags: ['데이터 품질', 'AI 성능', '전처리', '최적화'],
      image: 'https://readdy.ai/api/search-image?query=Data%20quality%20analysis%20with%20AI%20performance%20metrics%2C%20data%20visualization%20charts%20and%20graphs%2C%20professional%20analytics%20dashboard%20background&width=400&height=240&seq=blog4&orientation=landscape'
    },
    {
      id: 5,
      title: '공공기관 DX 추진 전략: 규제 환경에서의 디지털 혁신',
      excerpt: '공공기관의 특수한 환경에서 DX를 성공적으로 추진하는 전략. 규제 준수와 보안 요구사항을 만족하면서 디지털 혁신을 달성하는 방법론을 제시합니다.',
      category: 'DX 베스트 프랙티스',
      author: '정민철',
      date: '2024-01-05',
      readTime: '11분',
      tags: ['공공기관', 'DX', '규제', '보안'],
      image: 'https://readdy.ai/api/search-image?query=Government%20digital%20transformation%20with%20secure%20systems%20and%20compliance%20frameworks%2C%20modern%20public%20sector%20technology%2C%20professional%20blue%20color%20scheme&width=400&height=240&seq=blog5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Vite + React에서 MDX 문서 시스템 구축하기',
      excerpt: 'Vite 환경에서 MDX를 활용한 문서 시스템 구축 방법. 컴포넌트 기반 문서 작성부터 동적 라우팅까지 실무에 필요한 모든 과정을 다룹니다.',
      category: '기술 튜토리얼',
      author: '김태현',
      date: '2024-01-03',
      readTime: '13분',
      tags: ['Vite', 'React', 'MDX', '문서화'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20development%20with%20Vite%20and%20React%20MDX%20documentation%20system%2C%20code%20editor%20interface%2C%20clean%20developer%20workspace%20background&width=400&height=240&seq=blog6&orientation=landscape'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || 
                           (selectedCategory === 'ai-trends' && post.category === 'AI 트렌드 & 인사이트') ||
                           (selectedCategory === 'dx-practices' && post.category === 'DX 베스트 프랙티스') ||
                           (selectedCategory === 'tech-tutorials' && post.category === '기술 튜토리얼');
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
              { label: '기술 블로그', href: '/resources/blog' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              기술 블로그
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              AI, DX, 데이터 통합 분야의 최신 트렌드와 실무 경험을 공유합니다. 
              기술적 깊이와 실용성을 겸비한 인사이트를 통해 여러분의 디지털 혁신을 지원합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-500/30 text-blue-100 text-sm rounded-full">AI 트렌드</span>
              <span className="px-3 py-1 bg-blue-500/30 text-blue-100 text-sm rounded-full">DX 전략</span>
              <span className="px-3 py-1 bg-blue-500/30 text-blue-100 text-sm rounded-full">기술 튜토리얼</span>
              <span className="px-3 py-1 bg-blue-500/30 text-blue-100 text-sm rounded-full">실무 가이드</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="제목, 내용, 태그로 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 whitespace-nowrap">정렬:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
              >
                <option value="latest">최신순</option>
                <option value="popular">인기순</option>
                <option value="readtime">읽기 시간순</option>
              </select>
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
                            ? 'bg-blue-100 text-blue-700 font-medium'
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

                {/* Popular Tags */}
                <div className="mt-8">
                  <h4 className="text-md font-semibold text-gray-900 mb-3">인기 태그</h4>
                  <div className="flex flex-wrap gap-2">
                    {['AI', 'DX', 'Power Platform', 'LangChain', '자동화', '데이터 통합', '튜토리얼', '성능 최적화'].map((tag) => (
                      <button
                        key={tag}
                        className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded hover:bg-blue-100 hover:text-blue-700 transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <p className="text-gray-600">
                  총 <span className="font-semibold text-gray-900">{filteredPosts.length}</span>개의 글이 있습니다.
                </p>
              </div>

              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover object-top"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-500">{post.readTime} 읽기</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                          <Link to={`/resources/blog/${post.id}`}>
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-sm text-gray-500">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                          <Link
                            to={`/resources/blog/${post.id}`}
                            className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                          >
                            자세히 보기
                            <i className="ri-arrow-right-line"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 disabled:opacity-50">
                    이전
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`px-3 py-2 rounded-lg text-sm ${
                        page === 1
                          ? 'bg-blue-600 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                    다음
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            최신 기술 인사이트를 받아보세요
          </h2>
          <p className="text-gray-600 mb-8">
            매주 새로운 기술 트렌드와 실무 가이드를 이메일로 받아보실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
              구독하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnicalBlogPage;