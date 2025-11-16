
import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const ConferencePresentationsPage = () => {
  const [selectedYear, setSelectedYear] = useState("전체");
  const [selectedType, setSelectedType] = useState("전체");

  const presentations = [
    {
      id: 1,
      title: "엔터프라이즈 AI 도입 전략과 실무 사례",
      conference: "Korea AI Summit 2024",
      date: "2024년 1월 25일",
      location: "서울 코엑스",
      presenter: "김태현 CTO",
      type: "키노트",
      year: "2024",
      description: "국내 대기업의 AI 도입 사례를 중심으로 성공적인 AI 전환 전략을 제시했습니다. 실제 프로젝트 경험을 바탕으로 한 실무적 접근법을 공유했습니다.",
      audience: 450,
      slidesUrl: "#",
      videoUrl: "#",
      topics: [
        "AI 도입 로드맵 수립",
        "데이터 준비 및 품질 관리",
        "조직 변화 관리 전략",
        "ROI 측정 및 성과 평가"
      ],
      thumbnail: "https://readdy.ai/api/search-image?query=Professional%20conference%20presentation%20showing%20AI%20strategy%20slides%2C%20modern%20auditorium%20with%20large%20screen%2C%20business%20audience%2C%20corporate%20event%20atmosphere%20with%20blue%20lighting&width=400&height=225&seq=ai-summit-keynote&orientation=landscape"
    },
    {
      id: 2,
      title: "Microsoft Power Platform을 활용한 디지털 전환",
      conference: "Digital Transformation Forum",
      date: "2024년 1월 12일",
      location: "부산 벡스코",
      presenter: "박민수 이사",
      type: "세션 발표",
      year: "2024",
      description: "Power Platform 생태계를 활용한 기업의 디지털 전환 사례를 소개하고, 무코드/로우코드 접근법의 실무 적용 방안을 다뤘습니다.",
      audience: 280,
      slidesUrl: "#",
      videoUrl: "#",
      topics: [
        "Power Apps 비즈니스 앱 개발",
        "Power Automate 워크플로우 자동화",
        "Power BI 데이터 시각화",
        "거버넌스 및 보안 전략"
      ],
      thumbnail: "https://readdy.ai/api/search-image?query=Microsoft%20Power%20Platform%20presentation%20showing%20low-code%20development%20interface%2C%20business%20transformation%20conference%2C%20professional%20speaker%20on%20stage%20with%20modern%20slides&width=400&height=225&seq=power-platform-forum&orientation=landscape"
    },
    {
      id: 3,
      title: "클라우드 네이티브 아키텍처 설계 원칙",
      conference: "Azure Korea User Group Meetup",
      date: "2023년 12월 8일",
      location: "서울 강남구",
      presenter: "최영준 부장",
      type: "기술 세션",
      year: "2023",
      description: "Azure 클라우드 환경에서 확장 가능하고 안정적인 시스템을 구축하는 아키텍처 설계 원칙과 베스트 프랙티스를 공유했습니다.",
      audience: 120,
      slidesUrl: "#",
      videoUrl: "#",
      topics: [
        "마이크로서비스 아키텍처 패턴",
        "컨테이너 오케스트레이션",
        "서버리스 컴퓨팅 활용",
        "DevOps 파이프라인 구축"
      ],
      thumbnail: "https://readdy.ai/api/search-image?query=Cloud%20architecture%20presentation%20showing%20microservices%20diagram%2C%20Azure%20services%2C%20technical%20meetup%20environment%20with%20developers%20audience%2C%20modern%20tech%20presentation&width=400&height=225&seq=azure-architecture&orientation=landscape"
    },
    {
      id: 4,
      title: "데이터 통합의 미래: API First 접근법",
      conference: "Data & Analytics Conference",
      date: "2023년 11월 15일",
      location: "서울 잠실",
      presenter: "이준호 수석",
      type: "패널 토론",
      year: "2023",
      description: "현대적인 데이터 통합 전략으로서 API First 접근법의 중요성과 실제 구현 방법에 대해 업계 전문가들과 토론했습니다.",
      audience: 350,
      slidesUrl: "#",
      videoUrl: "#",
      topics: [
        "API First 설계 철학",
        "GraphQL vs REST API 선택",
        "실시간 데이터 동기화",
        "API 거버넌스 전략"
      ],
      thumbnail: "https://readdy.ai/api/search-image?query=Data%20integration%20conference%20panel%20discussion%2C%20API%20architecture%20diagrams%20on%20screen%2C%20professional%20speakers%20at%20panel%20table%2C%20data%20analytics%20conference%20setting&width=400&height=225&seq=data-integration-panel&orientation=landscape"
    },
    {
      id: 5,
      title: "RPA 2.0: AI와 결합한 지능형 자동화",
      conference: "Automation World Korea",
      date: "2023년 10월 20일",
      location: "인천 송도",
      presenter: "김태현 CTO",
      type: "워크샵",
      year: "2023",
      description: "전통적인 RPA의 한계를 극복하고 AI 기술과 결합하여 더욱 지능적인 자동화 시스템을 구축하는 방법을 실습과 함께 진행했습니다.",
      audience: 80,
      slidesUrl: "#",
      videoUrl: "#",
      topics: [
        "RPA와 AI 통합 아키텍처",
        "OCR 및 NLP 활용 사례",
        "예외 상황 지능적 처리",
        "자동화 성과 측정"
      ],
      thumbnail: "https://readdy.ai/api/search-image?query=RPA%20automation%20workshop%20showing%20intelligent%20robots%20with%20AI%20integration%2C%20hands-on%20training%20session%2C%20modern%20automation%20conference%20with%20interactive%20demonstrations&width=400&height=225&seq=rpa-ai-workshop&orientation=landscape"
    },
    {
      id: 6,
      title: "스타트업을 위한 클라우드 전략",
      conference: "Startup Tech Conference",
      date: "2023년 9월 28일",
      location: "서울 홍대",
      presenter: "박민수 이사",
      type: "세션 발표",
      year: "2023",
      description: "스타트업이 제한된 리소스로 효과적인 클라우드 전략을 수립하고 실행하는 방법에 대해 실제 사례를 중심으로 발표했습니다.",
      audience: 200,
      slidesUrl: "#",
      videoUrl: "#",
      topics: [
        "스타트업 클라우드 전략 수립",
        "비용 최적화 방법",
        "확장성 고려사항",
        "보안 및 컴플라이언스"
      ],
      thumbnail: "https://readdy.ai/api/search-image?query=Startup%20technology%20conference%20presentation%20about%20cloud%20strategy%2C%20young%20entrepreneurs%20audience%2C%20modern%20startup%20event%20venue%20with%20innovative%20atmosphere&width=400&height=225&seq=startup-cloud-strategy&orientation=landscape"
    }
  ];

  const years = ["전체", "2024", "2023"];
  const types = ["전체", "키노트", "세션 발표", "기술 세션", "패널 토론", "워크샵"];

  const filteredPresentations = presentations.filter(presentation => {
    const yearMatch = selectedYear === "전체" || presentation.year === selectedYear;
    const typeMatch = selectedType === "전체" || presentation.type === selectedType;
    return yearMatch && typeMatch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case "키노트": return "bg-purple-100 text-purple-700";
      case "세션 발표": return "bg-blue-100 text-blue-700";
      case "기술 세션": return "bg-green-100 text-green-700";
      case "패널 토론": return "bg-orange-100 text-orange-700";
      case "워크샵": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const handleDownload = (resourceType: string, title: string) => {
    console.log(`Downloading ${resourceType} for ${title}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-100">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb 
              items={[
                { label: '홈', href: '/' },
                { label: '리소스', href: '/resources' },
                { label: '웨비나 & 이벤트', href: '/resources/webinars' },
                { label: '컨퍼런스 발표자료', href: '/resources/webinars/conference-presentations' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
                <i className="ri-presentation-line mr-2"></i>
                컨퍼런스 발표자료
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                업계 최고 전문가들의
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  인사이트와 경험 공유
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                국내외 주요 컨퍼런스에서 발표한 Artiordex 전문가들의 발표 자료와 영상을 제공합니다.
                최신 기술 트렌드와 실무 경험을 바탕으로 한 깊이 있는 인사이트를 확인하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#presentations"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-slideshow-line mr-2"></i>
                  발표자료 보기
                </a>
                <a
                  href="/contact/enterprise/consulting"
                  className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
                >
                  <i className="ri-mic-line mr-2"></i>
                  강연 요청하기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">6</div>
                <div className="text-gray-600">발표 세션</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">1,480</div>
                <div className="text-gray-600">총 참석자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">12</div>
                <div className="text-gray-600">참여 컨퍼런스</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600 mb-2">4.9</div>
                <div className="text-gray-600">평균 평점</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">연도</h3>
                <div className="flex flex-wrap gap-3">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedYear === year
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">발표 유형</h3>
                <div className="flex flex-wrap gap-3">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedType === type
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Presentations Grid */}
        <section id="presentations" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPresentations.map((presentation) => (
                <div key={presentation.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                  {/* Thumbnail */}
                  <div className="relative">
                    <img 
                      src={presentation.thumbnail}
                      alt={presentation.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/90 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
                        <i className="ri-play-circle-line mr-2"></i>
                        영상 보기
                      </button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getTypeColor(presentation.type)}`}>
                        {presentation.type}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                        {presentation.year}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="font-medium text-orange-600">{presentation.conference}</span>
                      <span>{presentation.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {presentation.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {presentation.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <i className="ri-mic-line mr-2"></i>
                          {presentation.presenter}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <i className="ri-map-pin-line mr-2"></i>
                          {presentation.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <i className="ri-group-line mr-2"></i>
                          {presentation.audience}명 참석
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">주요 내용</h4>
                        <div className="space-y-1">
                          {presentation.topics.slice(0, 2).map((topic, index) => (
                            <div key={index} className="flex items-start text-sm text-gray-600">
                              <i className="ri-check-line text-orange-600 mr-2 mt-0.5 flex-shrink-0"></i>
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleDownload('발표자료', presentation.title)}
                        className="flex-1 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 flex items-center justify-center"
                      >
                        <i className="ri-slideshow-line mr-2"></i>
                        발표자료 다운로드
                      </button>
                      <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl border-2 border-orange-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300">
                        <i className="ri-play-circle-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking Opportunities */}
        <section className="py-16 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">강연 및 발표 요청</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Artiordex 전문가들의 강연을 원하시나요? 
                컨퍼런스, 세미나, 기업 교육 등 다양한 형태의 발표 요청을 받고 있습니다.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-presentation-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">컨퍼런스 키노트</h3>
                <p className="text-gray-600 mb-4">
                  업계 트렌드와 미래 전망에 대한 통찰력 있는 키노트 발표를 제공합니다.
                </p>
                <div className="text-sm text-gray-500">
                  60-90분 / 대규모 청중
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-code-s-slash-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">기술 워크샵</h3>
                <p className="text-gray-600 mb-4">
                  실무 중심의 기술 워크샵과 핸즈온 세션을 진행합니다.
                </p>
                <div className="text-sm text-gray-500">
                  2-4시간 / 소규모 그룹
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-building-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">기업 교육</h3>
                <p className="text-gray-600 mb-4">
                  기업 맞춤형 교육과 컨설팅 세션을 제공합니다.
                </p>
                <div className="text-sm text-gray-500">
                  맞춤 일정 / 기업 내부
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              전문가 강연을 요청하세요
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              귀하의 이벤트나 조직에 최적화된 전문 강연과 교육을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/enterprise/consulting"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <i className="ri-mic-line mr-2"></i>
                강연 요청하기
              </a>
              <a
                href="/resources/webinars/upcoming-webinars"
                className="inline-flex items-center px-8 py-4 bg-orange-700 text-white font-semibold rounded-xl hover:bg-orange-800 transition-all duration-300 border-2 border-orange-500"
              >
                <i className="ri-calendar-event-line mr-2"></i>
                예정된 웨비나 보기
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConferencePresentationsPage;
