const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            아티올덱스와 함께 성장하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            혁신적인 조직 문화와 전문성을 바탕으로 디지털 전환의 새로운 기준을 만들어가는 여정에 동참하세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg whitespace-nowrap">
              채용 정보 확인
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 whitespace-nowrap">
              파트너십 문의
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">전문 인재</h3>
              <p className="text-blue-100 text-sm">
                DX·AI 분야 최고의 전문가들과 함께 성장할 기회
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">혁신 문화</h3>
              <p className="text-blue-100 text-sm">
                최신 기술과 방법론을 적극 도입하는 혁신적 조직 문화
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">글로벌 비전</h3>
              <p className="text-blue-100 text-sm">
                국내를 넘어 글로벌 시장으로 확장하는 비전 공유
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;