import { useState, useEffect, useRef } from 'react';

const BusinessPhilosophySection = () => {
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

  const philosophies = [
    {
      title: 'Intelligent Connectivity',
      subtitle: 'Azure-Power Platform-Open API Integration',
      icon: 'ri-links-line',
      color: 'from-blue-500 to-cyan-500',
      description: 'Seamlessly connecting disparate systems through intelligent API integration, creating unified digital ecosystems that enhance productivity and collaboration.',
      benefits: [
        'Unified data flow across platforms',
        'Real-time synchronization',
        'Scalable architecture design',
        'Enhanced system interoperability'
      ]
    },
    {
      title: 'Human-Centered Technology',
      subtitle: 'User-Focused Digital Experience',
      icon: 'ri-user-heart-line',
      color: 'from-indigo-500 to-purple-500',
      description: 'Designing technology solutions that prioritize human needs and experiences, ensuring that digital transformation enhances rather than complicates daily workflows.',
      benefits: [
        'Intuitive user interfaces',
        'Accessibility compliance',
        'User experience optimization',
        'Change management support'
      ]
    },
    {
      title: 'Practical Simplicity',
      subtitle: 'Immediate Implementation Value',
      icon: 'ri-lightbulb-line',
      color: 'from-purple-500 to-pink-500',
      description: 'Focusing on practical, implementable solutions that deliver immediate value while maintaining simplicity in design and operation.',
      benefits: [
        'Rapid deployment capabilities',
        'Minimal learning curve',
        'Cost-effective solutions',
        'Quick return on investment'
      ]
    },
    {
      title: 'Empowering Growth',
      subtitle: 'AI-Driven Business Automation',
      icon: 'ri-rocket-line',
      color: 'from-pink-500 to-red-500',
      description: 'Leveraging AI and automation to empower businesses to scale efficiently, reduce operational overhead, and focus on strategic growth initiatives.',
      benefits: [
        'Automated workflow optimization',
        'Predictive analytics insights',
        'Resource allocation efficiency',
        'Strategic decision support'
      ]
    },
    {
      title: 'Reliable Expertise',
      subtitle: 'Microsoft Cloud Partner Excellence',
      icon: 'ri-shield-check-line',
      color: 'from-green-500 to-teal-500',
      description: 'Providing reliable, expert-level services backed by Microsoft Cloud Partner certification and extensive industry experience.',
      benefits: [
        'Certified Microsoft expertise',
        'Industry best practices',
        'Comprehensive support',
        'Long-term partnership approach'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Business <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Philosophy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five core value propositions that guide our approach to digital transformation and client success
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {philosophies.map((philosophy, index) => (
            <div 
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${philosophy.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${philosophy.icon} text-2xl text-white`}></i>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{philosophy.title}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{philosophy.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{philosophy.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {philosophy.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center">
                        <i className="ri-check-line text-green-500 mr-2 flex-shrink-0"></i>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Microsoft Partnership Highlight */}
        <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 p-12 rounded-2xl text-white text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <i className="ri-microsoft-fill text-4xl text-white"></i>
              </div>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Microsoft Cloud Partner</h3>
            <p className="text-xl mb-8 opacity-90">
              As a certified Microsoft Cloud Partner, we bring enterprise-grade reliability and expertise 
              to every digital transformation project, ensuring your success with proven methodologies and best practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-80">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-sm opacity-80">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Summary */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              At Artiordex, we believe that successful digital transformation requires more than just technology—it requires 
              a deep understanding of business needs, human-centered design, and a commitment to delivering practical, 
              scalable solutions that drive real business value. Our philosophy guides every project, ensuring that 
              we not only meet but exceed our clients' expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessPhilosophySection;