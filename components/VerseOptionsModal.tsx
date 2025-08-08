import React from 'react';
import { Verse } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { CloseIcon, HeartIcon, CopyIcon } from './Icons';

interface VerseOptionsModalProps {
  verse: Verse | null;
  isOpen: boolean;
  onClose: () => void;
}

const VerseOptionsModal: React.FC<VerseOptionsModalProps> = ({ verse, isOpen, onClose }) => {
  const { isFavorite, toggleFavorite } = useAppContext();

  if (!isOpen || !verse) return null;

  const handleCopy = () => {
    const textToCopy = verse.lines.join('\n');
    navigator.clipboard.writeText(textToCopy).then(() => {
      onClose();
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy verse.');
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(verse.id);
    onClose();
  };

  const favorite = isFavorite(verse.id);

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-50 w-full max-w-md bg-[#F9F6F2] rounded-t-2xl shadow-lg p-4 animate-slide-up">
        <div className="p-4 pt-0 text-center relative">
            <div className="mx-auto w-12 h-1.5 bg-gray-300 rounded-full mb-4" />
            <button onClick={onClose} className="absolute top-0 right-0 text-gray-500 hover:text-gray-900 text-2xl p-2 rounded-full hover:bg-gray-200/50 transition-colors">
                <CloseIcon />
            </button>
        </div>
        <ul className="mt-2">
          <li>
            <button onClick={handleToggleFavorite} className="flex items-center w-full p-3.5 text-lg text-gray-800 rounded-lg hover:bg-gray-200/50 transition-colors">
              <HeartIcon filled={favorite} className={`mr-4 text-2xl transition-colors ${favorite ? 'text-red-500' : 'text-gray-500'}`} />
              {favorite ? 'Remove from favorites' : 'Add to favorites'}
            </button>
          </li>
          <li>
            <button onClick={handleCopy} className="flex items-center w-full p-3.5 text-lg text-gray-800 rounded-lg hover:bg-gray-200/50 transition-colors">
              <CopyIcon className="mr-4 text-2xl text-gray-500" />
              Copy as text
            </button>
          </li>
        </ul>
      </div>
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0;}
          to { transform: translateY(0); opacity: 1;}
        }
        .animate-slide-up { animation: slide-up 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
      `}</style>
    </div>
  );
};

export default VerseOptionsModal;