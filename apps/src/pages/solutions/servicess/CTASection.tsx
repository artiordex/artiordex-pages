import { useState, useEffect, useRef } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactOptions = [
    {
      title: 'Schedule Consultation',
      description: 'Book a free 30-minute consultation to discuss your digital transformation needs',
      icon: 'ri-calendar-line',
      action: 'Schedule Now',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Request PoC/MVP',
      description: 'Get a proof of concept or minimum viable product for your specific use case',
      icon: 'ri-flask-line',
      action: 'Request PoC',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Download Portfolio',
      description: 'Access our comprehensive service portfolio and case studies',
      icon: 'ri-download-line',
      action: 'Download Now',
      color: 'from-orange-600 to-red-600'
    }
  ];

  const benefits = [
    {
      title: 'Free Initial Consultation',
      description: 'No-cost assessment of your current digital maturity',
      icon: 'ri-gift-line'
    },
    {
      title: 'Microsoft Partner Benefits',
      description: 'Access to exclusive Microsoft Cloud Partner resources',
      icon: 'ri-microsoft-line'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Quick proof of concept development in 2-4 weeks',
      icon: 'ri-speed-line'
    },
    {
      title: 'Ongoing Support',
      description: '24/7 technical support and continuous optimization',
      icon: 'ri-customer-service-line'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20Korean%20business%20meeting%20room%20with%20digital%20transformation%20consultation%2C%20professional%20executives%20discussing%20AI%20automation%20solutions%2C%20Microsoft%20Azure%20cloud%20technology%20displays%2C%20futuristic%20office%20environment%20with%20blue%20and%20orange%20accent%20lighting&width=1920&height=1080&seq=1&orientation=landscape')`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Business</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join the digital transformation journey with Artiordex. Let's build the future of your business together 
            with Microsoft ecosystem excellence and open-source innovation.
          </p>
        </div>

        {/* Contact Options */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          {contactOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-center hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 border border-white border-opacity-20"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                <i className={`${option.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{option.title}</h3>
              <p className="text-gray-300 mb-6">{option.description}</p>
              
              <button className={`w-full px-6 py-3 bg-gradient-to-r ${option.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer`}>
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center border border-white border-opacity-20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className={`${benefit.icon} text-xl text-white`}></i>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
              <p className="text-sm text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold text-white mb-6">
              Start Your Digital Transformation Today
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us for a personalized consultation and discover how Artiordex can accelerate 
              your organization's digital transformation journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white rounded-lg hover:from-blue-700 hover:to-orange-700 transition-all duration-300 font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
                <i className="ri-phone-line mr-2"></i>
                Contact Us Now
              </button>
              <button className="px-8 py-4 border-2 border-white border-opacity-30 text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 font-semibold whitespace-nowrap cursor-pointer">
                <i className="ri-mail-line mr-2"></i>
                Send Email Inquiry
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <i className="ri-map-pin-line text-2xl text-blue-400 mb-2"></i>
                  <p className="text-white font-semibold">Office Location</p>
                  <p className="text-gray-300 text-sm">Gwangmyeong Youth Startup Center<br />Office 705, Gwangmyeong, Korea</p>
                </div>
                <div>
                  <i className="ri-mail-line text-2xl text-orange-400 mb-2"></i>
                  <p className="text-white font-semibold">Email Contact</p>
                  <p className="text-gray-300 text-sm">contact@artiordex.com<br />Partnership & Collaboration</p>
                </div>
                <div>
                  <i className="ri-time-line text-2xl text-green-400 mb-2"></i>
                  <p className="text-white font-semibold">Business Hours</p>
                  <p className="text-gray-300 text-sm">Mon-Fri: 9:00 AM - 6:00 PM<br />KST (Korea Standard Time)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;