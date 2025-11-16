import { useState, useEffect, useRef } from 'react';

const CEOSection = () => {
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leadership <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our visionary leader driving digital transformation innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CEO Profile Image */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20Korean%20male%20CEO%20Shiwoo%20Min%20in%20modern%20tech%20office%2C%20confident%20full-stack%20developer%20and%20DevOps%20engineer%20wearing%20smart%20business%20casual%20attire%2C%20clean%20corporate%20headshot%20with%20Microsoft%20Azure%20technology%20background%2C%20executive%20portrait%20photography%20with%20blue%20accent%20lighting&width=600&height=700&seq=1&orientation=portrait"
                  alt="CEO Shiwoo Min"
                  className="w-full h-96 object-cover object-top rounded-xl"
                />
              </div>
              
              {/* Floating Tech Stack Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-microsoft-fill text-white text-2xl"></i>
              </div>
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-code-s-slash-line text-white text-lg"></i>
              </div>
              <div className="absolute -bottom-4 right-1/4 w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <i className="ri-cloud-line text-white text-xl"></i>
              </div>
            </div>
          </div>

          {/* CEO Information */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="mb-8">
              <h3 className="text-4xl font-bold text-gray-900 mb-2">Shiwoo Min</h3>
              <p className="text-xl text-blue-600 font-semibold mb-4">CEO & Founder</p>
              <p className="text-lg text-gray-600 mb-6">Full-Stack Developer & DevOps Engineer</p>
              
              <div className="flex items-center text-gray-600 mb-6">
                <i className="ri-map-pin-line mr-2"></i>
                <span>Gwangmyeong, Gyeonggi, South Korea</span>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Education</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-graduation-cap-line text-blue-600 text-xl"></i>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Korea National Open University</h5>
                    <p className="text-blue-600">Data Statistics (Primary)</p>
                    <p className="text-gray-600 text-sm">Additional Studies: Business, Intellectual Property, Computer Engineering</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Professional Experience</h4>
              <div className="space-y-6">
                {[
                  {
                    company: 'KT Corporation',
                    role: 'Database Engineer',
                    icon: 'ri-database-2-line',
                    color: 'bg-red-100 text-red-600'
                  },
                  {
                    company: 'Export-Import Bank of Korea',
                    role: 'Next-Generation Backend Developer',
                    icon: 'ri-server-line',
                    color: 'bg-green-100 text-green-600'
                  },
                  {
                    company: 'LG U+',
                    role: 'Playwright Test Automation Developer',
                    icon: 'ri-test-tube-line',
                    color: 'bg-purple-100 text-purple-600'
                  }
                ].map((exp, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${exp.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <i className={`${exp.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900">{exp.company}</h5>
                      <p className="text-gray-600">{exp.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Expertise */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Technical Expertise</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  '#Full-Stack', '#DevOps', '#AI-Agents', '#CloudNative', 
                  '#OpenAI', '#Data-Analysis', '#Microsoft-365', '#Azure'
                ].map((tag, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div className={`mt-20 text-center transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="bg-white p-12 rounded-2xl shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h4 className="text-3xl font-bold text-gray-900 mb-6">Leadership Philosophy</h4>
            <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
              "Digital transformation is not just about technology—it's about empowering people and organizations 
              to achieve their full potential through intelligent automation and data-driven innovation."
            </blockquote>
            <p className="text-gray-600 leading-relaxed">
              With extensive experience in database engineering, backend development, and test automation, 
              Shiwoo Min brings a unique perspective to digital transformation, combining technical depth 
              with strategic business insight to deliver solutions that truly make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;