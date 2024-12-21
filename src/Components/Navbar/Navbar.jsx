import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-[#00335c] shadow-md justify-between md:px-4 font-font">
      {/* Left Side: Logo */}
      <div className="navbar-start w-0">
        {/* Dropdown for Mobile */}
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
          <ul className="menu menu-sm dropdown-content mt-3 w-52 bg-white p-2 shadow-md rounded-box z-[1]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allbooks">All Books</NavLink></li>
            <li><NavLink to="/addbook">Add Books</NavLink></li>
            <li><NavLink to="/borodedBooks">Borrowed Books</NavLink></li>
          </ul>
        </div>

        <div className="flex items-center ">
          <h1 className="font-bold text-xl text-white px-2">BookNest</h1>
          <img
            className="w-10"
            src="https://img.icons8.com/?size=80&id=64656&format=png"
            alt="Logo"
          />
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="navbar-center hidden lg:flex items-center justify-center">
        <ul className="menu menu-horizontal px-1 space-x-6">
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
        <NavLink
          to="/addbook"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              : "text-white font-bold border-2 px-4 py-2 rounded-xl"
          }
        >
          Add Book
        </NavLink>
        <NavLink
          to="/borodedBooks"
          className={({ isActive }) =>
            isActive
              ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              : "text-white font-bold border-2 px-4 py-2 rounded-xl"
          }
        >
          Borrowed Books
        </NavLink>
        </ul>
      </div>

      {/* Right Side: Login and Register */}
      <div className="flex items-center gap-2">
        <Link
          to="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-all duration-300"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-all duration-300"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
