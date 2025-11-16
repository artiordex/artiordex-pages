import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../../components/feature/Breadcrumb';
import Header from '../../../components/feature/Header';

const WebinarsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingWebinars = [
    {
      id: 1,
      title: 'AI Agent 시스템 구축 실무 워크샵',
      description: 'LangChain과 OpenAI API를 활용한 실제 AI Agent 구축 과정을 단계별로 학습합니다. 실무진을 위한 핸즈온 세션으로 진행됩니다.',
      date: '2024-02-15',
      time: '14:00 - 17:00',
      duration: '3시간',
      format: '온라인 워크샵',
      speaker: '이준호 CTO',
      attendees: 45,
      maxAttendees: 50,
      tags: ['AI Agent', 'LangChain', '실무', '워크샵'],
      image: 'https://readdy.ai/api/search-image?query=AI%20Agent%20workshop%20with%20programming%20interface%20and%20technical%20diagrams%2C%20modern%20online%20learning%20environment%20with%20blue%20and%20white%20theme&width=400&height=240&seq=webinar1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Power Platform으로 시작하는 DX 전환 전략',
      description: 'Microsoft Power Platform을 활용한 기업 디지털 전환 전략과 실제 구축 사례를 공유합니다. 경영진과 IT 담당자를 위한 전략 세션입니다.',
      date: '2024-02-22',
      time: '10:00 - 12:00',
      duration: '2시간',
      format: '하이브리드',
      speaker: '박지영 전략이사',
      attendees: 28,
      maxAttendees: 100,
      tags: ['Power Platform', 'DX 전략', '경영진', '하이브리드'],
      image: 'https://readdy.ai/api/search-image?query=Power%20Platform%20digital%20transformation%20strategy%20presentation%20with%20business%20charts%20and%20Microsoft%20interface%20elements%2C%20professional%20corporate%20setting&width=400&height=240&seq=webinar2&orientation=landscape'
    },
    {
      id: 3,
      title: '데이터 통합 아키텍처 설계 마스터클래스',
      description: '복잡한 엔터프라이즈 환경에서의 데이터 통합 전략과 아키텍처 설계 방법론을 심도 있게 다룹니다. 아키텍트와 개발팀장을 위한 고급 과정입니다.',
      date: '2024-03-05',
      time: '13:00 - 16:00',
      duration: '3시간',
      format: '온라인',
      speaker: '김태현 수석 아키텍트',
      attendees: 12,
      maxAttendees: 30,
      tags: ['데이터 통합', '아키텍처', '고급', '마스터클래스'],
      image: 'https://readdy.ai/api/search-image?query=Data%20integration%20architecture%20masterclass%20with%20complex%20system%20diagrams%20and%20database%20connections%2C%20technical%20education%20environment&width=400&height=240&seq=webinar3&orientation=landscape'
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: '2024 AI 트렌드 전망과 기업 도입 전략',
      description: '2024년 AI 기술 트렌드와 기업 도입 시 고려사항을 종합적으로 분석한 연례 세미나입니다.',
      date: '2024-01-18',
      attendees: 156,
      rating: 4.8,
      materials: {
        video: true,
        slides: true,
        qa: true
      },
      tags: ['AI 트렌드', '전망', '도입 전략'],
      image: 'https://readdy.ai/api/search-image?query=AI%20trends%202024%20seminar%20with%20futuristic%20technology%20graphics%20and%20business%20audience%2C%20professional%20conference%20setting&width=400&height=240&seq=event1&orientation=landscape'
    },
    {
      id: 2,
      title: 'RPA + AI 통합 자동화 성공 사례 공유',
      description: '실제 고객사의 RPA와 AI 통합 자동화 프로젝트 성공 사례와 노하우를 공유했습니다.',
      date: '2024-01-10',
      attendees: 89,
      rating: 4.6,
      materials: {
        video: true,
        slides: true,
        qa: false
      },
      tags: ['RPA', 'AI 통합', '성공 사례'],
      image: 'https://readdy.ai/api/search-image?query=RPA%20AI%20integration%20success%20case%20study%20presentation%20with%20automation%20workflow%20diagrams%2C%20business%20process%20visualization&width=400&height=240&seq=event2&orientation=landscape'
    },
    {
      id: 3,
      title: 'Microsoft Partner Day: Power Platform 심화 교육',
      description: 'Microsoft와 공동으로 진행한 Power Platform 심화 교육 세션입니다.',
      date: '2023-12-15',
      attendees: 124,
      rating: 4.9,
      materials: {
        video: true,
        slides: true,
        qa: true
      },
      tags: ['Microsoft', 'Power Platform', '심화 교육'],
      image: 'https://readdy.ai/api/search-image?query=Microsoft%20Partner%20Day%20Power%20Platform%20advanced%20training%20with%20Microsoft%20branding%20and%20professional%20training%20environment&width=400&height=240&seq=event3&orientation=landscape'
    }
  ];

  const conferencePresentations = [
    {
      id: 1,
      title: 'AI 시대의 데이터 거버넌스 전략',
      conference: 'Korea AI Summit 2024',
      date: '2024-01-25',
      speaker: '최서연 데이터 사이언티스트',
      description: 'AI 시스템 운영 시 필수적인 데이터 거버넌스 전략과 실무 적용 방안을 발표했습니다.',
      materials: {
        slides: true,
        video: false
      },
      tags: ['데이터 거버넌스', 'AI', '컨퍼런스'],
      image: 'https://readdy.ai/api/search-image?query=AI%20data%20governance%20conference%20presentation%20with%20professional%20speaker%20and%20audience%2C%20modern%20conference%20hall%20setting&width=400&height=240&seq=conf1&orientation=landscape'
    },
    {
      id: 2,
      title: 'Enterprise DX 성공을 위한 조직 변화 관리',
      conference: 'Digital Transformation Korea 2023',
      date: '2023-11-20',
      speaker: '정민철 컨설팅 이사',
      description: '대기업 DX 프로젝트에서의 조직 변화 관리 경험과 성공 요인을 공유했습니다.',
      materials: {
        slides: true,
        video: true
      },
      tags: ['DX', '조직 변화', '컨설팅'],
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20conference%20presentation%20about%20organizational%20change%20management%2C%20business%20transformation%20theme&width=400&height=240&seq=conf2&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Breadcrumb 
            items={[
              { label: '홈', href: '/' },
              { label: '리소스', href: '/resources' },
              { label: '웨비나 & 이벤트', href: '/resources/webinars' }
            ]} 
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              웨비나 & 이벤트
            </h1>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              전문가와 함께하는 실시간 학습의 기회. AI, DX, 데이터 통합 분야의 최신 트렌드와 
              실무 노하우를 직접 배우고 네트워킹할 수 있는 교육 프로그램을 제공합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-emerald-500/30 text-emerald-100 text-sm rounded-full">실시간 교육</span>
              <span className="px-3 py-1 bg-emerald-500/30 text-emerald-100 text-sm rounded-full">전문가 세션</span>
              <span className="px-3 py-1 bg-emerald-500/30 text-emerald-100 text-sm rounded-full">네트워킹</span>
              <span className="px-3 py-1 bg-emerald-500/30 text-emerald-100 text-sm rounded-full">Q&A</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'upcoming', label: '예정된 웨비나', count: upcomingWebinars.length },
              { id: 'past', label: '지난 이벤트', count: pastEvents.length },
              { id: 'conference', label: '컨퍼런스 발표자료', count: conferencePresentations.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Upcoming Webinars */}
          {activeTab === 'upcoming' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">예정된 웨비나</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  전문가와 함께하는 실시간 학습 기회. 실무에 바로 적용할 수 있는 지식과 경험을 공유합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {upcomingWebinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded">
                          {webinar.format}
                        </span>
                        <span className="text-xs text-gray-500">{webinar.duration}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {webinar.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {webinar.description}
                      </p>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="ri-calendar-line w-4 h-4 flex items-center justify-center"></i>
                          <span>{webinar.date} {webinar.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="ri-user-line w-4 h-4 flex items-center justify-center"></i>
                          <span>{webinar.speaker}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <i className="ri-group-line w-4 h-4 flex items-center justify-center"></i>
                          <span>{webinar.attendees}/{webinar.maxAttendees}명 참여</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {webinar.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded hover:bg-emerald-700 transition-colors">
                          참가 신청
                        </button>
                        <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded hover:bg-gray-50 transition-colors">
                          <i className="ri-share-line"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">지난 이벤트</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  놓치신 세션도 다시 볼 수 있습니다. 발표 자료와 녹화 영상을 통해 언제든 학습하세요.
                </p>
              </div>

              <div className="space-y-6">
                {pastEvents.map((event) => (
                  <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 md:h-full object-cover object-top"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                            완료된 이벤트
                          </span>
                          <div className="flex items-center gap-1">
                            <i className="ri-star-fill text-yellow-400 text-sm"></i>
                            <span className="text-sm font-medium">{event.rating}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {event.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span>{event.date}</span>
                            <span>참여자 {event.attendees}명</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {event.materials.video && (
                              <button className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded hover:bg-red-200 transition-colors flex items-center gap-1">
                                <i className="ri-play-line"></i>
                                영상 보기
                              </button>
                            )}
                            {event.materials.slides && (
                              <button className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded hover:bg-blue-200 transition-colors flex items-center gap-1">
                                <i className="ri-file-ppt-line"></i>
                                자료 다운로드
                              </button>
                            )}
                            {event.materials.qa && (
                              <button className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded hover:bg-green-200 transition-colors flex items-center gap-1">
                                <i className="ri-question-answer-line"></i>
                                Q&A 보기
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conference Presentations */}
          {activeTab === 'conference' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">컨퍼런스 발표자료</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  국내외 주요 컨퍼런스에서 발표한 아티올덱스의 전문 지식과 경험을 공유합니다.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {conferencePresentations.map((presentation) => (
                  <div key={presentation.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={presentation.image}
                      alt={presentation.title}
                      className="w-full h-48 object-cover object-top"
                    />
                    
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded">
                          {presentation.conference}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {presentation.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {presentation.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {presentation.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <span>{presentation.speaker}</span>
                        <span>{presentation.date}</span>
                      </div>
                      
                      <div className="flex gap-2">
                        {presentation.materials.slides && (
                          <button className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                            <i className="ri-file-ppt-line"></i>
                            발표자료 다운로드
                          </button>
                        )}
                        {presentation.materials.video && (
                          <button className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition-colors flex items-center gap-2">
                            <i className="ri-play-line"></i>
                            영상
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            맞춤형 교육 프로그램을 원하시나요?
          </h2>
          <p className="text-emerald-100 mb-8">
            귀하의 팀을 위한 전용 교육 세션이나 워크샵을 기획해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact/enterprise/onboarding"
              className="px-6 py-3 bg-white text-emerald-600 font-medium rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              맞춤 교육 문의
            </Link>
            <button className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors whitespace-nowrap">
              웨비나 알림 신청
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsEventsPage;