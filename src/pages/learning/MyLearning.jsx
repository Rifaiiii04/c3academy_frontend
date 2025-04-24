import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AcademicCapIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import LearningCourseCard from '../../components/learning/LearningCourseCard';

const MyLearning = () => {
  const [activeTab, setActiveTab] = useState('inProgress');
  
  const enrolledCourses = [
    {
      id: 1,
      title: 'Web3 Development Fundamentals',
      instructor: 'John Smith',
      rating: 4.9,
      students: 2156,
      price: '30',
      level: 'Beginner',
      slug: 'web3-fundamentals',
      progress: 45,
      lastAccessed: '2023-12-15'
    },
    {
      id: 2,
      title: 'Smart Contract Development',
      instructor: 'Emma Wilson',
      rating: 4.8,
      students: 1789,
      price: '45',
      level: 'Intermediate',
      slug: 'smart-contract-development',
      progress: 20,
      lastAccessed: '2023-12-10'
    }
  ];

  const completedCourses = [
    {
      id: 3,
      title: 'Blockchain Basics',
      instructor: 'Michael Chen',
      rating: 4.7,
      students: 3245,
      price: '25',
      level: 'Beginner',
      slug: 'blockchain-basics',
      progress: 100,
      completedDate: '2023-11-20'
    }
  ];

  const renderCourseList = () => {
    const courses = activeTab === 'inProgress' ? enrolledCourses : completedCourses;
    
    if (courses.length === 0) {
      return (
        <div className="text-center py-12">
          <AcademicCapIcon className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">
            {activeTab === 'inProgress' 
              ? "You haven't enrolled in any courses yet" 
              : "You haven't completed any courses yet"}
          </h2>
          <p className="text-gray-400 mb-6">
            {activeTab === 'inProgress'
              ? "Browse our courses and start your learning journey"
              : "Keep learning to complete your enrolled courses"}
          </p>
          <Link to="/courses" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-all">
            Browse Courses
          </Link>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <LearningCourseCard 
            key={course.id} 
            course={course} 
            isCompleted={activeTab === 'completed'} 
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center mb-8">
          <AcademicCapIcon className="h-8 w-8 text-primary mr-3" />
          <h1 className="text-3xl font-bold">My Learning</h1>
        </div>

        <div className="mb-8">
          <div className="border-b border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('inProgress')}
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'inProgress'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                In Progress
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`mr-8 py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                Completed
              </button>
            </nav>
          </div>
        </div>

        {renderCourseList()}
      </div>

      <Footer />
    </div>
  );
};

export default MyLearning;