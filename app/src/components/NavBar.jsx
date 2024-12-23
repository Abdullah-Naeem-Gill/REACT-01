import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-800">React App</div>
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/theme"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Theme
          </NavLink>
          <NavLink
            to="/form-focus"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Form Focus
          </NavLink>
          <NavLink
            to="/store-pre-state"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Store PreState
          </NavLink>
          <NavLink
            to="/counter-use-effect"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Counter UseEffect
          </NavLink>
          <NavLink
            to="/todo"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Todo
          </NavLink>
          <NavLink
            to="/form"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Form
          </NavLink>
          <NavLink
            to="/count"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Count
          </NavLink>
          <NavLink
            to="/data-fetch"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            DataFetch
          </NavLink>
          <NavLink
            to="/toggle"
            className={({ isActive }) =>
              `transition duration-300 ${
                isActive
                  ? 'text-white bg-red-500 px-3 py-1 rounded'
                  : 'text-blue-700 hover:text-white hover:bg-red-500 px-3 py-1 rounded'
              }`
            }
          >
            Toggle
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
