
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { TextSize } from '../types';

interface AppContextType {
  textSize: TextSize;
  favorites: string[];
  setTextSize: (size: TextSize) => void;
  isFavorite: (verseId: string) => boolean;
  toggleFavorite: (verseId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [textSize, setTextSizeState] = useState<TextSize>(TextSize.Medium);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedTextSize = localStorage.getItem('textSize') as TextSize;
    if (storedTextSize && Object.values(TextSize).includes(storedTextSize)) {
      setTextSizeState(storedTextSize);
    }

    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
    localStorage.setItem('textSize', size);
  };

  const toggleFavorite = (verseId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(verseId)
        ? prev.filter(id => id !== verseId)
        : [...prev, verseId];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };
  
  const isFavorite = (verseId: string) => favorites.includes(verseId);

  return (
    <AppContext.Provider value={{ textSize, favorites, setTextSize, isFavorite, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
