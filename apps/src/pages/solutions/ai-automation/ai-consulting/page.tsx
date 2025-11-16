import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const AIConsultingPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '솔루션', href: '/solutions' },
    { label: 'AI & 자동화', href: '/solutions/ai-automation' },
    { label: 'AI 도입 컨설팅', href: '/solutions/ai-automation/ai-consulting' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">AI 도입 컨설팅</h1>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              기업의 현재 상황을 분석하고 최적의 AI 도입 전략을 수립하여 
              성공적인 디지털 전환과 지속 가능한 AI 활용을 지원합니다.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                컨설팅 문의
              </Link>
              <a 
                href="tel:02-1234-5678" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                전화 상담
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 컨설팅 프로세스 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI 도입 컨설팅 프로세스</h2>
            <p className="text-lg text-gray-600">체계적이고 단계적인 AI 도입 방법론</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1단계",
                title: "현황 분석",
                description: "기업의 현재 IT 인프라, 업무 프로세스, 데이터 현황을 종합 분석",
                icon: "ri-search-line",
                color: "bg-blue-100 text-blue-600"
              },
              {
                step: "2단계", 
                title: "전략 수립",
                description: "AI 도입 목표 설정 및 단계별 로드맵 작성, ROI 분석",
                icon: "ri-lightbulb-line",
                color: "bg-green-100 text-green-600"
              },
              {
                step: "3단계",
                title: "파일럿 구축",
                description: "핵심 업무 영역에서 AI 솔루션 파일럿 프로젝트 실행",
                icon: "ri-rocket-line",
                color: "bg-orange-100 text-orange-600"
              },
              {
                step: "4단계",
                title: "확산 및 정착",
                description: "성공 사례를 바탕으로 전사 확산 및 지속적 개선",
                icon: "ri-trophy-line",
                color: "bg-purple-100 text-purple-600"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${process.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${process.icon} text-2xl`}></i>
                </div>
                <div className="text-sm font-medium text-gray-500 mb-2">{process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 컨설팅 영역 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">컨설팅 영역</h2>
            <p className="text-lg text-gray-600">포괄적인 AI 도입 지원 서비스</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "ri-bar-chart-line",
                title: "AI 성숙도 평가",
                description: "현재 AI 활용 수준 진단 및 개선 방향 제시"
              },
              {
                icon: "ri-road-map-line",
                title: "AI 전략 로드맵",
                description: "단계별 AI 도입 계획 및 우선순위 설정"
              },
              {
                icon: "ri-database-line",
                title: "데이터 전략 수립",
                description: "AI 활용을 위한 데이터 거버넌스 및 품질 관리 체계"
              },
              {
                icon: "ri-team-line",
                title: "조직 역량 강화",
                description: "AI 인재 육성 및 조직 문화 변화 관리"
              },
              {
                icon: "ri-shield-check-line",
                title: "AI 거버넌스",
                description: "AI 윤리, 보안, 규정 준수 체계 구축"
              },
              {
                icon: "ri-money-dollar-circle-line",
                title: "ROI 분석",
                description: "AI 투자 효과 측정 및 비즈니스 가치 평가"
              }
            ].map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className={`${area.icon} text-xl text-indigo-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 컨설팅 성과 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">컨설팅 성과</h2>
            <p className="text-lg text-gray-600">검증된 AI 도입 성공 사례</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "제조업 스마트팩토리 구축",
                company: "중견 제조기업",
                challenge: "생산 효율성 저하 및 품질 관리 어려움",
                solution: "AI 기반 예측 정비 및 품질 검사 시스템 도입",
                results: ["생산 효율 35% 향상", "불량률 80% 감소", "유지보수 비용 50% 절감"]
              },
              {
                title: "금융업 고객 서비스 혁신",
                company: "지역 금융기관",
                challenge: "고객 문의 처리 지연 및 상담 품질 편차",
                solution: "AI 챗봇 및 상담 지원 시스템 구축",
                results: ["응답 시간 90% 단축", "고객 만족도 40% 향상", "상담원 생산성 60% 증가"]
              },
              {
                title: "유통업 수요 예측 시스템",
                company: "대형 유통업체",
                challenge: "재고 관리 비효율 및 품절/과재고 문제",
                solution: "AI 기반 수요 예측 및 자동 발주 시스템",
                results: ["재고 비용 25% 절감", "품절률 70% 감소", "매출 15% 증가"]
              },
              {
                title: "공공기관 업무 자동화",
                company: "지방자치단체",
                challenge: "반복적인 민원 처리 업무 과부하",
                solution: "AI 기반 민원 분류 및 자동 처리 시스템",
                results: ["처리 시간 75% 단축", "민원인 만족도 85% 향상", "직원 업무 효율 3배 증가"]
              }
            ].map((case_study, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{case_study.title}</h3>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
                    {case_study.company}
                  </span>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">도전 과제</h4>
                    <p className="text-gray-600 text-sm">{case_study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">솔루션</h4>
                    <p className="text-gray-600 text-sm">{case_study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">성과</h4>
                    <ul className="space-y-1">
                      {case_study.results.map((result, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <i className="ri-arrow-right-line text-indigo-600 text-sm"></i>
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">AI 도입으로 비즈니스를 혁신하세요</h2>
          <p className="text-xl text-indigo-100 mb-8">
            전문가와 상담하고 맞춤형 AI 도입 전략을 수립해보세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              컨설팅 문의하기
            </Link>
            <a 
              href="tel:02-1234-5678" 
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              전화 상담 받기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsultingPage;