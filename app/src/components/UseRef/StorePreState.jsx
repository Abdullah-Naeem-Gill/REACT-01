import React, { useState, useRef } from 'react';

const StorePreState = () => {
  const [count, setCount] = useState(0); // State to store the current count
  const prevCountRef = useRef(0); // useRef to store the previous count

  // Update the previous count when the count changes
  const handleIncrement = () => {
    prevCountRef.current = count; // Store the current count as previous count
    setCount(count + 1); // Increment the current count
  };

  return (
    <div className='flex justify-center h-screen '>
    <div className="h-96 w-96 flex flex-col items-center justify-center shadow-2xl  bg-gray-300">
      <h1 className="text-2xl font-bold mb-6">Counter with Previous Count</h1>
      <div className="mb-4">
        <span className="text-xl font-semibold">Current Count: {count}</span>
      </div>
      <div className="mb-4">
        <span className="text-xl font-semibold">Previous Count: {prevCountRef.current}</span>
      </div>
      <button
        onClick={handleIncrement}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Increment Count
      </button>
    </div>
    </div>
  );
};

export default StorePreState;
