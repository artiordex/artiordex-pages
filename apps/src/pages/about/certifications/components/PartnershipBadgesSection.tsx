const PartnershipBadgesSection = () => {
  const partnerships = [
    {
      name: "Microsoft Partner",
      description: "클라우드 솔루션 제공업체",
      icon: "ri-microsoft-fill",
      color: "text-blue-600"
    },
    {
      name: "GitHub Partner",
      description: "오픈소스 개발 협력",
      icon: "ri-github-fill",
      color: "text-gray-900"
    },
    {
      name: "Power Platform",
      description: "로우코드 솔루션 전문",
      icon: "ri-apps-2-fill",
      color: "text-purple-600"
    },
    {
      name: "Azure AI Services",
      description: "AI 서비스 통합 전문",
      icon: "ri-brain-fill",
      color: "text-indigo-600"
    },
    {
      name: "Cloud Integration",
      description: "클라우드 통합 솔루션",
      icon: "ri-cloud-fill",
      color: "text-blue-500"
    },
    {
      name: "Data Analytics",
      description: "데이터 분석 플랫폼",
      icon: "ri-bar-chart-fill",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            기술 파트너십
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            아티올덱스는 Microsoft 기술 생태계를 기반으로 디지털 전환과 자동화를 구축합니다. 
            파트너십은 기업 기술 신뢰도의 핵심이며, 클라우드·AI·데이터 전문성을 보증하는 
            공식 파트너십을 기반으로 고객에게 검증된 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partnerships.map((partner, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <div className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center`}>
                <i className={`${partner.icon} text-3xl ${partner.color}`}></i>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-600">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              파트너십 확장 계획
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              2024-2026년 기간 동안 AWS, Google Cloud, Salesforce 등 
              주요 클라우드 플랫폼과의 파트너십을 확대하여 
              멀티클라우드 환경에서의 통합 솔루션 제공 역량을 강화할 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBadgesSection;