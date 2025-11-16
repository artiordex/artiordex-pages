import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';

const DataIntegrationPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: '데이터 통합', href: '/portfolio/data' }
  ];

  const projects = [
    {
      id: 'system-integration',
      title: '시스템 통합',
      description: '이기종 시스템 간 원활한 데이터 연동과 통합을 구현합니다.',
      image: 'https://readdy.ai/api/search-image?query=enterprise%20system%20integration%20with%20seamless%20data%20connectivity%20between%20heterogeneous%20systems%2C%20modern%20IT%20infrastructure%20with%20multiple%20system%20connections%2C%20integration%20architecture%20visualization%2C%20middleware%20platform%20interface&width=600&height=400&seq=data001&orientation=landscape',
      tags: ['System Integration', 'Middleware', 'API Gateway', 'Enterprise Integration'],
      results: ['시스템 연동 100% 완료', '데이터 동기화 실시간', '통합 비용 50% 절감'],
      link: '/portfolio/data/system-integration'
    },
    {
      id: 'real-time-sync',
      title: '실시간 데이터 동기화',
      description: '여러 시스템 간 실시간 데이터 동기화를 통해 데이터 일관성을 보장합니다.',
      image: 'https://readdy.ai/api/search-image?query=real-time%20data%20synchronization%20across%20multiple%20systems%20with%20data%20consistency%20guarantee%2C%20modern%20data%20center%20with%20streaming%20data%20flow%2C%20synchronized%20database%20visualization%2C%20event-driven%20architecture&width=600&height=400&seq=data002&orientation=landscape',
      tags: ['Real-time Sync', 'Event Streaming', 'Data Consistency', 'Apache Kafka'],
      results: ['동기화 지연 1초 이내', '데이터 정확도 99.9%', '처리량 10,000+ TPS'],
      link: '/portfolio/data/real-time-sync'
    },
    {
      id: 'legacy-migration',
      title: '레거시 데이터 마이그레이션',
      description: '오래된 시스템의 데이터를 안전하게 최신 플랫폼으로 이전합니다.',
      image: 'https://readdy.ai/api/search-image?query=legacy%20data%20migration%20to%20modern%20platform%20with%20secure%20data%20transfer%2C%20data%20center%20with%20migration%20process%20visualization%2C%20database%20modernization%20interface%2C%20ETL%20pipeline%20architecture&width=600&height=400&seq=data003&orientation=landscape',
      tags: ['Data Migration', 'ETL', 'Legacy Modernization', 'Data Quality'],
      results: ['데이터 무손실 이전', '마이그레이션 시간 60% 단축', '데이터 품질 95% 향상'],
      link: '/portfolio/data/legacy-migration'
    },
    {
      id: 'api-gateway',
      title: 'API 게이트웨이 구축',
      description: '통합 API 게이트웨이로 모든 서비스를 중앙에서 관리합니다.',
      image: 'https://readdy.ai/api/search-image?query=API%20gateway%20architecture%20with%20centralized%20service%20management%2C%20modern%20cloud%20infrastructure%20with%20API%20management%20platform%2C%20microservices%20integration%20visualization%2C%20API%20security%20and%20monitoring%20interface&width=600&height=400&seq=data004&orientation=landscape',
      tags: ['API Gateway', 'API Management', 'Microservices', 'Azure APIM'],
      results: ['API 응답 시간 70% 개선', '보안 수준 300% 향상', '관리 효율 80% 증가'],
      link: '/portfolio/data/api-gateway'
    },
    {
      id: 'microservices',
      title: '마이크로서비스 아키텍처',
      description: '모놀리식 시스템을 마이크로서비스로 전환하여 확장성을 확보합니다.',
      image: 'https://readdy.ai/api/search-image?query=microservices%20architecture%20transformation%20from%20monolithic%20system%20with%20scalability%20improvement%2C%20modern%20cloud-native%20infrastructure%2C%20containerized%20services%20visualization%2C%20Kubernetes%20orchestration%20interface&width=600&height=400&seq=data005&orientation=landscape',
      tags: ['Microservices', 'Kubernetes', 'Docker', 'Cloud Native'],
      results: ['배포 속도 500% 향상', '확장성 무제한', '장애 격리 100%'],
      link: '/portfolio/data/microservices'
    },
    {
      id: 'data-pipeline',
      title: '데이터 파이프라인',
      description: 'ETL/ELT 파이프라인으로 대용량 데이터를 효율적으로 처리합니다.',
      image: 'https://readdy.ai/api/search-image?query=data%20pipeline%20with%20ETL%20ELT%20processing%20for%20large-scale%20data%20handling%2C%20modern%20data%20engineering%20platform%20with%20workflow%20orchestration%2C%20big%20data%20processing%20visualization%2C%20Azure%20Data%20Factory%20interface&width=600&height=400&seq=data006&orientation=landscape',
      tags: ['Data Pipeline', 'ETL/ELT', 'Big Data', 'Azure Data Factory'],
      results: ['데이터 처리량 1TB+/일', '처리 시간 80% 단축', '비용 효율 60% 개선'],
      link: '/portfolio/data/data-pipeline'
    },
    {
      id: 'cloud-db',
      title: '클라우드 데이터베이스 전환',
      description: '온프레미스 데이터베이스를 클라우드로 안전하게 전환합니다.',
      image: 'https://readdy.ai/api/search-image?query=cloud%20database%20migration%20from%20on-premises%20with%20secure%20data%20transfer%2C%20modern%20cloud%20data%20center%20with%20Azure%20SQL%20Database%2C%20database%20modernization%20visualization%2C%20hybrid%20cloud%20architecture&width=600&height=400&seq=data007&orientation=landscape',
      tags: ['Cloud Database', 'Azure SQL', 'Database Migration', 'High Availability'],
      results: ['가용성 99.99% 달성', '성능 200% 향상', '운영 비용 45% 절감'],
      link: '/portfolio/data/cloud-db'
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
        <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
                <i className="ri-database-2-line mr-2"></i>
                데이터 통합 포트폴리오
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                데이터로 비즈니스를 연결하다
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                API 통합, 데이터 마이그레이션, 실시간 동기화를 통해<br />
                모든 시스템을 하나로 연결합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">300+</div>
                  <div className="text-gray-700 font-medium">통합 프로젝트</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">99.9%</div>
                  <div className="text-gray-700 font-medium">데이터 정확도</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">50%</div>
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
              {['all', 'API', 'ETL', 'Migration', 'Microservices', 'Cloud'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200 transform hover:-translate-y-2"
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full font-medium">
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

                    <div className="flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform">
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
        <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                데이터 통합 프로젝트를 시작하세요
              </h2>
              <p className="text-xl mb-8 opacity-90">
                귀사의 시스템을 하나로 연결하는 최적의 솔루션을 제안합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact/projects/custom-dev"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-code-s-slash-line mr-2"></i>
                  통합 프로젝트 문의
                </a>
                <a
                  href="/solutions/data-integration"
                  className="inline-flex items-center justify-center px-8 py-4 bg-emerald-700 text-white font-semibold rounded-xl hover:bg-emerald-800 transition-colors border-2 border-white/30 whitespace-nowrap"
                >
                  <i className="ri-book-open-line mr-2"></i>
                  솔루션 자세히 보기
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

export default DataIntegrationPortfolioPage;
