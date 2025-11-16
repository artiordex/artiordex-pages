import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import { Breadcrumb } from '../../../../components/feature/Breadcrumb';

const PowerPlatformPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    position: '',
    email: '',
    phone: '',
    platformType: '',
    projectScope: '',
    currentTools: '',
    businessProcess: '',
    userCount: '',
    timeline: '',
    budget: '',
    integrationNeeds: '',
    dataSource: '',
    requirements: '',
    complianceNeeds: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: 'Power Platform 구축 문의', href: '/contact/projects/power-platform' }
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

      const response = await fetch('https://readdy.ai/api/form/d4b7n6jbpm5d1fqikn30', {
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
          platformType: '',
          projectScope: '',
          currentTools: '',
          businessProcess: '',
          userCount: '',
          timeline: '',
          budget: '',
          integrationNeeds: '',
          dataSource: '',
          requirements: '',
          complianceNeeds: ''
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
        <section className="bg-gradient-to-br from-orange-50 to-red-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                <i className="ri-microsoft-line mr-2"></i>
                Power Platform 구축
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Power Platform 구축 문의
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Microsoft Power Platform으로 비즈니스 프로세스를 혁신하세요
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
                  <p className="text-green-800">Power Platform 구축 문의가 성공적으로 전송되었습니다. 영업일 기준 1-2일 내에 연락드리겠습니다.</p>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="연락처를 입력해주세요"
                    />
                  </div>
                </div>
              </div>

              {/* Power Platform 정보 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Power Platform 구축 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="platformType" className="block text-sm font-medium text-gray-700 mb-2">
                      구축하고자 하는 플랫폼 *
                    </label>
                    <select
                      id="platformType"
                      name="platformType"
                      value={formData.platformType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="power-apps">Power Apps (앱 개발)</option>
                      <option value="power-automate">Power Automate (워크플로우 자동화)</option>
                      <option value="power-bi">Power BI (비즈니스 인텔리전스)</option>
                      <option value="power-pages">Power Pages (웹사이트)</option>
                      <option value="power-virtual-agents">Power Virtual Agents (챗봇)</option>
                      <option value="integrated-solution">통합 솔루션</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700 mb-2">
                      프로젝트 범위 *
                    </label>
                    <select
                      id="projectScope"
                      name="projectScope"
                      value={formData.projectScope}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="single-app">단일 앱/프로세스</option>
                      <option value="department">부서 단위</option>
                      <option value="multi-department">다부서 연계</option>
                      <option value="enterprise">전사 단위</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-10">10명 미만</option>
                      <option value="10-50">10-50명</option>
                      <option value="50-100">50-100명</option>
                      <option value="100-500">100-500명</option>
                      <option value="over-500">500명 이상</option>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="1-month">1개월 이내</option>
                      <option value="3-months">3개월 이내</option>
                      <option value="6-months">6개월 이내</option>
                      <option value="flexible">유연하게 조정 가능</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 현재 환경 및 요구사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">현재 환경 및 요구사항</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="currentTools" className="block text-sm font-medium text-gray-700 mb-2">
                      현재 사용 중인 도구/시스템
                    </label>
                    <textarea
                      id="currentTools"
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="Excel, SharePoint, Dynamics 365, 기타 업무 도구 등을 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.currentTools.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="businessProcess" className="block text-sm font-medium text-gray-700 mb-2">
                      자동화하고자 하는 업무 프로세스 *
                    </label>
                    <textarea
                      id="businessProcess"
                      name="businessProcess"
                      value={formData.businessProcess}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="승인 프로세스, 데이터 입력, 보고서 생성, 고객 관리 등 자동화하고 싶은 업무를 상세히 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.businessProcess.length}/500자</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="integrationNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                        연동 필요 시스템
                      </label>
                      <select
                        id="integrationNeeds"
                        name="integrationNeeds"
                        value={formData.integrationNeeds}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="office365">Office 365</option>
                        <option value="dynamics365">Dynamics 365</option>
                        <option value="sharepoint">SharePoint</option>
                        <option value="sql-server">SQL Server</option>
                        <option value="azure">Azure Services</option>
                        <option value="third-party">타사 시스템</option>
                        <option value="multiple">다중 시스템</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="dataSource" className="block text-sm font-medium text-gray-700 mb-2">
                        주요 데이터 소스
                      </label>
                      <select
                        id="dataSource"
                        name="dataSource"
                        value={formData.dataSource}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                      >
                        <option value="">선택해주세요</option>
                        <option value="excel">Excel 파일</option>
                        <option value="sharepoint-lists">SharePoint 목록</option>
                        <option value="sql-database">SQL 데이터베이스</option>
                        <option value="web-apis">Web API</option>
                        <option value="cloud-services">클라우드 서비스</option>
                        <option value="mixed">혼합 소스</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* 추가 요구사항 */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">추가 요구사항</h3>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      예상 예산 범위
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm pr-8"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under-10m">1천만원 미만</option>
                      <option value="10m-30m">1천만원 - 3천만원</option>
                      <option value="30m-50m">3천만원 - 5천만원</option>
                      <option value="50m-100m">5천만원 - 1억원</option>
                      <option value="over-100m">1억원 이상</option>
                      <option value="discuss">협의 필요</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                      특별 요구사항 및 기대효과
                    </label>
                    <textarea
                      id="requirements"
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      rows={4}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="모바일 지원, 오프라인 기능, 특정 보안 요구사항, 기대하는 효과 등을 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.requirements.length}/500자</p>
                  </div>
                  <div>
                    <label htmlFor="complianceNeeds" className="block text-sm font-medium text-gray-700 mb-2">
                      규정 준수 요구사항
                    </label>
                    <textarea
                      id="complianceNeeds"
                      name="complianceNeeds"
                      value={formData.complianceNeeds}
                      onChange={handleInputChange}
                      rows={3}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm"
                      placeholder="개인정보보호, 금융규정, 의료법 등 준수해야 할 규정이 있다면 입력해주세요"
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.complianceNeeds.length}/500자</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      전송 중...
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line mr-2"></i>
                      구축 문의 전송
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Power Platform 전문가와 상담하세요</h2>
              <p className="text-lg text-gray-600">Microsoft 인증 전문가가 최적의 솔루션을 제안해드립니다</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-phone-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">전화 상담</h3>
                <p className="text-gray-600 mb-2">02-1234-5678</p>
                <p className="text-sm text-gray-500">평일 09:00 - 18:00</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-mail-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">이메일 문의</h3>
                <p className="text-gray-600 mb-2">powerplatform@artiordex.com</p>
                <p className="text-sm text-gray-500">24시간 접수 가능</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-presentation-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">데모 시연</h3>
                <p className="text-gray-600 mb-2">실시간 데모 세션</p>
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

export default PowerPlatformPage;