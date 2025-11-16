import { useState } from 'react';

const JobOpeningsSection = () => {
  const [selectedDivision, setSelectedDivision] = useState<string>('all');
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const divisions = [
    { id: 'all', name: '전체' },
    { id: 'strategy', name: '전략기획부문' },
    { id: 'sales', name: '솔루션영업부문' },
    { id: 'marketing', name: '마케팅부문' },
    { id: 'engineering', name: 'AX/DX 개발부문' },
    { id: 'product', name: '제품부문' }
  ];

  const jobOpenings = [
    // 전략기획부문
    {
      id: 'strategy-lead',
      division: 'strategy',
      title: '전략기획 리드',
      type: '정규직',
      experience: '경력 5년 이상',
      location: '서울',
      responsibilities: [
        '비즈니스 전략 수립 및 실행 계획 설계',
        '시장 조사 및 경쟁사 분석을 통한 인사이트 도출',
        '신규 사업 기회 발굴 및 타당성 분석',
        'RFD(Requirements for Design) 작성 및 요구사항 정의',
        '프로젝트 구조 설계 및 실행 로드맵 수립',
        'KPI 설정 및 성과 측정 체계 구축',
        'IR 자료 및 사업 기획서 작성',
        '경영진 및 이해관계자 커뮤니케이션',
        '부문 간 협업 조율 및 프로젝트 관리',
        '프로세스 개선 및 BPR(Business Process Reengineering) 주도'
      ],
      qualifications: [
        '경영학, 경제학, 산업공학 등 관련 전공 학사 이상',
        '전략 기획 또는 사업 기획 경력 5년 이상',
        '데이터 기반 의사결정 및 분석 능력',
        'MS Office(Excel, PowerPoint) 고급 활용 능력',
        '논리적 사고와 구조화된 문서 작성 능력',
        '이해관계자 커뮤니케이션 및 프레젠테이션 스킬',
        '프로젝트 관리 경험'
      ],
      preferred: [
        'MBA 또는 경영학 석사 학위',
        '컨설팅 펌 또는 IT 기업 전략 기획 경험',
        'PMP, PRINCE2 등 프로젝트 관리 자격증',
        'Microsoft 생태계 이해도',
        'DX·AX 프로젝트 기획 경험',
        'SQL, Python 등 데이터 분석 도구 활용 가능자',
        '영어 비즈니스 커뮤니케이션 가능자'
      ],
      mission: '전략기획부문은 Artiordex의 성장 방향을 설계하고, 고객 요구사항을 기술 솔루션으로 전환하는 핵심 역할을 담당합니다.',
      collaboration: ['마케팅부문', '솔루션영업부문', 'AX/DX 개발부문', '경영진']
    },
    {
      id: 'business-planner',
      division: 'strategy',
      title: '서비스/비즈니스 기획자',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        '신규 서비스 및 제품 기획',
        '고객 니즈 분석 및 시장 조사',
        '서비스 로드맵 수립 및 관리',
        'BMC(Business Model Canvas) 설계',
        '요구사항 정의서(RFD) 작성',
        '프로젝트 초기 단계 기획 및 분석',
        '서비스 개선 및 최적화 방안 도출',
        '내부 이해관계자 협업 및 조율',
        '기획 문서 및 제안서 작성',
        '프로토타입 및 PoC 기획 지원'
      ],
      qualifications: [
        '학사 학위 이상 (전공 무관)',
        '서비스 기획 또는 사업 기획 경력 3년 이상',
        '사용자 중심 사고 및 문제 해결 능력',
        '데이터 기반 의사결정 능력',
        '문서 작성 및 커뮤니케이션 능력',
        '프로젝트 관리 기본 이해'
      ],
      preferred: [
        'B2B SaaS 또는 IT 서비스 기획 경험',
        'Microsoft Power Platform 이해도',
        'UX/UI 기획 경험',
        'Agile/Scrum 방법론 이해',
        'Figma, Miro 등 협업 도구 활용 가능자',
        'SQL 기본 활용 가능자'
      ],
      mission: '고객과 시장의 니즈를 정확히 파악하고, 이를 실행 가능한 서비스로 구체화하는 역할을 수행합니다.',
      collaboration: ['전략기획 리드', '마케팅부문', 'AX/DX 개발부문']
    },
    {
      id: 'business-analyst',
      division: 'strategy',
      title: '요구사항 분석가 (BA)',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        '고객 요구사항 수집 및 분석',
        'As-Is/To-Be 프로세스 분석 및 설계',
        '요구사항 정의서(RFD) 작성',
        '업무 프로세스 매핑 및 최적화',
        'BPR(Business Process Reengineering) 수행',
        '시스템 요구사항 명세서 작성',
        '개발팀과 고객 간 커뮤니케이션 브릿지 역할',
        '프로젝트 초기 분석 단계 주도',
        '데이터 흐름 분석 및 문서화',
        '변경 요청 관리 및 영향도 분석'
      ],
      qualifications: [
        '학사 학위 이상 (경영학, 산업공학, IT 관련 전공 우대)',
        'BA 또는 프로세스 분석 경력 3년 이상',
        '논리적 사고 및 분석 능력',
        '프로세스 모델링 도구 활용 능력',
        '문서 작성 및 커뮤니케이션 능력',
        '이해관계자 요구사항 조율 능력'
      ],
      preferred: [
        'CBAP, PMI-PBA 등 BA 자격증',
        'ERP, CRM 등 엔터프라이즈 시스템 분석 경험',
        'Microsoft Power Platform 프로젝트 경험',
        'BPMN, UML 등 모델링 기법 이해',
        'SQL 활용 가능자',
        'Agile BA 경험자'
      ],
      mission: '고객의 비즈니스 요구사항을 정확히 이해하고, 이를 기술 솔루션으로 전환하는 핵심 분석 역할을 담당합니다.',
      collaboration: ['전략기획 리드', 'AX/DX 개발부문', '솔루션영업부문']
    },

    // 솔루션영업부문
    {
      id: 'sales-manager',
      division: 'sales',
      title: '솔루션 영업 매니저',
      type: '정규직',
      experience: '경력 5년 이상',
      location: '서울',
      responsibilities: [
        'B2B 기술 영업 전략 수립 및 실행',
        'Microsoft 클라우드 솔루션 영업',
        '신규 고객 발굴 및 관계 구축',
        '고객 니즈 분석 및 솔루션 제안',
        '제안서 및 견적서 작성',
        'PoC(Proof of Concept) 기획 및 지원',
        'RFP 대응 및 입찰 참여',
        '계약 협상 및 체결',
        '영업 파이프라인 관리',
        '파트너십 네트워킹 및 협력 관계 구축',
        '고객 온보딩 프로세스 관리',
        '매출 목표 달성 및 성과 관리'
      ],
      qualifications: [
        '학사 학위 이상 (전공 무관)',
        'B2B 기술 영업 경력 5년 이상',
        'IT 솔루션 또는 클라우드 서비스 영업 경험',
        '고객 관계 관리 능력',
        '제안서 작성 및 프레젠테이션 능력',
        '목표 지향적 사고 및 성과 달성 능력',
        '커뮤니케이션 및 협상 능력'
      ],
      preferred: [
        'Microsoft 파트너 인증 또는 관련 교육 이수',
        'Power Platform, Azure 솔루션 영업 경험',
        'DX·AX 프로젝트 영업 경험',
        '공공기관 또는 대기업 영업 경험',
        '영어 비즈니스 커뮤니케이션 가능자',
        'CRM 시스템 활용 경험',
        '네트워킹 및 파트너십 구축 경험'
      ],
      mission: '고객의 비즈니스 과제를 이해하고, Artiordex의 기술 솔루션을 통해 고객 성공을 실현하는 전략적 영업 역할을 수행합니다.',
      collaboration: ['고객 성공 매니저', '전략기획부문', 'AX/DX 개발부문', '마케팅부문']
    },
    {
      id: 'csm',
      division: 'sales',
      title: '고객 성공 매니저 (CSM)',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        '고객 온보딩 프로세스 설계 및 실행',
        '고객 교육 및 트레이닝 제공',
        '고객 만족도 관리 및 개선',
        '정기적인 고객 커뮤니케이션 및 관계 유지',
        '고객 요구사항 수집 및 내부 전달',
        '서비스 갱신 및 확장 영업 지원',
        '고객 이슈 대응 및 해결',
        '고객 성공 지표(KPI) 모니터링',
        '고객 피드백 기반 서비스 개선 제안',
        '장기 고객 관계 구축 및 유지'
      ],
      qualifications: [
        '학사 학위 이상 (전공 무관)',
        '고객 성공, 고객 지원 또는 관련 경력 3년 이상',
        '고객 중심 사고 및 서비스 마인드',
        '문제 해결 능력 및 커뮤니케이션 능력',
        'IT 서비스 또는 SaaS 이해도',
        '프로젝트 관리 기본 능력'
      ],
      preferred: [
        'B2B SaaS 또는 클라우드 서비스 CSM 경험',
        'Microsoft Power Platform 사용 경험',
        '고객 교육 또는 트레이닝 경험',
        'CRM 시스템 활용 경험',
        '데이터 분석 및 리포팅 능력',
        '영어 커뮤니케이션 가능자'
      ],
      mission: '고객이 Artiordex 솔루션을 통해 최대의 가치를 실현하도록 지원하고, 장기적인 파트너십을 구축합니다.',
      collaboration: ['솔루션 영업 매니저', 'AX/DX 개발부문', '전략기획부문']
    },

    // 마케팅부문
    {
      id: 'marketing-lead',
      division: 'marketing',
      title: '마케팅 리드',
      type: '정규직',
      experience: '경력 5년 이상',
      location: '서울',
      responsibilities: [
        '브랜드 전략 수립 및 실행',
        '마케팅 캠페인 기획 및 관리',
        '콘텐츠 마케팅 전략 수립',
        'DX·AI 기술 스토리텔링',
        '디지털 마케팅 채널 관리',
        'SEO/SEM 전략 수립 및 실행',
        '마케팅 성과 분석 및 리포팅',
        '브랜드 아이덴티티 관리',
        '마케팅 팀 리드 및 협업 조율',
        '파트너십 마케팅 및 이벤트 기획',
        '마케팅 예산 관리',
        '시장 트렌드 분석 및 인사이트 도출'
      ],
      qualifications: [
        '마케팅, 경영학 또는 관련 전공 학사 이상',
        '마케팅 경력 5년 이상 (B2B 마케팅 경험 필수)',
        '브랜드 전략 및 캠페인 기획 경험',
        '디지털 마케팅 채널 운영 경험',
        '데이터 기반 마케팅 의사결정 능력',
        '크리에이티브 사고 및 실행력',
        '팀 리더십 및 협업 능력'
      ],
      preferred: [
        'IT 또는 SaaS 기업 마케팅 경험',
        'Microsoft 생태계 마케팅 경험',
        'Google Analytics, SEO 도구 활용 능력',
        '콘텐츠 제작 및 편집 능력',
        'Adobe Creative Suite 활용 가능자',
        '영어 콘텐츠 작성 가능자',
        'Growth Hacking 경험자'
      ],
      mission: 'Artiordex의 브랜드 가치를 시장에 전달하고, 기술 전문성을 고객이 이해하기 쉬운 스토리로 전환합니다.',
      collaboration: ['콘텐츠 마케터', '디지털 마케팅 스페셜리스트', '솔루션영업부문', '전략기획부문']
    },
    {
      id: 'content-marketer',
      division: 'marketing',
      title: '기술 콘텐츠 마케터',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        '기술 블로그 콘텐츠 기획 및 작성',
        '백서(White Paper) 및 케이스 스터디 제작',
        'DX·AI·자동화 관련 교육 자료 제작',
        'Notion 기반 기술 문서 운영',
        '제품 소개 자료 및 가이드 작성',
        'SEO 최적화 콘텐츠 작성',
        '웨비나 및 세미나 콘텐츠 기획',
        '소셜 미디어 콘텐츠 제작',
        '고객 성공 사례 인터뷰 및 스토리텔링',
        '기술 트렌드 리서치 및 인사이트 공유'
      ],
      qualifications: [
        '학사 학위 이상 (전공 무관, IT 관련 전공 우대)',
        '기술 콘텐츠 작성 경력 3년 이상',
        'IT 기술에 대한 이해도 및 학습 능력',
        '명확하고 논리적인 글쓰기 능력',
        'SEO 기본 이해',
        '콘텐츠 기획 및 편집 능력'
      ],
      preferred: [
        'Microsoft Power Platform, Azure 관련 콘텐츠 작성 경험',
        'B2B 기술 마케팅 콘텐츠 제작 경험',
        '개발자 또는 엔지니어 출신',
        'Markdown, HTML 활용 가능자',
        'Figma, Canva 등 디자인 도구 활용 가능자',
        '영어 기술 문서 작성 가능자'
      ],
      mission: '복잡한 기술을 고객이 이해하기 쉬운 콘텐츠로 전환하여, Artiordex의 전문성을 시장에 전달합니다.',
      collaboration: ['마케팅 리드', 'AX/DX 개발부문', '전략기획부문']
    },
    {
      id: 'digital-marketer',
      division: 'marketing',
      title: '디지털 마케팅 스페셜리스트',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        '디지털 광고 캠페인 기획 및 실행',
        'Google Ads, LinkedIn Ads 운영',
        'SEO/SEM 전략 수립 및 최적화',
        '리드 생성 캠페인 관리',
        '마케팅 자동화 도구 운영',
        '웹사이트 트래픽 분석 및 최적화',
        '전환율 최적화(CRO) 전략 수립',
        'A/B 테스트 설계 및 실행',
        '마케팅 성과 리포팅',
        '소셜 미디어 광고 운영'
      ],
      qualifications: [
        '학사 학위 이상 (마케팅, 경영학 또는 관련 전공)',
        '디지털 마케팅 경력 3년 이상',
        'Google Ads, Facebook Ads 운영 경험',
        'Google Analytics 활용 능력',
        '데이터 분석 및 인사이트 도출 능력',
        '성과 중심 사고 및 실행력'
      ],
      preferred: [
        'B2B 디지털 마케팅 경험',
        'Google Ads, Google Analytics 자격증',
        'HubSpot, Marketo 등 MA 도구 사용 경험',
        'SEO 도구(Ahrefs, SEMrush) 활용 경험',
        'SQL 기본 활용 가능자',
        'Growth Hacking 경험자'
      ],
      mission: '데이터 기반의 디지털 마케팅 전략으로 리드를 생성하고, 고객 전환을 극대화합니다.',
      collaboration: ['마케팅 리드', '콘텐츠 마케터', '솔루션영업부문']
    },

    // AX/DX 개발부문
    {
      id: 'dev-lead',
      division: 'engineering',
      title: 'AX/DX 개발 리드',
      type: '정규직',
      experience: '경력 7년 이상',
      location: '서울',
      responsibilities: [
        'AX/DX 프로젝트 기술 총괄',
        'Power Platform 솔루션 아키텍처 설계',
        'Azure 기반 클라우드 아키텍처 구축',
        'API 및 시스템 연동 설계',
        'RPA 자동화 구조 설계',
        'AI Agent 통합 및 구현',
        '데이터 파이프라인 설계',
        '개발팀 리드 및 기술 멘토링',
        '코드 리뷰 및 품질 관리',
        'DevOps 프로세스 구축',
        '기술 스택 선정 및 표준화',
        '고객 기술 컨설팅'
      ],
      qualifications: [
        '컴퓨터공학 또는 관련 전공 학사 이상',
        '소프트웨어 개발 경력 7년 이상',
        'Microsoft Power Platform 개발 경험 3년 이상',
        'Azure 클라우드 개발 경험',
        'API 설계 및 개발 경험',
        '엔터프라이즈 아키텍처 이해',
        '팀 리더십 및 프로젝트 관리 능력'
      ],
      preferred: [
        'Microsoft 인증 개발자 (PL-400, AZ-204 등)',
        'Azure Solutions Architect 자격증',
        'RPA 개발 경험 (Power Automate Desktop)',
        'AI/ML 프로젝트 경험',
        'DevOps 구축 경험',
        'Agile/Scrum 방법론 경험',
        '대규모 엔터프라이즈 프로젝트 경험'
      ],
      mission: 'Artiordex의 기술 역량을 총괄하고, 고객의 복잡한 요구사항을 우아한 기술 솔루션으로 구현합니다.',
      collaboration: ['Power Platform 엔지니어', '데이터 통합 엔지니어', '전략기획부문', '제품부문']
    },
    {
      id: 'power-platform-engineer',
      division: 'engineering',
      title: 'Power Platform 엔지니어',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        'Power Apps 애플리케이션 개발',
        'Power Automate 워크플로우 구축',
        'Power BI 대시보드 및 리포트 개발',
        'Dataverse 데이터 모델링',
        'Power Pages 포털 개발',
        'Custom Connector 개발',
        'PCF(Power Apps Component Framework) 컴포넌트 개발',
        'Microsoft 365 통합 개발',
        'Power Platform 솔루션 최적화',
        '사용자 교육 및 기술 지원'
      ],
      qualifications: [
        '컴퓨터공학 또는 관련 전공 학사 이상',
        'Power Platform 개발 경력 3년 이상',
        'Power Apps, Power Automate 개발 경험',
        'Dataverse 이해 및 활용 능력',
        'JavaScript, TypeScript 개발 능력',
        '문제 해결 능력 및 논리적 사고'
      ],
      preferred: [
        'Microsoft PL-400 자격증',
        'Power BI 개발 경험',
        'PCF 컴포넌트 개발 경험',
        'Azure Functions 개발 경험',
        'C#, .NET 개발 경험',
        'Agile 개발 방법론 경험',
        '고객 대면 프로젝트 경험'
      ],
      mission: 'Power Platform을 활용하여 고객의 업무 프로세스를 자동화하고, 생산성을 극대화하는 솔루션을 구현합니다.',
      collaboration: ['AX/DX 개발 리드', '데이터 통합 엔지니어', '전략기획부문']
    },
    {
      id: 'integration-engineer',
      division: 'engineering',
      title: '데이터 통합 엔지니어',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        'API 설계 및 개발',
        '시스템 간 데이터 연동 구현',
        'ETL 파이프라인 구축',
        '데이터 마이그레이션 수행',
        'REST API, GraphQL 개발',
        'Azure Integration Services 활용',
        'Logic Apps, Azure Functions 개발',
        '데이터 변환 및 매핑',
        '연동 모니터링 및 오류 처리',
        '기술 문서 작성'
      ],
      qualifications: [
        '컴퓨터공학 또는 관련 전공 학사 이상',
        'API 개발 경력 3년 이상',
        'RESTful API 설계 및 개발 경험',
        'SQL 및 데이터베이스 활용 능력',
        'Python, C#, Node.js 중 1개 이상 능숙',
        '시스템 통합 프로젝트 경험'
      ],
      preferred: [
        'Azure Integration Services 경험',
        'ETL 도구 사용 경험',
        'ERP, CRM 시스템 연동 경험',
        'GraphQL 개발 경험',
        'Docker, Kubernetes 경험',
        'CI/CD 파이프라인 구축 경험',
        '대용량 데이터 처리 경험'
      ],
      mission: '다양한 시스템과 데이터를 통합하여 고객의 데이터 생태계를 구축하고, 원활한 정보 흐름을 실현합니다.',
      collaboration: ['AX/DX 개발 리드', 'Power Platform 엔지니어', 'DevOps 엔지니어']
    },
    {
      id: 'fullstack-developer',
      division: 'engineering',
      title: 'Full-stack 개발자',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        '웹 애플리케이션 풀스택 개발',
        'React, Vue.js 등 프론트엔드 개발',
        'Node.js, C# 등 백엔드 개발',
        'RESTful API 설계 및 구현',
        '데이터베이스 설계 및 최적화',
        'Azure 클라우드 배포 및 운영',
        'UI/UX 구현 및 최적화',
        '코드 리뷰 및 품질 관리',
        '기술 문서 작성',
        '애자일 개발 프로세스 참여'
      ],
      qualifications: [
        '컴퓨터공학 또는 관련 전공 학사 이상',
        '풀스택 개발 경력 3년 이상',
        'React, Vue.js 등 모던 프론트엔드 프레임워크 경험',
        'Node.js, C#, Python 중 1개 이상 백엔드 개발 경험',
        'SQL 및 NoSQL 데이터베이스 경험',
        'Git 버전 관리 능력'
      ],
      preferred: [
        'TypeScript 개발 경험',
        'Azure App Service, Azure Functions 경험',
        'Next.js, Nuxt.js 등 SSR 프레임워크 경험',
        'GraphQL 개발 경험',
        'Docker 컨테이너 경험',
        'CI/CD 파이프라인 구축 경험',
        'Agile/Scrum 방법론 경험'
      ],
      mission: '최신 웹 기술을 활용하여 사용자 친화적이고 확장 가능한 애플리케이션을 개발합니다.',
      collaboration: ['AX/DX 개발 리드', 'Power Platform 엔지니어', '제품부문']
    },

    // 제품부문
    {
      id: 'artiflow-pm',
      division: 'product',
      title: 'Artiflow 제품 매니저',
      type: '정규직',
      experience: '경력 5년 이상',
      location: '서울',
      responsibilities: [
        'Artiflow 제품 전략 수립 및 로드맵 관리',
        '사용자 리서치 및 니즈 분석',
        '제품 기능 정의 및 우선순위 설정',
        '제품 개발 프로세스 관리',
        '개발팀과 협업하여 제품 구현',
        '제품 출시 및 Go-to-Market 전략 수립',
        '제품 성과 분석 및 개선',
        '고객 피드백 수집 및 반영',
        '경쟁사 분석 및 시장 트렌드 파악',
        '제품 문서 및 가이드 작성',
        '이해관계자 커뮤니케이션',
        'Microsoft 생태계 연동 전략 수립'
      ],
      qualifications: [
        '학사 학위 이상 (컴퓨터공학, 경영학 또는 관련 전공)',
        '제품 관리 경력 5년 이상',
        'B2B SaaS 제품 경험',
        '사용자 중심 사고 및 문제 해결 능력',
        '데이터 기반 의사결정 능력',
        '개발팀과의 협업 경험',
        '프로젝트 관리 능력'
      ],
      preferred: [
        'AI/ML 제품 경험',
        'Workflow 자동화 제품 경험',
        'Microsoft Power Platform 이해도',
        'Agile/Scrum 방법론 경험',
        'SQL, Python 등 데이터 분석 도구 활용',
        'Figma, Miro 등 협업 도구 활용',
        '영어 커뮤니케이션 가능자'
      ],
      mission: 'Artiflow를 AI 기반 워크플로우 자동화 시장의 선도 제품으로 성장시키고, 고객 가치를 극대화합니다.',
      collaboration: ['AX/DX 개발부문', '마케팅부문', '솔루션영업부문', '전략기획부문']
    },
    {
      id: 'smarthub-pm',
      division: 'product',
      title: 'SmartHub 제품 매니저',
      type: '정규직',
      experience: '경력 5년 이상',
      location: '서울',
      responsibilities: [
        'SmartHub 제품 전략 및 로드맵 수립',
        '데이터 통합 시장 분석 및 전략 수립',
        '제품 기능 정의 및 스펙 작성',
        '사용자 스토리 및 요구사항 관리',
        '개발팀과 협업하여 제품 구현',
        '제품 출시 및 마케팅 전략 수립',
        '고객 피드백 기반 제품 개선',
        '데이터 통합 파트너십 발굴',
        '제품 성과 모니터링 및 분석',
        '기술 문서 및 사용자 가이드 작성',
        'API 전략 및 개발자 경험 개선',
        'Microsoft 생태계 통합 전략'
      ],
      qualifications: [
        '학사 학위 이상 (컴퓨터공학, 데이터 과학 또는 관련 전공)',
        '제품 관리 경력 5년 이상',
        '데이터 통합 또는 API 제품 경험',
        'B2B SaaS 제품 경험',
        '기술적 이해도 및 개발팀 협업 능력',
        '데이터 기반 의사결정 능력',
        '프로젝트 관리 능력'
      ],
      preferred: [
        'ETL, iPaaS 제품 경험',
        'API 제품 관리 경험',
        'Microsoft Azure 데이터 서비스 이해도',
        'SQL 및 데이터베이스 지식',
        'API 설계 및 개발자 경험 이해',
        'Agile/Scrum 방법론 경험',
        '영어 커뮤니케이션 가능자'
      ],
      mission: 'SmartHub를 데이터 통합 시장의 핵심 솔루션으로 성장시키고, 고객의 데이터 생태계를 혁신합니다.',
      collaboration: ['AX/DX 개발부문', '마케팅부문', '솔루션영업부문', '전략기획부문']
    },
    {
      id: 'product-designer',
      division: 'product',
      title: '제품 디자이너 (UX/UI)',
      type: '정규직',
      experience: '경력 3년 이상',
      location: '서울',
      responsibilities: [
        '제품 UX/UI 디자인',
        '사용자 리서치 및 페르소나 정의',
        '와이어프레임 및 프로토타입 제작',
        '디자인 시스템 구축 및 관리',
        '사용성 테스트 설계 및 실행',
        '개발팀과 협업하여 디자인 구현',
        '디자인 가이드 및 스펙 문서 작성',
        '고객 피드백 기반 디자인 개선',
        '브랜드 아이덴티티 반영',
        '접근성 및 반응형 디자인 구현',
        '디자인 트렌드 리서치'
      ],
      qualifications: [
        '디자인 관련 전공 학사 이상 또는 동등 경력',
        'UX/UI 디자인 경력 3년 이상',
        'Figma, Sketch 등 디자인 도구 능숙',
        '사용자 중심 디자인 사고',
        '프로토타이핑 능력',
        '개발팀과의 협업 경험'
      ],
      preferred: [
        'B2B SaaS 제품 디자인 경험',
        '디자인 시스템 구축 경험',
        'HTML, CSS 기본 이해',
        '사용성 테스트 경험',
        'Adobe Creative Suite 활용',
        'Agile 환경에서의 디자인 경험',
        '포트폴리오 필수'
      ],
      mission: '사용자 경험을 최우선으로 하는 직관적이고 아름다운 제품 디자인을 통해 고객 만족도를 극대화합니다.',
      collaboration: ['제품 매니저', 'AX/DX 개발부문', '마케팅부문']
    }
  ];

  const filteredJobs = selectedDivision === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.division === selectedDivision);

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  return (
    <section id="job-openings" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">채용 공고</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Artiordex와 함께 미래를 만들어갈 인재를 찾습니다
          </p>
        </div>

        {/* Division Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {divisions.map((division) => (
            <button
              key={division.id}
              onClick={() => setSelectedDivision(division.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                selectedDivision === division.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {division.name}
            </button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <i className="ri-briefcase-line mr-2"></i>
                        {job.experience}
                      </span>
                      <span className="flex items-center">
                        <i className="ri-map-pin-line mr-2"></i>
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleJobExpansion(job.id)}
                    className="mt-4 md:mt-0 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
                  >
                    {expandedJob === job.id ? '접기' : '상세보기'}
                  </button>
                </div>

                {expandedJob === job.id && (
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <i className="ri-file-list-3-line text-blue-600 mr-2"></i>
                          담당업무
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                          자격요건
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {job.qualifications.map((qual, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm">{qual}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <i className="ri-star-line text-purple-600 mr-2"></i>
                          우대사항
                        </h4>
                        <ul className="space-y-2">
                          {job.preferred.map((pref, index) => (
                            <li key={index} className="flex items-start text-gray-700">
                              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-sm">{pref}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <i className="ri-lightbulb-line text-blue-600 mr-2"></i>
                        팀 미션
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{job.mission}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-sm font-semibold text-gray-700">협업 부문:</span>
                      {job.collaboration.map((team, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {team}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex gap-4">
                      <a
                        href="mailto:contact@artiordex.com"
                        className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center whitespace-nowrap"
                      >
                        지원하기
                      </a>
                      <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap">
                        공유하기
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <i className="ri-inbox-line text-6xl text-gray-300 mb-4"></i>
            <p className="text-xl text-gray-500">현재 해당 부문의 채용 공고가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobOpeningsSection;