
const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            더 깊이 있는 인사이트가 필요하신가요?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Artiordex의 전문가들과 직접 소통하고, 맞춤형 솔루션에 대해 상담받아보세요. 
            여러분의 비즈니스 혁신을 위한 최적의 전략을 함께 찾아드립니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">전략 컨설팅</h3>
              <p className="text-gray-600">
                디지털 전환 전략과 비즈니스 혁신 방안을 제시합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-tools-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">기술 구현</h3>
              <p className="text-gray-600">
                최신 기술을 활용한 맞춤형 솔루션을 개발합니다
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">지속 지원</h3>
              <p className="text-gray-600">
                구축 후에도 지속적인 운영 지원을 제공합니다
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
            >
              무료 상담 신청
            </a>
            <a 
              href="https://notion.so/artiordex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
            >
              노션에서 더 보기
            </a>
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-left mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Slack 커뮤니티에 참여하세요
                </h3>
                <p className="text-gray-600">
                  실시간으로 전문가들과 소통하고 최신 정보를 공유하세요
                </p>
              </div>
              <a 
                href="https://slack.com/artiordex" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap flex items-center"
              >
                <i className="ri-slack-line mr-2"></i>
                Slack 참여하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
