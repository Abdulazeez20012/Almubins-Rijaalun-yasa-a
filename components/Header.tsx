import React from 'react';
import { HamburgerIcon, SettingsIcon, BackIcon } from './Icons';

interface HeaderProps {
  title: string;
  onLeftIconClick: () => void;
  onRightIconClick?: () => void;
  isBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, onLeftIconClick, onRightIconClick, isBackButton }) => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between p-4 bg-[#2C2320] text-white h-16 shrink-0">
      <button onClick={onLeftIconClick} className="p-2 -ml-2 text-2xl text-white/90 hover:text-white transition-colors">
        {isBackButton ? <BackIcon /> : <HamburgerIcon />}
      </button>
      <h1 className="text-lg font-bold font-serif uppercase tracking-wider">{title}</h1>
      <div className="w-10 h-10 flex items-center justify-end">
        {onRightIconClick && (
          <button onClick={onRightIconClick} className="p-2 -mr-2 text-xl text-white/90 hover:text-white transition-colors">
            <SettingsIcon />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;