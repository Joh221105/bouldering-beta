import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Bouldering Beta</h1>
          </div>

          {/* Main Links */}
          <div className="flex space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              to="/community"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Communities
            </Link>
            <Link
              to="/create"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Create Post
            </Link>
            <Link
              to="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Profile
            </Link>
            <Link
              to="/search"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Search
            </Link>
          </div>

          {/* Sign up and Login */}
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="px-3 py-2 bg-green-500 text-sm font-medium rounded-md hover:bg-green-400"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-3 py-2 bg-blue-500 text-sm font-medium rounded-md hover:bg-blue-400"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
