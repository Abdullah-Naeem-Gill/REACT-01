import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider'; // Import ThemeContext

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Consume ThemeContext

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center ${
        theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
      }`}
    >
      <h1 className="text-4xl font-bold mb-4">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;
