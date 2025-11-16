
const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20digital%20workspace%20with%20multiple%20screens%20showing%20data%20analytics%2C%20code%2C%20and%20business%20insights%20in%20a%20bright%20office%20environment%20with%20natural%20lighting%20and%20professional%20atmosphere&width=1920&height=600&seq=blog-hero-bg&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Artiordex <span className="text-blue-400">Blog</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          최신 기술 인사이트, 디지털 트랜스포메이션 전략, 그리고 혁신적인 솔루션에 대한 
          전문가의 깊이 있는 분석을 만나보세요
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://notion.so/artiordex" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
          >
            노션에서 더 보기
          </a>
          <a 
            href="https://slack.com/artiordex" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap"
          >
            커뮤니티 참여
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
