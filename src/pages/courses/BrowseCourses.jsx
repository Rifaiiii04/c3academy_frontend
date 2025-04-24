import React, { useState } from 'react';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import CourseCard from '../../components/home/CourseCard';

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
      rating: 4.9,
      students: 2156,
      price: '30',
      level: 'Beginner',
      slug: 'web3-fundamentals'
    },
    {
      id: 2,
      title: 'Smart Contract Development',
      instructor: 'Emma Wilson',
      rating: 4.8,
      students: 1789,
      price: '45',
      level: 'Intermediate',
      slug: 'smart-contract-development'
    },
    {
      id: 3,
      title: 'DeFi Protocol Engineering',
      instructor: 'Michael Chen',
      rating: 4.7,
      students: 1234,
      price: '50',
      level: 'Advanced',
      slug: 'defi-protocol-engineering'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Browse Our Courses</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the latest courses in Web3, blockchain, and cryptocurrency development. Learn from industry experts and advance your career.
          </p>
        </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
              showWishlist={true}
              variant="default"
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BrowseCourses;