
import { useFavorites } from '../../hooks/useFavorites';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';

interface FavoritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesSidebar = ({ isOpen, onClose }: FavoritesSidebarProps) => {
  const { favoriteItems, removeFromFavorites } = useFavorites();
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());

  const handleAddToCart = (product: any) => {
    const priceNumber = parseFloat(product.price.replace('€', '').replace(',', ''));
    
    addToCart({
      id: product.id,
      name: product.name,
      price: priceNumber,
      image: product.image
    });

    // 添加到已添加列表
    setAddedItems(prev => new Set(prev).add(product.id));
    
    // 3秒后移除已添加状态
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 3000);
  };

  const handleRemoveFromFavorites = (id: number) => {
    removeFromFavorites(id);
    // 同时移除已添加状态
    setAddedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-900">My Favorites</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
            >
              <i className="ri-close-line text-xl text-gray-600"></i>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {favoriteItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-heart-line text-2xl text-gray-400"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="text-gray-600 text-sm">
                  Start adding products to your favorites
                </p>
              </div>
            ) : (
              <div className="p-4 space-y-4">
                {favoriteItems.map((item) => (
                  <div key={item.id} className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex gap-3">
                      {/* Product Image */}
                      <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm truncate">
                          {item.name}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.price}
                        </p>

                        {/* Actions */}
                        <div className="flex gap-2 mt-3">
                          <button
                            onClick={() => handleAddToCart(item)}
                            disabled={addedItems.has(item.id)}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                              addedItems.has(item.id) 
                                ? 'bg-[#2563EB] text-white' 
                                : 'bg-gray-800 text-white hover:bg-gray-700'
                            }`}
                          >
                            {addedItems.has(item.id) ? (
                              <>
                                <i className="ri-check-line mr-1"></i>
                                Added
                              </>
                            ) : (
                              'Add to Cart'
                            )}
                          </button>
                          <button 
                            onClick={() => handleRemoveFromFavorites(item.id)}
                            className="p-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors cursor-pointer"
                          >
                            <i className="ri-delete-bin-line text-xs text-gray-600"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {favoriteItems.length > 0 && (
            <div className="p-6 border-t bg-gray-50">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-3">
                  {favoriteItems.length} items in your wishlist
                </p>
                <button 
                  onClick={onClose}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FavoritesSidebar;
