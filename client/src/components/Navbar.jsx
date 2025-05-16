import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex space-x-6">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
            }
          >
            CodeWatch
          </NavLink>
        </li>
        {isLoggedIn ? (
          <li>
            <NavLink
              to="/auth/user"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
              }
            >
              User
            </NavLink>
          </li>
        ) : (
          <>
            <li>
              <NavLink
                to="/auth/login"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/register"
                className={({ isActive }) =>
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'
                }
              >
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
