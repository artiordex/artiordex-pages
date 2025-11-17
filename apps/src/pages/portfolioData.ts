export interface ProjectData {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  shortDescription: string;
  techStack: string[];
  results: string[];
  image: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: string;
  impact: string;
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
    architecture: string;
  };
  implementation: {
    timeline: {
      phase: string;
      duration: string;
      description: string;
      milestones: string[];
    }[];
    challenges: string[];
    solutions: string[];
  };
  metrics: {
    beforeAfter: {
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }[];
    roi: {
      investment: string;
      savings: string;
      paybackPeriod: string;
    };
  };
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
    avatar: string;
  };
  gallery: string[];
  relatedProjects: number[];
}

const portfolioProjects: ProjectData[] = [
  {
    id: 1,
    title: "정부 금융 보고서 자동화 시스템",
    category: "ax-rpa",
    tags: ["AX/RPA 자동화", "Microsoft Power Automate", "Power BI", "Python"],
    description: "Microsoft Power Automate, Power BI, 맞춤형 Python 스크립트를 결합한 지능형 자동화를 통해 공공부문 금융 보고를 혁신했습니다. 이 포괄적인 솔루션은 월별 금융 데이터 수집 및 보고서 생성 시간을 90% 단축하고, 여러 정부 부처에서 투명성을 높이고 데이터 기반 의사결정을 가능하게 하는 실시간 대시보드를 구현했습니다. 시스템은 매일 10,000개 이상의 데이터 포인트를 처리하며, 이전에 주당 40시간이 필요했던 자동화된 규정 준수 보고서를 생성합니다.",
    shortDescription: "공공부문 금융 보고 자동화로 90% 시간 단축 달성",
    techStack: ["Microsoft Power Automate", "Power BI", "Python 스크립트 연동", "Azure Functions", "SQL Server", "SharePoint"],
    results: [
      "90% 시간 단축 (주 40시간 → 4시간)",
      "일일 10,000+ 데이터 포인트 자동 처리",
      "실시간 규정 준수 대시보드 구축",
      "데이터 투명성 및 정확도 98% 달성",
      "연간 1,600시간 업무 시간 절약",
      "오류율 95% 감소"
    ],
    image: "https://readdy.ai/api/search-image?query=modern%20financial%20dashboard%20with%20automated%20reporting%20system%20showing%20real-time%20data%20visualization%2C%20clean%20professional%20interface%20with%20charts%20graphs%20and%20compliance%20metrics%2C%20Microsoft%20Power%20BI%20style%20interface%20with%20blue%20and%20orange%20accents%2C%20government%20sector%20data%20transparency%2C%20multiple%20department%20integration%20display&width=1200&height=600&seq=1&orientation=landscape",
    client: "공공기관",
    industry: "공공행정",
    duration: "3개월",
    teamSize: "4명",
    impact: "주 40시간 → 4시간으로 업무 시간 단축",
    challenge: {
      title: "복잡한 수동 금융 보고 프로세스",
      description: "정부 기관은 여러 부서에서 수집된 금융 데이터를 수동으로 통합하고 월별 보고서를 작성하는 데 막대한 시간과 인력을 투입하고 있었습니다.",
      painPoints: [
        "주당 40시간의 수동 데이터 수집 및 처리",
        "여러 시스템 간 데이터 불일치 문제",
        "수동 프로세스로 인한 높은 오류율",
        "실시간 의사결정을 위한 데이터 접근성 부족",
        "규정 준수 보고서 작성의 복잡성"
      ]
    },
    solution: {
      title: "지능형 자동화 및 실시간 대시보드 구축",
      description: "Microsoft Power Automate를 중심으로 한 자동화 워크플로우와 Power BI 기반 실시간 대시보드를 구축하여 전체 금융 보고 프로세스를 혁신했습니다.",
      approach: [
        "Power Automate를 통한 데이터 수집 자동화",
        "Python 스크립트를 활용한 고급 데이터 처리",
        "Power BI 실시간 대시보드 구현",
        "Azure Functions를 통한 확장 가능한 아키텍처",
        "SharePoint 기반 문서 관리 시스템 통합"
      ],
      architecture: "https://readdy.ai/api/search-image?query=technical%20architecture%20diagram%20showing%20Microsoft%20Power%20Automate%20workflow%20connected%20to%20multiple%20data%20sources%2C%20Power%20BI%20dashboard%2C%20Python%20processing%20scripts%2C%20Azure%20Functions%20cloud%20infrastructure%2C%20clean%20professional%20technical%20diagram%20with%20blue%20and%20orange%20color%20scheme&width=800&height=500&seq=2&orientation=landscape"
    },
    implementation: {
      timeline: [
        {
          phase: "1단계: 요구사항 분석 및 설계",
          duration: "2주",
          description: "현재 프로세스 분석 및 자동화 설계",
          milestones: [
            "현재 워크플로우 매핑 완료",
            "데이터 소스 식별 및 분석",
            "자동화 아키텍처 설계",
            "기술 스택 확정"
          ]
        },
        {
          phase: "2단계: 핵심 자동화 구현",
          duration: "6주",
          description: "Power Automate 워크플로우 및 Python 스크립트 개발",
          milestones: [
            "데이터 수집 자동화 구현",
            "Python 데이터 처리 로직 개발",
            "Azure Functions 배포",
            "초기 테스트 완료"
          ]
        },
        {
          phase: "3단계: 대시보드 및 통합",
          duration: "3주",
          description: "Power BI 대시보드 구축 및 시스템 통합",
          milestones: [
            "실시간 대시보드 구현",
            "SharePoint 통합 완료",
            "사용자 교육 실시",
            "운영 환경 배포"
          ]
        },
        {
          phase: "4단계: 최적화 및 안정화",
          duration: "1주",
          description: "성능 최적화 및 운영 안정화",
          milestones: [
            "성능 튜닝 완료",
            "모니터링 시스템 구축",
            "문서화 완료",
            "운영 이관"
          ]
        }
      ],
      challenges: [
        "레거시 시스템과의 복잡한 데이터 통합",
        "정부 보안 정책 준수",
        "대용량 데이터 실시간 처리"
      ],
      solutions: [
        "단계적 마이그레이션 전략 수립",
        "보안 인증 및 암호화 적용",
        "Azure 클라우드 기반 확장 가능한 아키텍처 구현"
      ]
    },
    metrics: {
      beforeAfter: [
        {
          metric: "월별 보고서 작성 시간",
          before: "40시간",
          after: "4시간",
          improvement: "90% 감소"
        },
        {
          metric: "데이터 처리 정확도",
          before: "85%",
          after: "98%",
          improvement: "13% 향상"
        },
        {
          metric: "보고서 생성 주기",
          before: "월 1회",
          after: "실시간",
          improvement: "즉시 접근 가능"
        },
        {
          metric: "오류 발생률",
          before: "15%",
          after: "0.8%",
          improvement: "95% 감소"
        }
      ],
      roi: {
        investment: "₩50,000,000",
        savings: "₩200,000,000/년",
        paybackPeriod: "3개월"
      }
    },
    testimonial: {
      quote: "Artiordex의 자동화 솔루션으로 우리 부서의 업무 효율성이 혁신적으로 개선되었습니다. 이제 데이터 수집에 소요되던 시간을 정책 개발과 분석에 집중할 수 있게 되었습니다.",
      author: "김정수",
      position: "재정관리팀장",
      company: "공공기관",
      avatar: "https://readdy.ai/api/search-image?query=professional%20Korean%20government%20official%20headshot%2C%20middle-aged%20man%20in%20business%20suit%2C%20clean%20professional%20portrait%20photo%20for%20testimonial%2C%20neutral%20background&width=100&height=100&seq=3&orientation=squarish"
    },
    gallery: [
      "https://readdy.ai/api/search-image?query=Power%20BI%20financial%20dashboard%20showing%20real-time%20government%20financial%20data%20with%20charts%20and%20KPI%20metrics%2C%20professional%20interface%20design&width=800&height=500&seq=4&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Microsoft%20Power%20Automate%20workflow%20diagram%20showing%20automated%20data%20collection%20process%2C%20clean%20technical%20interface&width=800&height=500&seq=5&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Python%20script%20code%20editor%20showing%20data%20processing%20automation%20for%20financial%20reporting%2C%20professional%20development%20environment&width=800&height=500&seq=6&orientation=landscape"
    ],
    relatedProjects: [2, 5, 8]
  },
  {
    id: 2,
    title: "ConnectWon - 공간 기반 생활서비스 플랫폼",
    category: "platform",
    tags: ["Platform", "Next.js", "TypeScript", "Azure DevOps", "Kubernetes"],
    description: "복잡한 예약 및 정산 로직을 포함한 최첨단 생활서비스 플랫폼을 야심찬 1개월 MVP 일정 내에 개발했습니다. Next.js with TypeScript, Power Pages, Azure DevOps, Kubernetes 오케스트레이션을 활용하여, 이 프로젝트는 Microsoft Low-Code 기능과 오픈소스 코드 우선 개발을 결합한 하이브리드 접근 방식을 보여줍니다. 플랫폼은 현재 월 5,000명 이상의 활성 사용자에게 서비스를 제공하며, 99.9% 가동 시간 안정성으로 월 15,000건 이상의 거래를 처리합니다.",
    shortDescription: "1개월 MVP 완성으로 월 15,000+ 거래 처리하는 생활서비스 플랫폼",
    techStack: ["Next.js (TypeScript)", "Power Pages", "Azure DevOps", "Kubernetes", "PostgreSQL", "Redis Cache"],
    results: [
      "1개월 내 MVP 완성 및 출시",
      "월 5,000+ 활성 사용자 서비스",
      "월 15,000+ 거래 처리",
      "99.9% 가동 시간 안정성 확보",
      "평균 응답 시간 200ms 달성",
      "사용자 만족도 4.8/5.0"
    ],
    image: "https://readdy.ai/api/search-image?query=modern%20space%20booking%20platform%20interface%20with%20reservation%20calendar%20payment%20and%20settlement%20features%2C%20clean%20user-friendly%20web%20application%20design%20showing%20active%20user%20dashboard%2C%20blue%20and%20orange%20branding%2C%20professional%20lifestyle%20service%20platform%20with%20transaction%20processing%20visualization%2C%20scalable%20cloud%20architecture%20display&width=1200&height=600&seq=7&orientation=landscape",
    client: "스타트업",
    industry: "생활서비스",
    duration: "1개월",
    teamSize: "3명",
    impact: "월 15,000+ 거래 처리, 99.9% 가동률",
    challenge: {
      title: "단기간 내 복잡한 플랫폼 구축 요구",
      description: "스타트업의 빠른 시장 진입을 위해 복잡한 예약 시스템과 정산 로직을 포함한 완전한 플랫폼을 1개월 내에 구축해야 하는 도전적인 프로젝트였습니다.",
      painPoints: [
        "극도로 짧은 개발 일정 (1개월)",
        "복잡한 예약 및 정산 비즈니스 로직",
        "확장 가능한 아키텍처 요구사항",
        "높은 가용성 및 성능 요구사항",
        "다양한 결제 수단 통합 필요"
      ]
    },
    solution: {
      title: "하이브리드 개발 접근법과 클라우드 네이티브 아키텍처",
      description: "Microsoft Low-Code 플랫폼과 Next.js 기반 커스텀 개발을 결합하여 개발 속도와 확장성을 동시에 확보했습니다.",
      approach: [
        "Next.js + TypeScript 기반 프론트엔드 개발",
        "Power Pages를 활용한 빠른 프로토타이핑",
        "Kubernetes 기반 마이크로서비스 아키텍처",
        "Azure DevOps CI/CD 파이프라인 구축",
        "Redis 캐싱을 통한 성능 최적화"
      ],
      architecture: "https://readdy.ai/api/search-image?query=cloud%20native%20architecture%20diagram%20showing%20Next.js%20frontend%2C%20Kubernetes%20microservices%2C%20PostgreSQL%20database%2C%20Redis%20cache%2C%20Azure%20DevOps%20pipeline%2C%20modern%20technical%20architecture%20with%20clean%20design&width=800&height=500&seq=8&orientation=landscape"
    },
    implementation: {
      timeline: [
        {
          phase: "1주차: 아키텍처 설계 및 기반 구축",
          duration: "1주",
          description: "시스템 아키텍처 설계 및 개발 환경 구축",
          milestones: [
            "기술 스택 확정 및 아키텍처 설계",
            "개발 환경 및 CI/CD 파이프라인 구축",
            "데이터베이스 스키마 설계",
            "기본 프로젝트 구조 생성"
          ]
        },
        {
          phase: "2주차: 핵심 기능 개발",
          duration: "1주",
          description: "예약 시스템 및 사용자 인터페이스 개발",
          milestones: [
            "사용자 인증 및 권한 관리 구현",
            "예약 시스템 핵심 로직 개발",
            "결제 시스템 통합",
            "기본 UI/UX 구현"
          ]
        },
        {
          phase: "3주차: 정산 시스템 및 고급 기능",
          duration: "1주",
          description: "정산 로직 및 관리자 기능 구현",
          milestones: [
            "정산 시스템 로직 구현",
            "관리자 대시보드 개발",
            "알림 시스템 구축",
            "성능 최적화"
          ]
        },
        {
          phase: "4주차: 테스트 및 배포",
          duration: "1주",
          description: "통합 테스트 및 운영 환경 배포",
          milestones: [
            "통합 테스트 및 버그 수정",
            "성능 테스트 및 최적화",
            "운영 환경 배포",
            "모니터링 시스템 구축"
          ]
        }
      ],
      challenges: [
        "짧은 개발 기간 내 복잡한 기능 구현",
        "확장 가능한 아키텍처 설계",
        "높은 성능 요구사항 충족"
      ],
      solutions: [
        "애자일 개발 방법론과 MVP 접근법 적용",
        "마이크로서비스 아키텍처로 확장성 확보",
        "Redis 캐싱과 CDN을 통한 성능 최적화"
      ]
    },
    metrics: {
      beforeAfter: [
        {
          metric: "개발 기간",
          before: "예상 3-4개월",
          after: "실제 1개월",
          improvement: "75% 단축"
        },
        {
          metric: "시스템 가용성",
          before: "목표 95%",
          after: "달성 99.9%",
          improvement: "4.9% 초과 달성"
        },
        {
          metric: "평균 응답 시간",
          before: "목표 500ms",
          after: "달성 200ms",
          improvement: "60% 향상"
        },
        {
          metric: "동시 사용자 처리",
          before: "목표 1,000명",
          after: "달성 5,000명",
          improvement: "400% 초과"
        }
      ],
      roi: {
        investment: "₩80,000,000",
        savings: "₩300,000,000/년",
        paybackPeriod: "3.2개월"
      }
    },
    testimonial: {
      quote: "불가능해 보였던 1개월 일정을 Artiordex가 해냈습니다. 기술적 우수성과 프로젝트 관리 능력이 탁월했고, 덕분에 시장에 빠르게 진입할 수 있었습니다.",
      author: "이민호",
      position: "CTO",
      company: "ConnectWon",
      avatar: "https://readdy.ai/api/search-image?query=young%20Korean%20startup%20CTO%20headshot%2C%20professional%20tech%20executive%20in%20casual%20business%20attire%2C%20confident%20expression%2C%20modern%20office%20background&width=100&height=100&seq=9&orientation=squarish"
    },
    gallery: [
      "https://readdy.ai/api/search-image?query=ConnectWon%20platform%20user%20interface%20showing%20space%20booking%20calendar%20and%20reservation%20system%2C%20modern%20web%20application%20design&width=800&height=500&seq=10&orientation=landscape",
      "https://readdy.ai/api/search-image?query=payment%20and%20settlement%20dashboard%20interface%20showing%20transaction%20processing%20and%20financial%20analytics%2C%20clean%20professional%20design&width=800&height=500&seq=11&orientation=landscape",
      "https://readdy.ai/api/search-image?query=Kubernetes%20deployment%20dashboard%20showing%20microservices%20architecture%20and%20container%20orchestration%2C%20technical%20monitoring%20interface&width=800&height=500&seq=12&orientation=landscape"
    ],
    relatedProjects: [1, 3, 6]
  }
];

export const getProjectById = (id: number): ProjectData | undefined => {
  return portfolioProjects.find(project => project.id === id);
};

export const getRelatedProjects = (currentProjectId: number, relatedIds: number[]): ProjectData[] => {
  return portfolioProjects.filter(project => 
    relatedIds.includes(project.id) && project.id !== currentProjectId
  );
};

export const getAllProjects = (): ProjectData[] => {
  return portfolioProjects;
};

export const getProjectsByCategory = (category: string): ProjectData[] => {
  if (category === 'all') return portfolioProjects;
  return portfolioProjects.filter(project => project.category === category);
};

// portfolioData export 추가 (빌드 오류 수정용)
export const portfolioData = portfolioProjects;