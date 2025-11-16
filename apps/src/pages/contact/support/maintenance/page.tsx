import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const MaintenancePage = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    systemName: '',
    contractType: '',
    issueType: '',
    priority: '',
    description: '',
    errorMessage: '',
    affectedUsers: '',
    businessImpact: '',
    preferredTime: '',
    remoteAccess: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '유지보수 지원 문의', href: '/contact/support/maintenance' }
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

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikmvg', {
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
          systemName: '',
          contractType: '',
          issueType: '',
          priority: '',
          description: '',
          errorMessage: '',
          affectedUsers: '',
          businessImpact: '',
          preferredTime: '',
          remoteAccess: '',
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
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-tools-line mr-2"></i>
                유지보수 지원
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                유지보수 지원 문의
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                안정적인 시스템 운영을 위한 전문적인 유지보수 서비스를 제공합니다
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
                  <p className="text-green-800">유지보수 지원 요청이 성공적으로 전송되었습니다. 우선순위에 따라 신속히 대응해드리겠습니다.</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              {/* 시스템 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">시스템 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="systemName" className="block text-sm font-medium text-gray-700 mb-2">
                      시스템명 *
                    </label>
                    <input
                      type="text"
                      id="systemName"
                      name="systemName"
                      value={formData.systemName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="지원이 필요한 시스템명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="contractType" className="block text-sm font-medium text-gray-700 mb-2">
                      계약 유형 *
                    </label>
                    <select
                      id="contractType"
                      name="contractType"
                      value={formData.contractType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="maintenance-contract">유지보수 계약</option>
                      <option value="support-contract">기술지원 계약</option>
                      <option value="warranty">보증 기간</option>
                      <option value="one-time">일회성 지원</option>
                      <option value="consulting">컨설팅 계약</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 문제 상세 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">문제 상세</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-2">
                      문제 유형 *
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      value={formData.issueType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="bug-fix">버그 수정</option>
                      <option value="performance">성능 개선</option>
                      <option value="security">보안 이슈</option>
                      <option value="feature-request">기능 추가 요청</option>
                      <option value="system-error">시스템 오류</option>
                      <option value="data-issue">데이터 문제</option>
                      <option value="integration">연동 문제</option>
                      <option value="user-support">사용자 지원</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                      우선순위 *
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
                      <option value="critical">긴급 (시스템 중단)</option>
                      <option value="high">높음 (업무 영향 큼)</option>
                      <option value="medium">보통 (일부 기능 제한)</option>
                      <option value="low">낮음 (개선 사항)</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      문제 상세 설명 *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="발생한 문제를 구체적으로 설명해주세요 (언제, 어떤 상황에서, 어떤 문제가 발생했는지)"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="errorMessage" className="block text-sm font-medium text-gray-700 mb-2">
                      오류 메시지
                    </label>
                    <textarea
                      id="errorMessage"
                      name="errorMessage"
                      value={formData.errorMessage}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="시스템에서 표시된 오류 메시지가 있다면 정확히 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.errorMessage.length}/500자</p>
                  </div>
                </div>
              </div>

              {/* 영향도 및 지원 요청 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">영향도 및 지원 요청</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="affectedUsers" className="block text-sm font-medium text-gray-700 mb-2">
                      영향받는 사용자 수
                    </label>
                    <select
                      id="affectedUsers"
                      name="affectedUsers"
                      value={formData.affectedUsers}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="single">개별 사용자</option>
                      <option value="few">소수 사용자 (2-10명)</option>
                      <option value="department">부서 단위 (10-50명)</option>
                      <option value="company">전사 (50명 이상)</option>
                      <option value="external">외부 고객 포함</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      희망 지원 시간
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="business-hours">업무시간 (09:00-18:00)</option>
                      <option value="after-hours">업무시간 외</option>
                      <option value="weekend">주말</option>
                      <option value="anytime">언제든지</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="businessImpact" className="block text-sm font-medium text-gray-700 mb-2">
                      비즈니스 영향도
                    </label>
                    <textarea
                      id="businessImpact"
                      name="businessImpact"
                      value={formData.businessImpact}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="업무 중단, 매출 손실, 고객 불만 등 비즈니스에 미치는 영향을 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.businessImpact.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="remoteAccess" className="block text-sm font-medium text-gray-700 mb-2">
                      원격 접속 가능 여부
                    </label>
                    <select
                      id="remoteAccess"
                      name="remoteAccess"
                      value={formData.remoteAccess}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="available">원격 접속 가능</option>
                      <option value="restricted">제한적 접속 가능</option>
                      <option value="not-available">원격 접속 불가</option>
                      <option value="onsite-required">현장 방문 필요</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                      추가 정보
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      placeholder="기타 참고사항이나 특별한 요구사항이 있다면 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.additionalInfo.length}/500자</p>
                  </div>
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
                      지원 요청 전송
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">긴급 상황 시 즉시 연락하세요</h2>
              <p className="text-lg text-gray-600">24시간 긴급 지원 서비스를 제공합니다</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-red-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">긴급 지원</h3>
                <p className="text-gray-600 mb-2">02-1234-9999</p>
                <p className="text-sm text-gray-500">24시간 운영</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">기술 지원</h3>
                <p className="text-gray-600 mb-2">support@artiordex.com</p>
                <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">원격 지원</h3>
                <p className="text-gray-600 mb-2">TeamViewer 지원</p>
                <p className="text-sm text-gray-500">즉시 연결 가능</p>
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

export default MaintenancePage;