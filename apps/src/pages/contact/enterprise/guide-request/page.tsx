import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const GuideRequestPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '고객 성공', href: '/contact' },
    { label: '사용 가이드 요청', href: '/contact/enterprise/guide-request' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productName: '',
    guideType: '',
    specificTopic: '',
    urgency: '',
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

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdobg', {
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
          productName: '',
          guideType: '',
          specificTopic: '',
          urgency: '',
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

  const availableGuides = [
    {
      category: 'Artiflow',
      icon: 'ri-flow-chart',
      color: 'purple',
      guides: [
        '시작 가이드 (Quick Start)',
        '워크플로우 설계 가이드',
        'AI Agent 설정 가이드',
        '통합 연동 가이드',
        '관리자 매뉴얼',
        '트러블슈팅 가이드'
      ]
    },
    {
      category: 'SmartHub',
      icon: 'ri-database-2-line',
      color: 'blue',
      guides: [
        '시작 가이드 (Quick Start)',
        '데이터 커넥터 설정',
        '데이터 변환 가이드',
        'API 통합 가이드',
        '모니터링 & 알림 설정',
        '성능 최적화 가이드'
      ]
    },
    {
      category: 'ConnectStack',
      icon: 'ri-stack-line',
      color: 'emerald',
      guides: [
        '시작 가이드 (Quick Start)',
        '시스템 구성 가이드',
        '보안 설정 가이드',
        '백업 & 복구 가이드',
        '업그레이드 가이드',
        '운영 매뉴얼'
      ]
    },
    {
      category: 'Power Platform',
      icon: 'ri-apps-line',
      color: 'indigo',
      guides: [
        'Power Apps 개발 가이드',
        'Power Automate 워크플로우',
        'Power BI 리포트 작성',
        'Dataverse 데이터 모델링',
        '커넥터 개발 가이드',
        '거버넌스 가이드'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string }> = {
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-200' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-cyan-700 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
                <i className="ri-book-open-line text-3xl text-teal-600"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                사용 가이드 요청
              </h1>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                필요한 가이드 문서를 요청하시면 맞춤형 자료를 제공해드립니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Available Guides Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">제공 가능한 가이드</h2>
              <p className="text-lg text-gray-600">제품별로 다양한 가이드 문서를 제공합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {availableGuides.map((product, index) => {
                const colorClasses = getColorClasses(product.color);
                return (
                  <div key={index} className={`bg-white border-2 ${colorClasses.border} rounded-xl p-8`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 ${colorClasses.bg} rounded-lg flex items-center justify-center mr-4`}>
                        <i className={`${product.icon} text-2xl ${colorClasses.text}`}></i>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {product.guides.map((guide, idx) => (
                        <li key={idx} className="flex items-start">
                          <i className={`ri-file-text-line ${colorClasses.text} mr-3 mt-0.5`}></i>
                          <span className="text-gray-700">{guide}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Guide Types Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">가이드 유형</h2>
              <p className="text-lg text-gray-600">다양한 형태의 가이드를 제공합니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-file-pdf-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">PDF 문서</h3>
                <p className="text-gray-600 mb-4">
                  상세한 설명과 스크린샷이 포함된 PDF 형식의 가이드
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>인쇄 가능</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>오프라인 열람</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>검색 가능</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-video-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">동영상 튜토리얼</h3>
                <p className="text-gray-600 mb-4">
                  실제 화면을 보여주는 동영상 형식의 가이드
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>단계별 설명</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>반복 재생</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>자막 제공</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-global-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">온라인 문서</h3>
                <p className="text-gray-600 mb-4">
                  웹에서 바로 확인할 수 있는 인터랙티브 가이드
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>실시간 업데이트</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>링크 공유</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>댓글 기능</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Request Form Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">가이드 요청하기</h2>
              <p className="text-lg text-gray-600">
                필요한 가이드를 요청하시면 빠르게 제공해드립니다
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                    제품명 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Artiflow">Artiflow</option>
                    <option value="SmartHub">SmartHub</option>
                    <option value="ConnectStack">ConnectStack</option>
                    <option value="Power Platform">Power Platform</option>
                    <option value="Custom Solution">커스텀 솔루션</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="guideType" className="block text-sm font-medium text-gray-700 mb-2">
                    가이드 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="guideType"
                    name="guideType"
                    value={formData.guideType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Quick Start">시작 가이드 (Quick Start)</option>
                    <option value="User Manual">사용자 매뉴얼</option>
                    <option value="Admin Guide">관리자 가이드</option>
                    <option value="API Documentation">API 문서</option>
                    <option value="Integration Guide">통합 가이드</option>
                    <option value="Troubleshooting">트러블슈팅 가이드</option>
                    <option value="Best Practices">베스트 프랙티스</option>
                    <option value="Custom">맞춤형 가이드</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="specificTopic" className="block text-sm font-medium text-gray-700 mb-2">
                    구체적인 주제
                  </label>
                  <input
                    type="text"
                    id="specificTopic"
                    name="specificTopic"
                    value={formData.specificTopic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="예: Power Automate 승인 워크플로우 설정 방법"
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    긴급도
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Urgent">긴급 (1-2일 내)</option>
                    <option value="High">높음 (3-5일 내)</option>
                    <option value="Normal">보통 (1주일 내)</option>
                    <option value="Low">낮음 (2주일 내)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    추가 요청사항
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    placeholder="가이드에 포함되었으면 하는 내용이나 특별한 요구사항이 있다면 입력해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '가이드 요청하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 가이드 요청이 완료되었습니다. 요청하신 가이드를 준비하여 이메일로 보내드리겠습니다.</p>
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

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">가이드는 얼마나 빨리 받을 수 있나요?</h3>
                <p className="text-gray-600">
                  기존 가이드는 1-2일 내에 제공되며, 맞춤형 가이드는 요청 내용에 따라 3-7일 정도 소요됩니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">가이드는 무료인가요?</h3>
                <p className="text-gray-600">
                  기본 가이드는 모든 고객사에 무료로 제공됩니다. 맞춤형 가이드나 특수한 요구사항이 있는 경우 별도 협의가 필요할 수 있습니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">가이드 업데이트는 어떻게 받나요?</h3>
                <p className="text-gray-600">
                  제품 업데이트 시 가이드도 함께 업데이트되며, 등록된 이메일로 자동으로 발송됩니다.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-2">가이드를 보고도 이해가 안 되면 어떻게 하나요?</h3>
                <p className="text-gray-600">
                  기술 지원팀에 문의하시면 1:1 원격 지원이나 추가 교육을 제공해드립니다.
                </p>
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

export default GuideRequestPage;