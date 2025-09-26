'use client';

import { useState } from 'react';

// Multilingual Hello World data
const translations = [
  { language: 'English', greeting: 'Hello World', code: 'en' },
  { language: 'Spanish', greeting: 'Hola Mundo', code: 'es' },
  { language: 'French', greeting: 'Bonjour le Monde', code: 'fr' },
  { language: 'German', greeting: 'Hallo Welt', code: 'de' },
  { language: 'Italian', greeting: 'Ciao Mondo', code: 'it' },
  { language: 'Portuguese', greeting: 'Olá Mundo', code: 'pt' },
  { language: 'Chinese', greeting: '你好世界', code: 'zh' },
  { language: 'Japanese', greeting: 'こんにちは世界', code: 'ja' },
  { language: 'Korean', greeting: '안녕하세요 세계', code: 'ko' },
  { language: 'Russian', greeting: 'Привет мир', code: 'ru' },
  { language: 'Arabic', greeting: 'مرحبا بالعالم', code: 'ar' },
  { language: 'Hindi', greeting: 'नमस्ते दुनिया', code: 'hi' },
  { language: 'Dutch', greeting: 'Hallo Wereld', code: 'nl' },
  { language: 'Swedish', greeting: 'Hej Världen', code: 'sv' },
  { language: 'Polish', greeting: 'Witaj Świecie', code: 'pl' },
  { language: 'Turkish', greeting: 'Merhaba Dünya', code: 'tr' },
  { language: 'Greek', greeting: 'Γεια σου Κόσμε', code: 'el' },
  { language: 'Hebrew', greeting: 'שלום עולם', code: 'he' },
  { language: 'Thai', greeting: 'สวัสดีโลก', code: 'th' },
  { language: 'Vietnamese', greeting: 'Xin chào thế giới', code: 'vi' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTranslation = translations[currentIndex];

  const nextLanguage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % translations.length);
  };

  const prevLanguage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? translations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl w-full text-center">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Multilingual Hello World
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Cycle through greetings in 20 different languages
          </p>
        </div>

        {/* Language Counter */}
        <div className="mb-6">
          <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} of {translations.length}
          </span>
        </div>

        {/* Main Greeting Display */}
        <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
          <div className="mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-all duration-300">
              {currentTranslation.greeting}
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              {currentTranslation.language}
            </p>
          </div>

          {/* Language Code */}
          <div className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-md">
            <span className="text-xs font-mono text-gray-700 dark:text-gray-300">
              {currentTranslation.code}
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevLanguage}
            className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-full transition-colors duration-200 text-gray-700 dark:text-gray-200"
            aria-label="Previous language"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextLanguage}
            className="flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-full transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            <span className="mr-2">Next Language</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={nextLanguage}
            className="flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-full transition-colors duration-200 text-gray-700 dark:text-gray-200"
            aria-label="Next language"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            Testing local development → GitHub → Vercel workflow
          </p>
        </div>
      </div>
    </div>
  );
}