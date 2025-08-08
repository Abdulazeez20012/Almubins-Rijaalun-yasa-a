import React, { useState } from 'react';
import { Qasida, Verse } from '../types';
import { MoreIcon, HeartIcon } from '../components/Icons';
import VerseOptionsModal from '../components/VerseOptionsModal';
import { useAppContext } from '../contexts/AppContext';
import { TEXT_SIZE_CLASSES } from '../constants';

interface QasidaScreenProps {
  qasida: Qasida;
}

const VerseItem: React.FC<{ verse: Verse; index: number; onMoreClick: (verse: Verse) => void }> = ({ verse, index, onMoreClick }) => {
    const { isFavorite, textSize } = useAppContext();
    const isFav = isFavorite(verse.id);
    const sizeClasses = TEXT_SIZE_CLASSES[textSize];

    return (
        <div 
            className="flex items-start p-4 bg-white rounded-2xl shadow-sm space-x-4"
            style={{ '--stagger-index': index } as React.CSSProperties}
        >
            <div className="flex flex-col items-center space-y-1">
                <span className="text-lg font-bold font-serif text-[#2C2320]/60 w-8 text-center">{String(index + 1).padStart(2, '0')}</span>
                {isFav && <HeartIcon filled className="text-red-400/80 text-xs" />}
            </div>
            <div className={`flex-1 ${sizeClasses.base} ${sizeClasses.leading} pt-0.5`}>
                <p className="font-medium text-[#2C2320]">{verse.lines[0]}</p>
                <p className="text-gray-500">{verse.lines[1]}</p>
            </div>
            <button onClick={() => onMoreClick(verse)} className="text-gray-400 hover:text-gray-800 p-2 -mr-2 transition-colors">
                <MoreIcon className="text-xl rotate-90" />
            </button>
        </div>
    )
}

const QasidaScreen: React.FC<QasidaScreenProps> = ({ qasida }) => {
  const [selectedVerse, setSelectedVerse] = useState<Verse | null>(null);
  const [isOptionsOpen, setOptionsOpen] = useState(false);

  const handleMoreClick = (verse: Verse) => {
    setSelectedVerse(verse);
    setOptionsOpen(true);
  };

  const handleCloseModal = () => {
    setOptionsOpen(false);
    setSelectedVerse(null);
  };

  return (
    <div className="p-4 space-y-3.5 stagger-in">
        {qasida.verses.length > 0 ? (
             qasida.verses.map((verse, index) => (
                <VerseItem key={verse.id} verse={verse} index={index} onMoreClick={handleMoreClick} />
            ))
        ) : (
            <div className="text-center text-gray-500 pt-24 px-8">
                <p className="text-lg font-semibold">No Verses Yet</p>
                <p>The verses for this Qasida are not available at the moment.</p>
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

export default QasidaScreen;