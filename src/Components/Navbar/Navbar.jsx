import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Authcontext } from '../Home/AuthProvider/AuthProvider';

const Navbar = () => {
  const { user,signoutUser } = useContext(Authcontext);

  

  return (
    <div className="navbar bg-[#00335c] shadow-md justify-between px-4 font-font">
      {/* Left Side: Brand Name */}
      <div className="navbar-start">
        <div className="flex items-center">
          <h1 className="font-bold text-xl text-white">BookNest</h1>
          <img
            className="w-10"
            src="https://img.icons8.com/?size=80&id=64656&format=png"
            alt="Logo"
          />
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul className="menu menu-sm dropdown-content mt-3 w-52 bg-white p-2 shadow-md rounded-box left-0 z-[1]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allbooks">All Books</NavLink></li>
            <li><NavLink to="/addbook">Add Books</NavLink></li>
            <li><NavLink to="/borodedBooks">Borrowed Books</NavLink></li>
            <li><NavLink to="/contact">COntact Us</NavLink></li>
          </ul>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allbooks"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            All Books
          </NavLink>
         {
          user && user?.email ?  <NavLink
          to="/addbook"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              : "text-white font-bold border-2 px-4 py-2 rounded-xl"
          }
        >
          Add Book
        </NavLink>  : ""
         }
         {
          user && user?.email ?  <NavLink
          to="/borodedBooks"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              : "text-white font-bold border-2 px-4 py-2 rounded-xl"
          }
        >
          Borrowed Books
        </NavLink> : ""
         }
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      {/* Right Side: Auth Buttons */}
      <div className="navbar-end">
        {user && user.email ? (
          <div className="flex items-center gap-2">

            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-blue-700"
                src={user.photoURL}
                alt="User Avatar"/>
              <div className="absolute top-full right-0 mt-2 hidden group-hover:flex flex-col items-center bg-gray-800 text-white text-sm rounded-lg px-4 py-3 shadow-lg z-50">
                {user.displayName ? (
                  <>
                    <p className="font-bold mb-2">{user.displayName}</p>
                    <Link
                      onClick={signoutUser}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1 rounded"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <p className="text-gray-400">User Name Not Found</p>
                )}
              </div>
            </div>

            <Link
              onClick={signoutUser}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded"
            >
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
