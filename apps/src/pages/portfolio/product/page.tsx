import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';

const ProductPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: '제품 기반 구축', href: '/portfolio/product' }
  ];

  const projects = [
    {
      id: 'artiflow',
      title: 'ArtiFlow 구축 사례',
      description: 'AI 기반 워크플로우 자동화 플랫폼으로 업무 프로세스를 혁신합니다.',
      image: 'https://readdy.ai/api/search-image?query=ArtiFlow%20AI-powered%20workflow%20automation%20platform%20with%20business%20process%20innovation%2C%20modern%20office%20with%20intelligent%20automation%20interface%2C%20workflow%20management%20dashboard%2C%20process%20optimization%20visualization&width=600&height=400&seq=prod001&orientation=landscape',
      tags: ['ArtiFlow', 'Workflow Automation', 'AI', 'Process Management'],
      results: ['업무 자동화 90%', '처리 시간 85% 단축', '생산성 300% 향상'],
      link: '/portfolio/product/artiflow'
    },
    {
      id: 'smarthub',
      title: 'SmartHub 통합 사례',
      description: '통합 데이터 허브로 모든 시스템을 하나로 연결합니다.',
      image: 'https://readdy.ai/api/search-image?query=SmartHub%20integrated%20data%20hub%20connecting%20all%20enterprise%20systems%2C%20modern%20IT%20infrastructure%20with%20unified%20data%20platform%2C%20system%20integration%20visualization%2C%20centralized%20data%20management%20interface&width=600&height=400&seq=prod002&orientation=landscape',
      tags: ['SmartHub', 'Data Integration', 'System Hub', 'Unified Platform'],
      results: ['시스템 통합 100%', '데이터 동기화 실시간', '운영 효율 70% 향상'],
      link: '/portfolio/product/smarthub'
    },
    {
      id: 'connectstack',
      title: 'ConnectStack 연동 사례',
      description: 'API 기반 시스템 연동 플랫폼으로 확장성을 확보합니다.',
      image: 'https://readdy.ai/api/search-image?query=ConnectStack%20API-based%20system%20integration%20platform%20with%20scalability%2C%20modern%20cloud%20infrastructure%20with%20API%20gateway%2C%20microservices%20architecture%20visualization%2C%20integration%20platform%20interface&width=600&height=400&seq=prod003&orientation=landscape',
      tags: ['ConnectStack', 'API Integration', 'Microservices', 'Scalability'],
      results: ['API 응답 시간 70% 개선', '확장성 무제한', '개발 속도 200% 향상'],
      link: '/portfolio/product/connectstack'
    },
    {
      id: 'connectwon',
      title: 'ConnectWon ERP 연동',
      description: 'ERP 시스템과의 완벽한 연동으로 업무 효율을 극대화합니다.',
      image: 'https://readdy.ai/api/search-image?query=ConnectWon%20ERP%20integration%20with%20seamless%20business%20efficiency%20maximization%2C%20modern%20enterprise%20office%20with%20ERP%20system%20interface%2C%20business%20process%20integration%20visualization%2C%20unified%20business%20platform&width=600&height=400&seq=prod004&orientation=landscape',
      tags: ['ConnectWon', 'ERP Integration', 'Business Process', 'Enterprise'],
      results: ['ERP 연동 완료', '업무 효율 80% 향상', '데이터 정확도 99%'],
      link: '/portfolio/product/connectwon'
    },
    {
      id: 'connecttour',
      title: 'ConnectTour 여행 플랫폼',
      description: '여행 산업 특화 통합 플랫폼으로 예약부터 결제까지 원스톱 서비스를 제공합니다.',
      image: 'https://readdy.ai/api/search-image?query=ConnectTour%20travel%20industry%20platform%20with%20one-stop%20service%20from%20booking%20to%20payment%2C%20modern%20travel%20agency%20office%20with%20integrated%20booking%20system%2C%20tourism%20platform%20interface%2C%20travel%20management%20visualization&width=600&height=400&seq=prod005&orientation=landscape',
      tags: ['ConnectTour', 'Travel Platform', 'Booking System', 'Tourism'],
      results: ['예약 처리 95% 자동화', '고객 만족도 92%', '매출 150% 증가'],
      link: '/portfolio/product/connecttour'
    },
    {
      id: 'lcap-solution',
      title: 'Low-Code 플랫폼 구축',
      description: 'Power Platform 기반 로우코드 개발 환경으로 빠른 앱 개발을 지원합니다.',
      image: 'https://readdy.ai/api/search-image?query=low-code%20platform%20development%20with%20Power%20Platform%20for%20rapid%20app%20development%2C%20modern%20office%20with%20citizen%20developer%20workspace%2C%20visual%20development%20interface%2C%20no-code%20app%20builder%20visualization&width=600&height=400&seq=prod006&orientation=landscape',
      tags: ['Low-Code', 'Power Platform', 'Rapid Development', 'Citizen Developer'],
      results: ['개발 속도 400% 향상', '개발 비용 70% 절감', '앱 출시 시간 90% 단축'],
      link: '/portfolio/product/lcap-solution'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.tags.some(tag => tag.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
                <i className="ri-product-hunt-line mr-2"></i>
                제품 기반 구축 포트폴리오
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                검증된 제품으로 빠르게 구축하다
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                ArtiFlow, SmartHub, ConnectStack 등<br />
                Artiordex의 자체 제품을 활용한 성공적인 구축 사례입니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">6+</div>
                  <div className="text-gray-700 font-medium">자체 제품</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">180+</div>
                  <div className="text-gray-700 font-medium">구축 프로젝트</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">70%</div>
                  <div className="text-gray-700 font-medium">평균 비용 절감</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Breadcrumb items={breadcrumbItems} />

        {/* Filter Section */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'ArtiFlow', 'SmartHub', 'ConnectStack', 'Low-Code', 'Integration'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-200'
                  }`}
                >
                  {filter === 'all' ? '전체' : filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <a
                  key={project.id}
                  href={project.link}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      {project.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="flex items-start text-sm text-gray-600">
                          <i className="ri-check-line text-green-500 mr-2 mt-0.5"></i>
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-indigo-600 font-medium group-hover:translate-x-2 transition-transform">
                      자세히 보기
                      <i className="ri-arrow-right-line ml-2"></i>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                검증된 제품으로 프로젝트를 시작하세요
              </h2>
              <p className="text-xl mb-8 opacity-90">
                빠른 구축과 안정적인 운영을 보장하는 Artiordex 제품을 경험하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-apps-line mr-2"></i>
                  제품 솔루션 보기
                </a>
                <a
                  href="/contact/projects/custom-dev"
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-700 text-white font-semibold rounded-xl hover:bg-indigo-800 transition-colors border-2 border-white/30 whitespace-nowrap"
                >
                  <i className="ri-message-3-line mr-2"></i>
                  구축 문의하기
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default ProductPortfolioPage;
