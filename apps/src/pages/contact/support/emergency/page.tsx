import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const EmergencyPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    systemName: '',
    incidentType: '',
    severity: '',
    startTime: '',
    description: '',
    errorDetails: '',
    affectedSystems: '',
    userImpact: '',
    businessImpact: '',
    temporaryWorkaround: '',
    contactPreference: '',
    escalationContact: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '긴급 장애 대응 요청', href: '/contact/support/emergency' }
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

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikn3g', {
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
          incidentType: '',
          severity: '',
          startTime: '',
          description: '',
          errorDetails: '',
          affectedSystems: '',
          userImpact: '',
          businessImpact: '',
          temporaryWorkaround: '',
          contactPreference: '',
          escalationContact: ''
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
        <section className="bg-gradient-to-br from-red-50 to-orange-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-alarm-warning-line mr-2"></i>
                긴급 장애 대응
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                긴급 장애 대응 요청
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                시스템 장애 발생 시 신속한 대응으로 비즈니스 연속성을 보장합니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />

        {/* Emergency Notice */}
        <section className="py-8 bg-red-50 border-l-4 border-red-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start">
              <i className="ri-error-warning-line text-red-600 text-2xl mr-4 mt-1"></i>
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">긴급 상황 안내</h3>
                <div className="text-red-700 space-y-2">
                  <p>• <strong>심각한 장애</strong>의 경우 전화로 즉시 연락: <strong>02-1234-9999</strong></p>
                  <p>• 시스템 완전 중단, 보안 침해, 데이터 손실 위험 시 우선 전화 연락</p>
                  <p>• 이 양식은 상세 정보 전달 및 추적을 위한 보조 수단입니다</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-check-circle-line text-green-600 text-xl mr-3"></i>
                  <p className="text-green-800">긴급 장애 대응 요청이 접수되었습니다. 즉시 대응팀에 전달되어 처리됩니다.</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <i className="ri-error-warning-line text-red-600 text-xl mr-3"></i>
                  <p className="text-red-800">전송 중 오류가 발생했습니다. 긴급한 경우 전화로 연락해주세요: 02-1234-9999</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="회사명을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      신고자명 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="신고자명을 입력해주세요"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="직책을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      긴급 연락처 *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="즉시 연락 가능한 번호"
                    />
                  </div>
                  <div className="md:col-span-2">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              {/* 장애 정보 */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">장애 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="systemName" className="block text-sm font-medium text-gray-700 mb-2">
                      장애 시스템명 *
                    </label>
                    <input
                      type="text"
                      id="systemName"
                      name="systemName"
                      value={formData.systemName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="장애가 발생한 시스템명"
                    />
                  </div>
                  <div>
                    <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700 mb-2">
                      장애 유형 *
                    </label>
                    <select
                      id="incidentType"
                      name="incidentType"
                      value={formData.incidentType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="system-down">시스템 완전 중단</option>
                      <option value="performance">심각한 성능 저하</option>
                      <option value="data-corruption">데이터 손상/손실</option>
                      <option value="security-breach">보안 침해</option>
                      <option value="network-failure">네트워크 장애</option>
                      <option value="database-issue">데이터베이스 문제</option>
                      <option value="integration-failure">연동 시스템 장애</option>
                      <option value="other">기타 긴급 상황</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="severity" className="block text-sm font-medium text-gray-700 mb-2">
                      심각도 *
                    </label>
                    <select
                      id="severity"
                      name="severity"
                      value={formData.severity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="critical">치명적 (전체 서비스 중단)</option>
                      <option value="major">주요 (핵심 기능 중단)</option>
                      <option value="moderate">보통 (일부 기능 제한)</option>
                      <option value="minor">경미 (성능 저하)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-2">
                      장애 발생 시간 *
                    </label>
                    <input
                      type="datetime-local"
                      id="startTime"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      장애 상황 설명 *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="장애 발생 경위, 현재 상황, 시도한 조치 등을 상세히 기술해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.description.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="errorDetails" className="block text-sm font-medium text-gray-700 mb-2">
                      오류 메시지 및 로그
                    </label>
                    <textarea
                      id="errorDetails"
                      name="errorDetails"
                      value={formData.errorDetails}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="시스템에서 표시된 오류 메시지나 로그 내용을 정확히 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.errorDetails.length}/500자</p>
                  </div>
                </div>
              </div>

              {/* 영향도 분석 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">영향도 분석</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="affectedSystems" className="block text-sm font-medium text-gray-700 mb-2">
                      영향받는 시스템/서비스
                    </label>
                    <textarea
                      id="affectedSystems"
                      name="affectedSystems"
                      value={formData.affectedSystems}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="장애로 인해 영향받는 다른 시스템이나 서비스를 나열해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.affectedSystems.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="userImpact" className="block text-sm font-medium text-gray-700 mb-2">
                      사용자 영향도 *
                    </label>
                    <select
                      id="userImpact"
                      name="userImpact"
                      value={formData.userImpact}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="all-users">전체 사용자</option>
                      <option value="most-users">대부분 사용자</option>
                      <option value="some-users">일부 사용자</option>
                      <option value="few-users">소수 사용자</option>
                      <option value="external-customers">외부 고객 포함</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="businessImpact" className="block text-sm font-medium text-gray-700 mb-2">
                      비즈니스 영향도 *
                    </label>
                    <textarea
                      id="businessImpact"
                      name="businessImpact"
                      value={formData.businessImpact}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="매출 손실, 고객 불만, 법적 리스크 등 비즈니스에 미치는 구체적 영향을 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.businessImpact.length}/500자</p>
                  </div>
                </div>
              </div>

              {/* 대응 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">대응 정보</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="temporaryWorkaround" className="block text-sm font-medium text-gray-700 mb-2">
                      임시 해결방안
                    </label>
                    <textarea
                      id="temporaryWorkaround"
                      name="temporaryWorkaround"
                      value={formData.temporaryWorkaround}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                      placeholder="현재 적용 중인 임시 해결방안이나 우회 방법이 있다면 설명해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.temporaryWorkaround.length}/500자</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contactPreference" className="block text-sm font-medium text-gray-700 mb-2">
                        선호 연락 방법 *
                      </label>
                      <select
                        id="contactPreference"
                        name="contactPreference"
                        value={formData.contactPreference}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="phone">전화 우선</option>
                        <option value="email">이메일 우선</option>
                        <option value="both">전화 + 이메일</option>
                        <option value="onsite">현장 방문 필요</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="escalationContact" className="block text-sm font-medium text-gray-700 mb-2">
                        에스컬레이션 담당자
                      </label>
                      <input
                        type="text"
                        id="escalationContact"
                        name="escalationContact"
                        value={formData.escalationContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                        placeholder="상급자 연락처 (필요시)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      긴급 전송 중...
                    </>
                  ) : (
                    <>
                      <i className="ri-alarm-warning-line mr-2"></i>
                      긴급 대응 요청
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">24시간 긴급 대응 센터</h2>
              <p className="text-lg text-gray-600">심각한 장애 발생 시 즉시 연락하세요</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-red-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">긴급 핫라인</h3>
                <p className="text-gray-600 mb-2 text-xl font-bold">02-1234-9999</p>
                <p className="text-sm text-gray-500">24시간 365일</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-message-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">긴급 SMS</h3>
                <p className="text-gray-600 mb-2">010-1234-5678</p>
                <p className="text-sm text-gray-500">즉시 응답</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-customer-service-2-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">원격 지원</h3>
                <p className="text-gray-600 mb-2">즉시 연결</p>
                <p className="text-sm text-gray-500">TeamViewer/AnyDesk</p>
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

export default EmergencyPage;