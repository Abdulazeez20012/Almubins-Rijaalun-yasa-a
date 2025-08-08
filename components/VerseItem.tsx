
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Verse } from '../types';
import { ICONS } from '../constants';

interface VerseItemProps {
  verse: Verse;
}

const VerseItem: React.FC<VerseItemProps> = ({ verse }) => {
    const context = useContext(AppContext);
    if(!context) return null;

    const { toggleActionModal, textSize } = context;

    const textSizeClass = {
        'Small': 'text-sm',
        'Medium': 'text-base',
        'Large': 'text-lg'
    }[textSize];


  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-start space-x-4">
        <span className="text-lg font-bold text-gray-400 w-8 text-center">{verse.number.toString().padStart(2, '0')}</span>
        <div className={`flex-1 space-y-1 text-gray-700 ${textSizeClass}`}>
            {verse.lines.map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
        <button onClick={() => toggleActionModal(verse)} className="text-gray-500 p-2 -mr-2">
            {ICONS.MORE}
        </button>
    </div>
  );
};

export default VerseItem;
