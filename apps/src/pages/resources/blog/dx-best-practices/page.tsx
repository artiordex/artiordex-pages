import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const DXBestPracticesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '리소스', href: '/resources' },
    { label: '기술 블로그', href: '/resources/blog' },
    { label: 'DX 베스트 프랙티스' }
  ];

  const tags = ['all', 'DX전략', '조직변화', 'PowerPlatform', '프로세스혁신', '성공사례', '공공기관', '중소기업'];

  const posts = [
    {
      id: 1,
      title: '성공적인 DX 전환을 위한 5단계 로드맵: 계획부터 실행까지',
      excerpt: '디지털 전환 프로젝트의 성공률을 높이는 체계적인 접근 방법론과 각 단계별 핵심 성공 요인을 실제 사례와 함께 소개합니다.',
      author: '이성민',
      date: '2024-01-18',
      readTime: '12분',
      tags: ['DX전략', '프로세스혁신'],
      image: 'https://readdy.ai/api/search-image?query=digital%20transformation%20roadmap%20with%20five%20stages%20showing%20planning%2C%20implementation%2C%20and%20success%20metrics%20in%20a%20modern%20corporate%20boardroom%20with%20digital%20displays&width=400&height=250&seq=dx-best-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Power Platform으로 구현하는 무코드 DX: 시민 개발자 육성 전략',
      excerpt: 'Microsoft Power Platform을 활용한 무코드/로우코드 개발 환경 구축과 조직 내 시민 개발자 양성을 통한 DX 가속화 방안을 제시합니다.',
      author: '박수진',
      date: '2024-01-12',
      readTime: '10분',
      tags: ['PowerPlatform', '조직변화'],
      image: 'https://readdy.ai/api/search-image?query=business%20users%20creating%20applications%20with%20Power%20Platform%20no-code%20tools%20in%20a%20collaborative%20workspace%20with%20multiple%20screens%20showing%20app%20development&width=400&height=250&seq=dx-best-2&orientation=landscape'
    },
    {
      id: 3,
      title: '공공기관 DX 성공 사례: 민원 처리 시간 80% 단축의 비밀',
      excerpt: '지방자치단체의 디지털 전환 프로젝트를 통해 민원 처리 프로세스를 혁신하고 시민 만족도를 크게 향상시킨 실제 사례를 분석합니다.',
      author: '김정호',
      date: '2024-01-08',
      readTime: '15분',
      tags: ['공공기관', '성공사례', '프로세스혁신'],
      image: 'https://readdy.ai/api/search-image?query=modern%20government%20office%20with%20digital%20citizen%20service%20kiosks%2C%20automated%20document%20processing%2C%20and%20efficient%20workflow%20systems%20serving%20citizens&width=400&height=250&seq=dx-best-3&orientation=landscape'
    },
    {
      id: 4,
      title: '조직 문화 변화 없이는 DX도 없다: 변화 관리 실전 가이드',
      excerpt: 'DX 프로젝트에서 가장 중요한 요소인 조직 문화 변화를 이끌어내는 구체적인 방법론과 저항 요소 극복 전략을 제공합니다.',
      author: '최영희',
      date: '2024-01-03',
      readTime: '11분',
      tags: ['조직변화', 'DX전략'],
      image: 'https://readdy.ai/api/search-image?query=diverse%20team%20members%20collaborating%20on%20digital%20transformation%20initiatives%20with%20change%20management%20workshops%20and%20cultural%20adaptation%20in%20a%20modern%20office&width=400&height=250&seq=dx-best-4&orientation=landscape'
    },
    {
      id: 5,
      title: '중소기업 DX 성공 공식: 작게 시작해서 크게 확장하기',
      excerpt: '제한된 예산과 인력으로도 효과적인 디지털 전환을 달성한 중소기업들의 실전 노하우와 단계별 접근 전략을 소개합니다.',
      author: '장민수',
      date: '2023-12-28',
      readTime: '9분',
      tags: ['중소기업', '성공사례', 'DX전략'],
      image: 'https://readdy.ai/api/search-image?query=small%20business%20team%20implementing%20digital%20tools%20with%20tablets%20and%20cloud%20systems%20in%20a%20compact%20modern%20office%20showing%20growth%20and%20efficiency&width=400&height=250&seq=dx-best-5&orientation=landscape'
    },
    {
      id: 6,
      title: '레거시 시스템과의 조화: 점진적 DX 전환 전략',
      excerpt: '기존 시스템을 완전히 교체하지 않고도 디지털 전환을 성공적으로 추진하는 하이브리드 접근 방법과 위험 관리 전략을 다룹니다.',
      author: '윤서연',
      date: '2023-12-22',
      readTime: '13분',
      tags: ['프로세스혁신', 'DX전략'],
      image: 'https://readdy.ai/api/search-image?query=modern%20and%20legacy%20computer%20systems%20connected%20through%20integration%20platforms%20showing%20seamless%20data%20flow%20in%20a%20corporate%20IT%20environment&width=400&height=250&seq=dx-best-6&orientation=landscape'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DX 베스트 프랙티스
            </h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              성공적인 디지털 전환을 위한 실전 가이드와 검증된 방법론을 제공합니다. 
              조직 변화부터 기술 구현까지, 실제 성공 사례를 통해 배우는 DX 전략을 소개합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-indigo-500/30 rounded-full text-sm font-medium">
                DX 전략 수립
              </span>
              <span className="px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium">
                조직 변화 관리
              </span>
              <span className="px-4 py-2 bg-cyan-500/30 rounded-full text-sm font-medium">
                프로세스 혁신
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <i className="ri-search-line text-gray-400"></i>
              </div>
              <input
                type="text"
                placeholder="DX 베스트 프랙티스 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedTag === tag
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag === 'all' ? '전체' : tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <i className="ri-time-line"></i>
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
              <p className="text-gray-600">다른 키워드나 태그로 검색해보세요.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            DX 전환 프로젝트를 계획 중이신가요?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            아티올덱스의 DX 전문가와 함께 성공적인 디지털 전환 전략을 수립해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/projects/dx-consulting"
              className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              DX 컨설팅 상담 신청
            </Link>
            <Link
              to="/resources/whitepapers/dx-strategy-whitepaper"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              DX 전략 백서 다운로드
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DXBestPracticesPage;