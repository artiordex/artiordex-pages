
import { useState } from 'react';

const CarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      number: "01",
      title: "Lights On!",
      description: "Maximum visibility in all conditions, eliminating the need for external mounts and reducing distractions.",
      image: "https://framerusercontent.com/images/76ly5vig6vgXU3q4rVU8kQmacA.png",
      glowImage: "https://framerusercontent.com/images/ZQL4pQ8zTR9uNq515XUd6YLFVKQ.png?scale-down-to=1024",
      bgColor: "bg-blue-900"
    },
    {
      id: 2,
      number: "02",
      title: "Stats & Watts",
      description: "Track your performance in real-time with detailed stats and power output, giving you full control over your efficiency and progress.",
      statsContent: true,
      bgColor: "bg-gray-900"
    },
    {
      id: 3,
      number: "03",
      title: "Patented Smart Cockpit",
      description: "No clutter, no distractions, no compromise - just seamless design.",
      image: "https://framerusercontent.com/images/wdMkh7eVZonCHzSxu8Q9pJcibI.png",
      bgColor: "bg-black"
    },
    {
      id: 4,
      number: "04",
      title: "Intelligent Navigation",
      description: "Cycling-optimized maps and navigation - designed for cyclists, not cars. Navigate with maps that prioritize bike paths, trails, and safe cycling routes.",
      image: "https://framerusercontent.com/images/z7GFWftaMh0fZwBDsuospa0BD2U.png",
      navigationContent: true,
      bgColor: "bg-blue-800"
    },
    {
      id: 5,
      number: "05",
      title: "IP68 Waterproof",
      description: "Ride in any weather with confidence.",
      image: "https://framerusercontent.com/images/2hEyUye7B4Kc8TZustCS1MDwOI.png?scale-down-to=2048",
      dropsImage: "https://framerusercontent.com/images/GjNXQ53lIy6DlLLmCaEQxtT8s8.png",
      bgColor: "bg-blue-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const StatsDisplay = () => (
    <div className="grid grid-cols-2 gap-4 text-white">
      <div className="space-y-2">
        <div className="text-sm opacity-70">HR</div>
        <div className="text-2xl font-bold">140</div>
      </div>
      <div className="space-y-2">
        <div className="text-sm opacity-70">Ride time</div>
        <div className="text-2xl font-bold">23</div>
      </div>
      <div className="space-y-2">
        <div className="text-sm opacity-70">Cadence</div>
        <div className="text-2xl font-bold">85</div>
      </div>
      <div className="space-y-2">
        <div className="text-sm opacity-70">Power</div>
        <div className="text-2xl font-bold">310</div>
      </div>
      <div className="col-span-2 space-y-2">
        <div className="text-sm opacity-70">Elevation</div>
        <div className="flex items-center gap-2">
          <span>↑ 0.85 → 250</span>
          <div className="flex gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={`w-1 h-4 ${i < 12 ? 'bg-blue-400' : 'bg-gray-600'} rounded-sm`}></div>
            ))}
          </div>
          <span>15°</span>
        </div>
      </div>
    </div>
  );

  const NavigationDisplay = () => (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-sm opacity-70">Distance</div>
          <div className="text-xl font-bold">10 km</div>
        </div>
        <div>
          <div className="text-sm opacity-70">Arrival</div>
          <div className="text-xl font-bold">12:23</div>
        </div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold">500 m</div>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <img src="https://framerusercontent.com/images/bu9A20sJibKiv5a5J7arzJnHKJw.jpg" alt="Map 1" className="rounded" />
        <img src="https://framerusercontent.com/images/2S2faLWz6HbElVkSp03upekYAwg.jpg" alt="Map 2" className="rounded" />
      </div>
    </div>
  );

  return (
    <section id="carousel" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-medium mb-4">Built to set a new standard in cycling</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The World's First Fully Integrated and Connected Cockpit
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Designed by cyclists. Engineered for performance. Everything you need. Nothing you don't. No distractions. Just your ride.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className={`w-full flex-shrink-0 ${slide.bgColor} text-white`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16 min-h-[600px]">
                    {/* Content */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="text-blue-400 text-lg font-bold">{slide.number}</div>
                      <h3 className="text-3xl lg:text-4xl font-bold">{slide.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">{slide.description}</p>
                    </div>

                    {/* Visual Content */}
                    <div className="flex items-center justify-center relative">
                      {slide.statsContent && <StatsDisplay />}
                      {slide.navigationContent && <NavigationDisplay />}
                      {slide.image && !slide.statsContent && !slide.navigationContent && (
                        <div className="relative">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="max-w-full h-auto object-contain"
                          />
                          {slide.glowImage && (
                            <img
                              src={slide.glowImage}
                              alt="Glow Effect"
                              className="absolute inset-0 max-w-full h-auto object-contain opacity-80"
                            />
                          )}
                          {slide.dropsImage && (
                            <img
                              src={slide.dropsImage}
                              alt="Water Drops"
                              className="absolute inset-0 max-w-full h-auto object-contain"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-left-line text-gray-600"></i>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <i className="ri-arrow-right-line text-gray-600"></i>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselSection;
