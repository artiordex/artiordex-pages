import { useMultiTypingEffect } from '../../../hooks/useMultiTypingEffect';

const HeroSection = () => {
  const phrases = [
    "실행으로 증명하는 Artiordex의 DX/AX 솔루션 포트폴리오",
    "Microsoft와 오픈소스 융합으로 완성된 혁신 사례들",
    "고객 성장을 견인한 자동화 및 디지털 전환 결과물"
  ];
  
  const typedText = useMultiTypingEffect(phrases, 100, 2000);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 text-sm text-gray-600 mb-8">
            <a href="/" className="hover:text-blue-600 transition-colors">홈</a>
            <i className="ri-arrow-right-s-line text-gray-400"></i>
            <span className="text-blue-600 font-medium">포트폴리오</span>
          </nav>

          {/* Dynamic Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 min-h-[120px] flex items-center justify-center">
            {typedText}
            <span className="animate-pulse text-blue-600 ml-1">|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Artiordex는 단순 컨설팅이나 개발에 그치지 않고, Microsoft 생태계와 오픈소스 기술을 융합하여 
            고객의 비즈니스 문제를 실질적인 자동화 및 디지털 전환(DX/AX) 결과물로 완성해왔습니다.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 font-medium">완료된 프로젝트</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-gray-700 font-medium">업무 효율 개선</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 font-medium">협력 기업</div>
            </div>
          </div>

          {/* Animated Gears Visualization */}
          <div className="relative w-full max-w-2xl mx-auto h-32 mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Gear - Artiordex */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
                  <i className="ri-settings-3-line text-2xl text-white"></i>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap">
                  Artiordex
                </div>
              </div>

              {/* Surrounding Gears */}
              <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center animate-spin-reverse shadow-md">
                  <i className="ri-database-2-line text-white"></i>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">ERP</div>
              </div>

              <div className="absolute top-0 right-1/4 transform translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-spin-slow shadow-md">
                  <i className="ri-robot-line text-white"></i>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">AI</div>
              </div>

              <div className="absolute bottom-0 left-1/6 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-spin-reverse shadow-md">
                  <i className="ri-refresh-line text-white"></i>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">RPA</div>
              </div>

              <div className="absolute bottom-0 right-1/6 transform translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-spin-slow shadow-md">
                  <i className="ri-smartphone-line text-white"></i>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">Web/App</div>
              </div>

              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center animate-spin-reverse shadow-md">
                  <i className="ri-lightbulb-line text-white"></i>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">Consulting</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            저희의 포트폴리오는 다양한 산업 분야에서 업무 자동화, 프로세스 개선, 그리고 맞춤형 플랫폼 구축을 통해 
            고객 성장을 견인한 결과입니다. 지금, 저희가 이룬 성과들을 확인하시고 귀사의 혁신 여정을 함께하세요.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;