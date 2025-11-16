const TechnicalPartnersSection = () => {
  const technicalPartners = [
    {
      category: "클라우드 & 인프라",
      partners: [
        { name: "Microsoft Azure", description: "클라우드 컴퓨팅 플랫폼", icon: "ri-cloud-line" },
        { name: "GitHub", description: "코드 저장소 및 협업", icon: "ri-github-fill" },
        { name: "Docker", description: "컨테이너화 플랫폼", icon: "ri-server-line" }
      ]
    },
    {
      category: "AI & 자동화",
      partners: [
        { name: "OpenAI", description: "AI 모델 및 서비스", icon: "ri-robot-line" },
        { name: "LangChain", description: "AI 애플리케이션 프레임워크", icon: "ri-links-line" },
        { name: "n8n", description: "워크플로우 자동화", icon: "ri-flow-chart" }
      ]
    },
    {
      category: "개발 & 운영",
      partners: [
        { name: "Azure DevOps", description: "CI/CD 파이프라인", icon: "ri-git-branch-line" },
        { name: "Power Platform", description: "로우코드 개발 플랫폼", icon: "ri-settings-3-line" },
        { name: "Kubernetes", description: "컨테이너 오케스트레이션", icon: "ri-stack-line" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            기술 파트너십
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Artiordex는 Microsoft 클라우드, GitHub, OpenAI, LangChain, n8n 등의 기술 파트너 생태계를 
            기반으로 솔루션을 구성합니다. 이러한 기술 연동 구조는 빠른 개발·안정적인 운영·확장 가능한 자동화를 가능하게 합니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technicalPartners.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.partners.map((partner, partnerIndex) => (
                  <div key={partnerIndex} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <i className={`${partner.icon} text-xl text-blue-600`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                      <p className="text-sm text-gray-600">{partner.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                기술 생태계 통합의 가치
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-speed-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">빠른 개발 속도</h4>
                    <p className="text-gray-600">DevOps와 CI/CD를 통한 배포 안정성과 개발 생산성 향상</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-shield-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">안정적인 운영</h4>
                    <p className="text-gray-600">Azure 클라우드 기반 고가용성 인프라와 모니터링 체계</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-robot-2-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">지능형 자동화</h4>
                    <p className="text-gray-600">AI Agents를 통한 지능형 자동화와 Power Automate 기반 프로세스 최적화</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <i className="ri-expand-diagonal-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">확장 가능성</h4>
                    <p className="text-gray-600">오픈소스와 로우코드 융합 구조를 통한 유연한 시스템 확장</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Technology%20partnership%20ecosystem%20diagram%2C%20interconnected%20cloud%20services%2C%20AI%20automation%20tools%2C%20DevOps%20pipeline%20visualization%2C%20modern%20tech%20stack%20architecture%2C%20blue%20and%20white%20professional%20design%2C%20clean%20minimalist%20style&width=600&height=500&seq=tech-partners&orientation=landscape"
                alt="기술 파트너십 생태계"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">통합 기술 스택의 시너지</h3>
          <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
            Microsoft 생태계를 중심으로 한 기술 파트너십은 단순한 도구의 조합이 아닌, 
            고객의 비즈니스 목표를 달성하기 위한 통합된 솔루션 아키텍처를 제공합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Microsoft Azure</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Power Platform</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">OpenAI</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">GitHub Actions</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Docker</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Kubernetes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalPartnersSection;