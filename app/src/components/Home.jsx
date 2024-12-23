import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-300 to-blue-500 text-white text-center">
      <h1 className="text-6xl font-bold mb-4">Welcome to the React App</h1>
      <p className="text-xl mb-8">
        Explore various features and examples of React components and concepts.
      </p>
      <div className="flex space-x-4">
        <Link
          to="/theme"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Explore Themes
        </Link>
        <Link
          to="/todo"
          className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          View Todos
        </Link>
        <Link
          to="/form"
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          Forms
        </Link>
      </div>
    </div>
  );
};

export default Home;
