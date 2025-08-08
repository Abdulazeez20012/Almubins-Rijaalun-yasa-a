
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { View, TextSize, Verse, Poem } from '../types';
import { POEMS } from '../data/poems';

interface AppContextType {
  view: View;
  setView: (view: View) => void;
  selectedPoemId: string | null;
  setSelectedPoemId: (id: string | null) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isSettingsOpen: boolean;
  toggleSettings: () => void;
  isActionModalOpen: boolean;
  toggleActionModal: (verse?: Verse) => void;
  selectedVerse: Verse | null;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  favorites: string[];
  addFavorite: (verseId: string) => void;
  removeFavorite: (verseId: string) => void;
  isFavorite: (verseId: string) => boolean;
  poems: Poem[];
  favoriteVerses: Verse[];
}

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [view, setView] = useState<View>('splash');
  const [selectedPoemId, setSelectedPoemId] = useState<string | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [isActionModalOpen, setActionModalOpen] = useState(false);
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);

  const [textSize, setTextSizeState] = useState<TextSize>(() => {
    return (localStorage.getItem('textSize') as TextSize) || 'Medium';
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  
  const favoriteVerses = React.useMemo(() => {
    const allVerses = POEMS.flatMap(p => p.verses);
    return favorites.map(id => allVerses.find(v => v.id === id)).filter((v): v is Verse => v !== undefined);
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('textSize', textSize);
  }, [textSize]);

  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const toggleSettings = () => setSettingsOpen(prev => !prev);

  const toggleActionModal = (verse?: Verse) => {
    setSelectedVerse(verse || null);
    setActionModalOpen(prev => !prev);
  };

  const addFavorite = (verseId: string) => {
    setFavorites(prev => [...prev, verseId]);
  };

  const removeFavorite = (verseId: string) => {
    setFavorites(prev => prev.filter(id => id !== verseId));
  };

  const isFavorite = (verseId: string) => favorites.includes(verseId);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
  };

  const contextValue: AppContextType = {
    view,
    setView,
    selectedPoemId,
    setSelectedPoemId,
    isSidebarOpen,
    toggleSidebar,
    isSettingsOpen,
    toggleSettings,
    isActionModalOpen,
    toggleActionModal,
    selectedVerse,
    textSize,
    setTextSize,
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    poems: POEMS,
    favoriteVerses,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
