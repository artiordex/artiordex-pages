
import { useCart } from '../../../hooks/useCart';
import { useFavorites } from '../../../hooks/useFavorites';

const ProductsSection = () => {
  const { addToCart } = useCart();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleAddToCart = (product: any) => {
    // 从价格字符串中提取数字
    const priceNumber = parseFloat(product.salePrice.replace('€', '').replace(',', ''));
    
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNumber,
      image: product.image
    });
  };

  const handleToggleFavorite = (product: any) => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        name: product.name,
        price: product.salePrice,
        image: product.image
      });
    }
  };

  const products = [
    {
      id: 1,
      name: "FLITEDECK Premium",
      image: "https://readdy.ai/api/search-image?query=high-end%20smart%20bicycle%20handlebar%20display%20with%20touchscreen%20on%20pure%20white%20background%2C%20modern%20cycling%20technology%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20professional%20lighting%2C%20centered%20composition&width=600&height=600&seq=bike001&orientation=squarish",
      originalPrice: "€2.249",
      salePrice: "€1.999",
      badge: "Sale",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      name: "FLITEDECK Fan Edition",
      image: "https://readdy.ai/api/search-image?query=premium%20smart%20bike%20computer%20with%20GPS%20navigation%20display%20on%20pure%20white%20background%2C%20cycling%20electronics%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20professional%20lighting%2C%20centered%20composition&width=600&height=600&seq=bike002&orientation=squarish",
      originalPrice: "€2.549",
      salePrice: "€2.299",
      badge: "CyclingSina Fan Edition",
      badgeColor: "bg-purple-500",
      icon: "ri-heart-fill"
    },
    {
      id: 3,
      name: "FLITEDECK Tailor Made",
      image: "https://readdy.ai/api/search-image?query=custom%20smart%20cycling%20handlebar%20with%20integrated%20lights%20and%20display%20on%20pure%20white%20background%2C%20advanced%20bike%20technology%2C%20product%20photography%2C%20clean%20minimal%20style%2C%20professional%20lighting%2C%20centered%20composition&width=600&height=600&seq=bike003&orientation=squarish",
      originalPrice: "€3.949",
      salePrice: "€3.699",
      badge: "Custom build",
      badgeColor: "bg-green-500",
      icon: "ri-palette-fill"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-product-shop>
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    Sale
                  </span>
                  {product.badge !== "Sale" && (
                    <div className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2`}>
                      {product.icon && <i className={product.icon}></i>}
                      <span>{product.badge}</span>
                    </div>
                  )}
                </div>

                {/* Favorite Button */}
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
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    <span className="text-2xl font-bold text-gray-900">{product.salePrice}</span>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full mt-4 bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
