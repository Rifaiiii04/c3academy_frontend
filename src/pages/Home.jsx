import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, AcademicCapIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CourseCard from '../components/home/CourseCard';

const Home = () => {
  const features = [
    {
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of Web3 experience',
      icon: AcademicCapIcon,
    },
    {
      title: 'Pay with ICP',
      description: 'Seamless payments using Internet Computer Protocol tokens',
      icon: CurrencyDollarIcon,
    },
    {
      title: 'Community Driven',
      description: 'Join a growing community of Web3 developers and enthusiasts',
      icon: UserGroupIcon,
    },
  ];

  const popularCourses = [
    {
      title: "Web3 Development Fundamentals",
      instructor: "John Smith",
      price: "30",
      rating: "4.9",
      students: "2,156",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Web3",
      level: "Beginner",
      slug: "web3-fundamentals"
    },
    {
      title: "Smart Contract Development",
      instructor: "Emma Wilson",
      price: "45",
      rating: "4.8",
      students: "1,789",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Smart+Contracts",
      level: "Intermediate",
      slug: "smart-contracts"
    },
    {
      title: "DeFi Protocol Engineering",
      instructor: "Michael Chen",
      price: "50",
      rating: "4.7",
      students: "1,234",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=DeFi",
      level: "Advanced",
      slug: "defi-engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section - update top padding */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6">
              Elevate Your Tech Skills
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              From Web3 to full-stack development - master modern programming with C3Academy
            </p>
            <div className="space-x-4">
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all"
              >
                Start Learning
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-500 hover:border-primary text-white rounded-full font-semibold transition-all"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose C3Academy?</h2>
          <p className="text-gray-400">Your gateway to becoming a Web3 developer</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Courses</h2>
          <p className="text-gray-400">Start your Web3 journey with our top-rated courses</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-3 border-2 border-primary hover:bg-primary text-white rounded-full font-semibold transition-all"
          >
            View All Courses
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-400 mb-8">Join thousands of developers learning Programming</p>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;