const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          함께 미래를 만들어갈 인재를 기다립니다
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Artiordex는 기술과 사람을 연결하는 비전을 함께 실현할 팀원을 찾습니다.<br />
          DX·AI·자동화 분야에서 전문성을 발휘하고 성장하고 싶다면 지금 연락주세요.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="mailto:contact@artiordex.com" 
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
          >
            이메일로 지원하기
          </a>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap border-2 border-white"
          >
            문의하기
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">채용 문의</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start">
              <i className="ri-mail-line text-2xl text-blue-200 mr-3 mt-1"></i>
              <div>
                <div className="text-sm text-blue-200 mb-1">이메일</div>
                <a href="mailto:contact@artiordex.com" className="text-white font-medium hover:text-blue-100 transition-colors">
                  contact@artiordex.com
                </a>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-phone-line text-2xl text-blue-200 mr-3 mt-1"></i>
              <div>
                <div className="text-sm text-blue-200 mb-1">전화</div>
                <a href="tel:+821012345678" className="text-white font-medium hover:text-blue-100 transition-colors">
                  010-1234-5678
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-blue-200 text-sm">
          <p>지원 서류는 채용 목적으로만 사용되며, 채용 종료 후 파기됩니다.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;