import { useState, createContext, useContext, ReactNode } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'iPad Pro M2',
      price: 1099,
      image: 'https://readdy.ai/api/search-image?query=Modern%20sleek%20iPad%20Pro%20M2%20tablet%20computer%20with%20advanced%20display%20technology%2C%20minimalist%20design%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20high-tech%20aesthetic&width=200&height=200&seq=cart1&orientation=squarish',
      quantity: 1
    },
    {
      id: 5,
      name: 'iPhone 15 Pro',
      price: 999,
      image: 'https://readdy.ai/api/search-image?query=Latest%20iPhone%2015%20Pro%20smartphone%20with%20titanium%20finish%2C%20advanced%20camera%20system%2C%20premium%20materials%2C%20sleek%20design%2C%20pure%20white%20background%2C%20centered%20composition%2C%20professional%20product%20photography%20style%2C%20no%20shadows%2C%20cutting-edge%20mobile%20technology&width=200&height=200&seq=cart2&orientation=squarish',
      quantity: 1
    }
  ]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };