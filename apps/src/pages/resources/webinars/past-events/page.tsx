
import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const PastEventsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const pastEvents = [
    {
      id: 1,
      title: "AI 기반 문서 자동화 시스템 구축하기",
      description: "OpenAI GPT-4와 LangChain을 활용한 문서 처리 자동화 시스템 구축 방법을 실습과 함께 학습했습니다.",
      date: "2024년 1월 18일",
      duration: "2시간 30분",
      participants: 127,
      rating: 4.8,
      category: "AI & 자동화",
      videoUrl: "#",
      slidesUrl: "#",
      resources: [
        "실습 코드 (GitHub)",
        "발표 슬라이드 (PDF)",
        "Q&A 요약본",
        "추가 학습 자료"
      ],
      keyTakeaways: [
        "LangChain을 활용한 문서 파싱 기법",
        "GPT-4 API 최적화 전략",
        "실시간 문서 처리 파이프라인 구축",
        "성능 모니터링 및 오류 처리"
      ],
      speaker: "김태현 CTO",
      thumbnail: "https://readdy.ai/api/search-image?query=AI%20document%20automation%20system%20interface%20showing%20document%20processing%20pipeline%2C%20GPT%20integration%2C%20modern%20tech%20presentation%20slide%20with%20blue%20and%20purple%20gradients&width=400&height=225&seq=ai-doc-automation&orientation=landscape"
    },
    {
      id: 2,
      title: "Power Platform으로 30분 만에 비즈니스 앱 만들기",
      description: "Microsoft Power Apps를 활용하여 실제 비즈니스 시나리오에 맞는 앱을 빠르게 개발하는 방법을 데모와 함께 진행했습니다.",
      date: "2024년 1월 11일",
      duration: "2시간",
      participants: 89,
      rating: 4.6,
      category: "DX 전략",
      videoUrl: "#",
      slidesUrl: "#",
      resources: [
        "앱 템플릿 파일",
        "Power Apps 가이드",
        "데이터 소스 연결 방법",
        "배포 체크리스트"
      ],
      keyTakeaways: [
        "Power Apps 캔버스 앱 개발",
        "SharePoint 데이터 연결",
        "사용자 인터페이스 디자인 원칙",
        "앱 배포 및 관리 전략"
      ],
      speaker: "박민수 이사",
      thumbnail: "https://readdy.ai/api/search-image?query=Microsoft%20Power%20Apps%20interface%20showing%20business%20app%20development%2C%20canvas%20design%2C%20modern%20low-code%20platform%20with%20professional%20blue%20theme&width=400&height=225&seq=power-apps-demo&orientation=landscape"
    },
    {
      id: 3,
      title: "Azure 클라우드 마이그레이션 전략과 실무",
      description: "온프레미스 시스템을 Azure 클라우드로 안전하고 효율적으로 이전하는 전략과 실제 마이그레이션 과정을 다뤘습니다.",
      date: "2023년 12월 21일",
      duration: "3시간",
      participants: 156,
      rating: 4.9,
      category: "클라우드",
      videoUrl: "#",
      slidesUrl: "#",
      resources: [
        "마이그레이션 체크리스트",
        "Azure 아키텍처 다이어그램",
        "비용 최적화 가이드",
        "보안 설정 템플릿"
      ],
      keyTakeaways: [
        "클라우드 마이그레이션 6단계 방법론",
        "Azure 서비스 선택 기준",
        "데이터 마이그레이션 전략",
        "비용 최적화 및 모니터링"
      ],
      speaker: "최영준 부장",
      thumbnail: "https://readdy.ai/api/search-image?query=Azure%20cloud%20migration%20architecture%20diagram%20showing%20on-premises%20to%20cloud%20transition%2C%20professional%20technical%20presentation%20with%20blue%20and%20white%20theme&width=400&height=225&seq=azure-migration&orientation=landscape"
    },
    {
      id: 4,
      title: "데이터 파이프라인 구축: ETL에서 실시간 스트리밍까지",
      description: "전통적인 ETL부터 Apache Kafka를 활용한 실시간 데이터 스트리밍까지 현대적인 데이터 파이프라인 구축 방법을 학습했습니다.",
      date: "2023년 12월 14일",
      duration: "2시간 45분",
      participants: 98,
      rating: 4.7,
      category: "데이터 통합",
      videoUrl: "#",
      slidesUrl: "#",
      resources: [
        "Kafka 설정 가이드",
        "ETL 스크립트 샘플",
        "데이터 품질 체크 도구",
        "모니터링 대시보드 템플릿"
      ],
      keyTakeaways: [
        "ETL vs ELT 선택 기준",
        "Apache Kafka 실시간 스트리밍",
        "데이터 품질 관리 전략",
        "파이프라인 모니터링 및 알림"
      ],
      speaker: "이준호 수석",
      thumbnail: "https://readdy.ai/api/search-image?query=Data%20pipeline%20architecture%20showing%20ETL%20process%2C%20real-time%20streaming%20with%20Kafka%2C%20modern%20data%20engineering%20diagram%20with%20teal%20and%20green%20gradients&width=400&height=225&seq=data-pipeline&orientation=landscape"
    },
    {
      id: 5,
      title: "RPA와 AI의 만남: 지능형 자동화 구현하기",
      description: "전통적인 RPA에 AI 기능을 결합하여 더욱 지능적이고 유연한 업무 자동화 시스템을 구축하는 방법을 다뤘습니다.",
      date: "2023년 12월 7일",
      duration: "2시간 15분",
      participants: 134,
      rating: 4.8,
      category: "AI & 자동화",
      videoUrl: "#",
      slidesUrl: "#",
      resources: [
        "RPA 봇 개발 가이드",
        "AI 모델 통합 방법",
        "예외 처리 전략",
        "성능 측정 지표"
      ],
      keyTakeaways: [
        "RPA와 AI 통합 아키텍처",
        "OCR 및 NLP 활용 방법",
        "예외 상황 지능적 처리",
        "자동화 ROI 측정 방법"
      ],
      speaker: "김태현 CTO",
      thumbnail: "https://readdy.ai/api/search-image?query=Intelligent%20automation%20system%20showing%20RPA%20robots%20with%20AI%20integration%2C%20modern%20workflow%20automation%20interface%20with%20purple%20and%20blue%20theme&width=400&height=225&seq=rpa-ai-integration&orientation=landscape"
    },
    {
      id: 6,
      title: "Microsoft Graph API 마스터클래스",
      description: "Microsoft 365 생태계의 데이터를 효과적으로 활용하기 위한 Graph API 활용법을 심도 있게 다뤘습니다.",
      date: "2023년 11월 30일",
      duration: "2시간 30분",
      participants: 76,
      rating: 4.9,
      category: "데이터 통합",
      videoUrl: "#",
      slidesUrl: "#",
      resources: [
        "Graph API 인증 가이드",
        "API 호출 예제 코드",
        "권한 설정 체크리스트",
        "성능 최적화 팁"
      ],
      keyTakeaways: [
        "Graph API 인증 및 권한 관리",
        "효율적인 데이터 쿼리 작성",
        "배치 요청 및 델타 쿼리 활용",
        "API 제한 및 오류 처리"
      ],
      speaker: "이준호 수석",
      thumbnail: "https://readdy.ai/api/search-image?query=Microsoft%20Graph%20API%20interface%20showing%20data%20connections%2C%20Office%20365%20integration%2C%20modern%20API%20documentation%20with%20Microsoft%20blue%20theme&width=400&height=225&seq=graph-api-master&orientation=landscape"
    }
  ];

  const categories = ["전체", "AI & 자동화", "DX 전략", "클라우드", "데이터 통합"];

  const filteredEvents = selectedCategory === "전체" 
    ? pastEvents 
    : pastEvents.filter(event => event.category === selectedCategory);

  const handleDownload = (resourceType: string, eventTitle: string) => {
    // 실제 다운로드 로직
    console.log(`Downloading ${resourceType} for ${eventTitle}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb 
              items={[
                { label: '홈', href: '/' },
                { label: '리소스', href: '/resources' },
                { label: '웨비나 & 이벤트', href: '/resources/webinars' },
                { label: '지난 이벤트', href: '/resources/webinars/past-events' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 to-blue-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-slate-100 text-slate-800 rounded-full text-sm font-medium mb-6">
                <i className="ri-video-line mr-2"></i>
                지난 이벤트
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                놓친 웨비나가 있다면
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-blue-600">
                  언제든 다시 학습하세요
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                지난 웨비나의 녹화 영상, 발표 자료, Q&A 내용을 모두 제공합니다.
                전문가의 노하우를 언제든 다시 학습할 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#events"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-600 to-blue-600 text-white font-semibold rounded-xl hover:from-slate-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-play-circle-line mr-2"></i>
                  웨비나 영상 보기
                </a>
                <a
                  href="/resources/webinars/upcoming-webinars"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-600 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                >
                  <i className="ri-calendar-event-line mr-2"></i>
                  예정된 웨비나 보기
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
                <div className="text-3xl font-bold text-slate-600 mb-2">6</div>
                <div className="text-gray-600">완료된 웨비나</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">680</div>
                <div className="text-gray-600">총 참가자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">15시간</div>
                <div className="text-gray-600">총 학습 콘텐츠</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">4.8</div>
                <div className="text-gray-600">평균 만족도</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-slate-600 to-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-slate-50 hover:text-slate-600 border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section id="events" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredEvents.map((event) => (
                <div key={event.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                  {/* Thumbnail */}
                  <div className="relative">
                    <img 
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white/90 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors">
                        <i className="ri-play-circle-line mr-2"></i>
                        영상 재생
                      </button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900/80 text-white text-xs font-medium rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center bg-white/90 px-2 py-1 rounded-full text-xs">
                        <i className="ri-star-fill text-yellow-400 mr-1"></i>
                        {event.rating}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span>{event.date}</span>
                      <span>{event.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <span className="flex items-center">
                        <i className="ri-user-line mr-1"></i>
                        {event.participants}명 참가
                      </span>
                      <span className="flex items-center">
                        <i className="ri-mic-line mr-1"></i>
                        {event.speaker}
                      </span>
                    </div>
                    
                    {/* Key Takeaways */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">핵심 내용</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {event.keyTakeaways.slice(0, 2).map((takeaway, index) => (
                          <div key={index} className="flex items-start text-sm text-gray-600">
                            <i className="ri-check-line text-blue-600 mr-2 mt-0.5 flex-shrink-0"></i>
                            <span>{takeaway}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Resources */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">다운로드 자료</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {event.resources.map((resource, index) => (
                          <button
                            key={index}
                            onClick={() => handleDownload(resource, event.title)}
                            className="flex items-center text-xs text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors"
                          >
                            <i className="ri-download-line mr-1"></i>
                            {resource}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 bg-gradient-to-r from-slate-600 to-blue-600 text-white font-semibold rounded-xl hover:from-slate-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        <i className="ri-play-circle-line mr-2"></i>
                        영상 시청
                      </button>
                      <button 
                        onClick={() => handleDownload('전체 자료', event.title)}
                        className="px-6 py-3 bg-white text-slate-600 font-semibold rounded-xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-300"
                      >
                        <i className="ri-download-line"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              더 많은 학습 기회를 놓치지 마세요
            </h2>
            <p className="text-xl text-slate-100 mb-8">
              예정된 웨비나에 참가하여 최신 기술 트렌드를 실시간으로 학습하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resources/webinars/upcoming-webinars"
                className="inline-flex items-center px-8 py-4 bg-white text-slate-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <i className="ri-calendar-event-line mr-2"></i>
                예정된 웨비나 보기
              </a>
              <a
                href="/contact/enterprise/consulting"
                className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 border-2 border-slate-500"
              >
                <i className="ri-presentation-line mr-2"></i>
                맞춤 교육 문의
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PastEventsPage;
