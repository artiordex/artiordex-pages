const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          함께 성장할 인재를 찾습니다
        </h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Artiordex는 기술과 사람을 연결하는 비전을 함께 실현할 팀원을 기다립니다.<br />
          DX·AI·자동화 분야에서 전문성을 발휘하고 성장하고 싶다면 지금 연락주세요.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a 
            href="/contact" 
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 whitespace-nowrap"
          >
            채용 문의하기
          </a>
          <a 
            href="mailto:contact@artiordex.com" 
            className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap border-2 border-white"
          >
            이메일 보내기
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-white">
          <div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-blue-200">전문 인력</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">5</div>
            <div className="text-blue-200">전문 부문</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-blue-200">성공 프로젝트</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;