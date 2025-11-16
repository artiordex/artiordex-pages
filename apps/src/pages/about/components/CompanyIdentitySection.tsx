import { useState, useEffect, useRef } from 'react';

const CompanyIdentitySection = () => {
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

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Company <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Identity</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding our name, vision, and core philosophy that drives digital transformation excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Company Name Breakdown */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">The Meaning Behind Artiordex</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-brain-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Arti<span className="text-blue-600">ficial</span></h4>
                  <p className="text-gray-600">Leveraging artificial intelligence and machine learning to create intelligent automation solutions that enhance human capabilities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-organization-chart text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2"><span className="text-indigo-600">Order</span></h4>
                  <p className="text-gray-600">Organizing complex business processes and workflows into structured, efficient systems that drive operational excellence.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-database-2-line text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">In<span className="text-purple-600">dex</span></h4>
                  <p className="text-gray-600">Indexing and structuring data-driven insights to enable informed decision-making and strategic business growth.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision & Philosophy */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <blockquote className="text-2xl font-light text-gray-700 mb-6 italic">
                "Technology Connects, Innovation Empowers"
              </blockquote>
              <p className="text-gray-600 leading-relaxed mb-6">
                We position ourselves as a low-code AI integrated solution developer, specializing in digital transformation (DX) 
                and automation innovation (AX) by seamlessly merging Microsoft Power Platform with open-source ecosystems.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <i className="ri-microsoft-fill text-3xl text-blue-600 mb-2"></i>
                  <div className="text-sm font-medium text-gray-900">Microsoft</div>
                  <div className="text-xs text-gray-600">Ecosystem</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <i className="ri-code-s-slash-line text-3xl text-green-600 mb-2"></i>
                  <div className="text-sm font-medium text-gray-900">Open Source</div>
                  <div className="text-xs text-gray-600">Integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'ri-links-line',
              title: 'Digital Transformation',
              description: 'Comprehensive DX solutions that modernize business processes and enhance operational efficiency through technology integration.',
              color: 'from-blue-500 to-cyan-500'
            },
            {
              icon: 'ri-robot-line',
              title: 'Automation Innovation',
              description: 'AX solutions that automate repetitive tasks, reduce human error, and free up valuable resources for strategic initiatives.',
              color: 'from-indigo-500 to-purple-500'
            },
            {
              icon: 'ri-lightbulb-line',
              title: 'Data-Driven Innovation',
              description: 'Leveraging data analytics and AI insights to drive informed decision-making and sustainable business growth.',
              color: 'from-purple-500 to-pink-500'
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`${item.icon} text-2xl text-white`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyIdentitySection;