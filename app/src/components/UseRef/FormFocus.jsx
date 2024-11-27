import React, { useRef } from 'react';

const FormFocus = () => {
  const inputRef = useRef(null); // Create a ref for the input field

  const handleFocus = () => {
    inputRef.current.focus(); // Focus on the input field when the button is clicked
  };

  return (
    <div className='flex items-center justify-center  h-screen'>
    <div className="h-96 w-96 flex flex-col items-center justify-center shadow-2xl bg-white rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Focus Input Field</h1>
      <input
        ref={inputRef} // Attach the ref to the input field
        type="text"
        placeholder="Type something..."
        className="border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleFocus} // Handle focus on button click
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Focus Input
      </button>
    </div>
    </div>
  );
};

export default FormFocus;
