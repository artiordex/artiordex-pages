
interface PortfolioListSectionProps {
  activeFilter: string;
}

const PortfolioListSection = ({ activeFilter }: PortfolioListSectionProps) => {
  const portfolioSections = [
    {
      id: 'ax-rpa',
      title: 'AX/RPA Automation Solutions',
      description: 'Microsoft Power Automate와 Open Source RPA 툴을 결합하여, 단순 반복 업무부터 복잡한 ERP 데이터 처리까지 자동화한 사례들입니다.',
      icon: 'ri-refresh-line',
      projects: [
        {
          id: 1,
          title: 'Healthcare Claims Processing Automation',
          description: 'Power Automate와 맞춤형 API를 활용하여 의료보험 청구 처리 시간을 48시간에서 30분으로 단축한 자동화 시스템을 구축했습니다.',
          techStack: ['Power Automate', 'Custom APIs', 'Azure Functions', 'SQL Database'],
          results: ['처리 시간 96% 단축', '일일 5,000+ 청구 자동 처리', '오류율 0.1% 달성'],
          client: '대형 의료기관',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=healthcare%20claims%20processing%20automation%20system%20with%20medical%20data%20workflow%2C%20modern%20hospital%20setting%20with%20digital%20transformation%2C%20automated%20insurance%20claim%20processing%20interface%2C%20Power%20Automate%20integration%20display%2C%2048%20hours%20to%2030%20minutes%20efficiency%20improvement%20visualization&width=400&height=300&seq=101&orientation=landscape'
        },
        {
          id: 2,
          title: 'Manufacturing Quality Control Dashboard',
          description: '3개 생산 시설을 대상으로 실시간 품질 결함 추적 시스템을 구축하여 생산 품질 관리의 효율성을 극대화했습니다.',
          techStack: ['Power BI', 'IoT Sensors', 'Azure IoT Hub', 'Machine Learning'],
          results: ['실시간 품질 모니터링', '결함률 40% 감소', '3개 시설 통합 관리'],
          client: '제조업체',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=manufacturing%20quality%20control%20dashboard%20with%20real-time%20defect%20tracking%20system%2C%20modern%20factory%20floor%20with%20IoT%20sensors%20and%20digital%20monitoring%2C%203%20production%20facilities%20integration%2C%20Power%20BI%20analytics%20display%2C%20industrial%20automation%20visualization&width=400&height=300&seq=102&orientation=landscape'
        },
        {
          id: 3,
          title: 'Retail Inventory Synchronization Platform',
          description: '50개 이상의 매장을 대상으로 멀티채널 재고 관리 시스템을 구축하여 실시간 재고 동기화를 실현했습니다.',
          techStack: ['Power Platform', 'REST APIs', 'Azure Service Bus', 'Cosmos DB'],
          results: ['50+ 매장 실시간 동기화', '재고 정확도 99% 달성', '주문 처리 시간 60% 단축'],
          client: '대형 리테일 체인',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=retail%20inventory%20synchronization%20platform%20with%20multi-channel%20management%20across%2050%20stores%2C%20modern%20retail%20environment%20with%20real-time%20stock%20tracking%2C%20automated%20inventory%20system%20interface%2C%20Azure%20cloud%20integration%2C%20retail%20digital%20transformation&width=400&height=300&seq=103&orientation=landscape'
        },
        {
          id: 4,
          title: 'Banking Transaction Reconciliation System',
          description: '일일 100,000건 이상의 거래를 자동으로 대사하는 시스템을 구축하여 은행 업무의 정확성과 효율성을 향상시켰습니다.',
          techStack: ['Power Automate', 'Azure SQL', 'Logic Apps', 'Power BI'],
          results: ['일일 100,000+ 거래 자동 대사', '대사 시간 90% 단축', '정확도 99.9% 달성'],
          client: '지역 은행',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=banking%20transaction%20reconciliation%20system%20with%20automated%20daily%20processing%20of%20100000%20transactions%2C%20modern%20bank%20operations%20center%20with%20financial%20data%20analysis%2C%20Power%20Automate%20workflow%20visualization%2C%20banking%20digital%20transformation&width=400&height=300&seq=104&orientation=landscape'
        },
        {
          id: 5,
          title: 'Insurance Underwriting Workflow Automation',
          description: '보험 인수 심사 프로세스를 자동화하여 정책 승인 시간을 70% 단축하고 심사 품질을 향상시켰습니다.',
          techStack: ['Power Platform', 'AI Builder', 'Dataverse', 'Teams Integration'],
          results: ['정책 승인 시간 70% 단축', '심사 정확도 95% 달성', '고객 만족도 30% 향상'],
          client: '보험회사',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=insurance%20underwriting%20workflow%20automation%20with%20policy%20approval%20process%2C%20modern%20insurance%20office%20with%20digital%20transformation%2C%20AI-powered%20risk%20assessment%20interface%2C%2070%20percent%20time%20reduction%20visualization%2C%20automated%20workflow%20system&width=400&height=300&seq=105&orientation=landscape'
        },
        {
          id: 6,
          title: 'Logistics Route Optimization Engine',
          description: 'AI 기반 경로 최적화 엔진을 구축하여 배송 비용을 25% 절감하고 배송 효율성을 극대화했습니다.',
          techStack: ['Azure Machine Learning', 'Power BI', 'GPS APIs', 'Optimization Algorithms'],
          results: ['배송 비용 25% 절감', '배송 시간 30% 단축', '연료 효율 40% 향상'],
          client: '물류회사',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=logistics%20route%20optimization%20engine%20with%20AI-driven%20routing%20system%2C%20modern%20logistics%20center%20with%20delivery%20trucks%20and%20GPS%20tracking%2C%2025%20percent%20cost%20savings%20visualization%2C%20automated%20route%20planning%20interface&width=400&height=300&seq=106&orientation=landscape'
        },
        {
          id: 7,
          title: 'HR Onboarding Process Automation',
          description: '신입사원 온보딩 프로세스를 완전 자동화하여 HR 업무 효율성을 향상시키고 신입사원 경험을 개선했습니다.',
          techStack: ['Power Apps', 'Power Automate', 'SharePoint', 'Teams'],
          results: ['온보딩 시간 50% 단축', 'HR 업무 효율 60% 향상', '신입사원 만족도 40% 증가'],
          client: '대기업',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=HR%20onboarding%20process%20automation%20with%20complete%20employee%20lifecycle%20management%2C%20modern%20office%20environment%20with%20digital%20HR%20transformation%2C%20automated%20workflow%20interface%2C%20employee%20experience%20improvement%20visualization&width=400&height=300&seq=107&orientation=landscape'
        },
        {
          id: 8,
          title: 'Educational Institution Grade Management System',
          description: '5개 캠퍼스의 10,000명 이상 학생을 대상으로 통합 성적 관리 시스템을 구축했습니다.',
          techStack: ['Power Platform', 'Azure SQL', 'Power BI', 'Student Information System APIs'],
          results: ['10,000+ 학생 통합 관리', '성적 처리 시간 80% 단축', '5개 캠퍼스 연동'],
          client: '대학교',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=educational%20institution%20grade%20management%20system%20serving%2010000%20students%20across%205%20campuses%2C%20modern%20university%20setting%20with%20digital%20education%20transformation%2C%20automated%20grading%20interface%2C%20student%20information%20system%20integration&width=400&height=300&seq=108&orientation=landscape'
        },
        {
          id: 9,
          title: 'Legal Document Generation Platform',
          description: '99% 정확도로 법률 문서를 자동 생성하는 플랫폼을 구축하여 법무팀의 업무 효율성을 극대화했습니다.',
          techStack: ['Power Platform', 'AI Builder', 'Document Templates', 'Azure Cognitive Services'],
          results: ['문서 생성 정확도 99%', '작업 시간 75% 단축', '법무 업무 효율 3배 향상'],
          client: '법무법인',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=legal%20document%20generation%20platform%20with%20automated%20contract%20creation%2C%20modern%20law%20office%20with%20digital%20transformation%2C%20AI-powered%20document%20automation%20interface%2C%2099%20percent%20accuracy%20achievement%20visualization&width=400&height=300&seq=109&orientation=landscape'
        },
        {
          id: 10,
          title: 'Supply Chain Vendor Management Portal',
          description: '200개 이상의 공급업체를 실시간으로 연결하는 공급망 관리 포털을 구축했습니다.',
          techStack: ['Power Platform', 'Azure Service Bus', 'API Management', 'Power BI'],
          results: ['200+ 공급업체 실시간 연결', '조달 시간 50% 단축', '공급망 가시성 100% 확보'],
          client: '제조업체',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=supply%20chain%20vendor%20management%20portal%20connecting%20200%20suppliers%20in%20real-time%2C%20modern%20manufacturing%20facility%20with%20digital%20supply%20chain%20transformation%2C%20automated%20procurement%20interface%2C%20vendor%20collaboration%20platform&width=400&height=300&seq=110&orientation=landscape'
        }
      ]
    },
    {
      id: 'microsoft-dx',
      title: 'Microsoft-based DX/ERP Solutions',
      description: 'Microsoft 365, Power Platform, Azure를 활용하여 기업의 디지털 전환을 가속화한 통합 솔루션 사례들입니다.',
      icon: 'ri-microsoft-line',
      projects: [
        {
          id: 11,
          title: 'Dynamics 365 Finance Implementation for Global Manufacturer',
          description: '글로벌 제조업체를 위한 Dynamics 365 Finance 구현으로 재무 프로세스를 통합하고 실시간 재무 인사이트를 제공했습니다.',
          techStack: ['Dynamics 365 Finance', 'Power BI', 'Azure Integration', 'Power Platform'],
          results: ['재무 프로세스 통합', '보고서 생성 시간 70% 단축', '실시간 재무 대시보드 구축'],
          client: '글로벌 제조업체',
          duration: '6개월',
          image: 'https://readdy.ai/api/search-image?query=Dynamics%20365%20Finance%20implementation%20for%20global%20manufacturer%20with%20integrated%20financial%20processes%2C%20modern%20corporate%20finance%20office%20with%20digital%20transformation%2C%20real-time%20financial%20dashboard%20interface%2C%20Microsoft%20ecosystem%20integration&width=400&height=300&seq=201&orientation=landscape'
        },
        {
          id: 12,
          title: 'Power Platform Center of Excellence for Fortune 500 Company',
          description: 'Fortune 500 기업을 위한 Power Platform 우수성 센터를 구축하여 조직 전반의 로우코드 개발 역량을 강화했습니다.',
          techStack: ['Power Platform', 'Azure DevOps', 'Governance Framework', 'Training Programs'],
          results: ['전사 로우코드 역량 강화', '개발 속도 300% 향상', '거버넌스 체계 구축'],
          client: 'Fortune 500 기업',
          duration: '8개월',
          image: 'https://readdy.ai/api/search-image?query=Power%20Platform%20Center%20of%20Excellence%20for%20Fortune%20500%20company%20with%20low-code%20development%20capabilities%2C%20modern%20corporate%20headquarters%20with%20digital%20transformation%2C%20governance%20framework%20visualization%2C%20enterprise-wide%20platform%20adoption&width=400&height=300&seq=202&orientation=landscape'
        },
        {
          id: 13,
          title: 'Teams-Integrated Project Management Suite',
          description: 'Microsoft Teams와 완전히 통합된 프로젝트 관리 스위트를 구축하여 협업 효율성을 극대화했습니다.',
          techStack: ['Microsoft Teams', 'Power Apps', 'SharePoint', 'Project Online'],
          results: ['팀 협업 효율 50% 향상', '프로젝트 가시성 100% 확보', '의사소통 시간 40% 단축'],
          client: '컨설팅 회사',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=Teams-integrated%20project%20management%20suite%20with%20collaboration%20efficiency%20maximization%2C%20modern%20office%20environment%20with%20Microsoft%20Teams%20integration%2C%20project%20visibility%20dashboard%2C%20team%20collaboration%20interface&width=400&height=300&seq=203&orientation=landscape'
        },
        {
          id: 14,
          title: 'SharePoint Modern Intranet for 5,000+ Employees',
          description: '5,000명 이상의 직원을 위한 현대적인 SharePoint 인트라넷을 구축하여 정보 공유와 협업을 혁신했습니다.',
          techStack: ['SharePoint Online', 'Power Platform', 'Microsoft Search', 'Viva Connections'],
          results: ['5,000+ 직원 통합 플랫폼', '정보 접근성 80% 향상', '직원 만족도 60% 증가'],
          client: '대기업',
          duration: '5개월',
          image: 'https://readdy.ai/api/search-image?query=SharePoint%20modern%20intranet%20for%205000%20employees%20with%20information%20sharing%20and%20collaboration%20innovation%2C%20modern%20corporate%20office%20with%20digital%20workplace%20transformation%2C%20employee%20engagement%20platform%20interface&width=400&height=300&seq=204&orientation=landscape'
        },
        {
          id: 15,
          title: 'Power BI Executive Dashboard Ecosystem',
          description: '경영진을 위한 통합 Power BI 대시보드 생태계를 구축하여 데이터 기반 의사결정을 지원했습니다.',
          techStack: ['Power BI', 'Azure Data Factory', 'Azure SQL', 'Power Automate'],
          results: ['실시간 경영 인사이트', '의사결정 속도 50% 향상', '데이터 정확도 99% 달성'],
          client: '금융회사',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=Power%20BI%20executive%20dashboard%20ecosystem%20with%20data-driven%20decision%20making%20support%2C%20modern%20corporate%20boardroom%20with%20business%20intelligence%20visualization%2C%20real-time%20management%20insights%20interface%2C%20financial%20data%20analytics&width=400&height=300&seq=205&orientation=landscape'
        },
        {
          id: 16,
          title: 'Microsoft 365 Migration and Optimization Program',
          description: '레거시 시스템에서 Microsoft 365로의 완전한 마이그레이션과 최적화 프로그램을 수행했습니다.',
          techStack: ['Microsoft 365', 'Azure AD', 'Exchange Online', 'Teams'],
          results: ['완전한 클라우드 전환', '운영 비용 40% 절감', '보안 수준 300% 향상'],
          client: '중견기업',
          duration: '6개월',
          image: 'https://readdy.ai/api/search-image?query=Microsoft%20365%20migration%20and%20optimization%20program%20with%20complete%20cloud%20transformation%2C%20modern%20office%20environment%20with%20digital%20workplace%20migration%2C%20legacy%20system%20modernization%20visualization%2C%20cloud%20adoption%20success&width=400&height=300&seq=206&orientation=landscape'
        },
        {
          id: 17,
          title: 'Azure Active Directory B2B Collaboration Portal',
          description: '외부 파트너와의 안전한 협업을 위한 Azure AD B2B 협업 포털을 구축했습니다.',
          techStack: ['Azure Active Directory', 'Power Apps', 'Azure Security', 'Conditional Access'],
          results: ['안전한 외부 협업 환경', '보안 위험 90% 감소', '협업 효율 70% 향상'],
          client: '기술회사',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=Azure%20Active%20Directory%20B2B%20collaboration%20portal%20with%20secure%20external%20partner%20cooperation%2C%20modern%20tech%20company%20office%20with%20security-focused%20digital%20transformation%2C%20partner%20collaboration%20interface%2C%20enterprise%20security%20visualization&width=400&height=300&seq=207&orientation=landscape'
        },
        {
          id: 18,
          title: 'Dynamics 365 Sales CRM Customization',
          description: '업계 특화 요구사항에 맞춘 Dynamics 365 Sales CRM 커스터마이징을 통해 영업 효율성을 극대화했습니다.',
          techStack: ['Dynamics 365 Sales', 'Power Platform', 'Azure Logic Apps', 'Power BI'],
          results: ['영업 효율 60% 향상', '고객 만족도 45% 증가', '매출 예측 정확도 85% 달성'],
          client: '제약회사',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=Dynamics%20365%20Sales%20CRM%20customization%20with%20industry-specific%20requirements%2C%20modern%20pharmaceutical%20company%20office%20with%20sales%20efficiency%20maximization%2C%20customer%20relationship%20management%20interface%2C%20revenue%20forecasting%20dashboard&width=400&height=300&seq=208&orientation=landscape'
        },
        {
          id: 19,
          title: 'Power Virtual Agents Customer Service Solution',
          description: 'Power Virtual Agents를 활용한 지능형 고객 서비스 솔루션으로 고객 만족도와 운영 효율성을 동시에 향상시켰습니다.',
          techStack: ['Power Virtual Agents', 'Azure Cognitive Services', 'Power Automate', 'Dataverse'],
          results: ['고객 응답 시간 80% 단축', '고객 만족도 50% 향상', '운영 비용 60% 절감'],
          client: '통신회사',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=Power%20Virtual%20Agents%20customer%20service%20solution%20with%20intelligent%20chatbot%20interface%2C%20modern%20telecommunications%20company%20customer%20service%20center%2C%20AI-powered%20customer%20support%20visualization%2C%20automated%20response%20system&width=400&height=300&seq=209&orientation=landscape'
        },
        {
          id: 20,
          title: 'Microsoft Viva Employee Experience Platform',
          description: 'Microsoft Viva를 활용한 직원 경험 플랫폼을 구축하여 직원 참여도와 생산성을 향상시켰습니다.',
          techStack: ['Microsoft Viva', 'Teams', 'SharePoint', 'Power Platform'],
          results: ['직원 참여도 40% 향상', '생산성 30% 증가', '직원 만족도 55% 향상'],
          client: '서비스업체',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=Microsoft%20Viva%20employee%20experience%20platform%20with%20workforce%20engagement%20and%20productivity%20improvement%2C%20modern%20corporate%20office%20with%20employee-centric%20digital%20transformation%2C%20workplace%20analytics%20interface%2C%20team%20collaboration%20enhancement&width=400&height=300&seq=210&orientation=landscape'
        }
      ]
    },
    {
      id: 'web-app',
      title: 'Custom App/Web Development Projects',
      description: 'Next.js, TypeScript 등 최신 기술과 Microsoft Power Pages를 융합한 맞춤형 웹/앱 개발 사례들입니다.',
      icon: 'ri-smartphone-line',
      projects: [
        {
          id: 21,
          title: 'E-commerce Platform with AI Recommendations',
          description: 'AI 추천 시스템을 탑재한 이커머스 플랫폼으로 평균 주문 금액을 40% 증가시켰습니다.',
          techStack: ['Next.js', 'TypeScript', 'Azure ML', 'Stripe', 'PostgreSQL'],
          results: ['평균 주문 금액 40% 증가', '고객 재구매율 60% 향상', '개인화 추천 정확도 85%'],
          client: '온라인 리테일러',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=e-commerce%20platform%20with%20AI%20recommendations%20showing%2040%20percent%20increase%20in%20average%20order%20value%2C%20modern%20online%20retail%20interface%20with%20personalized%20shopping%20experience%2C%20machine%20learning%20recommendation%20engine%20visualization&width=400&height=300&seq=301&orientation=landscape'
        },
        {
          id: 22,
          title: 'Real Estate Virtual Tour Application',
          description: 'VR 기능을 지원하는 부동산 가상 투어 애플리케이션으로 부동산 마케팅을 혁신했습니다.',
          techStack: ['React', 'Three.js', 'WebXR', 'Azure Storage', 'Node.js'],
          results: ['부동산 조회수 200% 증가', '계약 성사율 35% 향상', '고객 만족도 90% 달성'],
          client: '부동산 중개업체',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=real%20estate%20virtual%20tour%20application%20with%20VR-enabled%20property%20viewing%20system%2C%20modern%20real%20estate%20office%20with%20immersive%20technology%2C%203D%20property%20visualization%20interface%2C%20virtual%20reality%20headset%20integration&width=400&height=300&seq=302&orientation=landscape'
        },
        {
          id: 23,
          title: 'Food Delivery Marketplace Platform',
          description: '500개 이상의 레스토랑과 고객을 연결하는 음식 배달 마켓플레이스 플랫폼을 구축했습니다.',
          techStack: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'Payment APIs'],
          results: ['500+ 레스토랑 연결', '일일 주문 5,000+ 건 처리', '배달 시간 25% 단축'],
          client: '푸드테크 스타트업',
          duration: '5개월',
          image: 'https://readdy.ai/api/search-image?query=food%20delivery%20marketplace%20platform%20connecting%20500%20restaurants%20with%20customers%2C%20modern%20food%20delivery%20service%20interface%20with%20real-time%20order%20tracking%2C%20restaurant%20partnership%20visualization%2C%20mobile%20ordering%20system&width=400&height=300&seq=303&orientation=landscape'
        },
        {
          id: 24,
          title: 'Fitness Tracking Progressive Web App',
          description: '일일 활성 사용자 10,000명을 지원하는 피트니스 추적 PWA를 개발했습니다.',
          techStack: ['PWA', 'React', 'IndexedDB', 'Web APIs', 'Chart.js'],
          results: ['일일 활성 사용자 10,000명', '사용자 참여도 80% 향상', '앱 설치율 95%'],
          client: '헬스케어 스타트업',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=fitness%20tracking%20progressive%20web%20app%20with%2010000%20daily%20active%20users%2C%20modern%20gym%20environment%20with%20digital%20health%20tracking%2C%20workout%20progress%20visualization%20interface%2C%20mobile%20fitness%20application&width=400&height=300&seq=304&orientation=landscape'
        },
        {
          id: 25,
          title: 'Event Management and Ticketing System',
          description: '연간 100만 장 이상의 티켓을 처리하는 이벤트 관리 및 티켓팅 시스템을 구축했습니다.',
          techStack: ['Next.js', 'TypeScript', 'Stripe', 'QR Code', 'Redis'],
          results: ['연간 1M+ 티켓 처리', '이벤트 관리 효율 70% 향상', '고객 만족도 95%'],
          client: '이벤트 기획사',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=event%20management%20and%20ticketing%20system%20processing%201%20million%20tickets%20annually%2C%20modern%20event%20venue%20with%20digital%20ticketing%20interface%2C%20QR%20code%20scanning%20system%2C%20large-scale%20event%20management%20visualization&width=400&height=300&seq=305&orientation=landscape'
        },
        {
          id: 26,
          title: 'Digital Learning Management Platform',
          description: '50,000명 이상의 학생을 지원하는 디지털 학습 관리 플랫폼을 개발했습니다.',
          techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Video Streaming', 'AI Assessment'],
          results: ['50,000+ 학생 지원', '학습 완료율 60% 향상', '강사 만족도 85% 달성'],
          client: '교육기관',
          duration: '6개월',
          image: 'https://readdy.ai/api/search-image?query=digital%20learning%20management%20platform%20supporting%2050000%20students%2C%20modern%20educational%20institution%20with%20online%20learning%20interface%2C%20video%20streaming%20classroom%2C%20AI-powered%20assessment%20system%20visualization&width=400&height=300&seq=306&orientation=landscape'
        },
        {
          id: 27,
          title: 'Cryptocurrency Trading Dashboard',
          description: '실시간 시장 분석 도구를 포함한 암호화폐 거래 대시보드를 개발했습니다.',
          techStack: ['React', 'WebSocket', 'Chart.js', 'Trading APIs', 'Redis'],
          results: ['실시간 시장 데이터 처리', '거래 효율 50% 향상', '사용자 수익률 30% 증가'],
          client: '핀테크 회사',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=cryptocurrency%20trading%20dashboard%20with%20real-time%20market%20analysis%20tools%2C%20modern%20fintech%20office%20with%20digital%20trading%20interface%2C%20blockchain%20technology%20visualization%2C%20crypto%20market%20data%20analytics&width=400&height=300&seq=307&orientation=landscape'
        },
        {
          id: 28,
          title: 'Healthcare Telemedicine Application',
          description: 'HIPAA 준수 비디오 상담 플랫폼으로 원격 의료 서비스를 혁신했습니다.',
          techStack: ['React Native', 'WebRTC', 'HIPAA Compliance', 'Azure Health', 'Encryption'],
          results: ['HIPAA 완전 준수', '원격 상담 5,000+ 건/월', '환자 만족도 92% 달성'],
          client: '의료기관',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=healthcare%20telemedicine%20application%20with%20HIPAA-compliant%20video%20consultation%20platform%2C%20modern%20medical%20clinic%20with%20remote%20healthcare%20technology%2C%20doctor-patient%20video%20call%20interface%2C%20secure%20medical%20communication%20system&width=400&height=300&seq=308&orientation=landscape'
        },
        {
          id: 29,
          title: 'Social Networking Platform for Professionals',
          description: '업계별 전문가 커뮤니티 구축을 위한 소셜 네트워킹 플랫폼을 개발했습니다.',
          techStack: ['Next.js', 'GraphQL', 'MongoDB', 'Socket.io', 'AI Matching'],
          results: ['전문가 네트워크 20,000+ 명', '매칭 성공률 75%', '플랫폼 활성도 85%'],
          client: '프로페셔널 서비스',
          duration: '5개월',
          image: 'https://readdy.ai/api/search-image?query=social%20networking%20platform%20for%20professionals%20with%20industry-specific%20community%20building%2C%20modern%20coworking%20space%20with%20professional%20networking%20interface%2C%20expert%20matching%20system%20visualization%2C%20business%20collaboration%20platform&width=400&height=300&seq=309&orientation=landscape'
        },
        {
          id: 30,
          title: 'IoT Device Management Console',
          description: '10,000개 이상의 연결된 디바이스를 모니터링하는 IoT 관리 콘솔을 구축했습니다.',
          techStack: ['React', 'Azure IoT', 'Time Series DB', 'Real-time Analytics', 'Device APIs'],
          results: ['10,000+ 디바이스 모니터링', '시스템 가동률 99.9%', '운영 효율 40% 향상'],
          client: 'IoT 솔루션 업체',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=IoT%20device%20management%20console%20monitoring%2010000%20connected%20devices%2C%20modern%20smart%20city%20control%20center%20with%20IoT%20visualization%2C%20real-time%20device%20analytics%20interface%2C%20industrial%20IoT%20monitoring%20system&width=400&height=300&seq=310&orientation=landscape'
        }
      ]
    },
    {
      id: 'platform',
      title: 'Booking/Intermediary Platforms',
      description: '예약, 중개, 커머스 등 복잡한 비즈니스 로직을 포함한 플랫폼 서비스 구축 사례들입니다.',
      icon: 'ri-calendar-line',
      projects: [
        {
          id: 31,
          title: 'Hotel Reservation Management System',
          description: '다중 호텔 예약 엔진으로 호텔 예약 관리 시스템을 구축하여 예약 효율성을 극대화했습니다.',
          techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Payment Gateway', 'Booking APIs'],
          results: ['다중 호텔 통합 관리', '예약 처리 시간 60% 단축', '고객 만족도 88% 달성'],
          client: '호텔 체인',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=hotel%20reservation%20management%20system%20with%20multi-property%20booking%20engine%2C%20luxury%20hotel%20lobby%20with%20digital%20check-in%20interface%2C%20hospitality%20technology%20integration%2C%20hotel%20booking%20platform%20visualization&width=400&height=300&seq=401&orientation=landscape'
        },
        {
          id: 32,
          title: 'Medical Appointment Scheduling Platform',
          description: '100개 이상의 클리닉을 지원하는 의료 예약 스케줄링 플랫폼을 구축했습니다.',
          techStack: ['React', 'Node.js', 'Calendar APIs', 'SMS Integration', 'Healthcare APIs'],
          results: ['100+ 클리닉 지원', '예약 노쇼율 40% 감소', '환자 만족도 90% 달성'],
          client: '의료 네트워크',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=medical%20appointment%20scheduling%20platform%20serving%20100%20clinics%2C%20modern%20healthcare%20facility%20with%20digital%20appointment%20booking%2C%20patient%20scheduling%20interface%2C%20medical%20practice%20management%20system&width=400&height=300&seq=402&orientation=landscape'
        },
        {
          id: 33,
          title: 'Conference Room Booking Solution',
          description: '기업 워크스페이스 관리를 위한 회의실 예약 솔루션을 구축했습니다.',
          techStack: ['Power Apps', 'SharePoint', 'Outlook Integration', 'IoT Sensors', 'Power Automate'],
          results: ['회의실 활용률 70% 향상', '예약 충돌 95% 감소', '직원 만족도 85% 달성'],
          client: '대기업',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=conference%20room%20booking%20solution%20for%20enterprise%20workspace%20management%2C%20modern%20corporate%20office%20with%20smart%20meeting%20rooms%2C%20digital%20room%20reservation%20interface%2C%20workplace%20optimization%20visualization&width=400&height=300&seq=403&orientation=landscape'
        },
        {
          id: 34,
          title: 'Transportation Booking Aggregator',
          description: '다중 교통수단 여행 계획을 위한 교통 예약 통합 플랫폼을 개발했습니다.',
          techStack: ['Next.js', 'Travel APIs', 'Payment Processing', 'Route Optimization', 'Mobile App'],
          results: ['다중 교통수단 통합', '여행 계획 시간 50% 단축', '사용자 만족도 92% 달성'],
          client: '여행 플랫폼',
          duration: '5개월',
          image: 'https://readdy.ai/api/search-image?query=transportation%20booking%20aggregator%20with%20multi-modal%20travel%20planning%2C%20modern%20transportation%20hub%20with%20integrated%20booking%20interface%2C%20travel%20route%20optimization%20visualization%2C%20mobility%20platform%20integration&width=400&height=300&seq=404&orientation=landscape'
        },
        {
          id: 35,
          title: 'Beauty Service Marketplace',
          description: '뷰티 서비스 제공자와 고객을 연결하는 마켓플레이스를 구축했습니다.',
          techStack: ['React Native', 'Node.js', 'Geolocation', 'Payment Gateway', 'Review System'],
          results: ['서비스 제공자 1,000+ 명', '월간 예약 5,000+ 건', '고객 만족도 94% 달성'],
          client: '뷰티 플랫폼',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=beauty%20service%20marketplace%20connecting%20service%20providers%20with%20customers%2C%20modern%20beauty%20salon%20with%20digital%20booking%20interface%2C%20beauty%20professional%20platform%20visualization%2C%20customer%20service%20matching%20system&width=400&height=300&seq=405&orientation=landscape'
        },
        {
          id: 36,
          title: 'Sports Facility Reservation System',
          description: '50개 이상의 스포츠 시설을 관리하는 예약 시스템을 구축했습니다.',
          techStack: ['Next.js', 'PostgreSQL', 'Calendar Integration', 'Payment Processing', 'Mobile App'],
          results: ['50+ 시설 통합 관리', '시설 활용률 80% 향상', '예약 편의성 90% 개선'],
          client: '스포츠 시설 관리업체',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=sports%20facility%20reservation%20system%20managing%2050%20venues%2C%20modern%20sports%20complex%20with%20digital%20booking%20interface%2C%20athletic%20facility%20management%20visualization%2C%20sports%20venue%20optimization%20system&width=400&height=300&seq=406&orientation=landscape'
        },
        {
          id: 37,
          title: 'Professional Services Booking Portal',
          description: 'B2B 서비스 매칭을 위한 전문 서비스 예약 포털을 개발했습니다.',
          techStack: ['Next.js', 'GraphQL', 'AI Matching', 'Video Conferencing', 'Payment System'],
          results: ['전문가 매칭 정확도 85%', 'B2B 거래 300% 증가', '서비스 만족도 91% 달성'],
          client: '프로페셔널 서비스',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=professional%20services%20booking%20portal%20for%20B2B%20service%20matchmaking%2C%20modern%20business%20consulting%20office%20with%20expert%20matching%20interface%2C%20professional%20service%20platform%20visualization%2C%20B2B%20collaboration%20system&width=400&height=300&seq=407&orientation=landscape'
        },
        {
          id: 38,
          title: 'Equipment Rental Management Platform',
          description: '자산 추적 및 스케줄링을 포함한 장비 렌탈 관리 플랫폼을 구축했습니다.',
          techStack: ['React', 'Node.js', 'IoT Tracking', 'Inventory Management', 'Mobile App'],
          results: ['자산 추적 정확도 99%', '렌탈 효율 60% 향상', '고객 만족도 87% 달성'],
          client: '장비 렌탈 업체',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=equipment%20rental%20management%20platform%20with%20asset%20tracking%20and%20scheduling%2C%20modern%20industrial%20facility%20with%20equipment%20management%20interface%2C%20IoT%20asset%20tracking%20visualization%2C%20rental%20optimization%20system&width=400&height=300&seq=408&orientation=landscape'
        }
      ]
    },
    {
      id: 'ai-intelligence',
      title: 'AI & Data Intelligence Solutions',
      description: 'Azure OpenAI, ChatGPT API, LangChain을 활용한 AI 기반 자동화 및 데이터 분석 솔루션 사례들입니다.',
      icon: 'ri-robot-line',
      projects: [
        {
          id: 39,
          title: 'Predictive Maintenance System for Manufacturing',
          description: '제조업을 위한 예측 정비 시스템으로 다운타임을 40% 감소시켰습니다.',
          techStack: ['Azure ML', 'IoT Sensors', 'Time Series Analysis', 'Power BI', 'Predictive Models'],
          results: ['다운타임 40% 감소', '정비 비용 30% 절감', '장비 수명 25% 연장'],
          client: '제조업체',
          duration: '5개월',
          image: 'https://readdy.ai/api/search-image?query=predictive%20maintenance%20system%20for%20manufacturing%20with%2040%20percent%20downtime%20reduction%2C%20modern%20factory%20floor%20with%20IoT%20sensors%20and%20predictive%20analytics%2C%20industrial%20equipment%20monitoring%20interface%2C%20AI-powered%20maintenance%20visualization&width=400&height=300&seq=501&orientation=landscape'
        },
        {
          id: 40,
          title: 'Customer Churn Prediction Model',
          description: '고객 이탈 예측 모델로 85% 정확도의 고객 유지 예측을 실현했습니다.',
          techStack: ['Azure ML', 'Python', 'Customer Analytics', 'Power BI', 'Retention Algorithms'],
          results: ['이탈 예측 정확도 85%', '고객 유지율 45% 향상', '매출 손실 60% 방지'],
          client: '통신회사',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=customer%20churn%20prediction%20model%20with%2085%20percent%20accuracy%20in%20retention%20forecasting%2C%20modern%20telecommunications%20company%20analytics%20center%2C%20customer%20behavior%20analysis%20interface%2C%20AI-powered%20retention%20visualization&width=400&height=300&seq=502&orientation=landscape'
        },
        {
          id: 41,
          title: 'Natural Language Processing Chatbot',
          description: '일일 5,000건 이상의 대화를 처리하는 자연어 처리 챗봇을 구축했습니다.',
          techStack: ['Azure OpenAI', 'LangChain', 'Natural Language Processing', 'Chat APIs', 'Knowledge Base'],
          results: ['일일 5,000+ 대화 처리', '고객 만족도 90% 달성', '응답 정확도 95% 달성'],
          client: '고객서비스 센터',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=natural%20language%20processing%20chatbot%20handling%205000%20daily%20conversations%2C%20modern%20customer%20service%20center%20with%20AI%20chatbot%20interface%2C%20automated%20customer%20support%20visualization%2C%20conversational%20AI%20system&width=400&height=300&seq=503&orientation=landscape'
        },
        {
          id: 42,
          title: 'Computer Vision Quality Inspection System',
          description: '99.5% 결함 감지율을 달성하는 컴퓨터 비전 품질 검사 시스템을 구축했습니다.',
          techStack: ['Azure Cognitive Services', 'Computer Vision', 'Machine Learning', 'Image Processing', 'Quality Control'],
          results: ['결함 감지율 99.5%', '검사 시간 70% 단축', '품질 비용 50% 절감'],
          client: '제조업체',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=computer%20vision%20quality%20inspection%20system%20with%2099.5%20percent%20defect%20detection%20rate%2C%20modern%20manufacturing%20quality%20control%20facility%2C%20automated%20visual%20inspection%20interface%2C%20AI-powered%20defect%20detection%20visualization&width=400&height=300&seq=504&orientation=landscape'
        },
        {
          id: 43,
          title: 'Sentiment Analysis Dashboard for Social Media',
          description: '실시간 브랜드 모니터링을 위한 소셜 미디어 감정 분석 대시보드를 구축했습니다.',
          techStack: ['Azure Text Analytics', 'Social Media APIs', 'Real-time Processing', 'Power BI', 'Sentiment Analysis'],
          results: ['실시간 브랜드 모니터링', '감정 분석 정확도 92%', '브랜드 인사이트 300% 향상'],
          client: '마케팅 에이전시',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=sentiment%20analysis%20dashboard%20for%20social%20media%20with%20real-time%20brand%20monitoring%2C%20modern%20marketing%20agency%20office%20with%20social%20media%20analytics%20interface%2C%20brand%20sentiment%20visualization%2C%20real-time%20social%20monitoring%20system&width=400&height=300&seq=505&orientation=landscape'
        },
        {
          id: 44,
          title: 'Fraud Detection Algorithm for Financial Services',
          description: '200만 달러 이상의 손실을 방지하는 금융 서비스 사기 탐지 알고리즘을 개발했습니다.',
          techStack: ['Azure ML', 'Anomaly Detection', 'Real-time Analytics', 'Risk Assessment', 'Machine Learning'],
          results: ['$2M+ 손실 방지', '사기 탐지 정확도 96%', '거짓 양성 50% 감소'],
          client: '금융기관',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=fraud%20detection%20algorithm%20for%20financial%20services%20preventing%202%20million%20dollars%20in%20losses%2C%20modern%20bank%20security%20operations%20center%2C%20financial%20fraud%20monitoring%20interface%2C%20AI-powered%20risk%20assessment%20visualization&width=400&height=300&seq=506&orientation=landscape'
        },
        {
          id: 45,
          title: 'Demand Forecasting Engine for Retail',
          description: '리테일을 위한 수요 예측 엔진으로 재고 효율성을 30% 개선했습니다.',
          techStack: ['Azure ML', 'Time Series Forecasting', 'Retail Analytics', 'Inventory Optimization', 'Predictive Models'],
          results: ['재고 효율 30% 개선', '예측 정확도 88%', '재고 비용 25% 절감'],
          client: '리테일 체인',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=demand%20forecasting%20engine%20for%20retail%20with%2030%20percent%20improvement%20in%20inventory%20efficiency%2C%20modern%20retail%20warehouse%20with%20inventory%20management%20interface%2C%20supply%20chain%20optimization%20visualization%2C%20AI-powered%20demand%20prediction&width=400&height=300&seq=507&orientation=landscape'
        }
      ]
    },
    {
      id: 'dx-consulting',
      title: 'DX Strategy & Consulting Engagements',
      description: '기업의 디지털 전환 전략 수립부터 실행까지 포괄하는 컨설팅 및 교육 프로그램 사례들입니다.',
      icon: 'ri-lightbulb-line',
      projects: [
        {
          id: 46,
          title: 'Digital Maturity Assessment for Regional Bank',
          description: '지역 은행을 위한 디지털 성숙도 평가를 통해 DX 로드맵을 수립했습니다.',
          techStack: ['Digital Assessment Framework', 'Maturity Models', 'Strategic Planning', 'Change Management'],
          results: ['디지털 성숙도 진단 완료', 'DX 로드맵 수립', '실행 우선순위 정립'],
          client: '지역 은행',
          duration: '2개월',
          image: 'https://readdy.ai/api/search-image?query=digital%20maturity%20assessment%20for%20regional%20bank%20with%20DX%20roadmap%20development%2C%20modern%20bank%20headquarters%20with%20digital%20transformation%20consulting%2C%20strategic%20planning%20visualization%2C%20banking%20modernization%20assessment&width=400&height=300&seq=601&orientation=landscape'
        },
        {
          id: 47,
          title: 'Cloud Migration Strategy for Healthcare Provider',
          description: '의료 서비스 제공업체를 위한 클라우드 마이그레이션 전략을 수립했습니다.',
          techStack: ['Cloud Strategy', 'Azure Migration', 'HIPAA Compliance', 'Security Framework'],
          results: ['클라우드 전환 전략 수립', '보안 프레임워크 구축', '규정 준수 확보'],
          client: '의료 서비스 제공업체',
          duration: '3개월',
          image: 'https://readdy.ai/api/search-image?query=cloud%20migration%20strategy%20for%20healthcare%20provider%20with%20HIPAA%20compliance%2C%20modern%20medical%20facility%20with%20cloud%20infrastructure%20planning%2C%20healthcare%20IT%20transformation%20visualization%2C%20secure%20cloud%20migration&width=400&height=300&seq=602&orientation=landscape'
        },
        {
          id: 48,
          title: 'Agile Transformation Program for Government Agency',
          description: '정부 기관을 위한 애자일 전환 프로그램을 통해 업무 효율성을 향상시켰습니다.',
          techStack: ['Agile Methodology', 'Change Management', 'Training Programs', 'Process Optimization'],
          results: ['애자일 문화 정착', '프로젝트 완료 시간 40% 단축', '직원 만족도 50% 향상'],
          client: '정부 기관',
          duration: '6개월',
          image: 'https://readdy.ai/api/search-image?query=agile%20transformation%20program%20for%20government%20agency%20with%20work%20efficiency%20improvement%2C%20modern%20government%20office%20with%20agile%20methodology%20implementation%2C%20process%20optimization%20visualization%2C%20public%20sector%20digital%20transformation&width=400&height=300&seq=603&orientation=landscape'
        },
        {
          id: 49,
          title: 'Data Governance Framework Implementation',
          description: '데이터 거버넌스 프레임워크 구현을 통해 데이터 품질과 보안을 강화했습니다.',
          techStack: ['Data Governance', 'Data Quality', 'Security Policies', 'Compliance Framework'],
          results: ['데이터 품질 90% 향상', '보안 위험 80% 감소', '규정 준수 100% 달성'],
          client: '금융회사',
          duration: '4개월',
          image: 'https://readdy.ai/api/search-image?query=data%20governance%20framework%20implementation%20with%20data%20quality%20and%20security%20enhancement%2C%20modern%20financial%20institution%20data%20center%2C%20data%20management%20visualization%2C%20enterprise%20data%20governance%20system&width=400&height=300&seq=604&orientation=landscape'
        },
        {
          id: 50,
          title: 'Innovation Lab Setup and Management',
          description: '혁신 랩 설립 및 관리를 통해 조직의 혁신 역량을 강화했습니다.',
          techStack: ['Innovation Framework', 'Lab Management', 'Prototype Development', 'Innovation Metrics'],
          results: ['혁신 랩 성공적 설립', '프로토타입 20+ 개 개발', '혁신 문화 정착'],
          client: '대기업',
          duration: '8개월',
          image: 'https://readdy.ai/api/search-image?query=innovation%20lab%20setup%20and%20management%20with%20organizational%20innovation%20capability%20enhancement%2C%20modern%20corporate%20innovation%20center%20with%20prototype%20development%2C%20creative%20workspace%20visualization%2C%20enterprise%20innovation%20culture&width=400&height=300&seq=605&orientation=landscape'
        }
      ]
    }
  ];

  const filteredSections = portfolioSections.filter(section => {
    if (activeFilter === 'all') return true;
    
    // Direct category match
    if (section.id === activeFilter) return true;
    
    // Technology/purpose based filtering
    const filterMappings: Record<string, string[]> = {
      'web': ['web-app'],
      'app': ['web-app'],
      'ai': ['ai-intelligence'],
      'erp': ['microsoft-dx'],
      'b2b-saas': ['microsoft-dx', 'platform'],
      'platform': ['platform'],
      'landing': ['web-app']
    };
    
    const relevantSections = filterMappings[activeFilter] || [];
    return relevantSections.includes(section.id);
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Portfolio Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              50개 이상의 다양한 프로젝트를 통해 모든 서비스 분야에서의 깊이와 폭을 확인하세요. 
              지능형 그리드 레이아웃으로 선택된 필터에 따라 최적의 시각적 프레젠테이션을 제공합니다.
            </p>
          </div>

          {/* Portfolio Sections */}
          <div className="space-y-16">
            {filteredSections.map((section, sectionIndex) => (
              <div 
                key={section.id}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
                style={{ animationDelay: `${sectionIndex * 200}ms` }}
              >
                {/* Section Header */}
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mr-4">
                    <i className={`${section.icon} text-white text-xl`}></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-4xl">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {section.projects.map((project, projectIndex) => (
                    <div 
                      key={project.id}
                      className="group bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
                      style={{ animationDelay: `${(sectionIndex * 200) + (projectIndex * 50)}ms` }}
                    >
                      {/* Project Image */}
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Project Stats */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex space-x-1 text-white text-xs">
                            <span className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{project.duration}</span>
                          </div>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-4">
                        {/* Title */}
                        <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h4>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {project.techStack.slice(0, 2).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 2 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                                +{project.techStack.length - 2}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Results */}
                        <div className="mb-3">
                          <div className="space-y-1">
                            {project.results.slice(0, 1).map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-start text-xs text-gray-600">
                                <i className="ri-check-line text-green-500 mr-1 mt-0.5 flex-shrink-0"></i>
                                <span>{result}</span>
                              </div>
                            ))}
                            {project.results.length > 1 && (
                              <div className="text-xs text-blue-600 font-medium">
                                +{project.results.length - 1}개 추가 성과
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Client Info */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                          <div className="flex items-center text-xs text-gray-500">
                            <i className="ri-building-line mr-1"></i>
                            {project.client}
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center group-hover:translate-x-1 transition-transform whitespace-nowrap">
                            상세보기
                            <i className="ri-arrow-right-line ml-1"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section Stats */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>총 {section.projects.length}개 프로젝트</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center whitespace-nowrap">
                      {section.title} 전체 보기
                      <i className="ri-arrow-right-line ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredSections.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <i className="ri-search-line text-gray-400 text-3xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                선택한 필터에 해당하는 프로젝트가 없습니다
              </h3>
              <p className="text-gray-600 mb-6">
                다른 필터를 선택하거나 '전체'를 선택해 모든 프로젝트를 확인해보세요.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                <i className="ri-refresh-line mr-2"></i>
                필터 초기화
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioListSection;
