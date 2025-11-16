
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import ChatBot from '../../components/feature/ChatBot';
import QuickBar from '../../components/feature/QuickBar';
import Breadcrumb from '../../components/feature/Breadcrumb';

const CheckoutPage = () => {
  const breadcrumbItems = [
    { label: '홈', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Checkout', href: '/checkout' }
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
                결제하기
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                주문을 완료하세요
              </p>
            </div>
          </div>
        </section>
        
        {/* Breadcrumb Navigation - 히어로 섹션 아래로 이동 */}
        <Breadcrumb items={breadcrumbItems} />
        
        {/* Checkout Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                결제 페이지
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                결제 시스템이 곧 준비됩니다.
              </p>
              <div className="bg-gray-100 rounded-lg p-12">
                <i className="ri-shopping-cart-line text-6xl text-gray-400 mb-4"></i>
                <p className="text-gray-500">결제 시스템 준비 중...</p>
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

export default CheckoutPage;