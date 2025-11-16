import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';

const IndustryPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: '산업별 솔루션', href: '/portfolio/industry' }
  ];

  const projects = [
    {
      id: 'manufacturing',
      title: '제조업 스마트 팩토리',
      description: 'IoT와 AI를 결합한 스마트 팩토리 솔루션으로 생산성을 극대화합니다.',
      image: 'https://readdy.ai/api/search-image?query=smart%20factory%20manufacturing%20with%20IoT%20and%20AI%20integration%20for%20productivity%20maximization%2C%20modern%20industrial%20facility%20with%20automated%20production%20lines%2C%20real-time%20monitoring%20dashboard%2C%20Industry%204.0%20visualization&width=600&height=400&seq=ind001&orientation=landscape',
      tags: ['Manufacturing', 'Smart Factory', 'IoT', 'Predictive Maintenance'],
      results: ['생산성 85% 향상', '불량률 90% 감소', '다운타임 70% 단축'],
      link: '/portfolio/industry/manufacturing'
    },
    {
      id: 'finance',
      title: '금융 디지털 뱅킹',
      description: '차세대 디지털 뱅킹 플랫폼으로 고객 경험을 혁신합니다.',
      image: 'https://readdy.ai/api/search-image?query=digital%20banking%20platform%20with%20next-generation%20financial%20services%20and%20customer%20experience%20innovation%2C%20modern%20bank%20branch%20with%20digital%20transformation%2C%20mobile%20banking%20interface%2C%20fintech%20visualization&width=600&height=400&seq=ind002&orientation=landscape',
      tags: ['Finance', 'Digital Banking', 'Fintech', 'Customer Experience'],
      results: ['고객 만족도 92%', '거래 시간 80% 단축', '디지털 채널 이용률 300% 증가'],
      link: '/portfolio/industry/finance'
    },
    {
      id: 'healthcare',
      title: '헬스케어 통합 플랫폼',
      description: '환자 중심의 통합 의료 정보 시스템을 구축합니다.',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20integrated%20platform%20with%20patient-centric%20medical%20information%20system%2C%20modern%20hospital%20with%20digital%20health%20records%2C%20telemedicine%20interface%2C%20healthcare%20IT%20visualization&width=600&height=400&seq=ind003&orientation=landscape',
      tags: ['Healthcare', 'EMR', 'Telemedicine', 'Patient Care'],
      results: ['진료 효율 75% 향상', '환자 대기 시간 60% 단축', '의료 오류 95% 감소'],
      link: '/portfolio/industry/healthcare'
    },
    {
      id: 'logistics',
      title: '물류 최적화 시스템',
      description: 'AI 기반 경로 최적화와 실시간 추적으로 물류 효율을 극대화합니다.',
      image: 'https://readdy.ai/api/search-image?query=logistics%20optimization%20system%20with%20AI-powered%20route%20planning%20and%20real-time%20tracking%2C%20modern%20warehouse%20with%20automated%20logistics%2C%20delivery%20fleet%20management%20interface%2C%20supply%20chain%20visualization&width=600&height=400&seq=ind004&orientation=landscape',
      tags: ['Logistics', 'Route Optimization', 'Real-time Tracking', 'Supply Chain'],
      results: ['배송 비용 35% 절감', '배송 시간 40% 단축', '고객 만족도 88%'],
      link: '/portfolio/industry/logistics'
    },
    {
      id: 'retail',
      title: '리테일 옴니채널',
      description: '온오프라인 통합 쇼핑 경험으로 매출을 증대합니다.',
      image: 'https://readdy.ai/api/search-image?query=retail%20omnichannel%20platform%20with%20integrated%20online%20offline%20shopping%20experience%2C%20modern%20retail%20store%20with%20digital%20transformation%2C%20unified%20commerce%20interface%2C%20customer%20journey%20visualization&width=600&height=400&seq=ind005&orientation=landscape',
      tags: ['Retail', 'Omnichannel', 'E-commerce', 'Customer Analytics'],
      results: ['매출 120% 증가', '고객 재구매율 65% 향상', '재고 회전율 80% 개선'],
      link: '/portfolio/industry/retail'
    },
    {
      id: 'education',
      title: '교육 디지털 학습',
      description: 'AI 기반 맞춤형 학습 플랫폼으로 교육 효과를 극대화합니다.',
      image: 'https://readdy.ai/api/search-image?query=digital%20learning%20platform%20with%20AI-powered%20personalized%20education%2C%20modern%20classroom%20with%20educational%20technology%2C%20online%20learning%20interface%2C%20adaptive%20learning%20visualization&width=600&height=400&seq=ind006&orientation=landscape',
      tags: ['Education', 'E-learning', 'Adaptive Learning', 'LMS'],
      results: ['학습 효과 70% 향상', '학생 참여도 85% 증가', '교사 업무 60% 경감'],
      link: '/portfolio/industry/education'
    },
    {
      id: 'iot-factory',
      title: 'IoT 스마트 공장',
      description: 'IoT 센서와 실시간 모니터링으로 공장 운영을 최적화합니다.',
      image: 'https://readdy.ai/api/search-image?query=IoT%20smart%20factory%20with%20sensor%20network%20and%20real-time%20monitoring%20for%20optimized%20operations%2C%20industrial%20facility%20with%20connected%20devices%2C%20factory%20automation%20interface%2C%20IoT%20dashboard%20visualization&width=600&height=400&seq=ind007&orientation=landscape',
      tags: ['IoT', 'Smart Factory', 'Real-time Monitoring', 'Automation'],
      results: ['설비 가동률 95%', '에너지 효율 40% 개선', '예측 정비 정확도 92%'],
      link: '/portfolio/industry/iot-factory'
    },
    {
      id: 'oee-automation',
      title: 'OEE 자동화 시스템',
      description: '설비 종합 효율(OEE)을 실시간으로 측정하고 개선합니다.',
      image: 'https://readdy.ai/api/search-image?query=OEE%20automation%20system%20with%20real-time%20equipment%20effectiveness%20measurement%2C%20manufacturing%20plant%20with%20performance%20monitoring%2C%20production%20efficiency%20dashboard%2C%20OEE%20analytics%20visualization&width=600&height=400&seq=ind008&orientation=landscape',
      tags: ['OEE', 'Manufacturing', 'Performance Monitoring', 'Analytics'],
      results: ['OEE 85% 달성', '생산 손실 60% 감소', '품질 개선 45%'],
      link: '/portfolio/industry/oee-automation'
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
        <section className="relative bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-orange-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-amber-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
                <i className="ri-building-line mr-2"></i>
                산업별 솔루션 포트폴리오
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                산업별 맞춤 솔루션
              </h1>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                제조, 금융, 헬스케어, 물류, 리테일 등<br />
                각 산업의 특성에 최적화된 디지털 솔루션을 제공합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">8+</div>
                  <div className="text-gray-700 font-medium">산업 분야</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-amber-600 mb-2">250+</div>
                  <div className="text-gray-700 font-medium">산업별 프로젝트</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-gray-700 font-medium">고객 만족도</div>
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
              {['all', 'Manufacturing', 'Finance', 'Healthcare', 'Logistics', 'Retail', 'Education', 'IoT'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-orange-50 border border-gray-200'
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2"
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
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

                    <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-2 transition-transform">
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
        <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-600">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                귀사의 산업에 맞는 솔루션을 찾아보세요
              </h2>
              <p className="text-xl mb-8 opacity-90">
                각 산업의 특성을 이해하고 최적화된 솔루션을 제공합니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact/enterprise/consulting"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  <i className="ri-customer-service-line mr-2"></i>
                  산업별 컨설팅 문의
                </a>
                <a
                  href="/solutions"
                  className="inline-flex items-center justify-center px-8 py-4 bg-orange-700 text-white font-semibold rounded-xl hover:bg-orange-800 transition-colors border-2 border-white/30 whitespace-nowrap"
                >
                  <i className="ri-apps-line mr-2"></i>
                  전체 솔루션 보기
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

export default IndustryPortfolioPage;
