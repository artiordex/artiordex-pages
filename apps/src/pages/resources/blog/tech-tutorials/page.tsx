import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const TechTutorialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '리소스', href: '/resources' },
    { label: '기술 블로그', href: '/resources/blog' },
    { label: '기술 튜토리얼' }
  ];

  const tags = ['all', 'PowerApps', 'PowerAutomate', 'LangChain', 'NodeJS', 'Vite', 'MDX', 'API통합', 'Agent구축'];
  const levels = ['all', '초급', '중급', '고급'];

  const tutorials = [
    {
      id: 1,
      title: 'Power Apps로 30분 만에 업무용 앱 만들기: 재고 관리 시스템',
      excerpt: 'Microsoft Power Apps를 사용해 코딩 없이 실무에서 바로 사용할 수 있는 재고 관리 앱을 단계별로 구축하는 완전 가이드입니다.',
      author: '김개발',
      date: '2024-01-20',
      readTime: '25분',
      level: '초급',
      tags: ['PowerApps'],
      steps: 8,
      image: 'https://readdy.ai/api/search-image?query=Power%20Apps%20interface%20showing%20inventory%20management%20app%20creation%20with%20drag-and-drop%20components%2C%20data%20connections%2C%20and%20mobile%20preview%20in%20Microsoft%20development%20environment&width=400&height=250&seq=tech-tutorial-1&orientation=landscape'
    },
    {
      id: 2,
      title: 'LangChain으로 구축하는 기업용 AI 챗봇: 문서 기반 Q&A 시스템',
      excerpt: 'LangChain과 OpenAI API를 활용해 기업 내부 문서를 학습하고 질문에 답변하는 AI 챗봇을 Python으로 구현하는 실전 튜토리얼입니다.',
      author: '박AI',
      date: '2024-01-15',
      readTime: '45분',
      level: '중급',
      tags: ['LangChain', 'Agent구축'],
      steps: 12,
      image: 'https://readdy.ai/api/search-image?query=LangChain%20AI%20chatbot%20development%20environment%20with%20code%20editor%2C%20document%20processing%20pipeline%2C%20and%20chat%20interface%20testing%20in%20a%20modern%20development%20setup&width=400&height=250&seq=tech-tutorial-2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Power Automate 워크플로우 마스터: 승인 프로세스 자동화',
      excerpt: 'Microsoft Power Automate를 사용해 복잡한 다단계 승인 프로세스를 자동화하고 Teams, Outlook과 연동하는 방법을 상세히 설명합니다.',
      author: '이자동',
      date: '2024-01-10',
      readTime: '35분',
      level: '중급',
      tags: ['PowerAutomate'],
      steps: 10,
      image: 'https://readdy.ai/api/search-image?query=Power%20Automate%20workflow%20designer%20showing%20approval%20process%20automation%20with%20multiple%20steps%2C%20conditions%2C%20and%20Microsoft%20Teams%20integration%20in%20a%20business%20environment&width=400&height=250&seq=tech-tutorial-3&orientation=landscape'
    },
    {
      id: 4,
      title: 'Node.js + Express로 RESTful API 서버 구축하기',
      excerpt: 'Node.js와 Express 프레임워크를 사용해 확장 가능한 RESTful API 서버를 구축하고 JWT 인증, 데이터베이스 연동까지 구현합니다.',
      author: '최백엔드',
      date: '2024-01-05',
      readTime: '50분',
      level: '중급',
      tags: ['NodeJS', 'API통합'],
      steps: 15,
      image: 'https://readdy.ai/api/search-image?query=Node.js%20development%20environment%20with%20Express%20server%20code%2C%20API%20endpoints%20testing%20in%20Postman%2C%20and%20database%20connections%20in%20a%20developer%20workspace&width=400&height=250&seq=tech-tutorial-4&orientation=landscape'
    },
    {
      id: 5,
      title: 'Vite + React + MDX로 기술 블로그 구축하기',
      excerpt: 'Vite 빌드 도구와 React, MDX를 조합해 빠르고 SEO 친화적인 기술 블로그를 구축하는 현대적인 개발 방법론을 소개합니다.',
      author: '정프론트',
      date: '2023-12-30',
      readTime: '40분',
      level: '고급',
      tags: ['Vite', 'MDX'],
      steps: 11,
      image: 'https://readdy.ai/api/search-image?query=Vite%20React%20MDX%20blog%20development%20setup%20with%20code%20editor%2C%20hot%20reload%20preview%2C%20and%20markdown%20content%20rendering%20in%20a%20modern%20frontend%20development%20environment&width=400&height=250&seq=tech-tutorial-5&orientation=landscape'
    },
    {
      id: 6,
      title: 'Graph API를 활용한 Microsoft 365 데이터 통합',
      excerpt: 'Microsoft Graph API를 사용해 SharePoint, Teams, Outlook 데이터를 통합하고 커스텀 대시보드를 구축하는 실전 가이드입니다.',
      author: '윤통합',
      date: '2023-12-25',
      readTime: '55분',
      level: '고급',
      tags: ['API통합'],
      steps: 13,
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20Graph%20API%20integration%20dashboard%20showing%20SharePoint%2C%20Teams%2C%20and%20Outlook%20data%20visualization%20with%20authentication%20flow%20and%20API%20calls%20in%20a%20corporate%20setting&width=400&height=250&seq=tech-tutorial-6&orientation=landscape'
    }
  ];

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesSearch = tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tutorial.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'all' || tutorial.tags.includes(selectedTag);
    const matchesLevel = selectedLevel === 'all' || tutorial.level === selectedLevel;
    return matchesSearch && matchesTag && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case '초급': return 'bg-green-100 text-green-800';
      case '중급': return 'bg-yellow-100 text-yellow-800';
      case '고급': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              기술 튜토리얼
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              실무에서 바로 활용할 수 있는 단계별 기술 가이드를 제공합니다. 
              Power Platform부터 최신 웹 기술까지, 따라하기 쉬운 실전 튜토리얼로 학습하세요.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-emerald-500/30 rounded-full text-sm font-medium">
                Power Platform
              </span>
              <span className="px-4 py-2 bg-teal-500/30 rounded-full text-sm font-medium">
                AI & LangChain
              </span>
              <span className="px-4 py-2 bg-cyan-500/30 rounded-full text-sm font-medium">
                웹 개발 & API
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
                placeholder="기술 튜토리얼 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Level Filter */}
              <div className="flex gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedLevel === level
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level === 'all' ? '전체 레벨' : level}
                  </button>
                ))}
              </div>

              {/* Tags Filter */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedTag === tag
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag === 'all' ? '전체 기술' : tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTutorials.map((tutorial) => (
              <article key={tutorial.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex flex-wrap gap-2">
                      {tutorial.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded ${getLevelColor(tutorial.level)}`}>
                      {tutorial.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {tutorial.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span>{tutorial.author}</span>
                      <span>{tutorial.date}</span>
                    </div>
                    <span className="flex items-center space-x-1">
                      <i className="ri-time-line"></i>
                      <span>{tutorial.readTime}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-1 text-sm text-gray-500">
                      <i className="ri-list-check-line"></i>
                      <span>{tutorial.steps}단계</span>
                    </span>
                    <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                      튜토리얼 시작
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredTutorials.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">검색 결과가 없습니다</h3>
              <p className="text-gray-600">다른 키워드나 필터로 검색해보세요.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            맞춤형 기술 교육이 필요하신가요?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            아티올덱스의 기술 전문가가 제공하는 1:1 맞춤 교육과 워크샵을 경험해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/enterprise/consulting"
              className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              기술 교육 상담 신청
            </Link>
            <Link
              to="/resources/webinars"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              웨비나 & 워크샵 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechTutorialsPage;