const TechnicalCertificationsSection = () => {
  const certifications = [
    {
      category: "클라우드 & 플랫폼 인증",
      items: [
        {
          title: "Microsoft Cloud Partner",
          description: "Microsoft 클라우드 생태계 전문 파트너 인증 진행 중",
          status: "진행중"
        },
        {
          title: "Azure Administrator Associate",
          description: "Azure 클라우드 인프라 관리 및 운영 전문성",
          status: "계획"
        },
        {
          title: "Azure AI Engineer Associate",
          description: "Azure AI 서비스 기반 솔루션 설계 및 구현",
          status: "계획"
        }
      ]
    },
    {
      category: "AI & 자동화 인증",
      items: [
        {
          title: "AI Workflow 모델 기술 인증",
          description: "자체 개발 AI 워크플로우 생성 기술 검증",
          status: "내부인증"
        },
        {
          title: "Automation Engineer 검증",
          description: "비즈니스 프로세스 자동화 설계 및 구현 역량",
          status: "진행중"
        },
        {
          title: "Machine Learning Operations",
          description: "MLOps 기반 AI 모델 운영 및 관리 체계",
          status: "계획"
        }
      ]
    },
    {
      category: "보안 & 데이터 인증",
      items: [
        {
          title: "정보보호 관리체계 (ISMS)",
          description: "정보보호 관리체계 인증 취득 예정",
          status: "계획"
        },
        {
          title: "ISO 27001",
          description: "국제 정보보안 관리 표준 인증",
          status: "계획"
        },
        {
          title: "데이터 보호 정책 준수",
          description: "개인정보보호법 및 GDPR 준수 체계 구축",
          status: "적용중"
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "완료": return "bg-green-100 text-green-800";
      case "진행중": return "bg-blue-100 text-blue-800";
      case "계획": return "bg-gray-100 text-gray-800";
      case "내부인증": return "bg-purple-100 text-purple-800";
      case "적용중": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            기술 인증 현황
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            검증된 기술력과 전문성을 바탕으로 한 체계적인 인증 관리
          </p>
        </div>

        <div className="space-y-12">
          {certifications.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((cert, certIndex) => (
                  <div key={certIndex} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {cert.title}
                      </h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cert.status)}`}>
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
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

export default TechnicalCertificationsSection;