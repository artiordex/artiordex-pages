import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';
import Header from '../../../../components/feature/Header';

const AITrendsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '리소스', href: '/resources' },
    { label: '기술 블로그', href: '/resources/blog' },
    { label: 'AI 트렌드 & 인사이트' }
  ];

  const tags = ['all', 'LLM', 'Agent', '자동화', '산업별AI', '도입전략', 'GPT', '머신러닝'];

  const posts = [
    {
      id: 1,
      title: '2024년 기업 AI 도입 트렌드: LLM에서 Agent 시스템으로의 전환',
      excerpt: '대화형 AI에서 업무 자동화 Agent로 진화하는 기업 AI 활용 패턴을 분석하고, 실제 도입 사례와 ROI 데이터를 통해 성공 요인을 살펴봅니다.',
      author: '김민수',
      date: '2024-01-15',
      readTime: '8분',
      tags: ['LLM', 'Agent', '도입전략'],
      image: 'https://readdy.ai/api/search-image?query=modern%20office%20workers%20using%20AI%20agent%20systems%20on%20computers%20with%20holographic%20interfaces%20showing%20automated%20workflows%20and%20data%20analysis%20in%20a%20bright%20corporate%20environment&width=400&height=250&seq=ai-trends-1&orientation=landscape'
    },
    {
      id: 2,
      title: '제조업 AI 혁신: 스마트 팩토리에서 예측 유지보수까지',
      excerpt: '제조업계의 AI 도입이 단순 자동화를 넘어 예측 분석, 품질 관리, 공급망 최적화로 확장되는 과정과 실제 성과 지표를 분석합니다.',
      author: '박지영',
      date: '2024-01-10',
      readTime: '12분',
      tags: ['산업별AI', '머신러닝', '자동화'],
      image: 'https://readdy.ai/api/search-image?query=smart%20factory%20with%20AI-powered%20robotic%20systems%2C%20predictive%20maintenance%20displays%2C%20and%20automated%20quality%20control%20in%20a%20modern%20manufacturing%20facility%20with%20blue%20lighting&width=400&height=250&seq=ai-trends-2&orientation=landscape'
    },
    {
      id: 3,
      title: 'GPT-4와 Claude의 기업 활용 비교: 어떤 LLM을 선택할 것인가?',
      excerpt: '주요 LLM 모델들의 기업 환경에서의 성능, 비용, 보안성을 비교 분석하고, 업무 유형별 최적 모델 선택 가이드를 제공합니다.',
      author: '이준호',
      date: '2024-01-05',
      readTime: '10분',
      tags: ['LLM', 'GPT', '도입전략'],
      image: 'https://readdy.ai/api/search-image?query=comparison%20chart%20showing%20different%20AI%20language%20models%20with%20performance%20metrics%2C%20cost%20analysis%2C%20and%20security%20features%20in%20a%20professional%20business%20presentation%20style&width=400&height=250&seq=ai-trends-3&orientation=landscape'
    },
    {
      id: 4,
      title: '금융업 AI 도입의 리스크와 기회: 규제 준수와 혁신의 균형',
      excerpt: '금융업계의 AI 도입 시 고려해야 할 규제 요구사항, 데이터 보안, 알고리즘 투명성 등의 과제와 해결 방안을 제시합니다.',
      author: '최서연',
      date: '2023-12-28',
      readTime: '15분',
      tags: ['산업별AI', '도입전략'],
      image: 'https://readdy.ai/api/search-image?query=financial%20institution%20with%20AI-powered%20trading%20systems%2C%20risk%20analysis%20dashboards%2C%20and%20compliance%20monitoring%20in%20a%20secure%20banking%20environment%20with%20glass%20walls&width=400&height=250&seq=ai-trends-4&orientation=landscape'
    },
    {
      id: 5,
      title: 'AI Agent 운영 체제: 업무 자동화의 새로운 패러다임',
      excerpt: 'AI Agent가 단순 챗봇을 넘어 복잡한 업무 프로세스를 자동화하는 운영 체제로 진화하는 과정과 구현 방법론을 소개합니다.',
      author: '정민철',
      date: '2023-12-20',
      readTime: '11분',
      tags: ['Agent', '자동화'],
      image: 'https://readdy.ai/api/search-image?query=AI%20agent%20operating%20system%20interface%20with%20multiple%20automated%20workflow%20processes%2C%20task%20management%2C%20and%20intelligent%20decision%20trees%20in%20a%20futuristic%20digital%20workspace&width=400&height=250&seq=ai-trends-5&orientation=landscape'
    },
    {
      id: 6,
      title: '데이터 품질이 AI 성공을 좌우한다: 기업 데이터 준비 전략',
      excerpt: 'AI 프로젝트 실패의 주요 원인인 데이터 품질 문제를 해결하기 위한 체계적인 데이터 준비 및 관리 전략을 제시합니다.',
      author: '김하늘',
      date: '2023-12-15',
      readTime: '9분',
      tags: ['머신러닝', '도입전략'],
      image: 'https://readdy.ai/api/search-image?query=data%20quality%20management%20dashboard%20with%20clean%20datasets%2C%20validation%20processes%2C%20and%20AI%20model%20training%20pipelines%20in%20a%20modern%20data%20center%20environment&width=400&height=250&seq=ai-trends-6&orientation=landscape'
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
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI 트렌드 & 인사이트
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              최신 AI 기술 동향과 산업별 도입 사례를 통해 기업의 AI 전략 수립에 필요한 
              실무 인사이트를 제공합니다. LLM부터 Agent 시스템까지, 변화하는 AI 생태계를 분석합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-500/30 rounded-full text-sm font-medium">
                산업별 AI 동향
              </span>
              <span className="px-4 py-2 bg-purple-500/30 rounded-full text-sm font-medium">
                LLM & Agent 시스템
              </span>
              <span className="px-4 py-2 bg-indigo-500/30 rounded-full text-sm font-medium">
                도입 전략 & ROI
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
                placeholder="AI 트렌드 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                      ? 'bg-blue-600 text-white'
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
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            AI 도입 전략이 궁금하신가요?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            아티올덱스의 AI 전문가와 함께 귀하의 비즈니스에 최적화된 AI 전략을 수립해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/projects/ai-estimate"
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              AI 프로젝트 상담 신청
            </Link>
            <Link
              to="/resources/whitepapers/ai-implementation-guide"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              AI 도입 가이드 다운로드
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AITrendsPage;