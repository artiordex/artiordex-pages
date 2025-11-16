const ExecutiveLeadershipSection = () => {
  const executives = [
    {
      name: '민시우',
      nameEn: 'Shiwoo Min',
      position: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20CEO%20in%20his%20late%2030s%20wearing%20business%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20confident%20and%20approachable%20expression%2C%20modern%20corporate%20headshot%20style%2C%20technology%20executive%20appearance%2C%20minimal%20and%20professional%20photography&width=400&height=500&seq=exec001&orientation=portrait',
      summary: 'Artiordex를 창립하고 기술과 사람을 연결하는 비전을 실현하고 있습니다. 컴퓨터공학과 경영학을 기반으로 Microsoft 생태계 중심의 DX·AI 자동화 솔루션을 설계하고 실행합니다.',
      responsibilities: [
        '회사 전략 방향성 수립 및 실행',
        '기술 비전 및 제품 로드맵 총괄',
        '조직 문화 및 인재 육성',
        '주요 파트너십 및 투자 관계 관리',
        'DX·AX 프로젝트 품질 관리',
        '고객 중심 가치 실현 리더십'
      ],
      background: '컴퓨터공학 전공, 데이터 통계 및 경영학 복수 전공. Microsoft 기반 자동화 엔지니어링 실무 경험. 지식재산권 및 기술 전략 전문성 보유. 스타트업부터 엔터프라이즈까지 다양한 DX 프로젝트 리드 경험.',
      skills: ['전략적 리더십', 'Microsoft 생태계', 'AI 자동화', 'DX 컨설팅', '조직 관리', '기술 철학', '고객 중심 사고', 'Power Platform'],
      philosophy: '기술은 사람을 위해 존재합니다. 복잡한 문제를 단순하게 해결하고, 자동화를 통해 사람들이 더 가치 있는 일에 집중할 수 있도록 돕는 것이 우리의 사명입니다.'
    },
    {
      name: '강지훈',
      nameEn: 'Jihoon Kang',
      position: 'CTO (Chief Technology Officer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20CTO%20in%20his%20mid%2030s%20wearing%20smart%20casual%20shirt%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20intelligent%20and%20focused%20expression%2C%20modern%20technology%20executive%20headshot%2C%20minimal%20professional%20photography%20style&width=400&height=500&seq=exec002&orientation=portrait',
      summary: 'Artiordex의 기술 전략과 아키텍처를 총괄하며, Azure·Power Platform·AI 통합 솔루션의 설계와 구현을 이끕니다. 엔터프라이즈급 시스템 구축 경험을 바탕으로 기술 혁신을 주도합니다.',
      responsibilities: [
        '기술 아키텍처 설계 및 표준화',
        'Azure 클라우드 인프라 전략 수립',
        'Power Platform 솔루션 설계 총괄',
        'AI·RPA 통합 기술 개발',
        '개발팀 기술 리더십 및 멘토링',
        '보안 및 성능 최적화 관리',
        '기술 파트너십 및 협업 구조 설계',
        'DevOps 및 CI/CD 파이프라인 구축'
      ],
      background: '컴퓨터공학 석사. Microsoft Certified: Azure Solutions Architect Expert. 대기업 DX 프로젝트 다수 리드. Power Platform 및 Azure 통합 아키텍처 전문가. 10년 이상 엔터프라이즈 시스템 개발 경험.',
      skills: ['Azure Architecture', 'Power Platform', 'AI Integration', 'System Design', 'DevOps', 'Cloud Security', 'API Design', 'Technical Leadership', 'RPA', 'Data Engineering'],
      philosophy: '기술은 비즈니스 문제를 해결하는 도구입니다. 최신 기술을 맹목적으로 따르기보다, 고객의 실제 요구사항에 맞는 최적의 솔루션을 설계하는 것이 진정한 기술 리더십입니다.'
    },
    {
      name: '박서연',
      nameEn: 'Seoyeon Park',
      position: 'CPO (Chief Product Officer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20CPO%20in%20her%20early%2030s%20wearing%20modern%20business%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20creative%20and%20strategic%20expression%2C%20contemporary%20executive%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=exec003&orientation=portrait',
      summary: 'Artiflow, SmartHub, ConnectStack 등 Artiordex의 SaaS 제품군을 총괄하며, 제품 전략과 로드맵을 수립합니다. 사용자 중심 설계와 시장 분석을 통해 혁신적인 제품을 만들어갑니다.',
      responsibilities: [
        '제품 전략 및 로드맵 수립',
        'Artiflow·SmartHub·ConnectStack 총괄',
        '사용자 경험(UX) 설계 및 개선',
        '시장 조사 및 경쟁 분석',
        '제품 기능 우선순위 결정',
        '크로스팀 협업 조율',
        '제품 성과 지표(KPI) 관리',
        '고객 피드백 분석 및 반영'
      ],
      background: '산업공학 전공, UX 디자인 석사. 글로벌 SaaS 기업 제품 관리 경험. B2B 제품 기획 및 출시 다수. 데이터 기반 의사결정 및 애자일 방법론 전문가.',
      skills: ['Product Strategy', 'UX Design', 'Market Analysis', 'Agile Methodology', 'Data Analytics', 'Customer Research', 'Roadmap Planning', 'Cross-team Leadership', 'SaaS Business'],
      philosophy: '좋은 제품은 사용자의 문제를 깊이 이해하는 것에서 시작됩니다. 데이터와 직관의 균형을 통해 고객이 진정으로 필요로 하는 가치를 만들어냅니다.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Executive Leadership</h2>
          <p className="text-lg text-gray-600">최고경영진</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {executives.map((exec, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                <img 
                  src={exec.image} 
                  alt={exec.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{exec.nameEn}</p>
                  <p className="text-blue-600 font-semibold">{exec.position}</p>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{exec.summary}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">주요 역할</h4>
                  <ul className="space-y-2">
                    {exec.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <i className="ri-check-line text-blue-600 mr-2 mt-0.5 flex-shrink-0"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">전문 배경</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{exec.background}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">핵심 역량</h4>
                  <div className="flex flex-wrap gap-2">
                    {exec.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">리더십 철학</h4>
                  <p className="text-xs text-gray-600 italic leading-relaxed">{exec.philosophy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveLeadershipSection;