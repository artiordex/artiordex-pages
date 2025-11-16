import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const UpdateGuidePage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '기술 지원', href: '/contact' },
    { label: '업데이트 / 패치 배포 안내', href: '/contact/support/update-guide' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    productName: '',
    currentVersion: '',
    subscriptionType: '',
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

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdo9g', {
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
          currentVersion: '',
          subscriptionType: '',
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

  const updates = [
    {
      product: 'Artiflow',
      version: 'v3.2.0',
      date: '2024.01.15',
      type: 'major',
      features: [
        'AI Agent 성능 개선 (응답 속도 40% 향상)',
        '새로운 워크플로우 템플릿 15종 추가',
        'Microsoft Teams 통합 기능 강화',
        '다국어 지원 확대 (일본어, 중국어 추가)'
      ],
      fixes: [
        '특정 조건에서 워크플로우 실행 오류 수정',
        'UI 반응성 개선'
      ]
    },
    {
      product: 'SmartHub',
      version: 'v2.8.1',
      date: '2024.01.10',
      type: 'minor',
      features: [
        'SAP 연동 커넥터 추가',
        '실시간 데이터 동기화 성능 30% 향상',
        '새로운 데이터 변환 함수 20종 추가'
      ],
      fixes: [
        'Oracle DB 연동 시 타임아웃 이슈 해결',
        '대용량 데이터 처리 안정성 개선'
      ]
    },
    {
      product: 'ConnectStack',
      version: 'v1.5.2',
      date: '2024.01.05',
      type: 'patch',
      features: [
        '모니터링 대시보드 UI 개선',
        '알림 설정 옵션 추가'
      ],
      fixes: [
        '보안 취약점 패치 (CVE-2024-0001)',
        '메모리 누수 이슈 해결',
        '로그 파일 크기 최적화'
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'major':
        return 'bg-purple-100 text-purple-700';
      case 'minor':
        return 'bg-blue-100 text-blue-700';
      case 'patch':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'major':
        return '메이저 업데이트';
      case 'minor':
        return '마이너 업데이트';
      case 'patch':
        return '패치';
      default:
        return '업데이트';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <i className="ri-refresh-line text-3xl text-white"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                업데이트 / 패치 배포 안내
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                최신 기능과 보안 패치로 더욱 안전하고 강력한 서비스를 제공합니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Latest Updates Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">최신 업데이트</h2>
              <p className="text-lg text-gray-600">제품별 최신 버전 정보와 주요 변경사항</p>
            </div>

            <div className="space-y-8">
              {updates.map((update, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{update.product}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(update.type)}`}>
                          {getTypeLabel(update.type)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="ri-code-box-line mr-1"></i>
                          {update.version}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-calendar-line mr-1"></i>
                          {update.date}
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                      다운로드
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <i className="ri-star-line text-blue-600 mr-2"></i>
                        새로운 기능
                      </h4>
                      <ul className="space-y-2">
                        {update.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <i className="ri-check-line text-green-600 mr-2 mt-0.5 flex-shrink-0"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <i className="ri-tools-line text-orange-600 mr-2"></i>
                        버그 수정 및 개선
                      </h4>
                      <ul className="space-y-2">
                        {update.fixes.map((fix, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <i className="ri-check-line text-green-600 mr-2 mt-0.5 flex-shrink-0"></i>
                            <span>{fix}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Update Policy Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">업데이트 정책</h2>
              <p className="text-lg text-gray-600">안전하고 원활한 업데이트를 위한 가이드</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">보안 패치</h3>
                <p className="text-gray-600 mb-4">
                  중요 보안 패치는 발견 즉시 긴급 배포되며, 모든 고객사에 자동으로 적용됩니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-purple-600 mr-1 mt-0.5"></i>
                    <span>즉시 배포</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-purple-600 mr-1 mt-0.5"></i>
                    <span>자동 적용</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-purple-600 mr-1 mt-0.5"></i>
                    <span>사전 알림</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-rocket-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">기능 업데이트</h3>
                <p className="text-gray-600 mb-4">
                  새로운 기능과 개선사항은 월 1회 정기 배포되며, 사전 테스트 후 적용됩니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-blue-600 mr-1 mt-0.5"></i>
                    <span>월 1회 정기 배포</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-blue-600 mr-1 mt-0.5"></i>
                    <span>사전 테스트 환경 제공</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-blue-600 mr-1 mt-0.5"></i>
                    <span>선택적 적용 가능</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-time-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">유지보수 시간</h3>
                <p className="text-gray-600 mb-4">
                  정기 유지보수는 매월 셋째 주 일요일 새벽에 진행되며, 사전 공지됩니다.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-green-600 mr-1 mt-0.5"></i>
                    <span>매월 셋째 주 일요일</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-green-600 mr-1 mt-0.5"></i>
                    <span>새벽 2시 ~ 6시</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-arrow-right-s-line text-green-600 mr-1 mt-0.5"></i>
                    <span>1주일 전 사전 공지</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Notification Request Form */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">업데이트 알림 신청</h2>
              <p className="text-lg text-gray-600">
                최신 업데이트 정보를 이메일로 받아보세요
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
                  <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                    사용 중인 제품 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Artiflow">Artiflow</option>
                    <option value="SmartHub">SmartHub</option>
                    <option value="ConnectStack">ConnectStack</option>
                    <option value="Multiple">여러 제품 사용</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentVersion" className="block text-sm font-medium text-gray-700 mb-2">
                    현재 사용 버전
                  </label>
                  <input
                    type="text"
                    id="currentVersion"
                    name="currentVersion"
                    value={formData.currentVersion}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="예: v3.1.0"
                  />
                </div>

                <div>
                  <label htmlFor="subscriptionType" className="block text-sm font-medium text-gray-700 mb-2">
                    구독 유형
                  </label>
                  <select
                    id="subscriptionType"
                    name="subscriptionType"
                    value={formData.subscriptionType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Professional">Professional</option>
                    <option value="Standard">Standard</option>
                    <option value="Trial">Trial</option>
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
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    placeholder="특정 기능에 대한 업데이트 알림을 원하시거나 추가 요청사항이 있다면 입력해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '알림 신청하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 알림 신청이 완료되었습니다. 최신 업데이트 정보를 이메일로 보내드리겠습니다.</p>
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

export default UpdateGuidePage;
