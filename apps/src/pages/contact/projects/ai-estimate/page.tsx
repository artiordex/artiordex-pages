import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const AIEstimatePage = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    projectType: '',
    projectScale: '',
    timeline: '',
    budget: '',
    currentSystems: '',
    requirements: '',
    dataVolume: '',
    integrationNeeds: '',
    complianceRequirements: '',
    expectedOutcomes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: 'AI 프로젝트 견적 요청', href: '/contact/projects/ai-estimate' }
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

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikn5g', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          company: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          projectType: '',
          projectScale: '',
          timeline: '',
          budget: '',
          currentSystems: '',
          requirements: '',
          dataVolume: '',
          integrationNeeds: '',
          complianceRequirements: '',
          expectedOutcomes: ''
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
        <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-robot-line mr-2"></i>
                AI 프로젝트 견적
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                AI 프로젝트 견적 요청
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                귀하의 비즈니스에 최적화된 AI 솔루션을 위한 정확한 견적을 제공해드립니다
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
                  <p className="text-green-800">견적 요청이 성공적으로 전송되었습니다. 영업일 기준 1-2일 내에 연락드리겠습니다.</p>
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
              {/* 기본 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">기본 정보</h3>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="담당자명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                      직책
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  <div className="md:col-span-2">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              {/* 프로젝트 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">프로젝트 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      프로젝트 유형 *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="workflow-automation">워크플로우 자동화</option>
                      <option value="document-processing">문서 처리 자동화</option>
                      <option value="predictive-analytics">예측 분석</option>
                      <option value="chatbot-ai-agent">챗봇/AI 에이전트</option>
                      <option value="computer-vision">컴퓨터 비전</option>
                      <option value="nlp-text-analysis">자연어 처리/텍스트 분석</option>
                      <option value="recommendation-system">추천 시스템</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectScale" className="block text-sm font-medium text-gray-700 mb-2">
                      프로젝트 규모 *
                    </label>
                    <select
                      id="projectScale"
                      name="projectScale"
                      value={formData.projectScale}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="pilot">파일럿 프로젝트 (1-3개월)</option>
                      <option value="department">부서 단위 (3-6개월)</option>
                      <option value="enterprise">전사 단위 (6-12개월)</option>
                      <option value="multi-phase">다단계 프로젝트 (12개월+)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      희망 완료 시기 *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="1-month">1개월 이내</option>
                      <option value="3-months">3개월 이내</option>
                      <option value="6-months">6개월 이내</option>
                      <option value="12-months">12개월 이내</option>
                      <option value="flexible">유연하게 조정 가능</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
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
                </div>
              </div>

              {/* 기술 요구사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">기술 요구사항</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentSystems" className="block text-sm font-medium text-gray-700 mb-2">
                      현재 사용 중인 시스템
                    </label>
                    <textarea
                      id="currentSystems"
                      name="currentSystems"
                      value={formData.currentSystems}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="ERP, CRM, 데이터베이스 등 현재 사용 중인 시스템을 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.currentSystems.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                      상세 요구사항 *
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="해결하고자 하는 문제, 기대하는 기능, 특별한 요구사항 등을 상세히 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.requirements.length}/500자</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="dataVolume" className="block text-sm font-medium text-gray-700 mb-2">
                        처리할 데이터 규모
                      </label>
                      <select
                        id="dataVolume"
                        name="dataVolume"
                        value={formData.dataVolume}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="small">소규모 (GB 단위)</option>
                        <option value="medium">중간 규모 (TB 단위)</option>
                        <option value="large">대규모 (PB 단위)</option>
                        <option value="realtime">실시간 스트리밍</option>
                        <option value="unknown">정확히 모름</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="integrationNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                        시스템 연동 필요성
                      </label>
                      <select
                        id="integrationNeeds"
                        name="integrationNeeds"
                        value={formData.integrationNeeds}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="none">연동 불필요</option>
                        <option value="simple">단순 연동 (1-2개 시스템)</option>
                        <option value="complex">복합 연동 (3-5개 시스템)</option>
                        <option value="enterprise">전사 시스템 연동</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* 추가 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">추가 정보</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="complianceRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                      규정 준수 요구사항
                    </label>
                    <textarea
                      id="complianceRequirements"
                      name="complianceRequirements"
                      value={formData.complianceRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="개인정보보호법, 금융규정, 의료법 등 준수해야 할 규정이 있다면 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.complianceRequirements.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="expectedOutcomes" className="block text-sm font-medium text-gray-700 mb-2">
                      기대 성과 및 목표
                    </label>
                    <textarea
                      id="expectedOutcomes"
                      name="expectedOutcomes"
                      value={formData.expectedOutcomes}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="비용 절감, 효율성 향상, 정확도 개선 등 기대하는 성과를 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.expectedOutcomes.length}/500자</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      견적 요청 전송
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">빠른 상담이 필요하신가요?</h2>
              <p className="text-lg text-gray-600">전화나 이메일로 직접 문의해주세요</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전화 상담</h3>
                <p className="text-gray-600 mb-2">02-1234-5678</p>
                <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">이메일 문의</h3>
                <p className="text-gray-600 mb-2">ai@artiordex.com</p>
                <p className="text-sm text-gray-500">24시간 접수 가능</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-calendar-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">화상 미팅</h3>
                <p className="text-gray-600 mb-2">온라인 상담 예약</p>
                <p className="text-sm text-gray-500">맞춤 시간 조정</p>
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

export default AIEstimatePage;