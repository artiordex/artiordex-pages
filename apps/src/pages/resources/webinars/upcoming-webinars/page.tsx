
import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const UpcomingWebinarsPage = () => {
  const [registeredWebinars, setRegisteredWebinars] = useState<number[]>([]);

  const handleRegister = (webinarId: number) => {
    if (!registeredWebinars.includes(webinarId)) {
      setRegisteredWebinars(prev => [...prev, webinarId]);
    }
  };

  const upcomingWebinars = [
    {
      id: 1,
      title: "AI Agent 워크샵: 업무 자동화의 새로운 패러다임",
      description: "LangChain과 OpenAI를 활용한 실무형 AI Agent 구축 워크샵입니다. 실제 비즈니스 시나리오를 통해 Agent 시스템을 설계하고 구현하는 방법을 학습합니다.",
      date: "2024년 2월 15일",
      time: "14:00 - 16:00 (KST)",
      duration: "2시간",
      level: "중급",
      maxParticipants: 50,
      currentParticipants: 32,
      speaker: "김태현 CTO",
      speakerTitle: "Artiordex 최고기술책임자",
      topics: [
        "AI Agent 아키텍처 설계 원칙",
        "LangChain을 활용한 Agent 구현",
        "실무 시나리오별 Agent 활용법",
        "성능 최적화 및 모니터링"
      ],
      category: "AI & 자동화"
    },
    {
      id: 2,
      title: "Power Platform으로 시작하는 DX 전략",
      description: "Microsoft Power Platform을 활용한 디지털 전환 전략 수립과 실행 방법을 다룹니다. 무코드/로우코드 접근법으로 빠른 디지털화를 실현하는 방법을 학습합니다.",
      date: "2024년 2월 22일",
      time: "10:00 - 12:00 (KST)",
      duration: "2시간",
      level: "초급",
      maxParticipants: 80,
      currentParticipants: 45,
      speaker: "박민수 이사",
      speakerTitle: "DX 컨설팅 부문장",
      topics: [
        "Power Platform 생태계 이해",
        "Power Apps 비즈니스 앱 개발",
        "Power Automate 워크플로우 자동화",
        "Power BI 데이터 시각화"
      ],
      category: "DX 전략"
    },
    {
      id: 3,
      title: "데이터 통합 마스터클래스: API에서 ETL까지",
      description: "복잡한 기업 환경에서 데이터를 효과적으로 통합하는 전략과 기술을 심도 있게 다룹니다. 실제 프로젝트 사례를 통해 실무 노하우를 공유합니다.",
      date: "2024년 3월 8일",
      time: "15:00 - 17:30 (KST)",
      duration: "2.5시간",
      level: "고급",
      maxParticipants: 40,
      currentParticipants: 28,
      speaker: "이준호 수석",
      speakerTitle: "데이터 아키텍트",
      topics: [
        "엔터프라이즈 데이터 아키텍처",
        "Graph API 통합 전략",
        "실시간 데이터 파이프라인",
        "데이터 품질 관리"
      ],
      category: "데이터 통합"
    },
    {
      id: 4,
      title: "클라우드 네이티브 아키텍처 설계",
      description: "Azure 클라우드 환경에서 확장 가능하고 안정적인 시스템을 구축하는 방법을 학습합니다. 마이크로서비스, 컨테이너, 서버리스 아키텍처를 다룹니다.",
      date: "2024년 3월 15일",
      time: "13:00 - 16:00 (KST)",
      duration: "3시간",
      level: "고급",
      maxParticipants: 35,
      currentParticipants: 18,
      speaker: "최영준 부장",
      speakerTitle: "클라우드 솔루션 아키텍트",
      topics: [
        "클라우드 네이티브 설계 원칙",
        "Azure 서비스 활용 전략",
        "마이크로서비스 아키텍처",
        "DevOps 및 CI/CD 파이프라인"
      ],
      category: "클라우드"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "초급": return "bg-green-100 text-green-700";
      case "중급": return "bg-yellow-100 text-yellow-700";
      case "고급": return "bg-red-100 text-red-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getProgressPercentage = (current: number, max: number) => {
    return Math.round((current / max) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb 
              items={[
                { label: '홈', href: '/' },
                { label: '리소스', href: '/resources' },
                { label: '웨비나 & 이벤트', href: '/resources/webinars' },
                { label: '예정된 웨비나', href: '/resources/webinars/upcoming-webinars' }
              ]} 
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <i className="ri-calendar-event-line mr-2"></i>
                예정된 웨비나
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                전문가와 함께하는
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  실시간 학습 세션
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                AI, DX, 데이터 통합 분야의 최신 트렌드와 실무 노하우를 전문가로부터 직접 학습하세요.
                실시간 Q&A와 실습을 통해 깊이 있는 지식을 얻을 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#webinars"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <i className="ri-calendar-check-line mr-2"></i>
                  웨비나 일정 보기
                </a>
                <a
                  href="/resources/webinars/past-events"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                >
                  <i className="ri-video-line mr-2"></i>
                  지난 웨비나 보기
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
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <div className="text-gray-600">예정된 웨비나</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">205</div>
                <div className="text-gray-600">총 참가 신청</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">9.5시간</div>
                <div className="text-gray-600">총 학습 시간</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">98%</div>
                <div className="text-gray-600">참가자 만족도</div>
              </div>
            </div>
          </div>
        </section>

        {/* Webinars List */}
        <section id="webinars" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {upcomingWebinars.map((webinar) => (
                <div key={webinar.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Webinar Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getLevelColor(webinar.level)}`}>
                            {webinar.level}
                          </span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                            {webinar.category}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">{webinar.date}</div>
                          <div className="text-sm font-medium text-gray-700">{webinar.time}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {webinar.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6">
                        {webinar.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">주요 내용</h4>
                          <ul className="space-y-2">
                            {webinar.topics.map((topic, index) => (
                              <li key={index} className="flex items-start">
                                <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                                <span className="text-sm text-gray-600">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">강연자</h4>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mr-3">
                              <i className="ri-user-line text-blue-600 text-xl"></i>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{webinar.speaker}</div>
                              <div className="text-sm text-gray-600">{webinar.speakerTitle}</div>
                            </div>
                          </div>
                          
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <i className="ri-time-line mr-2"></i>
                              {webinar.duration}
                            </div>
                            <div className="flex items-center">
                              <i className="ri-group-line mr-2"></i>
                              최대 {webinar.maxParticipants}명
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Registration Panel */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                      <div className="text-center mb-6">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {webinar.currentParticipants}/{webinar.maxParticipants}
                        </div>
                        <div className="text-sm text-gray-600 mb-4">참가 신청</div>
                        
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getProgressPercentage(webinar.currentParticipants, webinar.maxParticipants)}%` }}
                          ></div>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          {getProgressPercentage(webinar.currentParticipants, webinar.maxParticipants)}% 신청 완료
                        </div>
                      </div>
                      
                      {registeredWebinars.includes(webinar.id) ? (
                        <div className="text-center">
                          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-700 font-semibold rounded-xl mb-4">
                            <i className="ri-check-line mr-2"></i>
                            신청 완료
                          </div>
                          <p className="text-sm text-gray-600">
                            웨비나 링크가 이메일로 발송됩니다.
                          </p>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleRegister(webinar.id)}
                          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mb-4"
                        >
                          <i className="ri-calendar-check-line mr-2"></i>
                          무료 참가 신청
                        </button>
                      )}
                      
                      <div className="text-xs text-gray-500 text-center">
                        * 참가비 무료 * 실시간 Q&A 제공
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              맞춤형 기업 교육을 원하시나요?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              귀하의 조직에 특화된 전문 교육과 워크샵을 제공합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact/enterprise/consulting"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
              >
                <i className="ri-presentation-line mr-2"></i>
                기업 교육 문의
              </a>
              <a
                href="/resources/webinars/past-events"
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all duration-300 border-2 border-blue-500"
              >
                <i className="ri-video-line mr-2"></i>
                지난 웨비나 보기
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UpcomingWebinarsPage;
