import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const DXConsultingPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    employeeCount: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    currentState: '',
    challenges: '',
    goals: '',
    timeline: '',
    budget: '',
    priority: '',
    stakeholders: '',
    expectations: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: 'DX 전환 컨설팅 문의', href: '/contact/projects/dx-consulting' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikn2g', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          company: '',
          industry: '',
          employeeCount: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          currentState: '',
          challenges: '',
          goals: '',
          timeline: '',
          budget: '',
          priority: '',
          stakeholders: '',
          expectations: ''
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
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-rocket-line mr-2"></i>
                DX 전환 컨설팅
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                DX 전환 컨설팅 문의
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                체계적인 디지털 전환 전략으로 비즈니스 혁신을 실현하세요
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                  <p className="text-green-800">컨설팅 문의가 성공적으로 전송되었습니다. 영업일 기준 1-2일 내에 연락드리겠습니다.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                  <p className="text-red-800">전송 중 오류가 발생했습니다. 다시 시도해주세요.</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8" data-readdy-form>
              {/* 회사 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">회사 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      업종 *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="manufacturing">제조업</option>
                      <option value="finance">금융업</option>
                      <option value="healthcare">헬스케어</option>
                      <option value="retail">리테일/유통</option>
                      <option value="logistics">물류/운송</option>
                      <option value="construction">건설업</option>
                      <option value="education">교육</option>
                      <option value="government">공공기관</option>
                      <option value="it-services">IT 서비스</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700 mb-2">
                      직원 수 *
                    </label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-50">50명 미만</option>
                      <option value="50-100">50-100명</option>
                      <option value="100-300">100-300명</option>
                      <option value="300-1000">300-1,000명</option>
                      <option value="over-1000">1,000명 이상</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 담당자 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">담당자 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      담당자명 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="담당자명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      직책 *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="직책을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              {/* DX 현황 및 목표 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">DX 현황 및 목표</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentState" className="block text-sm font-medium text-gray-700 mb-2">
                      현재 디지털화 수준 *
                    </label>
                    <select
                      id="currentState"
                      name="currentState"
                      value={formData.currentState}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="traditional">전통적 업무 방식 (수작업 중심)</option>
                      <option value="basic-digital">기본 디지털 도구 사용</option>
                      <option value="partial-automation">부분적 자동화 도입</option>
                      <option value="advanced-digital">고도화된 디지털 시스템</option>
                      <option value="ai-integrated">AI 기술 통합 운영</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                      현재 직면한 과제 *
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      value={formData.challenges}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="업무 효율성, 비용 절감, 고객 서비스 개선 등 해결하고 싶은 과제를 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.challenges.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                      DX 전환 목표 *
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="디지털 전환을 통해 달성하고자 하는 구체적인 목표를 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.goals.length}/500자</p>
                  </div>
                </div>
              </div>

              {/* 프로젝트 계획 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">프로젝트 계획</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      희망 추진 일정 *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="immediate">즉시 시작</option>
                      <option value="3-months">3개월 내 시작</option>
                      <option value="6-months">6개월 내 시작</option>
                      <option value="next-year">내년 계획</option>
                      <option value="long-term">장기 계획</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예상 투자 규모
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-100m">1억원 미만</option>
                      <option value="100m-500m">1억원 - 5억원</option>
                      <option value="500m-1b">5억원 - 10억원</option>
                      <option value="1b-5b">10억원 - 50억원</option>
                      <option value="over-5b">50억원 이상</option>
                      <option value="discuss">협의 필요</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      우선순위 영역 *
                    </label>
                    <select
                      id="priority"
                      name="priority"
                      value={formData.priority}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="operations">업무 프로세스 개선</option>
                      <option value="customer">고객 경험 향상</option>
                      <option value="data">데이터 활용 및 분석</option>
                      <option value="automation">업무 자동화</option>
                      <option value="collaboration">협업 도구 도입</option>
                      <option value="security">보안 강화</option>
                      <option value="infrastructure">IT 인프라 현대화</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="stakeholders" className="block text-sm font-medium text-gray-700 mb-2">
                      주요 이해관계자
                    </label>
                    <input
                      type="text"
                      id="stakeholders"
                      name="stakeholders"
                      value={formData.stakeholders}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="CEO, CTO, 부서장 등 주요 의사결정자"
                    />
                  </div>
                </div>
              </div>

              {/* 기대사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">컨설팅 기대사항</h3>
                <div>
                  <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-2">
                    컨설팅을 통해 얻고자 하는 것
                  </label>
                  <textarea
                    id="expectations"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="전략 수립, 로드맵 작성, 기술 선정, 조직 변화 관리 등 기대하는 컨설팅 내용을 입력해주세요"
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.expectations.length}/500자</p>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      컨설팅 문의 전송
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">DX 전환 전문가와 상담하세요</h2>
              <p className="text-lg text-gray-600">체계적인 디지털 전환 전략을 함께 수립해드립니다</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전화 상담</h3>
                <p className="text-gray-600 mb-2">02-1234-5678</p>
                <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">이메일 문의</h3>
                <p className="text-gray-600 mb-2">dx@artiordex.com</p>
                <p className="text-sm text-gray-500">24시간 접수 가능</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전략 워크샵</h3>
                <p className="text-gray-600 mb-2">현장 방문 컨설팅</p>
                <p className="text-sm text-gray-500">맞춤 일정 조정</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ChatBot />
      <QuickBar />
    </div>
  );
};

export default DXConsultingPage;