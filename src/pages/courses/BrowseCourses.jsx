import React, { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const BrowseCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All',
    'Web3 Development',
    'Smart Contracts',
    'DeFi',
    'Blockchain',
    'NFTs',
    'Cryptocurrency'
  ];

  const courses = [
    {
      id: 1,
      title: 'Web3 Development Fundamentals',
      instructor: 'John Smith',
      rating: 4.8,
      students: 1234,
      price: '299 ICP',
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Web3',
      category: 'Web3 Development',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Smart Contract Development with Solidity',
      instructor: 'Jane Doe',
      rating: 4.9,
      students: 856,
      price: '399 ICP',
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Smart+Contracts',
      category: 'Smart Contracts',
      level: 'Intermediate'
    },
    // Add more courses as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Our Courses</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the latest courses in Web3, blockchain, and cryptocurrency development. Learn from industry experts and advance your career.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full bg-gray-800 text-gray-300 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <MagnifyingGlassIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="bg-gray-800 text-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
              <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700">
                <AdjustmentsHorizontalIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary">{course.category}</span>
                  <span className="text-sm text-gray-400">{course.level}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-4">by {course.instructor}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span>{course.rating}</span>
                    <span className="text-gray-400 text-sm ml-2">({course.students} students)</span>
                  </div>
                  <span className="font-semibold">{course.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseCourses;