
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { ICONS } from '../constants';

const Sidebar: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) return null;

  const { isSidebarOpen, toggleSidebar, setView } = context;

  const handleNavigate = (view: 'home' | 'favorites') => {
    setView(view);
    toggleSidebar();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Rajulun Yas\'a',
        text: 'Check out the Rajulun Yas\'a app!',
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert('Share functionality is not supported in your browser.');
    }
    toggleSidebar();
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleSidebar}
      ></div>
      <div className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 pt-20">
            <h2 className="text-2xl font-bold text-[#4a2c2a] mb-8">Rajulun Yas'a</h2>
            <nav className="flex flex-col space-y-4">
                <button onClick={() => handleNavigate('home')} className="flex items-center p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg">
                    {ICONS.HOME} Home
                </button>
                <button onClick={() => handleNavigate('favorites')} className="flex items-center p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg">
                    <span className="text-[#4a2c2a]">{ICONS.HEART}</span> Favorites
                </button>
                <button onClick={handleShare} className="flex items-center p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg">
                    {ICONS.SHARE} Share
                </button>
            </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
