import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Authcontext } from "../Home/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user,signoutUser } = useContext(Authcontext);

  

  return (
    <div className="navbar bg-[#00335c] shadow-md justify-between px-4 font-font">
      {/* Left Side: User Name */}
      <div className="navbar-start">
        {user && user.displayName ? (
          <h1 className="text-white font-bold text-xl">
            Welcome, {user.displayName}
          </h1>
        ) : (
          <h1 className="text-white font-bold text-xl">Welcome, Guest</h1>
        )}
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

      {/* Right Side: Login, Register, and Logout Buttons */}
      <div className="navbar-end flex items-center gap-2">
        {user && user.email ? (
          <div className="flex items-center gap-2">

            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-blue-700"
                src={user.photoURL}
                alt="User Avatar"
              />
              <div className="absolute top-full mt-2 hidden group-hover:flex flex-col items-center bg-gray-800 text-white text-sm rounded-lg px-4 py-3 shadow-lg z-50">
                <p className="font-bold mb-2 text-white">{user.displayName}</p>
                <Link
                  onClick={signoutUser}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1 rounded"
                >
                  Logout
                </Link>
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
