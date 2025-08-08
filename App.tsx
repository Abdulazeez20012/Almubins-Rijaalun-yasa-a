import React, { useState, useEffect } from 'react';
import { AppProvider, useAppContext } from './contexts/AppContext';
import { Page, Qasida, TextSize } from './types';
import { QASIDAS, TEXT_SIZE_CLASSES } from './constants';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import QasidaScreen from './screens/QasidaScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SideMenu from './components/SideMenu';
import SettingsModal from './components/SettingsModal';
import Header from './components/Header';

const AppContent: React.FC = () => {
  const [page, setPage] = useState<Page>('splash');
  const [currentQasidaId, setCurrentQasidaId] = useState<string | null>(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const { textSize } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage('home');
    }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (newPage: Page) => {
    setPage(newPage);
    setMenuOpen(false);
  };

  const openQasida = (qasidaId: string) => {
    setCurrentQasidaId(qasidaId);
    setPage('qasida');
  };

  const goBack = () => {
    if (page === 'qasida' || page === 'favorites') {
      setPage('home');
      setCurrentQasidaId(null);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'splash':
        return <SplashScreen />;
      case 'home':
        return (
          <>
            <Header
              title="Rajulun Yas'a"
              onLeftIconClick={() => setMenuOpen(true)}
              onRightIconClick={() => setSettingsOpen(true)}
            />
            <HomeScreen onSelectQasida={openQasida} />
          </>
        );
      case 'qasida':
        const qasida = QASIDAS.find(q => q.id === currentQasidaId);
        return (
          <>
            <Header title={qasida?.title || ''} onLeftIconClick={goBack} isBackButton />
            {qasida && <QasidaScreen qasida={qasida} />}
          </>
        );
      case 'favorites':
        return (
          <>
            <Header title="Favorites" onLeftIconClick={() => setMenuOpen(true)} />
            <FavoritesScreen />
          </>
        );
      default:
        return null;
    }
  };

  const mainContentClass = `text-[#2C2320] h-full overflow-y-auto ${TEXT_SIZE_CLASSES[textSize].base}`;

  if (page === 'splash') {
    return <SplashScreen />;
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black flex justify-center">
      <div className="relative w-full h-full max-w-md bg-[#F9F6F2] shadow-2xl flex flex-col">
        <SideMenu isOpen={isMenuOpen} onClose={() => setMenuOpen(false)} navigateTo={navigateTo} />
        <SettingsModal isOpen={isSettingsOpen} onClose={() => setSettingsOpen(false)} />
        
        <div className={mainContentClass}>
            {renderPage()}
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;