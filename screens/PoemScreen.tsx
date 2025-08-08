
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Poem } from '../types';
import Header from '../components/Header';
import VerseItem from '../components/VerseItem';

interface PoemScreenProps {
  poem: Poem;
}

const PoemScreen: React.FC<PoemScreenProps> = ({ poem }) => {
  const context = useContext(AppContext);
  if(!context) return null;

  const { setView, setSelectedPoemId } = context;

  const handleBack = () => {
    setSelectedPoemId(null);
    setView('home');
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Header 
        title={poem.title} 
        onBackClick={handleBack} 
      />
      <main className="flex-grow p-4 overflow-y-auto scrollbar-hide">
        <div className="space-y-4">
          {poem.verses.map(verse => (
            <VerseItem key={verse.id} verse={verse} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PoemScreen;
