import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';

const DXPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'DX 전환 사례', href: '/portfolio/dx' }
  ];

  const projects = [
    {
      id: 'enterprise-dx',
      title: '대기업 디지털 전환',
      description: '전사적 디지털 전환을 통해 업무 프로세스를 혁신하고 생산성을 극대화합니다.',
      image: 'https://readdy.ai/api/search-image?query=enterprise%20digital%20transformation%20with%20company-wide%20process%20innovation%20and%20productivity%20maximization%2C%20modern%20corporate%20headquarters%20with%20digital%20workplace%2C%20business%20transformation%20visualization%2C%20enterprise%20modernization%20interface&width=600&height=400&seq=dx001&orientation=landscape',
      tags: ['Enterprise DX', 'Process Innovation', 'Change Management', 'Digital Workplace'],
      results: ['업무 효율 75% 향상', '비용 40% 절감', '직원 만족도 85% 달성'],
      link: '/portfolio/dx/enterprise-dx'
    },
    {
      id: 'public-digitalization',
      title: '공공기관 디지털화',
      description: '공공 서비스의 디지털화를 통해 시민 편의성과 행정 효율성을 개선합니다.',
      image: 'https://readdy.ai/api/search-image?query=public%20sector%20digitalization%20with%20citizen%20service%20improvement%20and%20administrative%20efficiency%2C%20modern%20government%20office%20with%20digital%20public%20services%2C%20e-government%20transformation%2C%20citizen-centric%20digital%20platform&width=600&height=400&seq=dx002&orientation=landscape',
      tags: ['Public Sector', 'E-Government', 'Citizen Services', 'Administrative Efficiency'],
      results: ['민원 처리 60% 단축', '시민 만족도 90%', '행정 비용 35% 절감'],
      link: '/portfolio/dx/public-digitalization'
    },
    {
      id: 'smb-automation',
      title: '중소기업 업무 자동화',
      description: '중소기업의 핵심 업무를 자동화하여 경쟁력을 강화합니다.',
      image: 'https://readdy.ai/api/search-image?query=SMB%20business%20automation%20with%20core%20process%20digitalization%20for%20competitive%20advantage%2C%20modern%20small%20business%20office%20with%20automated%20workflows%2C%20digital%20transformation%20for%20SMEs%2C%20business%20process%20automation%20interface&width=600&height=400&seq=dx003&orientation=landscape',
      tags: ['SMB', 'Business Automation', 'Cost Efficiency', 'Scalability'],
      results: ['업무 시간 70% 절감', 'ROI 250% 달성', '확장성 300% 향상'],
      link: '/portfolio/dx/smb-automation'
    },
    {
      id: 'rpa',
      title: 'RPA 도입 및 확산',
      description: 'RPA를 전사적으로 도입하여 반복 업무를 자동화합니다.',
      image: 'https://readdy.ai/api/search-image?query=RPA%20implementation%20and%20expansion%20with%20enterprise-wide%20automation%20of%20repetitive%20tasks%2C%20modern%20office%20with%20robotic%20process%20automation%2C%20automated%20workflow%20visualization%2C%20RPA%20bot%20management%20interface&width=600&height=400&seq=dx004&orientation=landscape',
      tags: ['RPA', 'Process Automation', 'Bot Management', 'Efficiency'],
      results: ['자동화율 85%', '처리 시간 90% 단축', '오류율 98% 감소'],
      link: '/portfolio/dx/rpa'
    },
    {
      id: 'legacy-modernization',
      title: '레거시 시스템 현대화',
      description: '오래된 시스템을 최신 기술로 전환하여 유지보수성과 확장성을 개선합니다.',
      image: 'https://readdy.ai/api/search-image?query=legacy%20system%20modernization%20with%20latest%20technology%20transformation%2C%20modern%20IT%20infrastructure%20with%20cloud%20migration%2C%20system%20upgrade%20visualization%2C%20enterprise%20application%20modernization&width=600&height=400&seq=dx005&orientation=landscape',
      tags: ['Legacy Modernization', 'Cloud Migration', 'System Upgrade', 'Technical Debt'],
      results: ['유지보수 비용 50% 절감', '시스템 성능 200% 향상', '확장성 확보'],
      link: '/portfolio/dx/legacy-modernization'
    },
    {
      id: 'lcap-powerplatform',
      title: 'Low-Code 플랫폼 구축',
      description: 'Power Platform을 활용한 로우코드 개발 환경을 구축합니다.',
      image: 'https://readdy.ai/api/search-image?query=low-code%20platform%20development%20with%20Power%20Platform%20for%20rapid%20application%20development%2C%20modern%20office%20with%20citizen%20developer%20workspace%2C%20visual%20development%20interface%2C%20no-code%20app%20builder%20visualization&width=600&height=400&seq=dx006&orientation=landscape',
      tags: ['Low-Code', 'Power Platform', 'Citizen Developer', 'Rapid Development'],
      results: ['개발 속도 300% 향상', '개발 비용 60% 절감', '앱 출시 시간 80% 단축'],
      link: '/portfolio/dx/lcap-powerplatform'
    },
    {
      id: 'cloud-migration',
      title: '클라우드 마이그레이션',
      description: '온프레미스 시스템을 클라우드로 안전하게 전환합니다.',
      image: 'https://readdy.ai/api/search-image?query=cloud%20migration%20from%20on-premises%20to%20cloud%20infrastructure%20with%20secure%20data%20transfer%2C%20modern%20data%20center%20with%20cloud%20computing%2C%20Azure%20migration%20visualization%2C%20hybrid%20cloud%20architecture&width=600&height=400&seq=dx007&orientation=landscape',
      tags: ['Cloud Migration', 'Azure', 'Hybrid Cloud', 'Infrastructure'],
      results: ['운영 비용 45% 절감', '가용성 99.9% 달성', '확장성 무제한'],
      link: '/portfolio/dx/cloud-migration'
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
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <i className="ri-refresh-line mr-2"></i>
                DX 전환 포트폴리오
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                디지털 전환으로 미래를 준비하다
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Microsoft 365, Power Platform, Azure를 활용하여<br />
                조직의 디지털 전환을 성공적으로 이끌어냅니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-700 font-medium">DX 프로젝트</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">75%</div>
                  <div className="text-gray-700 font-medium">평균 효율 향상</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
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
              {['all', 'Enterprise', 'Public Sector', 'SMB', 'RPA', 'Cloud', 'Power Platform'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2"
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
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

                    <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
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
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                DX 전환을 시작하세요
              </h2>
              <p className="text-xl mb-8 opacity-90">
                귀사의 디지털 전환 여정을 함께 하겠습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact/projects/dx-consulting"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-lightbulb-line mr-2"></i>
                  DX 컨설팅 문의
                </a>
                <a
                  href="/resources/tools/dx-maturity-assessment"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors border-2 border-white/30 whitespace-nowrap"
                >
                  <i className="ri-bar-chart-line mr-2"></i>
                  DX 성숙도 평가
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

export default DXPortfolioPage;
