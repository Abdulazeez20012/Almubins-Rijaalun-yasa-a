import React from 'react';

const Logo: React.FC = () => (
    <div className="flex flex-col items-center justify-center animate-fade-in-logo">
        <div className="relative w-48 h-48">
            {/* The user's logo will be placed here. Using a placeholder for now. */}
            <img
                src="https://res.cloudinary.com/dwiewdn6f/image/upload/v1754643522/a57cead044f8d10e1256eb54258ab3879a81f1b0_r0nrft.png"
                alt="Rajulun Yas'a Logo"
                className="w-full h-full object-cover rounded-full animate-fade-in-man"
            />
        </div>
    </div>
);

const BackgroundPattern: React.FC = () => (
    <div
        className="absolute inset-0 opacity-0 animate-fade-in-bg"
        style={{
            backgroundColor: '#F9F6F2',
            backgroundImage: `radial-gradient(#2C2320 0.5px, transparent 0.5px), radial-gradient(#2C2320 0.5px, #F9F6F2 0.5px)`,
            backgroundSize: `20px 20px`,
            backgroundPosition: `0 0, 10px 10px`,
            opacity: 0.05,
        }}
    />
);


const SplashScreen: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-[#F9F6F2] text-gray-800 overflow-hidden">
            <BackgroundPattern />
            <div className="z-10 flex flex-col items-center justify-center flex-grow">
                <Logo />
            </div>
            <p className="z-10 pb-8 text-xs font-semibold tracking-[0.3em] text-[#2C2320]/50 animate-fade-in-footer">
                AAFAAKALLAH
            </p>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-logo { animation: fade-in 0.8s ease-out forwards; }
                .animate-fade-in-man { animation: fade-in 1s ease-out 0.5s forwards; opacity: 0; }
                .animate-fade-in-text { animation: fade-in 1s ease-out 1s forwards; opacity: 0; }
                .animate-fade-in-footer { animation: fade-in 1s ease-out 1.5s forwards; opacity: 0; }
                .animate-fade-in-bg { animation: fade-in 2s ease-out forwards; }
            `}</style>
        </div>
    );
};

export default SplashScreen;
