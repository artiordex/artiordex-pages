
import { Link } from 'react-router-dom';

const SolutionCardsSection = () => {
  const solutions = [
    {
      id: 'artiflow',
      title: 'Artiflow',
      subtitle: 'AI Workflow OS',
      description: '기업 운영의 중심이 되는 AI 기반 Workflow OS입니다. 자동화, 승인 흐름, 데이터 처리, 보고서 생성을 AI Workflow Generator 기반으로 모든 업무가 흐름 기반으로 설계됩니다.',
      icon: 'ri-flow-chart',
      color: 'from-blue-500 to-cyan-500',
      url: '/solutions/artiflow'
    },
    {
      id: 'smarthub',
      title: 'SmartHub',
      subtitle: 'Data Integration Platform',
      description: 'ERP, CRM, MES, 예약 시스템 등 모든 데이터의 중앙 허브입니다. Schema Auto-Mapping AI와 API 자동 연결을 통해 예측 분석 기반의 통합 데이터 플랫폼을 제공합니다.',
      icon: 'ri-database-2-line',
      color: 'from-indigo-500 to-purple-500',
      url: '/solutions/smarthub'
    },
    {
      id: 'connectstack',
      title: 'ConnectStack',
      subtitle: 'Local Operations Platform',
      description: '지역, 기관, 조직 운영 OS입니다. 예약, 인력 배정, 공지, 결제, 정산, 보고 자동화를 통해 로컬 생태계, 행정, 기관 기반에 최적화된 운영 플랫폼을 제공합니다.',
      icon: 'ri-links-line',
      color: 'from-green-500 to-emerald-500',
      url: '/solutions/connectstack'
    },
    {
      id: 'automation-ai',
      title: 'AI & Automation Solutions',
      subtitle: 'RPA + AI 통합 운영',
      description: 'RPA와 AI를 통합한 운영 솔루션입니다. 문서 자동화, 메일 및 보고서 자동 생성, 예측 분석, AI Agent 운영을 통해 업무 프로세스를 완전 자동화합니다.',
      icon: 'ri-robot-line',
      color: 'from-orange-500 to-red-500',
      url: '/solutions/automation-ai'
    },
    {
      id: 'power-platform',
      title: 'Power Platform Solutions',
      subtitle: 'Microsoft 파트너십 기반 DX',
      description: 'Power Apps, Power Automate, Power BI, Dataverse 구축을 통한 Microsoft 파트너십 기반 디지털 전환 솔루션입니다. 기업의 로우코드 플랫폼 구축을 지원합니다.',
      icon: 'ri-microsoft-line',
      color: 'from-blue-600 to-indigo-600',
      url: '/solutions/power-platform'
    },
    {
      id: 'training-enablement',
      title: 'Training & Enablement',
      subtitle: 'DX 역량 강화',
      description: 'DX 역량 강화, Power Platform 사내 교육, 자동화 워크숍, Microsoft 인증 준비를 통한 기업 맞춤형 Enablement 프로그램을 제공합니다.',
      icon: 'ri-graduation-cap-line',
      color: 'from-purple-500 to-pink-500',
      url: '/solutions/training-enablement'
    },
    {
      id: 'custom-integration',
      title: 'Custom Integration & API',
      subtitle: '맞춤형 통합 개발',
      description: 'ERP/CRM/MES 커스터마이징, 커스텀 API 개발, SaaS 간 연계, 확장 가능한 클라우드 아키텍처를 통한 기업 맞춤형 통합 솔루션을 제공합니다.',
      icon: 'ri-tools-line',
      color: 'from-yellow-500 to-orange-500',
      url: '/solutions/custom-integration'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              솔루션 포트폴리오
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기업의 디지털 전환을 위한 7가지 핵심 솔루션으로 업무 자동화부터 데이터 통합, 
              AI 기반 워크플로우까지 완전한 DX 생태계를 구축합니다.
            </p>
          </div>

          {/* Solution Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.id}
                to={solution.url}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <i className={`${solution.icon} text-2xl text-white`}></i>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 mt-1">
                        {solution.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Learn More */}
                    <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      <span className="text-sm">자세히 보기</span>
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionCardsSection;
