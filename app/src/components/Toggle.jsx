import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="border-2 border-black ml-5  bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 hover:border-red-600 transition duration-200 ease-in-out shadow-lg"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "on" : "off"}
      </button>
    </div>
  );
};

export default Toggle;
