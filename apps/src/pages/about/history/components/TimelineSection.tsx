
const TimelineSection = () => {
  const timelineData = [
    {
      year: "YEAR 1",
      title: "Foundation Stage",
      subtitle: "기반 구축",
      milestones: [
        {
          title: "Artiordex 브랜드 아이덴티티 확립",
          description: "AI + Order + Index 개념을 기반으로 한 브랜드 철학 정립 및 비전 선언"
        },
        {
          title: "핵심 미션 및 비전 공식화",
          description: "Human-Centric Technology, Automation-First DX, Accessible Innovation 3대 원칙 수립"
        },
        {
          title: "Artiflow 프로토타입 개발 착수",
          description: "AI 기반 워크플로우 자동화 엔진의 초기 아키텍처 설계 및 MVP 개발"
        },
        {
          title: "DX SmartHub AI 모델 연구 시작",
          description: "기업 데이터 통합을 위한 Schema Auto-Mapping AI 알고리즘 기초 연구"
        },
        {
          title: "ConnectStack 기획 구조 확립",
          description: "지역 및 조직 운영 자동화를 위한 SaaS 플랫폼 기본 설계 완료"
        },
        {
          title: "Power Platform 기반 DX 컨설팅 시작",
          description: "Microsoft 생태계 전문성을 활용한 기업 디지털 전환 컨설팅 서비스 개시"
        },
        {
          title: "기술 문서 및 브랜드 체계화",
          description: "핵심 기술 특허 출원을 위한 기술 문서 작성 및 브랜드 가이드라인 구축"
        }
      ]
    },
    {
      year: "YEAR 2",
      title: "Product Acceleration",
      subtitle: "제품 가속화",
      milestones: [
        {
          title: "Artiflow Beta 버전 정식 출시",
          description: "AI 워크플로우 자동화 엔진의 베타 버전 출시 및 초기 고객 피드백 수집"
        },
        {
          title: "SmartHub 자동 매핑 엔진 개발",
          description: "서로 다른 기업 시스템 간 데이터 자동 연결을 위한 AI 매핑 엔진 구현"
        },
        {
          title: "ConnectStack MVP 개발 착수",
          description: "지역 운영 플랫폼의 최소 기능 제품(MVP) 개발 및 테스트 환경 구축"
        },
        {
          title: "DX 프로젝트 포트폴리오 확장",
          description: "다양한 업종의 기업을 대상으로 한 디지털 전환 프로젝트 다수 수행"
        },
        {
          title: "AI 자동화 알고리즘 고도화",
          description: "머신러닝 기반 업무 패턴 분석 및 자동 프로세스 생성 알고리즘 개발"
        },
        {
          title: "첫 번째 특허 출원: AI Workflow Generator",
          description: "업무 패턴 분석을 통한 자동 워크플로우 생성 기술에 대한 특허 출원"
        },
        {
          title: "Schema Auto-Mapping AI 특허 연구",
          description: "기업 시스템 간 스키마 자동 매핑 기술에 대한 특허 출원 준비"
        },
        {
          title: "기업용 온보딩 시스템 구축",
          description: "B2B 고객을 위한 체계적인 도입 프로세스 및 교육 시스템 개발"
        }
      ]
    },
    {
      year: "YEAR 3",
      title: "Pre-Launch & Commercial Release",
      subtitle: "상용화 단계",
      milestones: [
        {
          title: "Artiflow v1.0 정식 출시",
          description: "AI 워크플로우 자동화 SaaS의 상용 버전 출시 및 유료 서비스 개시"
        },
        {
          title: "DX SmartHub 베타 정식화",
          description: "기업 데이터 통합 허브 플랫폼의 베타 서비스를 정식 버전으로 업그레이드"
        },
        {
          title: "ConnectStack v1.0 상용화",
          description: "지역 및 조직 운영 자동화 SaaS 플랫폼의 첫 번째 상용 버전 출시"
        },
        {
          title: "핵심 특허 3건 출원 완료",
          description: "AI Workflow Generator, Schema Auto-Mapping, Autonomous Operation Engine 특허 출원"
        },
        {
          title: "초기 유료 고객 확보",
          description: "기업 및 공공기관을 대상으로 한 유료 고객 기반 구축 및 매출 창출"
        },
        {
          title: "SaaS 빌링 시스템 구축",
          description: "구독 기반 과금 시스템 및 고객 관리 플랫폼 구축"
        },
        {
          title: "클라우드 인프라 안정화",
          description: "AWS 기반 확장 가능한 클라우드 아키텍처 구축 및 보안 체계 강화"
        },
        {
          title: "핵심 팀 구성 완료",
          description: "AI 엔지니어, 프론트엔드, 백엔드, 디자이너, PM 등 핵심 인력 확보"
        },
        {
          title: "투자 유치 준비",
          description: "시드 투자를 위한 IR 덱 준비 및 투자자 미팅 진행"
        },
        {
          title: "기술 로드맵 고도화",
          description: "향후 3년간의 제품 개발 및 기술 혁신 로드맵 수립"
        }
      ]
    },
    {
      year: "LAUNCH YEAR",
      title: "Company Establishment",
      subtitle: "정식 창업",
      milestones: [
        {
          title: "Artiordex Inc. 법인 설립",
          description: "AI 기반 디지털 전환 전문 기업으로서의 정식 법인 설립 및 사업자 등록"
        },
        {
          title: "SaaS 3대 제품 상용화 완료",
          description: "Artiflow, DX SmartHub, ConnectStack 모든 제품의 정식 상용 서비스 개시"
        },
        {
          title: "핵심 기술 특허 등록 진행",
          description: "출원한 3건의 핵심 기술 특허에 대한 등록 절차 진행 및 지식재산권 확보"
        },
        {
          title: "고객 성공 조직 구축",
          description: "고객 온보딩, 교육, 지원을 전담하는 Customer Success 팀 신설"
        },
        {
          title: "Microsoft 파트너십 체결",
          description: "Microsoft 공식 파트너로서의 협력 관계 구축 및 Power Platform 전문성 인증"
        },
        {
          title: "시드 투자 라운드 진행",
          description: "초기 투자 유치를 통한 사업 확장 자금 확보 및 성장 기반 마련"
        },
        {
          title: "공식 비전 발표",
          description: "국내 DX 자동화 SaaS No.1 기업으로의 성장 비전 및 전략 공개"
        }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            성장의 발자취
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            혁신적인 AI 기술과 디지털 전환 솔루션 개발을 통해 
            기업의 미래를 만들어가는 Artiordex의 여정입니다.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-0.5"></div>

          {timelineData.map((yearData, yearIndex) => (
            <div key={yearIndex} className="relative mb-16 md:mb-24">
              {/* Year Marker */}
              <div className="flex items-center mb-8">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 md:ml-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:top-1/2">
                  <div className="bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
                    <h3 className="text-xl md:text-2xl font-bold text-blue-600">{yearData.year}</h3>
                    <p className="text-sm text-gray-600">{yearData.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="ml-12 md:ml-0 space-y-6">
                {yearData.milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className={`md:flex md:items-start ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`md:w-1/2 ${
                      index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'
                    }`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {milestone.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
