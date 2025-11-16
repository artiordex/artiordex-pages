import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const ConsultingPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    employeeCount: '',
    revenue: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    consultingType: '',
    currentChallenges: '',
    objectives: '',
    scope: '',
    timeline: '',
    budget: '',
    stakeholders: '',
    currentSystems: '',
    expectedOutcomes: '',
    decisionMakers: '',
    additionalRequirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '도입 컨설팅', href: '/contact/enterprise/consulting' }
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

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikn4g', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          company: '',
          industry: '',
          employeeCount: '',
          revenue: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          consultingType: '',
          currentChallenges: '',
          objectives: '',
          scope: '',
          timeline: '',
          budget: '',
          stakeholders: '',
          currentSystems: '',
          expectedOutcomes: '',
          decisionMakers: '',
          additionalRequirements: ''
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
        <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-lightbulb-line mr-2"></i>
                도입 컨설팅
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                도입 컨설팅
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                체계적인 분석과 전략 수립으로 성공적인 솔루션 도입을 지원합니다
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
                  <p className="text-green-800">도입 컨설팅 문의가 성공적으로 전송되었습니다. 전문 컨설턴트가 영업일 기준 2-3일 내에 연락드리겠습니다.</p>
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
              {/* 기업 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">기업 정보</h3>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
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
                      <option value="energy">에너지</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-100">100명 미만</option>
                      <option value="100-300">100-300명</option>
                      <option value="300-1000">300-1,000명</option>
                      <option value="1000-5000">1,000-5,000명</option>
                      <option value="over-5000">5,000명 이상</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                      연매출 규모
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      value={formData.revenue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-10b">100억원 미만</option>
                      <option value="10b-50b">100억원 - 500억원</option>
                      <option value="50b-100b">500억원 - 1,000억원</option>
                      <option value="100b-500b">1,000억원 - 5,000억원</option>
                      <option value="over-500b">5,000억원 이상</option>
                      <option value="confidential">비공개</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              {/* 컨설팅 요구사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">컨설팅 요구사항</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="consultingType" className="block text-sm font-medium text-gray-700 mb-2">
                      컨설팅 유형 *
                    </label>
                    <select
                      id="consultingType"
                      name="consultingType"
                      value={formData.consultingType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="dx-strategy">DX 전략 수립</option>
                      <option value="ai-implementation">AI 도입 전략</option>
                      <option value="system-integration">시스템 통합 전략</option>
                      <option value="process-optimization">프로세스 최적화</option>
                      <option value="technology-assessment">기술 현황 진단</option>
                      <option value="change-management">변화 관리</option>
                      <option value="comprehensive">종합 컨설팅</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                      현재 직면한 과제 *
                    </label>
                    <textarea
                      id="currentChallenges"
                      name="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="현재 조직이 직면한 주요 과제와 해결하고자 하는 문제점을 구체적으로 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.currentChallenges.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="objectives" className="block text-sm font-medium text-gray-700 mb-2">
                      컨설팅 목표 *
                    </label>
                    <textarea
                      id="objectives"
                      name="objectives"
                      value={formData.objectives}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="컨설팅을 통해 달성하고자 하는 구체적인 목표와 기대 성과를 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.objectives.length}/500자</p>
                  </div>
                </div>
              </div>

              {/* 프로젝트 범위 및 일정 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">프로젝트 범위 및 일정</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="scope" className="block text-sm font-medium text-gray-700 mb-2">
                      컨설팅 범위 *
                    </label>
                    <select
                      id="scope"
                      name="scope"
                      value={formData.scope}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="department">특정 부서</option>
                      <option value="division">사업부 단위</option>
                      <option value="company-wide">전사 단위</option>
                      <option value="group-wide">그룹 전체</option>
                      <option value="specific-process">특정 프로세스</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      희망 진행 기간 *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="1-month">1개월</option>
                      <option value="3-months">3개월</option>
                      <option value="6-months">6개월</option>
                      <option value="12-months">12개월</option>
                      <option value="long-term">장기 프로젝트</option>
                      <option value="flexible">유연하게 조정</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예상 예산 범위
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-50m">5천만원 미만</option>
                      <option value="50m-100m">5천만원 - 1억원</option>
                      <option value="100m-300m">1억원 - 3억원</option>
                      <option value="300m-500m">3억원 - 5억원</option>
                      <option value="over-500m">5억원 이상</option>
                      <option value="discuss">협의 필요</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="stakeholders" className="block text-sm font-medium text-gray-700 mb-2">
                      주요 이해관계자 수
                    </label>
                    <select
                      id="stakeholders"
                      name="stakeholders"
                      value={formData.stakeholders}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="few">소수 (5명 미만)</option>
                      <option value="moderate">보통 (5-15명)</option>
                      <option value="many">다수 (15-30명)</option>
                      <option value="extensive">광범위 (30명 이상)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 현황 및 기대사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">현황 및 기대사항</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentSystems" className="block text-sm font-medium text-gray-700 mb-2">
                      현재 시스템 및 프로세스 현황
                    </label>
                    <textarea
                      id="currentSystems"
                      name="currentSystems"
                      value={formData.currentSystems}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="현재 사용 중인 시스템, 업무 프로세스, 조직 구조 등의 현황을 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.currentSystems.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="expectedOutcomes" className="block text-sm font-medium text-gray-700 mb-2">
                      기대 성과 및 결과물 *
                    </label>
                    <textarea
                      id="expectedOutcomes"
                      name="expectedOutcomes"
                      value={formData.expectedOutcomes}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="컨설팅을 통해 얻고자 하는 구체적인 결과물과 성과 지표를 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.expectedOutcomes.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="decisionMakers" className="block text-sm font-medium text-gray-700 mb-2">
                      의사결정권자 정보
                    </label>
                    <textarea
                      id="decisionMakers"
                      name="decisionMakers"
                      value={formData.decisionMakers}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="프로젝트 승인 및 의사결정에 관여하는 주요 인물들의 직책과 관심사를 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.decisionMakers.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="additionalRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                      추가 요구사항
                    </label>
                    <textarea
                      id="additionalRequirements"
                      name="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                      placeholder="특별한 요구사항이나 고려사항이 있다면 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.additionalRequirements.length}/500자</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">전문 컨설턴트와 상담하세요</h2>
              <p className="text-lg text-gray-600">풍부한 경험의 컨설턴트가 최적의 솔루션을 제안해드립니다</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전화 상담</h3>
                <p className="text-gray-600 mb-2">02-1234-5678</p>
                <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">이메일 문의</h3>
                <p className="text-gray-600 mb-2">consulting@artiordex.com</p>
                <p className="text-sm text-gray-500">24시간 접수 가능</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-presentation-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전략 워크샵</h3>
                <p className="text-gray-600 mb-2">맞춤형 워크샵</p>
                <p className="text-sm text-gray-500">현장/화상 진행</p>
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

export default ConsultingPage;