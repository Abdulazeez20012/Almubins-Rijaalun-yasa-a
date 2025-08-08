import React from 'react';
import { Page } from '../types';
import { HomeIcon, HeartIcon, ShareIcon, CloseIcon } from './Icons';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigateTo: (page: Page) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose, navigateTo }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Rajulun Yas'a",
          text: "Check out the Rajulun Yas'a app for beautiful qasidas!",
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Share feature is not supported in your browser.');
    }
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-[#F9F6F2] z-40 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-[#2C2320] text-white">
            <h2 className="font-serif text-xl font-bold">Menu</h2>
            <button onClick={onClose} className="p-2 -mr-2 text-2xl text-white/80 hover:text-white">
                <CloseIcon/>
            </button>
        </div>
        <nav className="p-4 mt-4">
          <ul>
            <li className="mb-2">
              <button
                onClick={() => navigateTo('home')}
                className="flex items-center w-full p-4 text-lg text-[#3a2d27] rounded-lg hover:bg-[#EFEAE2] transition-colors"
              >
                <HomeIcon className="mr-5 text-2xl text-[#D4AF37]" /> Home
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => navigateTo('favorites')}
                className="flex items-center w-full p-4 text-lg text-[#3a2d27] rounded-lg hover:bg-[#EFEAE2] transition-colors"
              >
                <HeartIcon className="mr-5 text-2xl text-[#D4AF37]" /> Favorites
              </button>
            </li>
            <li>
              <button
                onClick={handleShare}
                className="flex items-center w-full p-4 text-lg text-[#3a2d27] rounded-lg hover:bg-[#EFEAE2] transition-colors"
              >
                <ShareIcon className="mr-5 text-2xl text-[#D4AF37]" /> Share App
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;