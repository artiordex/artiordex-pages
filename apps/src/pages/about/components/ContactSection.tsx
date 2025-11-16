import { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
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
            Partner <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to accelerate your digital transformation journey? Let's discuss how Artiordex can help your business thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Office Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-building-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h4>
                    <p className="text-gray-600">
                      Gwangmyeong Youth Startup Center<br />
                      Office 705<br />
                      Gwangmyeong, Gyeonggi, South Korea
                    </p>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                    <a href="mailto:contact@artiordex.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      contact@artiordex.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Partnership inquiries & collaboration opportunities</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM KST<br />
                      Saturday: 10:00 AM - 4:00 PM KST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-customer-service-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h4>
                    <p className="text-gray-600">
                      We typically respond within 24 hours<br />
                      Urgent inquiries: Same day response<br />
                      Available for emergency support
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <button className="w-12 h-12 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </button>
                  <button className="w-12 h-12 bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-github-fill text-xl"></i>
                  </button>
                  <button className="w-12 h-12 bg-gray-100 hover:bg-blue-500 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-twitter-fill text-xl"></i>
                  </button>
                  <button className="w-12 h-12 bg-gray-100 hover:bg-red-600 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer">
                    <i className="ri-mail-fill text-xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-12 rounded-2xl text-white">
              <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join the digital transformation revolution with Artiordex. Let's build the future of your business together.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="ri-check-line text-green-300 mr-3"></i>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-300 mr-3"></i>
                  <span>Custom solution assessment</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-300 mr-3"></i>
                  <span>Microsoft ecosystem expertise</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-green-300 mr-3"></i>
                  <span>Proven ROI delivery</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 py-4 px-6 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  <i className="ri-calendar-line mr-2"></i>
                  Schedule Free Consultation
                </button>
                <button className="w-full border-2 border-white text-white py-4 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold whitespace-nowrap cursor-pointer">
                  <i className="ri-download-line mr-2"></i>
                  Download Company Brochure
                </button>
              </div>
            </div>

            {/* Partnership Benefits */}
            <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Partnership Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: 'ri-shield-check-line', text: 'Microsoft Certified' },
                  { icon: 'ri-time-line', text: 'Rapid Implementation' },
                  { icon: 'ri-customer-service-line', text: '24/7 Support' },
                  { icon: 'ri-trophy-line', text: 'Proven Results' }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                      <i className={`${benefit.icon} text-sm`}></i>
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className={`mt-16 transition-all duration-700 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Our Office</h3>
          <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.123456789!2d126.8644!3d37.4781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGwangmyeong%20Youth%20Startup%20Center!5e0!3m2!1sen!2skr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Artiordex Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;