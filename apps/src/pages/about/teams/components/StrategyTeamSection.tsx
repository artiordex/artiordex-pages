const StrategyTeamSection = () => {
  const strategyTeam = [
    {
      name: '김준영',
      nameEn: 'Junyoung Kim',
      position: '전략기획 리드 (Strategy Planning Lead)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20strategy%20consultant%20in%20his%20early%2030s%20wearing%20business%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20analytical%20and%20confident%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=strategy001&orientation=portrait',
      summary: '비즈니스 전략 수립과 시장 분석을 통해 Artiordex의 성장 방향을 설계합니다. 고객 요구사항 분석부터 프로젝트 구조 설계까지 전략적 사고로 비즈니스 가치를 창출합니다.',
      responsibilities: [
        '비즈니스 전략 수립 및 실행 계획',
        '시장 조사 및 경쟁사 분석',
        '고객 요구사항 정의(RFD) 및 분석',
        '프로젝트 구조 설계 및 아키텍처 기획',
        'KPI 설정 및 성과 측정 체계 구축',
        'IR 자료 및 사업 기획서 작성',
        '프로세스 매핑 및 BPR 설계',
        '리스크 분석 및 대응 전략 수립'
      ],
      background: '경영학 석사(MBA). 전략 컨설팅 펌 경력. DX 프로젝트 기획 및 PMO 경험 다수. 데이터 기반 의사결정 및 비즈니스 모델 설계 전문가.',
      skills: ['비즈니스 전략', '시장 분석', '요구사항 분석', 'RFD 작성', 'KPI 설계', '프로세스 설계', 'IR 기획', 'PMO', '경쟁 분석', 'BPR'],
      philosophy: '전략은 실행 가능해야 합니다. 시장과 고객을 깊이 이해하고, 데이터에 기반한 명확한 방향성을 제시하여 조직 전체가 같은 목표를 향해 나아갈 수 있도록 합니다.'
    },
    {
      name: '이수진',
      nameEn: 'Sujin Lee',
      position: '사업기획 매니저 (Business Planning Manager)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20business%20planner%20in%20her%20late%2020s%20wearing%20modern%20business%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20strategic%20and%20focused%20expression%2C%20contemporary%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=strategy002&orientation=portrait',
      summary: '신규 사업 기회를 발굴하고 사업 모델을 설계합니다. 시장 트렌드 분석과 고객 니즈 연구를 통해 Artiordex의 사업 포트폴리오를 확장합니다.',
      responsibilities: [
        '신규 사업 기회 발굴 및 타당성 분석',
        '사업 모델 캔버스(BMC) 설계',
        '시장 트렌드 및 산업 동향 분석',
        '파트너십 기회 탐색 및 제안',
        '사업 계획서 및 제안서 작성',
        '수익 모델 설계 및 재무 분석',
        '고객 세그먼트 분석',
        '경쟁 우위 전략 수립'
      ],
      background: '경영학 전공, 데이터 분석 부전공. 스타트업 사업 기획 경험. B2B SaaS 비즈니스 모델 설계 전문. 시장 조사 및 고객 인터뷰 다수 수행.',
      skills: ['사업 기획', 'BMC 설계', '시장 조사', '재무 분석', '파트너십 개발', '제안서 작성', '고객 분석', '트렌드 분석', '수익 모델'],
      philosophy: '좋은 사업 기획은 시장의 빈틈을 찾는 것이 아니라, 고객의 진짜 문제를 발견하는 것입니다. 데이터와 인사이트를 결합하여 지속 가능한 비즈니스를 만듭니다.'
    },
    {
      name: '정민호',
      nameEn: 'Minho Jung',
      position: '비즈니스 애널리스트 (Business Analyst)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20business%20analyst%20in%20his%20early%2030s%20wearing%20smart%20casual%20shirt%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20analytical%20and%20detail-oriented%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=strategy003&orientation=portrait',
      summary: '고객의 비즈니스 프로세스를 분석하고 최적화 방안을 제시합니다. 요구사항을 기술 언어로 번역하여 개발팀과 고객 간의 가교 역할을 수행합니다.',
      responsibilities: [
        '비즈니스 프로세스 분석 및 문서화',
        '요구사항 수집 및 정의',
        'As-Is/To-Be 프로세스 설계',
        '기능 명세서(FRS) 작성',
        '데이터 흐름 분석 및 모델링',
        '이해관계자 인터뷰 및 워크샵 진행',
        '프로세스 개선(BPR) 제안',
        '개발팀과 고객 간 커뮤니케이션 조율'
      ],
      background: '산업공학 전공. CBAP(Certified Business Analysis Professional) 자격 보유. 제조·금융·공공 분야 프로세스 분석 경험. UML 및 BPMN 모델링 전문가.',
      skills: ['요구사항 분석', '프로세스 모델링', 'BPMN', 'UML', '데이터 분석', 'FRS 작성', '이해관계자 관리', 'BPR', '워크샵 퍼실리테이션'],
      philosophy: '비즈니스 애널리스트는 번역가입니다. 고객의 언어를 기술의 언어로, 복잡한 프로세스를 명확한 요구사항으로 변환하여 모두가 같은 그림을 볼 수 있게 합니다.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategy & Planning Division</h2>
          <p className="text-lg text-gray-600">전략기획부문</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategyTeam.map((member, index) => (
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
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">업무 철학</h4>
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

export default StrategyTeamSection;