
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "$299.00",
      image: "https://readdy.ai/api/search-image?query=modern%20smartwatch%20with%20black%20sport%20band%20on%20pure%20white%20background%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20high%20quality%2C%20professional%20lighting%2C%20centered%20composition%2C%20no%20shadows%2C%20elegant%20design&width=200&height=200&seq=watch-card001&orientation=squarish"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: "$199.00",
      image: "https://readdy.ai/api/search-image?query=premium%20wireless%20earbuds%20in%20charging%20case%20on%20pure%20white%20background%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20high%20quality%2C%20professional%20lighting%2C%20centered%20composition%2C%20no%20shadows%2C%20sleek%20design&width=200&height=200&seq=earbuds-card001&orientation=squarish"
    },
    {
      id: 3,
      name: "Smartphone",
      price: "$199.00",
      image: "https://readdy.ai/api/search-image?query=modern%20smartphone%20with%20sleek%20design%20on%20pure%20white%20background%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20high%20quality%2C%20professional%20lighting%2C%20centered%20composition%2C%20no%20shadows%2C%20premium%20look&width=200&height=200&seq=phone-card001&orientation=squarish"
    },
    {
      id: 4,
      name: "Laptop",
      price: "$1299.00",
      image: "https://readdy.ai/api/search-image?query=modern%20laptop%20computer%20open%20view%20on%20pure%20white%20background%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20high%20quality%2C%20professional%20lighting%2C%20centered%20composition%2C%20no%20shadows%2C%20sleek%20design&width=200&height=200&seq=laptop-card001&orientation=squarish"
    },
    {
      id: 5,
      name: "Tablet",
      price: "$599.00",
      image: "https://readdy.ai/api/search-image?query=modern%20tablet%20device%20with%20clean%20screen%20on%20pure%20white%20background%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20high%20quality%2C%20professional%20lighting%2C%20centered%20composition%2C%20no%20shadows%2C%20elegant%20design&width=200&height=200&seq=tablet-card001&orientation=squarish"
    }
  ];

  const handleViewAllClick = () => {
    navigate('/shop');
    // 滚动到页面顶部
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Search among various product across 15 collections, cars, computers, and electronics and you can find everything that you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-3 max-w-7xl mx-auto mb-12" data-product-shop>
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-16 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-80 flex flex-col items-center justify-center">
                {/* Product Image Container */}
                <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300 mb-6 overflow-hidden flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 whitespace-nowrap">
                    {product.name}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={handleViewAllClick}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
