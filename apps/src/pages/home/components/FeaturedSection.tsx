
import React, { useState } from 'react';
import { useCart } from '../../../hooks/useCart';

const FeaturedSection = () => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const featuredProduct = {
    id: 'xenolex-smart-tv',
    name: 'Xenolex Smart TV',
    price: 899.00,
    originalPrice: 1199.00,
    image: 'https://readdy.ai/api/search-image?query=premium%204K%20smart%20TV%20with%20ultra-slim%20design%20and%20modern%20bezel%20on%20pure%20white%20background%2C%20high-end%20television%20display%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20high%20quality%2C%20professional%20lighting%2C%20centered%20composition%2C%20no%20shadows&width=600&height=400&seq=smarttv001&orientation=landscape',
    description: '4K Ultra HD with HDR Pro'
  };

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      id: parseInt(featuredProduct.id.replace(/\D/g, '')) || Date.now(),
      name: featuredProduct.name,
      price: featuredProduct.price,
      image: featuredProduct.image
    });
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-12 lg:p-16 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2 text-sm font-semibold">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                Featured Product
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Xenolex Smart TV
                </h2>
                <p className="text-xl text-gray-600">
                  4K Ultra HD with HDR Pro
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Google Assistant & Alexa Built-in</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Quantum Dot Color Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Advanced 4K Processor</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">Ultra-Slim Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <i className="ri-check-line text-green-600 text-sm"></i>
                  </div>
                  <span className="text-gray-700">HDMI 2.1 Connectivity</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-gray-900">$899.00</span>
                  <span className="text-xl text-gray-500 line-through">$1,199.00</span>
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                    25% OFF
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 cursor-pointer whitespace-nowrap transform hover:scale-105 active:scale-95 hover:shadow-lg ${
                      isAdding 
                        ? 'bg-blue-500 text-white animate-pulse' 
                        : 'bg-black hover:bg-gray-800 text-white'
                    }`}
                  >
                    {isAdding ? (
                      <span className="flex items-center gap-2">
                        <i className="ri-check-line animate-bounce"></i>
                        Added to Cart!
                      </span>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Right Content - Product Image */}
            <div className="relative p-8 lg:p-12">
              <div className="relative">
                <img
                  src="https://readdy.ai/api/search-image?query=premium%204K%20smart%20TV%20with%20ultra-slim%20design%20and%20modern%20bezel%20on%20pure%20white%20background%2C%20high-end%20television%20display%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20high%20quality%2C%20professional%20lighting%2C%20centered%20composition%2C%20no%20shadows&width=600&height=400&seq=smarttv001&orientation=landscape"
                  alt="Xenolex Smart TV"
                  className="w-full h-auto object-contain"
                />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm">
                  <div className="text-center">
                    <div className="text-xs">SAVE</div>
                    <div>$300</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
