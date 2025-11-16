const SalesTeamSection = () => {
  const salesTeam = [
    {
      name: '최현우',
      nameEn: 'Hyunwoo Choi',
      position: '솔루션 영업 리드 (Solution Sales Lead)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20sales%20executive%20in%20his%20mid%2030s%20wearing%20business%20suit%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20confident%20and%20friendly%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=sales001&orientation=portrait',
      summary: 'B2B 솔루션 영업을 총괄하며 고객의 비즈니스 문제를 이해하고 최적의 DX·AI 솔루션을 제안합니다. Microsoft 파트너 생태계를 활용한 전략적 영업으로 고객 성공을 이끕니다.',
      responsibilities: [
        'B2B 솔루션 영업 전략 수립 및 실행',
        '주요 고객사 관계 관리',
        'Microsoft Cloud 솔루션 제안',
        '제안서 및 견적서 작성',
        'PoC(Proof of Concept) 기획 및 지원',
        '계약 협상 및 클로징',
        '파트너십 네트워킹',
        '영업 파이프라인 관리'
      ],
      background: '경영학 전공. Microsoft 파트너 세일즈 인증. 엔터프라이즈 B2B 영업 10년 경력. 공공·금융·제조 분야 주요 프로젝트 수주 경험. 솔루션 세일즈 및 컨설팅 영업 전문가.',
      skills: ['B2B 영업', '솔루션 세일즈', '제안서 작성', 'PoC 기획', '계약 협상', '고객 관계 관리', 'Microsoft 파트너', '파이프라인 관리', '컨설팅 영업'],
      philosophy: '영업은 단순히 제품을 파는 것이 아니라 고객의 문제를 해결하는 것입니다. 고객의 비즈니스를 깊이 이해하고, 장기적인 파트너십을 구축하는 것이 진정한 영업입니다.'
    },
    {
      name: '한지영',
      nameEn: 'Jiyoung Han',
      position: 'B2B 세일즈 매니저 (B2B Sales Manager)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20sales%20manager%20in%20her%20late%2020s%20wearing%20modern%20business%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20energetic%20and%20professional%20expression%2C%20contemporary%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=sales002&orientation=portrait',
      summary: '신규 고객 발굴부터 계약 체결까지 전체 영업 프로세스를 관리합니다. 고객의 요구사항을 정확히 파악하고 맞춤형 솔루션을 제안하여 비즈니스 성장을 이끕니다.',
      responsibilities: [
        '신규 고객 발굴 및 리드 생성',
        '고객 요구사항 분석 및 솔루션 매칭',
        '영업 프레젠테이션 및 데모 진행',
        '제안서 작성 및 RFP 대응',
        '계약 프로세스 관리',
        '크로스셀 및 업셀 기회 발굴',
        '영업 데이터 분석 및 리포팅',
        '마케팅팀과 협업한 캠페인 실행'
      ],
      background: '경영학 전공. SaaS 기업 영업 경력. B2B 세일즈 프로세스 및 CRM 시스템 활용 전문가. 스타트업부터 중견기업까지 다양한 고객 대응 경험.',
      skills: ['신규 고객 발굴', '요구사항 분석', '영업 프레젠테이션', 'RFP 대응', 'CRM 관리', '크로스셀', '데이터 분석', '고객 커뮤니케이션'],
      philosophy: '고객의 성공이 곧 우리의 성공입니다. 단기적인 매출보다 고객이 진정으로 필요로 하는 가치를 제공하여 장기적인 신뢰 관계를 만들어갑니다.'
    },
    {
      name: '오성민',
      nameEn: 'Seongmin Oh',
      position: '고객 성공 매니저 (Customer Success Manager)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20customer%20success%20manager%20in%20his%20early%2030s%20wearing%20business%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20warm%20and%20supportive%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=sales003&orientation=portrait',
      summary: '고객 온보딩부터 지속적인 성공까지 전체 고객 여정을 관리합니다. 고객의 목표 달성을 지원하고 장기적인 파트너십을 구축하여 고객 만족도를 극대화합니다.',
      responsibilities: [
        '신규 고객 온보딩 프로세스 관리',
        '고객 교육 및 트레이닝 제공',
        '정기적인 고객 미팅 및 리뷰',
        '고객 만족도 조사 및 피드백 수집',
        '갱신 및 확장 기회 관리',
        '고객 이슈 해결 및 에스컬레이션',
        '사용 현황 모니터링 및 분석',
        '고객 성공 사례 개발'
      ],
      background: '경영정보학 전공. SaaS 고객 성공 관리 경험. 고객 온보딩 및 교육 프로그램 설계 전문가. 데이터 기반 고객 건강도 관리 및 리텐션 전략 수립 경험.',
      skills: ['고객 온보딩', '교육 프로그램', '고객 관계 관리', '피드백 분석', '리텐션 전략', '이슈 해결', '데이터 분석', '커뮤니케이션', '고객 성공 전략'],
      philosophy: '고객 성공은 제품 판매 이후부터 시작됩니다. 고객이 우리 솔루션을 통해 실제 비즈니스 가치를 창출할 수 있도록 지속적으로 지원하고 함께 성장합니다.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Solution Sales Division</h2>
          <p className="text-lg text-gray-600">솔루션영업부문</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {salesTeam.map((member, index) => (
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

export default SalesTeamSection;