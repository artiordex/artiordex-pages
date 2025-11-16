import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const CoDevelopmentPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '파트너십', href: '/contact' },
    { label: '솔루션 공동 개발 문의', href: '/contact/partners/co-development' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companyType: '',
    developmentArea: '',
    technicalCapability: '',
    teamSize: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdoag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          companyType: '',
          developmentArea: '',
          technicalCapability: '',
          teamSize: '',
          budget: '',
          timeline: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <i className="ri-code-s-slash-line text-3xl text-purple-600"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                솔루션 공동 개발 문의
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                혁신적인 아이디어와 기술력을 결합하여 시장을 선도하는 솔루션을 함께 만들어갑니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Co-Development Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">공동 개발의 장점</h2>
              <p className="text-lg text-gray-600">Artiordex와 함께하는 공동 개발 파트너십</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-lightbulb-flash-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">기술 시너지</h3>
                <p className="text-gray-600">
                  AI, 자동화, 데이터 통합 분야의 전문성과 귀사의 도메인 지식을 결합하여 혁신적인 솔루션을 개발합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-funds-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">비용 분담</h3>
                <p className="text-gray-600">
                  개발 비용과 리스크를 공유하여 더 큰 규모의 프로젝트를 추진할 수 있습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">빠른 출시</h3>
                <p className="text-gray-600">
                  검증된 개발 프로세스와 인프라를 활용하여 시장 출시 시간을 단축합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-global-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">시장 확대</h3>
                <p className="text-gray-600">
                  양사의 고객 네트워크를 활용하여 더 넓은 시장에 솔루션을 제공할 수 있습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">지적재산권 보호</h3>
                <p className="text-gray-600">
                  명확한 계약을 통해 양사의 지적재산권을 보호하고 공정한 수익 배분을 보장합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-customer-service-2-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">지속적인 지원</h3>
                <p className="text-gray-600">
                  개발 완료 후에도 유지보수, 업데이트, 기술 지원을 함께 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Areas Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">공동 개발 분야</h2>
              <p className="text-lg text-gray-600">다양한 기술 영역에서 협력 가능합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-robot-line text-purple-600 mr-3 text-2xl"></i>
                  AI & 머신러닝
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>산업별 특화 AI 모델 개발</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>자연어 처리 (NLP) 솔루션</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>컴퓨터 비전 애플리케이션</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>예측 분석 시스템</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-flow-chart text-purple-600 mr-3 text-2xl"></i>
                  프로세스 자동화
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>RPA + AI 하이브리드 자동화</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>지능형 문서 처리 (IDP)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>워크플로우 자동화 플랫폼</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>비즈니스 프로세스 최적화</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-database-2-line text-purple-600 mr-3 text-2xl"></i>
                  데이터 플랫폼
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>통합 데이터 플랫폼 구축</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>실시간 데이터 파이프라인</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>데이터 레이크 & 웨어하우스</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>BI & 분석 대시보드</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-apps-2-line text-purple-600 mr-3 text-2xl"></i>
                  엔터프라이즈 솔루션
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>산업별 특화 SaaS 플랫폼</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>ERP/CRM 확장 모듈</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>협업 플랫폼 개발</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-1"></i>
                    <span>모바일 엔터프라이즈 앱</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">공동 개발 프로세스</h2>
              <p className="text-lg text-gray-600">체계적인 협업 프로세스로 성공적인 결과를 보장합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">아이디어 검증</h3>
                <p className="text-sm text-gray-600">
                  시장 조사, 기술 타당성 검토, 비즈니스 모델 수립
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">계약 체결</h3>
                <p className="text-sm text-gray-600">
                  역할 분담, 지적재산권, 수익 배분 등 협의
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">공동 개발</h3>
                <p className="text-sm text-gray-600">
                  애자일 방식의 협업 개발, 정기 리뷰 미팅
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">출시 & 운영</h3>
                <p className="text-sm text-gray-600">
                  시장 출시, 공동 마케팅, 지속적인 개선
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">공동 개발 제안하기</h2>
              <p className="text-lg text-gray-600">
                혁신적인 아이디어를 함께 실현해보세요
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg" data-readdy-form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                    회사명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                      담당자명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="담당자명"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="010-0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="companyType" className="block text-sm font-medium text-gray-700 mb-2">
                    회사 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="companyType"
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Startup">스타트업</option>
                    <option value="SME">중소기업</option>
                    <option value="Enterprise">대기업</option>
                    <option value="SI">SI 업체</option>
                    <option value="ISV">ISV</option>
                    <option value="Research">연구기관</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="developmentArea" className="block text-sm font-medium text-gray-700 mb-2">
                    개발 분야 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="developmentArea"
                    name="developmentArea"
                    value={formData.developmentArea}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="AI/ML">AI & 머신러닝</option>
                    <option value="Automation">프로세스 자동화</option>
                    <option value="Data Platform">데이터 플랫폼</option>
                    <option value="Enterprise Solution">엔터프라이즈 솔루션</option>
                    <option value="Integration">시스템 통합</option>
                    <option value="Other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="technicalCapability" className="block text-sm font-medium text-gray-700 mb-2">
                    보유 기술 역량
                  </label>
                  <input
                    type="text"
                    id="technicalCapability"
                    name="technicalCapability"
                    value={formData.technicalCapability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    placeholder="예: Python, React, Azure, 제조업 도메인 지식 등"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-2">
                      개발 팀 규모
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    >
                      <option value="">선택해주세요</option>
                      <option value="1-5">1-5명</option>
                      <option value="6-10">6-10명</option>
                      <option value="11-20">11-20명</option>
                      <option value="20+">20명 이상</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예상 개발 예산
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    >
                      <option value="">선택해주세요</option>
                      <option value="Under 50M">5천만원 미만</option>
                      <option value="50M-100M">5천만원 ~ 1억원</option>
                      <option value="100M-300M">1억원 ~ 3억원</option>
                      <option value="300M-500M">3억원 ~ 5억원</option>
                      <option value="Over 500M">5억원 이상</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    예상 개발 기간
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="3 Months">3개월</option>
                    <option value="6 Months">6개월</option>
                    <option value="1 Year">1년</option>
                    <option value="1+ Years">1년 이상</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    개발 제안 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    placeholder="개발하고자 하는 솔루션의 목적, 주요 기능, 타겟 시장, 기대 효과 등을 자유롭게 작성해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '공동 개발 제안하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 제안이 성공적으로 제출되었습니다. 검토 후 연락드리겠습니다.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm">✗ 제출 중 오류가 발생했습니다. 다시 시도해주세요.</p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default CoDevelopmentPage;
