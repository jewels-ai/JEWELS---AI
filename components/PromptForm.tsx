
import React from 'react';
import { SparkleIcon } from './icons';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const inspirationPrompts = [
  "An art deco engagement ring with a central emerald and diamond accents on a platinum band.",
  "A delicate gold necklace with a ruby pendant shaped like a hummingbird.",
  "A pair of silver earrings inspired by crashing ocean waves, with small pearls.",
  "A bold titanium bracelet with geometric patterns, for men."
];

export const PromptForm: React.FC<PromptFormProps> = ({ prompt, setPrompt, onSubmit, isLoading }) => {

  const handlePromptClick = (inspiration: string) => {
    setPrompt(inspiration);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(prompt);
  };
  
  return (
    <div className="w-full flex flex-col space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-100 mb-2">Describe Your Vision</h2>
        <p className="text-gray-400">
          Be as descriptive as you like. Mention materials, stones, style, and any other details.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., A vintage-style silver locket with intricate floral engravings..."
          className="w-full h-32 p-4 bg-gray-900/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 resize-none text-gray-200 placeholder-gray-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="w-full flex items-center justify-center px-6 py-3 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
        >
          <SparkleIcon className="w-5 h-5 mr-2" />
          {isLoading ? 'Designing...' : 'Generate Design'}
        </button>
      </form>
      
      <div>
        <h3 className="text-lg font-medium text-gray-300 mb-3">Need Inspiration?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {inspirationPrompts.map((p, index) => (
            <button
              key={index}
              onClick={() => handlePromptClick(p)}
              disabled={isLoading}
              className="text-left text-sm p-3 bg-gray-800/70 hover:bg-gray-700/70 rounded-md transition-colors duration-200 text-gray-400 disabled:opacity-50"
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
