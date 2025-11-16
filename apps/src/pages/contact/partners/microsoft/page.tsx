import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const MicrosoftPartnerPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '파트너십', href: '/contact' },
    { label: 'Microsoft 파트너 협업 문의', href: '/contact/partners/microsoft' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    partnerType: '',
    collaborationType: '',
    projectScope: '',
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

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdoa0', {
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
          partnerType: '',
          collaborationType: '',
          projectScope: '',
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
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6">
                <i className="ri-microsoft-fill text-4xl text-blue-600"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Microsoft 파트너 협업 문의
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Microsoft 공인 파트너로서 함께 성장할 파트너사를 찾습니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Partnership Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">파트너십 혜택</h2>
              <p className="text-lg text-gray-600">Artiordex와 함께하는 Microsoft 파트너의 장점</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-star-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Microsoft 인증 전문성</h3>
                <p className="text-gray-600">
                  Microsoft Solutions Partner 인증을 보유한 전문 팀과 협업하여 고품질 솔루션을 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-team-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">공동 영업 기회</h3>
                <p className="text-gray-600">
                  Microsoft 생태계 내에서 공동 영업 기회를 발굴하고 레퍼런스를 공유합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-lightbulb-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">기술 지원</h3>
                <p className="text-gray-600">
                  Power Platform, Azure, Microsoft 365 관련 기술 지원과 컨설팅을 제공합니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-graduation-cap-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">교육 프로그램</h3>
                <p className="text-gray-600">
                  정기적인 교육과 워크샵을 통해 최신 Microsoft 기술을 습득할 수 있습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-rocket-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">마케팅 지원</h3>
                <p className="text-gray-600">
                  공동 마케팅 캠페인과 이벤트를 통해 브랜드 인지도를 높일 수 있습니다.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">성장 기회</h3>
                <p className="text-gray-600">
                  다양한 산업군의 프로젝트 참여를 통해 비즈니스를 확장할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Areas Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">협업 분야</h2>
              <p className="text-lg text-gray-600">다양한 Microsoft 기술 영역에서 협력합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-apps-line text-blue-600 mr-3 text-2xl"></i>
                  Power Platform
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Power Apps 커스텀 앱 개발</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Power Automate 워크플로우 자동화</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Power BI 데이터 분석 및 시각화</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Power Virtual Agents 챗봇 구축</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-cloud-line text-blue-600 mr-3 text-2xl"></i>
                  Azure Cloud
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Azure 클라우드 마이그레이션</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Azure AI Services 통합</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Azure DevOps CI/CD 구축</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Azure 인프라 설계 및 운영</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-briefcase-line text-blue-600 mr-3 text-2xl"></i>
                  Microsoft 365
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>SharePoint 인트라넷 구축</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Teams 앱 개발 및 통합</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Microsoft Graph API 활용</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Microsoft 365 거버넌스</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-database-line text-blue-600 mr-3 text-2xl"></i>
                  Dynamics 365
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Dynamics 365 CRM 구축</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>Dynamics 365 ERP 통합</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>커스터마이징 및 확장</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-1"></i>
                    <span>데이터 마이그레이션</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">협업 문의하기</h2>
              <p className="text-lg text-gray-600">
                Microsoft 파트너로서 함께 성장할 기회를 만들어가겠습니다
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-2">
                    파트너 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="partnerType"
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Microsoft Partner">Microsoft 공인 파트너</option>
                    <option value="SI Partner">SI 파트너</option>
                    <option value="ISV">ISV (독립 소프트웨어 벤더)</option>
                    <option value="Reseller">리셀러</option>
                    <option value="Other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="collaborationType" className="block text-sm font-medium text-gray-700 mb-2">
                    협업 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="collaborationType"
                    name="collaborationType"
                    value={formData.collaborationType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Joint Sales">공동 영업</option>
                    <option value="Technical Collaboration">기술 협력</option>
                    <option value="Project Partnership">프로젝트 파트너십</option>
                    <option value="Reselling">리셀링</option>
                    <option value="Co-Development">공동 개발</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectScope" className="block text-sm font-medium text-gray-700 mb-2">
                    프로젝트 규모
                  </label>
                  <select
                    id="projectScope"
                    name="projectScope"
                    value={formData.projectScope}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Small">소규모 (1천만원 미만)</option>
                    <option value="Medium">중규모 (1천만원 ~ 1억원)</option>
                    <option value="Large">대규모 (1억원 이상)</option>
                    <option value="Enterprise">엔터프라이즈 (장기 계약)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    희망 시작 시기
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Immediate">즉시</option>
                    <option value="1Month">1개월 이내</option>
                    <option value="3Months">3개월 이내</option>
                    <option value="6Months">6개월 이내</option>
                    <option value="Flexible">유동적</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    협업 제안 내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="협업하고자 하는 분야, 보유 역량, 기대 효과 등을 자유롭게 작성해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '협업 문의 제출하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 문의가 성공적으로 제출되었습니다. 담당자가 검토 후 연락드리겠습니다.</p>
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

export default MicrosoftPartnerPage;
