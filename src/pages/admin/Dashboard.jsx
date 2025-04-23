import React from 'react';
import { Link } from 'react-router-dom';
import { UsersIcon, BookOpenIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import StatCard from '../../components/admin/StatCard';
import ActivityList from '../../components/admin/ActivityList';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: UsersIcon, color: 'bg-blue-500/10 text-blue-500' },
    { title: 'Active Courses', value: '45', icon: BookOpenIcon, color: 'bg-green-500/10 text-green-500' },
    { title: 'Total Revenue', value: '5,678 ICP', icon: CurrencyDollarIcon, color: 'bg-purple-500/10 text-purple-500' },
    { title: 'Active Instructors', value: '89', icon: UserGroupIcon, color: 'bg-yellow-500/10 text-yellow-500' }
  ];

  const recentActivities = [
    { type: 'New User', name: 'John Doe', time: '2 minutes ago' },
    { type: 'New Course', name: 'Web3 Basics', time: '1 hour ago' },
    { type: 'Purchase', name: 'Smart Contract Course', time: '3 hours ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="space-x-4">
            <Link 
              to="/admin/users" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200"
            >
              Manage Users
            </Link>
            <Link 
              to="/admin/courses" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-all duration-200"
            >
              Manage Courses
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <ActivityList activities={recentActivities} />
      </div>
    </div>
  );
};

export default AdminDashboard;