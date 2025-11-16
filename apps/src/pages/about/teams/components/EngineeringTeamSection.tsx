const EngineeringTeamSection = () => {
  const engineeringTeam = [
    {
      name: '송재현',
      nameEn: 'Jaehyun Song',
      position: 'AX/DX 개발 리드 (Lead Engineer - AX/DX Development)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20lead%20engineer%20in%20his%20mid%2030s%20wearing%20smart%20casual%20tech%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20focused%20and%20technical%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=eng001&orientation=portrait',
      summary: 'AX/DX 개발팀을 이끌며 Power Platform, Azure, AI 통합 솔루션의 전체 개발 프로세스를 총괄합니다. 분석부터 설계, 구현, 검증까지 엔드투엔드 개발을 책임집니다.',
      responsibilities: [
        'AX/DX 개발팀 기술 리더십',
        'Power Platform 솔루션 아키텍처 설계',
        'Azure 클라우드 인프라 구축',
        'RPA 및 AI Agent 통합 개발',
        'API 및 시스템 연동 설계',
        'DevOps 파이프라인 구축 및 관리',
        '코드 리뷰 및 품질 관리',
        '기술 멘토링 및 팀 역량 강화',
        '프로젝트 기술 검증 및 QA',
        '보안 및 성능 최적화'
      ],
      background: '컴퓨터공학 석사. Microsoft Certified: Azure Developer Associate, Power Platform Developer. 엔터프라이즈 DX 프로젝트 다수 리드. 10년 이상 풀스택 개발 경험.',
      skills: ['Power Platform', 'Azure', 'C#/.NET', 'TypeScript', 'RPA', 'AI Integration', 'API Design', 'DevOps', 'System Architecture', 'Team Leadership', 'Code Review'],
      philosophy: '좋은 코드는 동작하는 코드가 아니라 유지보수 가능한 코드입니다. 기술 부채를 최소화하고, 확장 가능한 아키텍처를 설계하여 장기적인 가치를 만듭니다.'
    },
    {
      name: '배수현',
      nameEn: 'Soohyun Bae',
      position: 'Power Platform 엔지니어 (Power Platform Engineer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20power%20platform%20engineer%20in%20her%20late%2020s%20wearing%20modern%20tech%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20confident%20and%20technical%20expression%2C%20contemporary%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=eng002&orientation=portrait',
      summary: 'Power Apps, Power Automate, Power BI를 활용한 로우코드 솔루션을 개발합니다. 비즈니스 요구사항을 빠르게 구현하고 사용자 친화적인 인터페이스를 설계합니다.',
      responsibilities: [
        'Power Apps 캔버스 및 모델 기반 앱 개발',
        'Power Automate 워크플로우 설계 및 구현',
        'Power BI 대시보드 및 리포트 개발',
        'Dataverse 데이터 모델링',
        'Power Platform 커스텀 커넥터 개발',
        'PCF(Power Apps Component Framework) 컴포넌트 개발',
        'Power Platform 환경 관리',
        '사용자 교육 및 기술 지원'
      ],
      background: '정보시스템 전공. Microsoft Certified: Power Platform Functional Consultant, Power Platform App Maker. 다양한 산업 분야 Power Platform 프로젝트 경험.',
      skills: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse', 'PCF', 'Power Fx', 'DAX', 'M Query', 'SharePoint', 'Dynamics 365'],
      philosophy: 'Power Platform의 진정한 가치는 비즈니스 사용자가 직접 솔루션을 만들 수 있게 하는 것입니다. 로우코드의 장점을 살리면서도 확장성과 유지보수성을 고려한 설계를 추구합니다.'
    },
    {
      name: '홍민석',
      nameEn: 'Minseok Hong',
      position: '데이터 통합 엔지니어 (Data Integration Engineer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20data%20engineer%20in%20his%20early%2030s%20wearing%20tech%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20analytical%20and%20focused%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=eng003&orientation=portrait',
      summary: '다양한 시스템 간 데이터 통합과 API 연동을 담당합니다. ETL 파이프라인을 구축하고 데이터 품질을 관리하여 안정적인 데이터 흐름을 보장합니다.',
      responsibilities: [
        'API 설계 및 개발',
        '시스템 간 데이터 연동 구현',
        'ETL 파이프라인 구축',
        '데이터 마이그레이션 수행',
        '데이터 품질 관리 및 검증',
        'Azure Data Factory 활용',
        'REST/SOAP API 통합',
        '데이터베이스 설계 및 최적화',
        '실시간 데이터 동기화 구현',
        '통합 모니터링 및 로깅'
      ],
      background: '컴퓨터공학 전공. Azure Data Engineer Associate 인증. ERP, CRM, 레거시 시스템 통합 경험 다수. SQL 및 NoSQL 데이터베이스 전문가.',
      skills: ['API Development', 'Azure Data Factory', 'SQL', 'Python', 'ETL', 'Data Migration', 'REST API', 'Azure SQL', 'CosmosDB', 'Integration Patterns', 'Data Quality'],
      philosophy: '데이터 통합은 단순히 데이터를 옮기는 것이 아니라 비즈니스 프로세스를 연결하는 것입니다. 안정성과 확장성을 고려한 통합 아키텍처로 시스템 간 원활한 협업을 만듭니다.'
    },
    {
      name: '서지훈',
      nameEn: 'Jihoon Seo',
      position: 'RPA 개발자 (RPA Developer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20RPA%20developer%20in%20his%20late%2020s%20wearing%20casual%20tech%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20innovative%20and%20detail-oriented%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=eng004&orientation=portrait',
      summary: 'RPA 기술을 활용하여 반복적인 업무를 자동화하고 업무 효율성을 극대화합니다. Power Automate Desktop과 AI를 결합한 지능형 자동화 솔루션을 개발합니다.',
      responsibilities: [
        'RPA 프로세스 분석 및 설계',
        'Power Automate Desktop 플로우 개발',
        'UI Automation 및 웹 스크래핑',
        'AI Builder 모델 통합',
        '문서 자동화 솔루션 개발',
        'OCR 및 문서 처리 자동화',
        'RPA 봇 모니터링 및 유지보수',
        '자동화 프로세스 최적화'
      ],
      background: '산업공학 전공. Microsoft Certified: Power Automate RPA Developer. 제조, 금융, 공공 분야 RPA 프로젝트 경험. 프로세스 마이닝 및 업무 분석 전문.',
      skills: ['Power Automate Desktop', 'RPA', 'UI Automation', 'AI Builder', 'OCR', 'Process Mining', 'Python', 'VBA', 'Web Scraping', 'Document Processing'],
      philosophy: '자동화는 사람을 대체하는 것이 아니라 사람이 더 가치 있는 일에 집중할 수 있게 하는 것입니다. 반복적인 작업을 자동화하여 업무의 질을 높입니다.'
    },
    {
      name: '김도윤',
      nameEn: 'Doyoon Kim',
      position: 'AI 솔루션 엔지니어 (AI Solution Engineer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20AI%20engineer%20in%20his%20early%2030s%20wearing%20modern%20tech%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20intelligent%20and%20innovative%20expression%2C%20contemporary%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=eng005&orientation=portrait',
      summary: 'AI 기술을 비즈니스 솔루션에 통합하여 지능형 자동화를 구현합니다. Azure AI Services와 OpenAI를 활용한 맞춤형 AI 솔루션을 개발합니다.',
      responsibilities: [
        'AI Agent 설계 및 개발',
        'Azure OpenAI Service 통합',
        'AI Builder 커스텀 모델 개발',
        '자연어 처리(NLP) 솔루션 구현',
        'Cognitive Services 활용',
        'AI 기반 문서 분석 시스템 개발',
        'Prompt Engineering 및 최적화',
        'AI 모델 성능 모니터링',
        'AI 윤리 및 책임성 관리'
      ],
      background: '컴퓨터공학 석사(AI 전공). Azure AI Engineer Associate 인증. 머신러닝 및 딥러닝 프로젝트 경험. LLM 기반 애플리케이션 개발 전문가.',
      skills: ['Azure OpenAI', 'AI Builder', 'NLP', 'Machine Learning', 'Python', 'Cognitive Services', 'Prompt Engineering', 'LangChain', 'Vector Database', 'AI Ethics'],
      philosophy: 'AI는 도구입니다. 기술 자체보다 비즈니스 문제를 어떻게 해결할 것인가가 중요합니다. 실용적이고 책임감 있는 AI 솔루션을 통해 실질적인 가치를 만듭니다.'
    },
    {
      name: '정유진',
      nameEn: 'Yujin Jung',
      position: 'DevOps 엔지니어 (DevOps Engineer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20DevOps%20engineer%20in%20her%20late%2020s%20wearing%20tech%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20systematic%20and%20reliable%20expression%2C%20contemporary%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=eng006&orientation=portrait',
      summary: 'CI/CD 파이프라인을 구축하고 인프라를 자동화하여 개발 생산성을 높입니다. Azure DevOps와 GitHub Actions를 활용한 효율적인 배포 프로세스를 관리합니다.',
      responsibilities: [
        'CI/CD 파이프라인 설계 및 구축',
        'Azure DevOps 환경 관리',
        'Infrastructure as Code(IaC) 구현',
        'Azure 리소스 프로비저닝 자동화',
        '컨테이너 및 Kubernetes 관리',
        '모니터링 및 로깅 시스템 구축',
        '보안 스캔 및 취약점 관리',
        '배포 자동화 및 롤백 전략',
        '성능 최적화 및 비용 관리'
      ],
      background: '컴퓨터공학 전공. Azure DevOps Engineer Expert 인증. 클라우드 인프라 및 자동화 전문가. Terraform, ARM Template 활용 경험.',
      skills: ['Azure DevOps', 'CI/CD', 'Terraform', 'Docker', 'Kubernetes', 'ARM Templates', 'PowerShell', 'Git', 'Azure Monitor', 'Infrastructure as Code'],
      philosophy: 'DevOps는 문화입니다. 자동화를 통해 반복 작업을 줄이고, 개발자가 코드 작성에 집중할 수 있는 환경을 만드는 것이 DevOps 엔지니어의 역할입니다.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AX/DX Engineering Division</h2>
          <p className="text-lg text-gray-600">기술개발부문</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {engineeringTeam.map((member, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{member.nameEn}</p>
                  <p className="text-blue-600 font-semibold text-sm">{member.position}</p>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{member.summary}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">주요 역할</h4>
                  <ul className="space-y-2">
                    {member.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <i className="ri-check-line text-blue-600 mr-2 mt-0.5 flex-shrink-0"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">전문 배경</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{member.background}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">핵심 역량</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">기술 철학</h4>
                  <p className="text-xs text-gray-600 italic leading-relaxed">{member.philosophy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringTeamSection;