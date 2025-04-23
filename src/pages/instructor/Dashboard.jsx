import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon, BookOpenIcon, UsersIcon, CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const InstructorDashboard = () => {
  const stats = [
    { title: 'Total Students', value: '1,234', icon: UsersIcon, color: 'text-blue-500' },
    { title: 'Active Courses', value: '5', icon: BookOpenIcon, color: 'text-green-500' },
    { title: 'Total Revenue', value: '5,678 ICP', icon: CurrencyDollarIcon, color: 'text-purple-500' },
    { title: 'Average Rating', value: '4.8', icon: ChartBarIcon, color: 'text-yellow-500' }
  ];

  const courses = [
    {
      id: 1,
      title: 'Web3 Development Fundamentals',
      students: 456,
      earnings: '1,234 ICP',
      rating: 4.8,
      status: 'published',
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'Smart Contract Development',
      students: 328,
      earnings: '987 ICP',
      rating: 4.7,
      status: 'draft',
      lastUpdated: '1 week ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
          <Link
            to="/instructor/courses/new"
            className="flex items-center px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition-all"
          >
            <PlusIcon className="w-5 h-5 mr-2" />
            Create New Course
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6">
              <div className="flex items-center space-x-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <div>
                  <p className="text-gray-400">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Table */}
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-700">
            <h2 className="text-xl font-semibold">Your Courses</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Course</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Students</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Earnings</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Rating</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-sm text-gray-400">Last updated {course.lastUpdated}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{course.students}</td>
                    <td className="px-6 py-4">{course.earnings}</td>
                    <td className="px-6 py-4">{course.rating}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        course.status === 'published' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/instructor/courses/${course.id}/edit`}
                        className="text-primary hover:text-primary/80"
                      >
                        Edit
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InstructorDashboard;