import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const ProposalPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    industry: '',
    companySize: '',
    website: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    partnershipType: '',
    businessModel: '',
    proposalDescription: '',
    targetMarket: '',
    expectedBenefits: '',
    resources: '',
    timeline: '',
    previousPartnerships: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '제휴 제안', href: '/contact/partners/proposal' }
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

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikn00', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          company: '',
          industry: '',
          companySize: '',
          website: '',
          name: '',
          position: '',
          email: '',
          phone: '',
          partnershipType: '',
          businessModel: '',
          proposalDescription: '',
          targetMarket: '',
          expectedBenefits: '',
          resources: '',
          timeline: '',
          previousPartnerships: '',
          additionalInfo: ''
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
        <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-handshake-line mr-2"></i>
                제휴 제안
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                제휴 제안
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                상호 성장을 위한 전략적 파트너십을 함께 만들어가세요
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
                  <p className="text-green-800">제휴 제안이 성공적으로 전송되었습니다. 검토 후 영업일 기준 3-5일 내에 연락드리겠습니다.</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="it-software">IT/소프트웨어</option>
                      <option value="consulting">컨설팅</option>
                      <option value="system-integration">시스템 통합</option>
                      <option value="manufacturing">제조업</option>
                      <option value="finance">금융업</option>
                      <option value="healthcare">헬스케어</option>
                      <option value="education">교육</option>
                      <option value="retail">리테일/유통</option>
                      <option value="logistics">물류/운송</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                      회사 규모 *
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="startup">스타트업 (10명 미만)</option>
                      <option value="small">소기업 (10-50명)</option>
                      <option value="medium">중기업 (50-300명)</option>
                      <option value="large">대기업 (300명 이상)</option>
                      <option value="enterprise">글로벌 기업</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      웹사이트
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="https://www.company.com"
                    />
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              {/* 제휴 제안 내용 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">제휴 제안 내용</h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                        제휴 유형 *
                      </label>
                      <select
                        id="partnershipType"
                        name="partnershipType"
                        value={formData.partnershipType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="reseller">리셀러 파트너십</option>
                        <option value="technology">기술 파트너십</option>
                        <option value="solution">솔루션 파트너십</option>
                        <option value="channel">채널 파트너십</option>
                        <option value="strategic">전략적 제휴</option>
                        <option value="joint-venture">합작 투자</option>
                        <option value="oem">OEM 파트너십</option>
                        <option value="other">기타</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="businessModel" className="block text-sm font-medium text-gray-700 mb-2">
                        비즈니스 모델 *
                      </label>
                      <select
                        id="businessModel"
                        name="businessModel"
                        value={formData.businessModel}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="revenue-sharing">수익 분배</option>
                        <option value="commission">커미션 기반</option>
                        <option value="licensing">라이선싱</option>
                        <option value="joint-development">공동 개발</option>
                        <option value="cross-selling">교차 판매</option>
                        <option value="white-label">화이트 라벨</option>
                        <option value="discuss">협의 필요</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="proposalDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      제휴 제안 상세 설명 *
                    </label>
                    <textarea
                      id="proposalDescription"
                      name="proposalDescription"
                      value={formData.proposalDescription}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="제휴를 통해 달성하고자 하는 목표, 협력 방안, 상호 이익 등을 구체적으로 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.proposalDescription.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="targetMarket" className="block text-sm font-medium text-gray-700 mb-2">
                      타겟 시장 및 고객층
                    </label>
                    <textarea
                      id="targetMarket"
                      name="targetMarket"
                      value={formData.targetMarket}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="공동으로 타겟하고자 하는 시장이나 고객층을 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.targetMarket.length}/500자</p>
                  </div>
                </div>
              </div>

              {/* 기대 효과 및 리소스 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">기대 효과 및 리소스</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="expectedBenefits" className="block text-sm font-medium text-gray-700 mb-2">
                      기대 효과 및 상호 이익 *
                    </label>
                    <textarea
                      id="expectedBenefits"
                      name="expectedBenefits"
                      value={formData.expectedBenefits}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="제휴를 통해 양사가 얻을 수 있는 구체적인 이익과 시너지 효과를 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.expectedBenefits.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="resources" className="block text-sm font-medium text-gray-700 mb-2">
                      보유 리소스 및 역량
                    </label>
                    <textarea
                      id="resources"
                      name="resources"
                      value={formData.resources}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                      placeholder="기술력, 영업망, 고객 기반, 인력 등 제휴에 활용할 수 있는 리소스를 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.resources.length}/500자</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        희망 추진 일정
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="immediate">즉시 시작</option>
                        <option value="1-month">1개월 내</option>
                        <option value="3-months">3개월 내</option>
                        <option value="6-months">6개월 내</option>
                        <option value="flexible">유연하게 조정</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="previousPartnerships" className="block text-sm font-medium text-gray-700 mb-2">
                        기존 파트너십 경험
                      </label>
                      <select
                        id="previousPartnerships"
                        name="previousPartnerships"
                        value={formData.previousPartnerships}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="extensive">다수 경험</option>
                        <option value="some">일부 경험</option>
                        <option value="limited">제한적 경험</option>
                        <option value="none">경험 없음</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* 추가 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">추가 정보</h3>
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    기타 참고사항
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                    placeholder="제휴 검토에 도움이 될 추가 정보나 특별한 요구사항이 있다면 입력해주세요"
                  />
                  <p className="text-xs text-gray-500 mt-1">{formData.additionalInfo.length}/500자</p>
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
                      제휴 제안 전송
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너십 담당자와 직접 상담하세요</h2>
              <p className="text-lg text-gray-600">전략적 제휴를 통한 상생 방안을 함께 모색해보겠습니다</p>
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
                <p className="text-gray-600 mb-2">partnership@artiordex.com</p>
                <p className="text-sm text-gray-500">24시간 접수 가능</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-presentation-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">제휴 미팅</h3>
                <p className="text-gray-600 mb-2">대면/화상 미팅</p>
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

export default ProposalPage;