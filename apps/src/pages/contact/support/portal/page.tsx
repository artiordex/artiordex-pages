import { useState } from 'react';
import Header from '../../../../components/feature/Header';
import Footer from '../../../../components/feature/Footer';
import ChatBot from '../../../../components/feature/ChatBot';
import QuickBar from '../../../../components/feature/QuickBar';
import Breadcrumb from '../../../../components/feature/Breadcrumb';

const SupportPortalPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: '문의하기', href: '/contact' },
    { label: '기술 지원', href: '/contact' },
    { label: '고객사 기술지원 포털 안내', href: '/contact/support/portal' }
  ];

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    contractNumber: '',
    requestType: '',
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

      const response = await fetch('https://readdy.ai/api/form/d4bbsumoquaeac4hdo90', {
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
          contractNumber: '',
          requestType: '',
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
        <section className="bg-gradient-to-br from-emerald-50 to-teal-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6">
                <i className="ri-customer-service-2-line text-3xl text-white"></i>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                고객사 기술지원 포털 안내
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                24/7 기술 지원 포털을 통해 언제든지 필요한 도움을 받으실 수 있습니다
              </p>
            </div>
          </div>
        </section>
        
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Portal Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">기술지원 포털 주요 기능</h2>
              <p className="text-lg text-gray-600">고객사 전용 포털에서 제공되는 다양한 서비스</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-ticket-line text-2xl text-emerald-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">티켓 관리</h3>
                <p className="text-gray-600 mb-4">기술 지원 요청 티켓을 생성하고 실시간으로 진행 상황을 추적할 수 있습니다.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                    <span>실시간 티켓 상태 확인</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                    <span>우선순위 설정</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-emerald-600 mr-2 mt-0.5"></i>
                    <span>히스토리 조회</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-book-open-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">기술 문서</h3>
                <p className="text-gray-600 mb-4">제품별 매뉴얼, API 문서, 베스트 프랙티스 가이드를 제공합니다.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>사용자 매뉴얼</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>API 레퍼런스</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-blue-600 mr-2 mt-0.5"></i>
                    <span>트러블슈팅 가이드</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-download-cloud-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">다운로드 센터</h3>
                <p className="text-gray-600 mb-4">최신 버전의 소프트웨어, 패치, 업데이트를 다운로드할 수 있습니다.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>최신 버전 다운로드</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>보안 패치</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-purple-600 mr-2 mt-0.5"></i>
                    <span>릴리즈 노트</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-question-answer-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">FAQ & 커뮤니티</h3>
                <p className="text-gray-600 mb-4">자주 묻는 질문과 다른 고객사의 경험을 공유할 수 있습니다.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                    <span>FAQ 검색</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                    <span>커뮤니티 포럼</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-orange-600 mr-2 mt-0.5"></i>
                    <span>베스트 프랙티스</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-calendar-event-line text-2xl text-indigo-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">교육 & 웨비나</h3>
                <p className="text-gray-600 mb-4">정기 교육 프로그램과 웨비나에 참여할 수 있습니다.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-0.5"></i>
                    <span>온라인 교육</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-0.5"></i>
                    <span>웨비나 참여</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-indigo-600 mr-2 mt-0.5"></i>
                    <span>교육 자료 다운로드</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-line-chart-line text-2xl text-teal-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">시스템 모니터링</h3>
                <p className="text-gray-600 mb-4">실시간 시스템 상태와 성능 지표를 확인할 수 있습니다.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>실시간 모니터링</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>성능 리포트</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-check-line text-teal-600 mr-2 mt-0.5"></i>
                    <span>알림 설정</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Access Request Form Section */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">포털 접근 권한 요청</h2>
              <p className="text-lg text-gray-600">
                고객사 기술지원 포털 접근 권한을 요청하시면 담당자가 확인 후 안내해 드립니다
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    placeholder="email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="contractNumber" className="block text-sm font-medium text-gray-700 mb-2">
                    계약번호 (선택)
                  </label>
                  <input
                    type="text"
                    id="contractNumber"
                    name="contractNumber"
                    value={formData.contractNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    placeholder="계약번호가 있다면 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="requestType" className="block text-sm font-medium text-gray-700 mb-2">
                    요청 유형 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="requestType"
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                  >
                    <option value="">선택해주세요</option>
                    <option value="new">신규 계정 생성</option>
                    <option value="additional">추가 계정 생성</option>
                    <option value="password">비밀번호 재설정</option>
                    <option value="permission">권한 변경</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    상세 내용
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                    placeholder="추가로 전달하실 내용이 있다면 입력해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '제출 중...' : '접근 권한 요청하기'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm">✓ 요청이 성공적으로 제출되었습니다. 담당자가 확인 후 연락드리겠습니다.</p>
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

        {/* Support Info Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">추가 지원이 필요하신가요?</h2>
                <p className="text-lg text-gray-600">다양한 채널을 통해 도움을 받으실 수 있습니다</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-phone-line text-2xl text-emerald-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">전화 지원</h3>
                  <p className="text-gray-600 mb-3">평일 09:00 - 18:00</p>
                  <p className="text-emerald-600 font-semibold">02-1234-5678</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-mail-line text-2xl text-blue-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">이메일 지원</h3>
                  <p className="text-gray-600 mb-3">24시간 접수 가능</p>
                  <p className="text-blue-600 font-semibold">support@artiordex.com</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-chat-3-line text-2xl text-purple-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">실시간 채팅</h3>
                  <p className="text-gray-600 mb-3">평일 09:00 - 18:00</p>
                  <button className="text-purple-600 font-semibold hover:text-purple-700 whitespace-nowrap">
                    채팅 시작하기
                  </button>
                </div>
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

export default SupportPortalPage;
