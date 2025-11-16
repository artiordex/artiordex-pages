
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../hooks/useCart';
import { useFavorites } from '../../../hooks/useFavorites';

const RecommendedSection = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const [addingItems, setAddingItems] = useState<{[key: number]: boolean}>({});

  const handleViewAll = () => {
    navigate('/shop');
    // 滚动到页面顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: "iPad Pro M2",
      price: "$999.00",
      originalPrice: "$1,199.00",
      rating: 4.8,
      reviews: 124,
      image: "https://readdy.ai/api/search-image?query=sleek%20modern%20iPad%20Pro%20M2%20tablet%20with%20premium%20aluminum%20design%20floating%20on%20pure%20white%20background%2C%20latest%20Apple%20tablet%20technology%2C%20ultra-thin%20bezels%2C%20professional%20product%20photography%2C%20clean%20minimalist%20style%2C%20studio%20lighting%2C%20high%20resolution%2C%20centered%20composition%2C%20no%20shadows%2C%20tech%20product%20showcase&width=400&height=400&seq=ipadpro2024&orientation=squarish",
      colors: ["#6B7280", "#EF4444", "#3B82F6"],
      isNew: true
    },
    {
      id: 2,
      name: "Dyson Supersonic",
      price: "$399.00",
      originalPrice: "$499.00",
      rating: 4.9,
      reviews: 89,
      image: "https://readdy.ai/api/search-image?query=premium%20Dyson%20Supersonic%20hair%20dryer%20with%20futuristic%20design%20and%20magnetic%20attachments%20on%20pure%20white%20background%2C%20high-end%20beauty%20technology%2C%20sleek%20curves%2C%20professional%20styling%20tool%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20studio%20lighting%2C%20high%20quality%2C%20centered%20composition%2C%20no%20shadows&width=400&height=400&seq=dyson2024&orientation=squarish",
      colors: ["#EC4899", "#06B6D4", "#F59E0B"],
      isNew: false
    },
    {
      id: 3,
      name: "Razer RZ Camera",
      price: "$1,299.00",
      originalPrice: "$1,499.00",
      rating: 4.7,
      reviews: 156,
      image: "https://public.readdy.ai/ai/img_res/a57bfccb-af6f-4e69-bf4a-0d803b50b59a.jpg",
      colors: ["#000000", "#6B7280"],
      isNew: false
    },
    {
      id: 4,
      name: "Vitamix Blender",
      price: "$449.00",
      originalPrice: "$549.00",
      rating: 4.6,
      reviews: 203,
      image: "https://readdy.ai/api/search-image?query=high-performance%20Vitamix%20blender%20with%20powerful%20motor%20base%20and%20clear%20container%20on%20pure%20white%20background%2C%20premium%20kitchen%20appliance%2C%20professional%20grade%20blending%20technology%2C%20modern%20design%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20studio%20lighting%20%20high%20quality%2C%20centered%20composition%2C%20no%20shadows&width=400&height=400&seq=vitamix2024&orientation=squarish",
      colors: ["#EF4444", "#10B981", "#000000"],
      isNew: false
    },
    {
      id: 5,
      name: "iPhone 15 Pro",
      price: "$1,199.00",
      originalPrice: "$1,299.00",
      rating: 4.9,
      reviews: 342,
      image: "https://readdy.ai/api/search-image?query=latest%20iPhone%2015%20Pro%20smartphone%20with%20titanium%20finish%20and%20triple%20camera%20system%20on%20pure%20white%20background%2C%20premium%20Apple%20mobile%20phone%2C%20sleek%20design%20%20advanced%20technology%2C%20product%20photography%20%20clean%20minimal%20style%20%20studio%20lighting%20%20high%20resolution%20%20centered%20composition%20%20no%20shadows&width=400&height=400&seq=iphone15pro2024&orientation=squarish",
      colors: ["#6B7280", "#000000", "#3B82F6"],
      isNew: true
    },
    {
      id: 6,
      name: "LG 4K Monitor",
      price: "$599.00",
      originalPrice: "$699.00",
      rating: 4.5,
      reviews: 78,
      image: "https://readdy.ai/api/search-image?query=ultra-wide%20LG%204K%20computer%20monitor%20with%20thin%20bezels%20and%20adjustable%20stand%20on%20pure%20white%20background%2C%20professional%20display%20screen%2C%20modern%20design%2C%20high-resolution%20technology%2C%20product%20photography%20%20clean%20minimal%20style%20%20studio%20lighting%20%20high%20quality%20%20centered%20composition%20%20no%20shadows&width=400&height=400&seq=lgmonitor2024&orientation=squarish",
      colors: ["#000000", "#6B7280"],
      isNew: false
    },
    {
      id: 7,
      name: "MacBook pro M3 Pro",
      price: "$2,399.00",
      originalPrice: "$2,599.00",
      rating: 4.8,
      reviews: 167,
      image: "https://readdy.ai/api/search-image?query=MacBook%20Pro%20laptop%20with%20M3%20Pro%20chip%20in%20space%20gray%20finish%20on%20pure%20white%20background%2C%20premium%20Apple%20laptop%20computer%2C%20sleek%20aluminum%20design%20%20advanced%20technology%2C%20product%20photography%20%20clean%20minimal%20style%20%20studio%20lighting%20%20high%20resolution%20%20centered%20composition%20%20no%20shadows&width=400&height=400&seq=macbookm3pro2024&orientation=squarish",
      colors: ["#6B7280", "#000000"],
      isNew: false
    },
    {
      id: 8,
      name: "Linksys Router",
      price: "$299.00",
      originalPrice: "$349.00",
      rating: 4.4,
      reviews: 92,
      image: "https://readdy.ai/api/search-image?query=high-speed%20Linksys%20WiFi%20router%20with%20multiple%20antennas%20and%20LED%20indicators%20on%20pure%20white%20background%2C%20advanced%20networking%20equipment%2C%20modern%20design%20%20wireless%20technology%20%20product%20photography%20%20clean%20minimal%20style%20%20studio%20lighting%20%20high%20quality%20%20centered%20composition%20%20no%20shadows&width=400&height=400&seq=linksysrouter2024&orientation=squarish",
      colors: ["#000000", "#10B981"],
      isNew: false
    }
  ];

  const handleAddToCart = (product: any) => {
    setAddingItems(prev => ({ ...prev, [product.id]: true }));
    
    const cartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace('$', '').replace(',', '')),
      image: product.image
    };
    addToCart(cartItem);
    
    setTimeout(() => {
      setAddingItems(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  const handleToggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Highly Recommended
            </h2>
            <p className="text-lg text-gray-600">
              Browse our top picks to find the best products that our customers 
              love the most, with the best reviews and the cheapest with a great discount.
            </p>
          </div>
          <button 
            onClick={handleViewAll}
            className="hidden lg:block bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap transform hover:scale-105 active:scale-95 hover:shadow-md"
          >
            View All
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-product-shop>
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative bg-gray-50 p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* Wishlist Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleFavorite(product);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <i className={`${isFavorite(product.id) ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-gray-600'}`}></i>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#2563EB] transition-colors">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`ri-star-${i < Math.floor(product.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
                        ></i>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    disabled={addingItems[product.id]}
                    className={`w-10 h-10 rounded-lg transition-all duration-300 cursor-pointer transform hover:scale-110 active:scale-95 hover:shadow-md flex items-center justify-center ${
                      addingItems[product.id]
                        ? 'bg-[#2563EB] text-white animate-pulse'
                        : 'bg-black hover:bg-gray-800 text-white'
                    }`}
                  >
                    <i className={`${addingItems[product.id] ? 'ri-check-line animate-bounce' : 'ri-shopping-cart-line'}`}></i>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="lg:hidden text-center mt-8">
          <button 
            onClick={handleViewAll}
            className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap transform hover:scale-105 active:scale-95 hover:shadow-md"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
