import React, { useState, useMemo } from 'react';
import { QASIDAS } from '../constants';
import { Verse } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { MoreIcon, HeartIcon } from '../components/Icons';
import VerseOptionsModal from '../components/VerseOptionsModal';
import { TEXT_SIZE_CLASSES } from '../constants';


const FavoriteVerseItem: React.FC<{ verse: Verse; qasidaTitle: string; onMoreClick: (verse: Verse) => void; index: number }> = ({ verse, qasidaTitle, onMoreClick, index }) => {
    const { textSize } = useAppContext();
    const sizeClasses = TEXT_SIZE_CLASSES[textSize];

    return (
        <div 
            className="p-4 bg-white rounded-2xl shadow-sm"
            style={{ '--stagger-index': index } as React.CSSProperties}
        >
            <div className="flex items-start space-x-4">
                <div className={`flex-1 ${sizeClasses.base} ${sizeClasses.leading}`}>
                    <p className="font-medium text-[#2C2320]">{verse.lines[0]}</p>
                    <p className="text-gray-500">{verse.lines[1]}</p>
                    <p className="text-xs text-amber-600/80 font-semibold mt-3 uppercase tracking-wider">{qasidaTitle}</p>
                </div>
                <button onClick={() => onMoreClick(verse)} className="text-gray-400 hover:text-gray-800 p-2 -mr-2 transition-colors">
                    <MoreIcon className="text-xl rotate-90" />
                </button>
            </div>
        </div>
    )
};


const FavoritesScreen: React.FC = () => {
  const { favorites } = useAppContext();
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);
  const [isOptionsOpen, setOptionsOpen] = useState(false);

  const favoriteVerses = useMemo(() => {
    const allVersesWithQasida = QASIDAS.flatMap(qasida => 
        qasida.verses.map(verse => ({ ...verse, qasidaTitle: qasida.title }))
    );
    return allVersesWithQasida.filter(verse => favorites.includes(verse.id));
  }, [favorites]);

  const handleMoreClick = (verse: Verse) => {
    setSelectedVerse(verse);
    setOptionsOpen(true);
  };
  
  const handleCloseModal = () => {
    setOptionsOpen(false);
    setSelectedVerse(null);
  };

  return (
    <div className="p-4 space-y-3.5">
      {favoriteVerses.length > 0 ? (
        <div className="space-y-3.5 stagger-in">
        {favoriteVerses.map((verse, index) => (
          <FavoriteVerseItem
            key={verse.id}
            verse={verse}
            qasidaTitle={verse.qasidaTitle}
            onMoreClick={handleMoreClick}
            index={index}
          />
        ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 pt-24 px-8 flex flex-col items-center">
          <HeartIcon className="text-7xl text-gray-300 mb-4" />
          <p className="text-lg font-semibold font-serif text-[#2C2320]">No Favorites Yet</p>
          <p className="mt-1">Tap the options icon on a verse to add it to your favorites.</p>
        </div>
      )}
      <VerseOptionsModal
        verse={selectedVerse}
        isOpen={isOptionsOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default FavoritesScreen;