import React from 'react';
import { UserCircleIcon, AcademicCapIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null, // URL for user avatar
    joinedDate: 'January 2024',
    coursesEnrolled: 3,
    coursesCompleted: 1,
    averageRating: 4.8,
    isInstructor: false, // Add this field
    pendingInstructorApplication: false // Add this field
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Web3 Development Fundamentals',
      progress: 80,
      lastAccessed: '2 days ago',
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Web3'
    },
    {
      id: 2,
      title: 'Smart Contract Development',
      progress: 45,
      lastAccessed: '1 week ago',
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Smart+Contracts'
    },
    {
      id: 3,
      title: 'DeFi Protocol Engineering',
      progress: 20,
      lastAccessed: '3 days ago',
      image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=DeFi'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Profile Header */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              {userProfile.avatar ? (
                <img src={userProfile.avatar} alt={userProfile.name} className="w-24 h-24 rounded-full" />
              ) : (
                <UserCircleIcon className="w-24 h-24 text-gray-400" />
              )}
              <div>
                <h1 className="text-3xl font-bold">{userProfile.name}</h1>
                <p className="text-gray-400">{userProfile.email}</p>
                <p className="text-sm text-gray-500 mt-1">Member since {userProfile.joinedDate}</p>
              </div>
            </div>
            
            {!userProfile.isInstructor && !userProfile.pendingInstructorApplication && (
              <Link
                to="/become-instructor"
                className="flex items-center px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition-all"
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                Become an Instructor
              </Link>
            )}
            
            {userProfile.isInstructor && (
              <Link
                to="/instructor/dashboard"
                className="px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition-all"
              >
                Instructor Dashboard
              </Link>
            )}
            
            {userProfile.pendingInstructorApplication && (
              <span className="text-yellow-500">Application Under Review</span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <AcademicCapIcon className="w-8 h-8 text-primary" />
              <div>
                <p className="text-gray-400">Courses Enrolled</p>
                <p className="text-2xl font-bold">{userProfile.coursesEnrolled}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <StarIcon className="w-8 h-8 text-yellow-500" />
              <div>
                <p className="text-gray-400">Average Rating</p>
                <p className="text-2xl font-bold">{userProfile.averageRating}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <ClockIcon className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-gray-400">Completed Courses</p>
                <p className="text-2xl font-bold">{userProfile.coursesCompleted}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-gray-800 rounded-xl overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{course.title}</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">Last accessed {course.lastAccessed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;