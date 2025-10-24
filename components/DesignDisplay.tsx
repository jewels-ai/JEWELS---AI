
import React from 'react';
import { GemIcon } from './icons';

interface DesignDisplayProps {
  generatedImage: string | null;
  isLoading: boolean;
  error: string | null;
}

const loadingMessages = [
  "Sketching the initial design...",
  "Selecting the perfect gems...",
  "Polishing the fine details...",
  "Capturing the studio lighting...",
  "Crafting your unique piece...",
];

export const DesignDisplay: React.FC<DesignDisplayProps> = ({ generatedImage, isLoading, error }) => {
    const [loadingMessage, setLoadingMessage] = React.useState(loadingMessages[0]);

    React.useEffect(() => {
        if (isLoading) {
            setLoadingMessage(loadingMessages[0]);
            const interval = setInterval(() => {
                setLoadingMessage(prev => {
                    const currentIndex = loadingMessages.indexOf(prev);
                    const nextIndex = (currentIndex + 1) % loadingMessages.length;
                    return loadingMessages[nextIndex];
                });
            }, 2500);
            return () => clearInterval(interval);
        }
    }, [isLoading]);

    return (
        <div className="w-full h-full min-h-[400px] md:min-h-0 bg-gray-800/40 border border-gray-700 rounded-lg flex items-center justify-center p-4 relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-gray-700/[0.2] [mask-image:linear-gradient(to_bottom,white_5%,transparent_95%)]"></div>
            
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                {isLoading ? (
                    <div className="flex flex-col items-center text-gray-300">
                        <GemIcon className="w-16 h-16 text-cyan-500 animate-spin-slow" />
                        <p className="mt-4 text-lg font-semibold">Generating Masterpiece</p>
                        <p className="text-gray-400 mt-1 transition-opacity duration-500">{loadingMessage}</p>
                    </div>
                ) : error ? (
                    <div className="text-red-300 p-4 bg-red-900/50 rounded-lg border border-red-700">
                        <p className="font-bold text-lg">An Error Occurred</p>
                        <p className="mt-2 text-sm max-w-sm">{error}</p>
                    </div>
                ) : generatedImage ? (
                    <img 
                        src={generatedImage} 
                        alt="AI-generated jewelry design"
                        className="w-full h-full object-contain rounded-lg shadow-2xl shadow-cyan-900/20 animate-fade-in"
                    />
                ) : (
                    <div className="flex flex-col items-center text-gray-500">
                        <GemIcon className="w-20 h-20" />
                        <h3 className="mt-4 text-xl font-bold">Your Design Appears Here</h3>
                        <p className="mt-1 max-w-xs">
                            Use the panel on the left to describe the jewelry you want to create.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
