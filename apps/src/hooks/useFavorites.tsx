
import { useState, createContext, useContext, ReactNode } from 'react';

interface FavoriteItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface FavoritesContextType {
  favoriteItems: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
  getTotalFavorites: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavoriteItems(prevItems => {
      const existingItem = prevItems.find(favItem => favItem.id === item.id);
      if (!existingItem) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromFavorites = (id: number) => {
    setFavoriteItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const isFavorite = (id: number) => {
    return favoriteItems.some(item => item.id === id);
  };

  const getTotalFavorites = () => {
    return favoriteItems.length;
  };

  return (
    <FavoritesContext.Provider value={{
      favoriteItems,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      getTotalFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext };
