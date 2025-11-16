const CoreTeamSection = () => {
  const coreMembers = [
    {
      name: "민시우",
      nameEn: "Shiwoo Min",
      position: "CEO & Founder",
      summary: "아티올덱스를 창립하고 기술과 사람을 연결하는 경영 철학으로 조직을 이끌어가고 있습니다. 고객 중심의 DX·AX 솔루션 구현을 통해 지속 가능한 성장을 추구합니다.",
      expertise: "전략적 리더십, 기술 비전, 조직 운영",
      role: "전사 전략 수립 및 실행, 기술 방향성 결정, 고객 가치 창출",
      responsibilities: [
        "회사 비전 및 전략 수립",
        "조직 문화 및 가치 정립",
        "핵심 기술 방향성 결정",
        "고객 관계 및 파트너십 관리",
        "사업 확장 및 성장 전략",
        "팀 리더십 및 인재 개발",
        "품질 관리 및 실행 우수성"
      ],
      background: [
        "컴퓨터공학 전공",
        "데이터 통계 및 분석 전문성",
        "경영학 기반 조직 운영",
        "지식재산권 관리 경험",
        "Microsoft 생태계 기반 자동화 엔지니어링",
        "AX/DX 개발 실무 경험"
      ],
      skills: ["Strategic Leadership", "Microsoft Ecosystem", "AX/DX Engineering", "Data Analytics", "Business Management", "IP Management"],
      vision: "기술이 사람과 조직을 연결하고, 혁신이 모든 이해관계자에게 가치를 제공하는 생태계를 구축합니다. 문제 해결 중심의 기술 철학으로 고객의 성공을 우선시합니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20CEO%20in%20his%2030s%2C%20wearing%20business%20casual%20attire%2C%20confident%20and%20approachable%20expression%2C%20clean%20white%20background%2C%20soft%20lighting%2C%20modern%20corporate%20headshot%20style%2C%20technology%20leader%20appearance&width=400&height=400&seq=ceo-shiwoo&orientation=squarish"
    },
    {
      name: "김전략",
      nameEn: "Strategy Kim",
      position: "전략기획 리드",
      summary: "비즈니스 전략 수립과 시장 분석을 통해 아티올덱스의 성장 방향을 설계합니다. 구조적 사고와 데이터 기반 의사결정으로 프로젝트 성공을 이끌어냅니다.",
      expertise: "비즈니스 전략, 시장 분석, 프로젝트 기획",
      role: "전략 수립, 요구사항 정의, 프로세스 설계",
      responsibilities: [
        "비즈니스 전략 수립 및 실행",
        "시장 조사 및 경쟁 분석",
        "고객 요구사항 정의 (RFD)",
        "프로젝트 구조 설계",
        "KPI 설정 및 성과 관리",
        "프로세스 매핑 및 최적화",
        "IR 및 기획 문서 작성"
      ],
      background: [
        "경영학 석사 (MBA)",
        "전략 컨설팅 5년 경험",
        "데이터 분석 및 시각화 전문성",
        "프로젝트 관리 (PMP) 자격",
        "B2B 사업 개발 경험"
      ],
      skills: ["Business Strategy", "Market Analysis", "Project Planning", "Data Analytics", "Process Design", "KPI Management"],
      vision: "데이터 기반의 전략적 사고로 고객과 시장의 니즈를 정확히 파악하고, 지속 가능한 성장 모델을 설계합니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20business%20strategist%20in%20early%2030s%2C%20wearing%20smart%20business%20attire%2C%20analytical%20and%20thoughtful%20expression%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20corporate%20headshot%20style&width=400&height=400&seq=strategy-lead&orientation=squarish"
    },
    {
      name: "박영업",
      nameEn: "Sales Park",
      position: "솔루션 영업 리드",
      summary: "B2B 세일즈와 고객 성공 관리를 통해 아티올덱스 솔루션의 가치를 전달합니다. Microsoft 클라우드 기반 협업으로 장기적인 고객 관계를 구축합니다.",
      expertise: "B2B 세일즈, 고객 관계 관리, 솔루션 컨설팅",
      role: "영업 전략, 고객 온보딩, 관계 관리",
      responsibilities: [
        "B2B 세일즈 전략 수립 및 실행",
        "Microsoft 클라우드 솔루션 영업",
        "고객 요구사항 분석 및 솔루션 제안",
        "제안서 및 PoC 지원",
        "고객 온보딩 프로세스 관리",
        "장기 고객 성공 관리",
        "파트너십 네트워킹"
      ],
      background: [
        "경영학 학사",
        "B2B 세일즈 7년 경험",
        "Microsoft 파트너 인증",
        "고객 성공 관리 전문성",
        "IT 솔루션 영업 경험"
      ],
      skills: ["B2B Sales", "Customer Success", "Microsoft Cloud", "Solution Consulting", "Relationship Management", "Partnership Development"],
      vision: "고객 중심의 커뮤니케이션과 솔루션 기반 세일즈로 고객의 성공이 곧 우리의 성공이 되는 파트너십을 구축합니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20sales%20manager%20in%20mid%2030s%2C%20wearing%20business%20suit%2C%20confident%20and%20friendly%20expression%2C%20clean%20white%20background%2C%20professional%20lighting%2C%20approachable%20corporate%20style&width=400&height=400&seq=sales-lead&orientation=squarish"
    },
    {
      name: "이마케팅",
      nameEn: "Marketing Lee",
      position: "마케팅 리드",
      summary: "브랜드 전략과 기술 콘텐츠 제작을 통해 아티올덱스의 전문성을 시장에 전달합니다. DX·AI 스토리텔링으로 고객과의 접점을 확대합니다.",
      expertise: "브랜드 전략, 콘텐츠 마케팅, 기술 커뮤니케이션",
      role: "브랜드 관리, 콘텐츠 제작, 마케팅 전략",
      responsibilities: [
        "브랜드 전략 수립 및 관리",
        "기술 콘텐츠 제작 및 편집",
        "블로그 및 Notion 운영",
        "마케팅 캠페인 기획 및 실행",
        "SEO 및 디지털 마케팅 전략",
        "DX·AI 스토리텔링",
        "소셜 미디어 및 커뮤니티 관리"
      ],
      background: [
        "마케팅 학사",
        "디지털 마케팅 5년 경험",
        "기술 콘텐츠 작성 전문성",
        "브랜드 관리 경험",
        "SEO 및 SEM 자격"
      ],
      skills: ["Brand Strategy", "Content Marketing", "Technical Writing", "SEO/SEM", "Social Media", "Campaign Management"],
      vision: "전문성과 창의성의 균형으로 기술의 복잡함을 고객이 이해하기 쉬운 가치로 전환하여 브랜드 신뢰도를 구축합니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20marketing%20manager%20in%20late%2020s%2C%20wearing%20modern%20business%20casual%2C%20creative%20and%20professional%20expression%2C%20clean%20white%20background%2C%20soft%20lighting%2C%20contemporary%20corporate%20style&width=400&height=400&seq=marketing-lead&orientation=squarish"
    },
    {
      name: "최개발",
      nameEn: "Dev Choi",
      position: "AX/DX 개발 리드",
      summary: "AX 자동화와 Power Platform 구축을 통해 고객의 디지털 전환을 기술적으로 실현합니다. Azure 기반 아키텍처로 확장 가능한 솔루션을 설계합니다.",
      expertise: "AX/DX 개발, Power Platform, Azure 아키텍처",
      role: "기술 개발, 시스템 설계, 아키텍처 구축",
      responsibilities: [
        "AX 자동화 솔루션 개발",
        "Power Platform 구축 및 최적화",
        "Azure 기반 클라우드 아키텍처 설계",
        "API 및 시스템 연동 개발",
        "RPA 자동화 구조 설계",
        "데이터 파이프라인 구축",
        "DevOps 및 QA 프로세스 관리"
      ],
      background: [
        "컴퓨터공학 석사",
        "Microsoft 인증 개발자",
        "Azure 솔루션 아키텍트",
        "Power Platform 전문가",
        "엔터프라이즈 개발 8년 경험"
      ],
      skills: ["Power Platform", "Azure Cloud", "API Development", "RPA Automation", "DevOps", "Data Engineering"],
      vision: "기술의 깊이와 엔터프라이즈 아키텍처 이해를 바탕으로 고객의 복잡한 요구사항을 우아한 솔루션으로 구현합니다.",
      image: "https://readdy.ai/api/search-image?query=Professional%20Korean%20software%20engineer%20in%20early%2030s%2C%20wearing%20casual%20business%20attire%2C%20focused%20and%20intelligent%20expression%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20tech%20professional%20style&width=400&height=400&seq=dev-lead&orientation=squarish"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">핵심 멤버</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            각 분야의 전문성을 바탕으로 아티올덱스의 비전을 실현하는 리더들입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {coreMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-2xl object-cover object-top"
                  />
                </div>
                
                {/* Profile Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{member.nameEn}</p>
                    <p className="text-lg font-semibold text-blue-600">{member.position}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{member.summary}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">전문 분야</h4>
                    <p className="text-sm text-gray-600">{member.expertise}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">핵심 기술</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Expandable Details */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">주요 업무</h4>
                    <ul className="space-y-1">
                      {member.responsibilities.slice(0, 4).map((resp, respIndex) => (
                        <li key={respIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">전문 배경</h4>
                    <ul className="space-y-1">
                      {member.background.slice(0, 4).map((bg, bgIndex) => (
                        <li key={bgIndex} className="text-sm text-gray-600 flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {bg}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">리더십 철학</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{member.vision}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeamSection;