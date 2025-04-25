import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import CourseCard from '../../components/home/CourseCard';

const Wishlist = () => {
  const wishlistCourses = [
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

  const handleRemoveFromWishlist = (courseId) => {
    // Handle removing course from wishlist
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center mb-8">
          <HeartIconSolid className="h-8 w-8 text-red-500 mr-3" />
          <h1 className="text-3xl font-bold">My Course list</h1>
        </div>

        {wishlistCourses.length === 0 ? (
          <div className="text-center py-12">
            <HeartIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-400 mb-6">Browse our courses and add your favorites to the wishlist</p>
            <Link to="/courses" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                showWishlist={false}
                showRemove={true}
                onRemove={() => handleRemoveFromWishlist(course.id)}
                variant="wishlist"
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;