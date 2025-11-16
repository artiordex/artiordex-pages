import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import ChatBot from '../../../components/feature/ChatBot';
import QuickBar from '../../../components/feature/QuickBar';
import Breadcrumb from '../../../components/feature/Breadcrumb';
import { Link } from 'react-router-dom';

const CustomIntegrationPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'Custom Integration & API', href: '/solutions/custom-integration' }
  ];

  const features = [
    {
      icon: 'ri-code-s-slash-line',
      title: 'ERP/CRM 커스터마이징',
      description: '기존 시스템 확장 및 맞춤형 기능 개발'
    },
    {
      icon: 'ri-plug-line',
      title: 'API 개발 & 연동',
      description: 'RESTful API 설계 및 시스템 간 연동'
    },
    {
      icon: 'ri-cloud-line',
      title: 'SaaS 통합',
      description: '다양한 SaaS 서비스 간 데이터 연동'
    },
    {
      icon: 'ri-server-line',
      title: '클라우드 아키텍처',
      description: 'Azure 기반 확장 가능한 인프라 설계'
    },
    {
      icon: 'ri-database-line',
      title: '데이터 마이그레이션',
      description: '레거시 시스템 데이터 안전한 이전'
    },
    {
      icon: 'ri-shield-check-line',
      title: '보안 & 모니터링',
      description: '엔터프라이즈급 보안 및 실시간 모니터링'
    }
  ];

  const services = [
    {
      category: 'ERP/CRM 커스터마이징',
      items: [
        'SAP, Oracle ERP 확장 개발',
        'Salesforce, Dynamics 365 커스터마이징',
        '업무 프로세스 맞춤 개발',
        '사용자 인터페이스 개선'
      ],
      icon: 'ri-settings-3-line',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'API 개발 & 통합',
      items: [
        'RESTful API 설계 및 개발',
        'GraphQL API 구축',
        '마이크로서비스 아키텍처',
        'API Gateway 구성'
      ],
      icon: 'ri-plug-line',
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: '클라우드 인프라',
      items: [
        'Azure 클라우드 아키텍처',
        'Container 기반 배포',
        'CI/CD 파이프라인 구축',
        '모니터링 및 로깅 시스템'
      ],
      icon: 'ri-cloud-line',
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: '데이터 통합',
      items: [
        'ETL/ELT 파이프라인 구축',
        '실시간 데이터 동기화',
        '데이터 웨어하우스 구축',
        '데이터 품질 관리'
      ],
      icon: 'ri-database-line',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const techStack = [
    { name: 'Azure', icon: 'ri-microsoft-line', category: 'Cloud' },
    { name: 'Node.js', icon: 'ri-nodejs-line', category: 'Backend' },
    { name: 'React', icon: 'ri-reactjs-line', category: 'Frontend' },
    { name: 'Docker', icon: 'ri-docker-line', category: 'DevOps' },
    { name: 'SQL Server', icon: 'ri-database-2-line', category: 'Database' },
    { name: 'Power Platform', icon: 'ri-microsoft-line', category: 'Low-code' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <i className="ri-tools-line text-4xl text-white"></i>
                </div>
                <div className="text-left">
                  <h1 className="text-4xl md:text-5xl font-bold mb-2">Custom Integration & API</h1>
                  <p className="text-xl text-yellow-100">맞춤형 통합 개발</p>
                </div>
              </div>
              
              <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                ERP/CRM/MES 커스터마이징, 커스텀 API 개발, SaaS 간 연계, 확장 가능한 클라우드 아키텍처를 통한 
                기업 맞춤형 통합 솔루션을 제공합니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap"
                >
                  개발 문의
                </Link>
                <Link
                  to="/solutions"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  다른 솔루션 보기
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">해결하는 문제</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-disconnect-line text-3xl text-red-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">시스템 분산</h3>
                  <p className="text-gray-600">각각 독립된 시스템으로 인한 데이터 사일로</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-forbid-line text-3xl text-orange-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">기능 제약</h3>
                  <p className="text-gray-600">기존 시스템의 한계로 인한 업무 제약</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <i className="ri-time-line text-3xl text-blue-500 mb-4"></i>
                  <h3 className="font-semibold text-gray-900 mb-2">개발 지연</h3>
                  <p className="text-gray-600">복잡한 통합 요구사항으로 인한 개발 지연</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">개발 서비스</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  기업의 특수한 요구사항에 맞춘 맞춤형 개발 및 통합 서비스를 제공합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center`}>
                        <i className={`${service.icon} text-xl text-white`}></i>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <i className="ri-check-line text-green-600"></i>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">기술 스택</h2>
                <p className="text-xl text-gray-600">검증된 기술로 안정적이고 확장 가능한 솔루션을 구축합니다</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {techStack.map((tech, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <i className={`${tech.icon} text-3xl text-gray-700 mb-3`}></i>
                    <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">개발 프로세스</h2>
                <p className="text-xl text-gray-600">체계적인 개발 프로세스로 성공적인 프로젝트를 보장합니다</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">요구사항 분석</h3>
                  <p className="text-gray-600 text-sm">비즈니스 요구사항 및 기술 요구사항 상세 분석</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">설계 & 아키텍처</h3>
                  <p className="text-gray-600 text-sm">시스템 아키텍처 설계 및 기술 스택 선정</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">개발 & 테스트</h3>
                  <p className="text-gray-600 text-sm">애자일 방식의 개발 및 지속적인 테스트</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">배포 & 운영</h3>
                  <p className="text-gray-600 text-sm">안전한 배포 및 지속적인 운영 지원</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">맞춤형 통합 솔루션을 구축하세요</h2>
              <p className="text-xl text-yellow-100 mb-8">
                기업의 특수한 요구사항에 맞춘 전문적인 개발 서비스로 경쟁력을 확보하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors whitespace-nowrap"
                >
                  개발 프로젝트 문의
                </Link>
                <a
                  href="tel:02-1234-5678"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  전화 상담: 02-1234-5678
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

export default CustomIntegrationPage;