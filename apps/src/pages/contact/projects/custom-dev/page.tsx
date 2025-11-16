import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const CustomDevPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    projectType: '',
    platform: '',
    complexity: '',
    timeline: '',
    budget: '',
    currentSystems: '',
    requirements: '',
    userCount: '',
    features: '',
    integrationNeeds: '',
    designRequirements: '',
    maintenanceNeeds: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '맞춤형 개발 문의', href: '/contact/projects/custom-dev' }
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

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikn60', {
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
          platform: '',
          complexity: '',
          timeline: '',
          budget: '',
          currentSystems: '',
          requirements: '',
          userCount: '',
          features: '',
          integrationNeeds: '',
          designRequirements: '',
          maintenanceNeeds: ''
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
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-code-line mr-2"></i>
                맞춤형 개발
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                맞춤형 개발 문의
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                비즈니스 요구사항에 완벽히 맞춘 커스텀 솔루션을 개발해드립니다
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
                  <p className="text-green-800">맞춤형 개발 문의가 성공적으로 전송되었습니다. 영업일 기준 1-2일 내에 연락드리겠습니다.</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
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
                      개발 유형 *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="web-application">웹 애플리케이션</option>
                      <option value="mobile-app">모바일 앱</option>
                      <option value="desktop-application">데스크톱 애플리케이션</option>
                      <option value="api-development">API 개발</option>
                      <option value="system-integration">시스템 통합</option>
                      <option value="database-solution">데이터베이스 솔루션</option>
                      <option value="erp-crm">ERP/CRM 시스템</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="platform" className="block text-sm font-medium text-gray-700 mb-2">
                      플랫폼/기술 스택 *
                    </label>
                    <select
                      id="platform"
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="dotnet">.NET Framework/Core</option>
                      <option value="react-node">React + Node.js</option>
                      <option value="angular">Angular</option>
                      <option value="vue">Vue.js</option>
                      <option value="python">Python (Django/Flask)</option>
                      <option value="java">Java (Spring)</option>
                      <option value="php">PHP (Laravel)</option>
                      <option value="mobile-native">모바일 네이티브</option>
                      <option value="flutter">Flutter</option>
                      <option value="react-native">React Native</option>
                      <option value="no-preference">기술 스택 추천 필요</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="complexity" className="block text-sm font-medium text-gray-700 mb-2">
                      프로젝트 복잡도 *
                    </label>
                    <select
                      id="complexity"
                      name="complexity"
                      value={formData.complexity}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="simple">단순 (기본 CRUD)</option>
                      <option value="medium">중간 (워크플로우, 권한 관리)</option>
                      <option value="complex">복잡 (다중 시스템 연동)</option>
                      <option value="enterprise">엔터프라이즈 (대규모, 고가용성)</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8"
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
                    <label htmlFor="userCount" className="block text-sm font-medium text-gray-700 mb-2">
                      예상 사용자 수
                    </label>
                    <select
                      id="userCount"
                      name="userCount"
                      value={formData.userCount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-50">50명 미만</option>
                      <option value="50-200">50-200명</option>
                      <option value="200-1000">200-1,000명</option>
                      <option value="1000-5000">1,000-5,000명</option>
                      <option value="over-5000">5,000명 이상</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm pr-8"
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

              {/* 요구사항 상세 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">요구사항 상세</h3>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="기존 시스템, 데이터베이스, 사용 중인 도구 등을 입력해주세요"
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
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="개발하고자 하는 시스템의 목적, 주요 기능, 해결하고자 하는 문제 등을 상세히 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.requirements.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-2">
                      필수 기능 및 특징
                    </label>
                    <textarea
                      id="features"
                      name="features"
                      value={formData.features}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="사용자 관리, 권한 시스템, 보고서 기능, 알림 시스템, 모바일 지원 등 필요한 기능을 나열해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.features.length}/500자</p>
                  </div>
                </div>
              </div>

              {/* 기술적 요구사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">기술적 요구사항</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="integrationNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                      시스템 연동 요구사항
                    </label>
                    <textarea
                      id="integrationNeeds"
                      name="integrationNeeds"
                      value={formData.integrationNeeds}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="ERP, CRM, 회계시스템, 외부 API 등 연동이 필요한 시스템을 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.integrationNeeds.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="designRequirements" className="block text-sm font-medium text-gray-700 mb-2">
                      디자인 및 UI/UX 요구사항
                    </label>
                    <textarea
                      id="designRequirements"
                      name="designRequirements"
                      value={formData.designRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="브랜드 가이드라인, 색상, 레이아웃 선호도, 접근성 요구사항 등을 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.designRequirements.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="maintenanceNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                      유지보수 및 지원 요구사항
                    </label>
                    <textarea
                      id="maintenanceNeeds"
                      name="maintenanceNeeds"
                      value={formData.maintenanceNeeds}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                      placeholder="운영 지원, 버그 수정, 기능 추가, 교육 등 필요한 지원 사항을 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.maintenanceNeeds.length}/500자</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      개발 문의 전송
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">개발 전문가와 상담하세요</h2>
              <p className="text-lg text-gray-600">풍부한 경험의 개발팀이 최적의 솔루션을 제안해드립니다</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전화 상담</h3>
                <p className="text-gray-600 mb-2">02-1234-5678</p>
                <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">이메일 문의</h3>
                <p className="text-gray-600 mb-2">dev@artiordex.com</p>
                <p className="text-sm text-gray-500">24시간 접수 가능</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">기술 미팅</h3>
                <p className="text-gray-600 mb-2">기술 검토 회의</p>
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

export default CustomDevPage;