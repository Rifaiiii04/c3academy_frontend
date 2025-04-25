import React, { useState } from 'react';
import { UserCircleIcon, AcademicCapIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';
import WalletConnector from '../../components/wallet/WalletConnector';
import StatCard from '../../components/profile/StatCard';
import LearningCourseCard from '../../components/learning/LearningCourseCard';

const Profile = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  
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

  // Update the enrolledCourses to match the format expected by LearningCourseCard
  const enrolledCourses = [
    {
      id: 1,
      title: 'Web3 Development Fundamentals',
      instructor: 'John Smith',
      rating: 4.9,
      students: 2156,
      level: 'Beginner',
      slug: 'web3-fundamentals',
      progress: 80,
      lastAccessed: '2 days ago'
    },
    {
      id: 2,
      title: 'Smart Contract Development',
      instructor: 'Emma Wilson',
      rating: 4.8,
      students: 1789,
      level: 'Intermediate',
      slug: 'smart-contract-development',
      progress: 45,
      lastAccessed: '1 week ago'
    },
    {
      id: 3,
      title: 'DeFi Protocol Engineering',
      instructor: 'Michael Chen',
      rating: 4.7,
      students: 3245,
      level: 'Advanced',
      slug: 'defi-protocol-engineering',
      progress: 20,
      lastAccessed: '3 days ago'
    }
  ];

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
      } else {
        alert('Please install MetaMask or another Web3 wallet to connect');
      }
    } catch (error) {
      console.error('Error connecting to wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress('');
    setIsWalletConnected(false);
  };

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
                
                {isWalletConnected && (
                  <div className="mt-2 flex items-center">
                    <span className="text-sm text-green-400">
                      {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <WalletConnector 
                isConnected={isWalletConnected}
                address={walletAddress}
                onConnect={connectWallet}
                onDisconnect={disconnectWallet}
              />
              
              {!userProfile.isInstructor && !userProfile.pendingInstructorApplication && (
                <Link
                  to="/become-instructor"
                  className="flex items-center px-4 py-2 bg-primary hover:bg-primary/90 rounded-lg transition-all"
                >
                  <PlusIcon className="w-5 h-5 mr-2" />
                  Become an Instructor
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            icon={AcademicCapIcon} 
            title="Courses Enrolled" 
            value={userProfile.coursesEnrolled} 
            iconColor="text-primary" 
          />
          <StatCard 
            icon={StarIcon} 
            title="Average Rating" 
            value={userProfile.averageRating} 
            iconColor="text-yellow-500" 
          />
          <StatCard 
            icon={ClockIcon} 
            title="Completed Courses" 
            value={userProfile.coursesCompleted} 
            iconColor="text-green-500" 
          />
        </div>

        {/* Enrolled Courses - updated to use LearningCourseCard */}
        <div>
          <h2 className="text-2xl font-bold mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => (
              <LearningCourseCard 
                key={course.id} 
                course={course} 
                isCompleted={false} 
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;