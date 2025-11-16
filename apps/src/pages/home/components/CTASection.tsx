
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: "ri-star-line",
      title: "Perfect fit engineered",
      description: "Made to fit your bike with precision and ease"
    },
    {
      icon: "ri-arrow-go-back-line",
      title: "Change your mind?",
      description: "14-day returns, no stress, no hassle"
    },
    {
      icon: "ri-shield-check-line",
      title: "2-Year Warranty",
      description: "We've got your back, every mile of the way"
    }
  ];

  const handlePreorderClick = () => {
    navigate('/shop');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image and Features */}
          <div className="space-y-8">
            {/* Dynamic Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://framerusercontent.com/images/XuiLyR5hIsFtSt8Pm2OknfEA6js.png"
                alt="Dynamic Photo of cyclist"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className={`${feature.icon} text-[#2563EB] text-xl`}></i>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Video and CTA */}
          <div id="ctafooter" className="space-y-8">
            {/* Video */}
            <div className="rounded-2xl overflow-hidden">
              <video
                src="https://framerusercontent.com/assets/EntuvZORh1nTXlLKvdISoowkktA.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-80 object-cover"
              />
            </div>

            {/* CTA Button */}
            <button 
              onClick={handlePreorderClick}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer transform hover:scale-105 active:scale-95 hover:shadow-lg"
            >
              Pre-order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
