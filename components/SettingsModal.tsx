import React from 'react';
import { TextSize } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { CloseIcon } from './Icons';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { textSize, setTextSize } = useAppContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-50 w-full max-w-md bg-white rounded-t-2xl shadow-2xl animate-slide-up">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-bold font-serif text-[#2C2320]">Settings</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 text-2xl p-2 -mr-2 rounded-full hover:bg-gray-200/50 transition-colors">
            <CloseIcon />
          </button>
        </div>
        <div className="px-4 pt-0 pb-6 space-y-2">
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-800 font-medium">Text size</span>
              <div className="flex items-center bg-[#EFEAE2] rounded-full p-1">
                  {(Object.values(TextSize) as Array<TextSize>).map((size) => (
                  <button
                      key={size}
                      onClick={() => setTextSize(size)}
                      className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 capitalize ${
                      textSize === size
                          ? 'bg-[#F9F6F2] text-[#2C2320] shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                      aria-pressed={textSize === size}
                  >
                      {size}
                  </button>
                  ))}
              </div>
            </div>
            
            <button className="flex items-center w-full text-left py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-gray-800 font-medium">Feedback</span>
            </button>

            <button className="flex items-center w-full text-left py-3 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-gray-800 font-medium">About Us</span>
            </button>
        </div>
      </div>
       <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
      `}</style>
    </div>
  );
};

export default SettingsModal;
