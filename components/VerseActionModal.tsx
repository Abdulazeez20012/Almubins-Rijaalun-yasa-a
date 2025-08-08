
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { ICONS } from '../constants';

const VerseActionModal: React.FC = () => {
  const context = useContext(AppContext);
  const [copied, setCopied] = useState(false);

  if (!context) return null;

  const { isActionModalOpen, toggleActionModal, selectedVerse, addFavorite, removeFavorite, isFavorite } = context;

  if (!isActionModalOpen || !selectedVerse) return null;

  const isFav = isFavorite(selectedVerse.id);

  const handleFavoriteClick = () => {
    if(isFav) {
        removeFavorite(selectedVerse.id);
    } else {
        addFavorite(selectedVerse.id);
    }
    toggleActionModal();
  }

  const handleCopyClick = () => {
    const verseText = `${selectedVerse.poemTitle} - Verse ${selectedVerse.number}\n${selectedVerse.lines.join('\n')}`;
    navigator.clipboard.writeText(verseText).then(() => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
            toggleActionModal();
        }, 1500);
    });
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end" onClick={() => toggleActionModal()}>
      <div className="bg-white rounded-t-2xl w-full max-w-[420px] p-6 pt-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-end items-center mb-4">
            <button onClick={() => toggleActionModal()}>{ICONS.CLOSE}</button>
        </div>
        
        <div className="flex flex-col space-y-2">
           <button onClick={handleFavoriteClick} className="flex items-center p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg w-full">
                {isFav ? ICONS.HEART_SOLID : ICONS.HEART}
                <span>{isFav ? 'Remove from favorites' : 'Add to favorites'}</span>
            </button>
            <button onClick={handleCopyClick} className="flex items-center p-3 text-lg text-gray-700 hover:bg-gray-100 rounded-lg w-full">
                {ICONS.COPY}
                <span>{copied ? 'Copied!' : 'Copy as text'}</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default VerseActionModal;
