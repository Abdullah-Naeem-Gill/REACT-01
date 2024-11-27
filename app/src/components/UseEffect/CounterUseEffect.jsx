import React, { useState, useEffect } from 'react';

const CounterUseEffect = () => {
  const [count, setCount] = useState(0);

  // Log the current count to the console whenever it changes
  useEffect(() => {
    console.log(`Current count: ${count}`);
  }, [count]); // Dependency array ensures effect runs only when 'count' changes

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex flex-col items-center bg-slate-500 text-white  justify-center h-screen ">
      <h1 className="text-3xl font-bold mb-4">Counter Application</h1>
      <p className="text-2xl mb-4">Count: {count}</p>
      <button
        onClick={increment}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Increment
      </button>
    </div>
  );
};

export default CounterUseEffect;
