import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircleIcon, 
  ChevronDownIcon, 
  HeartIcon,
  AcademicCapIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">C3Academy</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/courses" 
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <BookOpenIcon className="h-6 w-6 mr-1" />
              <span className="hidden sm:inline">Browse Courses</span>
            </Link>
            <Link 
              to="/my-learning" 
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <AcademicCapIcon className="h-6 w-6 mr-1" />
              <span className="hidden sm:inline">My Learning</span>
            </Link>
            <Link 
              to="/wishlist" 
              className="flex items-center text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <HeartIcon className="h-6 w-6 mr-1" />
              <span className="hidden sm:inline">Wishlist</span>
            </Link>
            <Link to="/admin/dashboard" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Admin
            </Link>
            
            {/* User Menu Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <UserCircleIcon className="h-6 w-6" />
                <ChevronDownIcon className="h-4 w-4" />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/register"
              className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;