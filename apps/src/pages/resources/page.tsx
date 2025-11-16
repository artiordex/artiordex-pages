import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components/feature/Breadcrumb';
import Header from '../../components/feature/Header';

const ResourcesPage = () => {
  const resourceCategories = [
    {
      id: 'blog',
      title: '기술 블로그',
      description: '최신 AI, DX, 데이터 통합 트렌드와 실무 경험을 공유하는 기술 블로그입니다.',
      icon: 'ri-article-line',
      color: 'blue',
      link: '/resources/blog',
      stats: { posts: 48, views: '12.5K' },
      subcategories: [
        'AI 트렌드 & 인사이트',
        'DX 베스트 프랙티스', 
        '기술 튜토리얼'
      ],
      image: 'https://readdy.ai/api/search-image?query=Modern%20technical%20blog%20interface%20with%20AI%20and%20technology%20articles%2C%20clean%20professional%20design%20with%20blue%20color%20scheme%20and%20readable%20typography&width=400&height=240&seq=res1&orientation=landscape'
    },
    {
      id: 'whitepapers',
      title: '백서 & 가이드',
      description: '기업 의사결정자를 위한 전문 문서와 실전 가이드를 제공합니다.',
      icon: 'ri-file-text-line',
      color: 'purple',
      link: '/resources/whitepapers',
      stats: { documents: 24, downloads: '15.6K' },
      subcategories: [
        'AI 도입 가이드',
        'DX 전략 백서',
        '데이터 통합 베스트 프랙티스'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20whitepaper%20and%20guide%20documents%20with%20corporate%20design%2C%20business%20strategy%20papers%20and%20implementation%20guides%2C%20purple%20and%20white%20theme&width=400&height=240&seq=res2&orientation=landscape'
    },
    {
      id: 'webinars',
      title: '웨비나 & 이벤트',
      description: '전문가와 함께하는 실시간 교육과 네트워킹 기회를 제공합니다.',
      icon: 'ri-live-line',
      color: 'emerald',
      link: '/resources/webinars',
      stats: { events: 18, attendees: '2.8K' },
      subcategories: [
        '예정된 웨비나',
        '지난 이벤트',
        '컨퍼런스 발표자료'
      ],
      image: 'https://readdy.ai/api/search-image?query=Online%20webinar%20and%20virtual%20event%20platform%20with%20professional%20speakers%20and%20audience%2C%20modern%20video%20conference%20interface%2C%20emerald%20green%20theme&width=400&height=240&seq=res3&orientation=landscape'
    },
    {
      id: 'tools',
      title: '도구 & 템플릿',
      description: '실무에 바로 활용할 수 있는 계산기, 평가 도구, 프로젝트 템플릿을 제공합니다.',
      icon: 'ri-tools-line',
      color: 'orange',
      link: '/resources/tools',
      stats: { tools: 12, users: '5.2K' },
      subcategories: [
        'ROI 계산기',
        'DX 성숙도 평가',
        '프로젝트 템플릿'
      ],
      image: 'https://readdy.ai/api/search-image?query=Business%20tools%20and%20templates%20interface%20with%20calculators%20and%20assessment%20forms%2C%20professional%20productivity%20tools%2C%20orange%20and%20white%20color%20scheme&width=400&height=240&seq=res4&orientation=landscape'
    }
  ];

  const featuredContent = [
    {
      type: 'blog',
      title: '2024년 기업 AI 도입 트렌드: LLM에서 Agent 시스템으로의 전환',
      category: 'AI 트렌드',
      date: '2024-01-15',
      readTime: '8분',
      image: 'https://readdy.ai/api/search-image?query=AI%20trends%202024%20with%20neural%20networks%20and%20agent%20systems%2C%20futuristic%20technology%20visualization%2C%20professional%20business%20context&width=300&height=180&seq=featured1&orientation=landscape'
    },
    {
      type: 'whitepaper',
      title: 'AI 도입 완전 가이드: 기업 AI 전환을 위한 단계별 로드맵',
      category: 'AI 가이드',
      pages: '45페이지',
      downloads: '1,247',
      image: 'https://readdy.ai/api/search-image?query=AI%20implementation%20guide%20document%20cover%20with%20roadmap%20and%20strategic%20planning%20elements%2C%20professional%20business%20document%20design&width=300&height=180&seq=featured2&orientation=landscape'
    },
    {
      type: 'webinar',
      title: 'AI Agent 시스템 구축 실무 워크샵',
      category: '예정 웨비나',
      date: '2024-02-15',
      attendees: '45/50명',
      image: 'https://readdy.ai/api/search-image?query=AI%20Agent%20workshop%20presentation%20with%20technical%20diagrams%20and%20programming%20interface%2C%20online%20learning%20environment&width=300&height=180&seq=featured3&orientation=landscape'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        tag: 'bg-blue-100 text-blue-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        tag: 'bg-purple-100 text-purple-700'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        icon: 'text-emerald-600',
        button: 'bg-emerald-600 hover:bg-emerald-700',
        tag: 'bg-emerald-100 text-emerald-700'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        tag: 'bg-orange-100 text-orange-700'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb 
            items={[
              { label: '홈', href: '/' },
              { label: '리소스', href: '/resources' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              리소스 센터
            </h1>
            <p className="text-xl text-slate-200 mb-12 leading-relaxed">
              Artiordex의 기술적 깊이와 산업 전문성을 담은 핵심 지식 허브입니다. 
              AI · DX · 데이터 통합 · 업무 자동화 역량을 입체적으로 경험하고 학습하세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-blue-500/30 text-blue-100 text-sm rounded-full">기술 브랜딩</span>
              <span className="px-4 py-2 bg-blue-500/30 text-blue-100 text-sm rounded-full">전문 지식</span>
              <span className="px-4 py-2 bg-blue-500/30 text-blue-100 text-sm rounded-full">실무 가이드</span>
              <span className="px-4 py-2 bg-blue-500/30 text-blue-100 text-sm rounded-full">인터랙티브 도구</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              4개 핵심 리소스 카테고리
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 카테고리는 고유한 목적과 가치를 제공하며, 여러분의 디지털 전환 여정을 단계별로 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {resourceCategories.map((category) => {
              const colors = getColorClasses(category.color);
              return (
                <div key={category.id} className={`${colors.bg} ${colors.border} border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300`}>
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center`}>
                        <i className={`${category.icon} text-2xl ${colors.icon}`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          {Object.entries(category.stats).map(([key, value]) => (
                            <span key={key}>
                              {key === 'posts' && '포스트'} 
                              {key === 'documents' && '문서'} 
                              {key === 'events' && '이벤트'} 
                              {key === 'tools' && '도구'} 
                              {key === 'views' && '조회수'} 
                              {key === 'downloads' && '다운로드'} 
                              {key === 'attendees' && '참여자'} 
                              {key === 'users' && '사용자'} 
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">주요 카테고리</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub) => (
                          <span key={sub} className={`px-3 py-1 ${colors.tag} text-xs font-medium rounded-full`}>
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to={category.link}
                      className={`inline-flex items-center gap-2 px-6 py-3 ${colors.button} text-white font-medium rounded-lg transition-colors whitespace-nowrap`}
                    >
                      자세히 보기
                      <i className="ri-arrow-right-line"></i>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              추천 콘텐츠
            </h2>
            <p className="text-xl text-gray-600">
              가장 인기 있고 유용한 리소스들을 먼저 만나보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-48 object-cover object-top"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      content.type === 'blog' ? 'bg-blue-100 text-blue-700' :
                      content.type === 'whitepaper' ? 'bg-purple-100 text-purple-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>
                      {content.category}
                    </span>
                    {content.readTime && <span className="text-xs text-gray-500">{content.readTime}</span>}
                    {content.pages && <span className="text-xs text-gray-500">{content.pages}</span>}
                    {content.attendees && <span className="text-xs text-gray-500">{content.attendees}</span>}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {content.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{content.date}</span>
                    {content.downloads && <span>다운로드 {content.downloads}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              빠른 시작 가이드
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              처음 방문하시나요? 가장 인기 있는 리소스부터 시작해보세요.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/resources/tools"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
              >
                <i className="ri-calculator-line text-2xl mb-2"></i>
                <div className="text-sm font-medium">ROI 계산기</div>
              </Link>
              <Link
                to="/resources/tools"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
              >
                <i className="ri-survey-line text-2xl mb-2"></i>
                <div className="text-sm font-medium">DX 성숙도 평가</div>
              </Link>
              <Link
                to="/resources/whitepapers"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
              >
                <i className="ri-file-download-line text-2xl mb-2"></i>
                <div className="text-sm font-medium">AI 도입 가이드</div>
              </Link>
              <Link
                to="/resources/blog"
                className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-colors"
              >
                <i className="ri-article-line text-2xl mb-2"></i>
                <div className="text-sm font-medium">최신 기술 블로그</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            더 깊은 인사이트가 필요하신가요?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            아티올덱스 전문가와 직접 상담하여 맞춤형 솔루션을 찾아보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/enterprise/consulting"
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              전문가 상담 예약
            </Link>
            <Link
              to="/contact/projects/ai-estimate"
              className="px-8 py-4 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              프로젝트 견적 요청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;