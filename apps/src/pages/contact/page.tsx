
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import Breadcrumb from '../../components/feature/Breadcrumb';

const ContactPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                문의하기
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                궁금한 점이 있으시면 언제든지 연락해 주세요
              </p>
            </div>
          </div>
        </section>
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Contact Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">연락처 정보</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <i className="ri-map-pin-line text-2xl text-blue-600 mr-4 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">주소</h3>
                      <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-phone-line text-2xl text-blue-600 mr-4 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">전화번호</h3>
                      <p className="text-gray-600">02-1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <i className="ri-mail-line text-2xl text-blue-600 mr-4 mt-1"></i>
                    <div>
                      <h3 className="font-semibold text-gray-900">이메일</h3>
                      <p className="text-gray-600">contact@artiordex.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">메시지 보내기</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      이름
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      제목
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="제목을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      메시지
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="메시지를 입력해주세요"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    메시지 보내기
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* AI Chatbot - Bottom Right */}
      <ChatBot />
      
      {/* Quick Actions Bar - Bottom Left */}
      <QuickBar />
    </div>
  );
};

export default ContactPage;