
const PreorderSection = () => {
  const productImages = [
    "https://readdy.ai/api/search-image?query=smart%20bicycle%20handlebar%20with%20integrated%20display%20and%20controls%20on%20pure%20white%20background%2C%20modern%20cycling%20technology%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20professional%20lighting%2C%20centered%20composition&width=500&height=500&seq=preorder001&orientation=squarish",
    "https://readdy.ai/api/search-image?query=bike%20computer%20with%20GPS%20navigation%20screen%20and%20buttons%20on%20pure%20white%20background%2C%20cycling%20electronics%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20professional%20lighting%2C%20centered%20composition&width=500&height=500&seq=preorder002&orientation=squarish",
    "https://readdy.ai/api/search-image?query=smart%20cycling%20handlebar%20with%20LED%20lights%20and%20touchscreen%20on%20pure%20white%20background%2C%20advanced%20bike%20technology%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20professional%20lighting%2C%20centered%20composition&width=500&height=500&seq=preorder003&orientation=squarish",
    "https://readdy.ai/api/search-image?query=premium%20bike%20handlebar%20display%20with%20wireless%20connectivity%20on%20pure%20white%20background%2C%20modern%20cycling%20gear%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20professional%20lighting%2C%20centered%20composition&width=500&height=500&seq=preorder004&orientation=squarish"
  ];

  return (
    <section id="preorder" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {productImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt={`FLITEDECK Product ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* CTA Content */}
          <div className="space-y-8">
            {/* Limited Time Badge */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-time-line text-orange-500"></i>
              </div>
              <span className="text-sm font-medium text-orange-600">Limited time offer</span>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                FLITEDECK Premium
              </h3>
              <p className="text-gray-600">20% discount for early birds</p>
            </div>

            {/* Pricing */}
            <div className="flex items-center gap-4">
              <span className="text-2xl text-gray-500 line-through">€2.249</span>
              <span className="text-4xl font-bold text-gray-900">€1.999</span>
            </div>

            {/* CTA Button */}
            <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer transform hover:scale-105 active:scale-95 hover:shadow-lg">
              Pre-order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreorderSection;
