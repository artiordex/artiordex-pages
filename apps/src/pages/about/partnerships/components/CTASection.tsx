const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            함께 성장하는 파트너십을 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            Microsoft 생태계 기반의 전문적인 DX·AX 솔루션으로<br />
            귀하의 비즈니스 혁신을 함께 실현하겠습니다
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <i className="ri-mail-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">프로젝트 문의</h3>
              <p className="text-blue-100 mb-4">
                귀하의 DX·AX 프로젝트에 대해 상담받고 맞춤형 솔루션을 제안받으세요
              </p>
              <a 
                href="mailto:contact@artiordex.com" 
                className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
              >
                contact@artiordex.com
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <i className="ri-phone-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">전화 상담</h3>
              <p className="text-blue-100 mb-4">
                Microsoft 전문가와 직접 통화하여 기술적 요구사항을 논의하세요
              </p>
              <a 
                href="tel:+82-2-1234-5678" 
                className="inline-flex items-center text-white hover:text-blue-200 transition-colors"
              >
                02-1234-5678
                <i className="ri-arrow-right-line ml-2"></i>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
            >
              파트너십 문의하기
            </a>
            <a 
              href="/portfolio" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-colors whitespace-nowrap"
            >
              성공 사례 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;