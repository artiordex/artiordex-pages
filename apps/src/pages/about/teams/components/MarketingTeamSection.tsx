const MarketingTeamSection = () => {
  const marketingTeam = [
    {
      name: '윤서아',
      nameEn: 'Seoa Yoon',
      position: '마케팅 리드 (Marketing Lead)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20marketing%20director%20in%20her%20early%2030s%20wearing%20modern%20business%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20creative%20and%20strategic%20expression%2C%20contemporary%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=marketing001&orientation=portrait',
      summary: 'Artiordex의 브랜드 전략과 마케팅 캠페인을 총괄합니다. DX·AI 기술을 고객에게 전달하는 스토리텔링과 콘텐츠 전략으로 브랜드 인지도를 구축합니다.',
      responsibilities: [
        '브랜드 전략 수립 및 실행',
        '마케팅 캠페인 기획 및 관리',
        '콘텐츠 마케팅 전략 총괄',
        'DX·AI 기술 스토리텔링',
        '마케팅 예산 관리 및 ROI 분석',
        '디지털 마케팅 채널 운영',
        '파트너십 마케팅 협업',
        '브랜드 아이덴티티 관리'
      ],
      background: '마케팅 전공, 디지털 마케팅 석사. B2B 테크 기업 마케팅 경력. 브랜드 포지셔닝 및 콘텐츠 전략 전문가. Google Analytics 및 마케팅 자동화 도구 활용 전문.',
      skills: ['브랜드 전략', '콘텐츠 마케팅', '디지털 마케팅', '캠페인 기획', 'SEO/SEM', '마케팅 분석', '스토리텔링', 'B2B 마케팅', 'ROI 분석'],
      philosophy: '마케팅은 단순히 제품을 알리는 것이 아니라 고객과의 관계를 만드는 것입니다. 기술의 가치를 사람의 언어로 번역하여 고객의 마음에 닿는 메시지를 전달합니다.'
    },
    {
      name: '강태윤',
      nameEn: 'Taeyoon Kang',
      position: '콘텐츠 마케터 (Content Marketer)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20content%20marketer%20in%20his%20late%2020s%20wearing%20smart%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20creative%20and%20focused%20expression%2C%20modern%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=marketing002&orientation=portrait',
      summary: '기술 콘텐츠를 기획하고 제작하여 Artiordex의 전문성을 알립니다. 블로그, 백서, 케이스 스터디 등 다양한 형태의 콘텐츠로 고객에게 가치를 전달합니다.',
      responsibilities: [
        '기술 블로그 콘텐츠 기획 및 작성',
        '백서 및 가이드 제작',
        '케이스 스터디 개발',
        'SEO 최적화 콘텐츠 작성',
        '소셜 미디어 콘텐츠 관리',
        'Notion 및 문서 플랫폼 운영',
        '웨비나 및 이벤트 콘텐츠 제작',
        '콘텐츠 성과 분석 및 개선'
      ],
      background: '미디어커뮤니케이션 전공. 테크 미디어 에디터 경력. 기술 콘텐츠 작성 및 SEO 전문가. DX·AI 분야 콘텐츠 다수 제작 경험.',
      skills: ['콘텐츠 기획', '기술 라이팅', 'SEO', '블로그 운영', '백서 작성', '케이스 스터디', '소셜 미디어', 'Notion', '콘텐츠 분석'],
      philosophy: '좋은 콘텐츠는 정보를 전달하는 것을 넘어 독자에게 인사이트를 제공합니다. 복잡한 기술을 쉽게 설명하고, 고객이 실제로 활용할 수 있는 가치를 만듭니다.'
    },
    {
      name: '임채원',
      nameEn: 'Chaewon Lim',
      position: '디지털 마케팅 스페셜리스트 (Digital Marketing Specialist)',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Korean%20female%20digital%20marketing%20specialist%20in%20her%20mid%2020s%20wearing%20modern%20business%20casual%20attire%2C%20clean%20white%20background%2C%20natural%20lighting%2C%20energetic%20and%20analytical%20expression%2C%20contemporary%20corporate%20headshot%20style%2C%20minimal%20professional%20photography&width=400&height=500&seq=marketing003&orientation=portrait',
      summary: '디지털 채널을 통한 마케팅 캠페인을 실행하고 최적화합니다. 데이터 분석을 기반으로 광고 성과를 개선하고 리드를 생성합니다.',
      responsibilities: [
        '디지털 광고 캠페인 기획 및 실행',
        'Google Ads 및 LinkedIn 광고 관리',
        '랜딩 페이지 최적화',
        '리드 생성 및 너처링 전략',
        '마케팅 자동화 도구 운영',
        'A/B 테스트 및 전환율 최적화',
        '웹 분석 및 리포팅',
        '이메일 마케팅 캠페인 관리'
      ],
      background: '경영학 전공, 디지털 마케팅 인증. Google Ads 및 Facebook Blueprint 자격 보유. 퍼포먼스 마케팅 및 마케팅 자동화 전문가.',
      skills: ['디지털 광고', 'Google Ads', 'LinkedIn 마케팅', '랜딩 페이지', '마케팅 자동화', 'A/B 테스트', '웹 분석', '이메일 마케팅', '전환율 최적화'],
      philosophy: '디지털 마케팅은 과학입니다. 데이터를 기반으로 가설을 세우고, 테스트하고, 학습하는 과정을 통해 지속적으로 성과를 개선합니다.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Marketing Division</h2>
          <p className="text-lg text-gray-600">마케팅부문</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {marketingTeam.map((member, index) => (
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

export default MarketingTeamSection;