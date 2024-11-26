import React, { useState } from "react";

const Count = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div className="flex items-center justify-center h-screen">
  <div className="text-center border-2   border-black p-8 rounded-lg shadow-xl bg-gray-200">
    <h3 className="text-center text-blue-800 font-extrabold text-2xl md:text-3xl mt-4 mb-6 leading-tight shadow-sm">
      Your counter is {counter}
    </h3>
    <button onClick={()=>{setcounter(counter+1)}} className="border-2 border-black bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-600 hover:border-blue-600 transition duration-200 ease-in-out shadow-lg">
      Count up
    </button>
    <button onClick={()=>{setcounter(counter-1)}} className="border-2 border-black ml-5  bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 hover:border-red-600 transition duration-200 ease-in-out shadow-lg">
      Count down
    </button>
    <button onClick={()=>{setcounter(counter+5)}} className="border-2 border-black ml-5  bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 hover:border-green-600 transition duration-200 ease-in-out shadow-lg">
      Step 5
    </button>
  </div>
</div>

  );
};

export default Count;
