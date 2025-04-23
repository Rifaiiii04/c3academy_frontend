import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpenIcon, 
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline';

const InstructorLayout = ({ children }) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/instructor', icon: ChartBarIcon },
    { name: 'My Courses', href: '/instructor/courses', icon: BookOpenIcon },
    { name: 'Students', href: '/instructor/students', icon: UsersIcon },
    { name: 'Earnings', href: '/instructor/earnings', icon: CurrencyDollarIcon },
    { name: 'Settings', href: '/instructor/settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 min-h-screen fixed">
          <div className="p-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">C3Academy</span>
            </Link>
          </div>
          <nav className="mt-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium ${
                  location.pathname === item.href
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-64">
          <div className="p-8">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InstructorLayout;