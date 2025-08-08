import React from 'react';
import { QASIDAS } from '../constants';
import { HeartIcon } from '../components/Icons'; // Using HeartIcon as a decorative element

interface HomeScreenProps {
  onSelectQasida: (qasidaId: string) => void;
}

const QasidaCard: React.FC<{ title: string; onClick: () => void; index: number }> = ({ title, onClick, index }) => (
  <button
    onClick={onClick}
    className="w-full text-left p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 focus:shadow-lg focus:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-between group"
    style={{ '--stagger-index': index } as React.CSSProperties}
  >
    <span className="font-semibold text-base tracking-wide text-gray-800 uppercase">
      {title}
    </span>
    <svg className="w-6 h-6 text-gray-300 group-hover:text-[#D4AF37] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
  </button>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectQasida }) => {
  return (
    <div className="p-4 space-y-3 stagger-in">
       <div className="px-2 pb-2">
            <h1 className="text-2xl font-bold font-serif text-[#2C2320]">Qasidas</h1>
            <p className="text-gray-500">Select a poem to begin reading.</p>
        </div>
      {QASIDAS.map((qasida, index) => (
        <QasidaCard
          key={qasida.id}
          title={qasida.title}
          onClick={() => onSelectQasida(qasida.id)}
          index={index}
        />
      ))}
    </div>
  );
};

export default HomeScreen;