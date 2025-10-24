
import React, { useState, useCallback } from 'react';
import { PromptForm } from './components/PromptForm';
import { DesignDisplay } from './components/DesignDisplay';
import { generateJewelryImage } from './services/geminiService';
import { GemIcon } from './components/icons';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (currentPrompt: string) => {
    if (!currentPrompt || isLoading) return;

    setIsLoading(true);
    setError(null);
    setGeneratedImage(null);

    try {
      const imageUrl = await generateJewelryImage(currentPrompt);
      setGeneratedImage(imageUrl);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 backdrop-blur-3xl [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <main className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <header className="text-center mb-10">
            <div className="flex justify-center items-center gap-4">
                <GemIcon className="w-10 h-10 text-cyan-400"/>
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
                    Gemvision AI Designer
                </h1>
            </div>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Instantly visualize custom jewelry from a simple description. The perfect tool for client consultations.
            </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800/40 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
            <PromptForm 
              prompt={prompt}
              setPrompt={setPrompt}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>
          <div className="h-full">
            <DesignDisplay 
              generatedImage={generatedImage}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>Powered by Google Gemini. Designs are for conceptual purposes.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
