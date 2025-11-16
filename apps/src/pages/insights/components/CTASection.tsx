import { useState } from 'react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-6">
            Ready to Transform?
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
              Fusion Team Advantage
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Bridge Microsoft Low-Code and Open Source Code-First approaches with Artiordex's 
            execution-focused digital transformation expertise. Let's build the future together.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-microsoft-line text-orange-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Microsoft Ecosystem</h3>
              <p className="text-gray-300">Power Platform, Azure, and M365 integration expertise</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-code-s-slash-line text-blue-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Open Source Fusion</h3>
              <p className="text-gray-300">Seamless integration with modern development frameworks</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-robot-2-line text-purple-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Driven Automation</h3>
              <p className="text-gray-300">Intelligent solutions for scalable digital transformation</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Start AI Solution Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 whitespace-nowrap">
              Download Technical Portfolio
            </button>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Schedule Strategy Session
            </button>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Tech Insights
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get the latest updates on Microsoft ecosystem innovations, AI automation trends, 
              and digital transformation strategies delivered to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white/20 border border-white/30 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </div>
            
            {isSubscribed && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-center">
                <i className="ri-check-line text-green-400 text-xl mr-2"></i>
                <span className="text-green-400 font-medium">Successfully subscribed to Tech Insights!</span>
              </div>
            )}
          </form>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
            <span>✓ Weekly tech updates</span>
            <span>✓ Industry insights</span>
            <span>✓ Exclusive content</span>
            <span>✓ No spam, unsubscribe anytime</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-orange-400 text-xl"></i>
            </div>
            <h4 className="text-white font-semibold mb-2">Office Location</h4>
            <p className="text-gray-300 text-sm">
              Gwangmyeong Youth Startup Center<br />
              Office 705, Gwangmyeong, Korea
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-mail-line text-blue-400 text-xl"></i>
            </div>
            <h4 className="text-white font-semibold mb-2">Email Contact</h4>
            <p className="text-gray-300 text-sm">
              contact@artiordex.com<br />
              partnerships@artiordex.com
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-purple-400 text-xl"></i>
            </div>
            <h4 className="text-white font-semibold mb-2">Business Hours</h4>
            <p className="text-gray-300 text-sm">
              Mon-Fri: 9:00 AM - 6:00 PM<br />
              KST (UTC+9)
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-customer-service-2-line text-green-400 text-xl"></i>
            </div>
            <h4 className="text-white font-semibold mb-2">Support</h4>
            <p className="text-gray-300 text-sm">
              24/7 Technical Support<br />
              Enterprise SLA Available
            </p>
          </div>
        </div>

        {/* Final Value Proposition */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-white/20">
            <i className="ri-rocket-line text-orange-400 text-xl mr-3"></i>
            <span className="text-white font-semibold">
              Ready to accelerate your digital transformation journey?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;