import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, AcademicCapIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import CourseCard from '../components/home/CourseCard';
import TestimonialCard from '../components/home/TestimonialCard';
import StatItem from '../components/home/StatItem';
import LearningPathStep from '../components/home/LearningPathStep';
import SectionHeading from '../components/home/SectionHeading';
import ScrollReveal from '../components/animations/ScrollReveal';

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

  const testimonials = [
    {
      initial: 'A',
      name: 'Alex Johnson',
      role: 'Software Engineer',
      quote: '"The courses here completely transformed my career. I went from knowing basic HTML to building complex web applications in just 3 months."'
    },
    {
      initial: 'S',
      name: 'Sarah Miller',
      role: 'Frontend Developer',
      quote: '"The instructors are incredibly knowledgeable and responsive. The project-based approach helped me build a portfolio that landed me my dream job."'
    },
    {
      initial: 'R',
      name: 'Ryan Patel',
      role: 'Blockchain Developer',
      quote: '"The specialized courses in blockchain technology gave me the edge I needed in the job market. Now I`m working with cutting-edge technologies every day."'
    }
  ];

  const stats = [
    { value: '50+', label: 'Expert Instructors' },
    { value: '100+', label: 'Courses Available' },
    { value: '15k+', label: 'Active Students' },
    { value: '95%', label: 'Success Rate' }
  ];

  const learningSteps = [
    {
      title: 'Start with Fundamentals',
      description: 'Master the core concepts of programming and web development',
      isRight: false
    },
    {
      title: 'Build Real Projects',
      description: 'Apply your knowledge by building practical applications',
      isRight: true
    },
    {
      title: 'Specialize Your Skills',
      description: 'Dive deep into your area of interest with advanced courses',
      isRight: false
    },
    {
      title: 'Join the Community',
      description: 'Connect with peers and mentors to accelerate your growth',
      isRight: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section - keep existing animations */}
      <div className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-gradient-x" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6 animate-fade-in-down">
              Welcome to C3Academy
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Elevate your tech skills with our expert-led programming courses
            </p>
            <div className="space-x-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all hover:scale-105"
              >
                Start Learning
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-500 hover:border-primary text-white rounded-full font-semibold transition-all hover:scale-105"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <SectionHeading 
            title="Why Choose C3Academy?" 
            subtitle="Your gateway to becoming a Web3 developer" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all hover:scale-105 transform hover:shadow-xl hover:shadow-primary/20">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Popular Courses Section */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <SectionHeading 
            title="Popular Courses" 
            subtitle="Start your Web3 journey with our top-rated courses" 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <ScrollReveal key={index} delay={index * 150} animation="zoom-in">
                <CourseCard {...course} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="text-center mt-12">
              <Link
                to="/courses"
                className="inline-flex items-center px-8 py-3 border-2 border-primary hover:bg-primary text-white rounded-full font-semibold transition-all"
              >
                View All Courses
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal animation="fade-up">
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
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <SectionHeading 
            title="What Our Students Say" 
            subtitle="Success stories from our community" 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 200} animation="fade-up">
                <TestimonialCard {...testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
      
      {/* Stats Section */}
      <ScrollReveal animation="fade-up">
        <div className="bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} delay={index * 150} animation="zoom-in">
                  <StatItem {...stat} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
      
      {/* Learning Path Section */}
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <SectionHeading 
            title="Your Learning Path" 
            subtitle="Follow our structured approach to master programming" 
          />
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-12 relative">
              {learningSteps.map((step, index) => (
                <ScrollReveal key={index} delay={index * 300} animation={step.isRight ? "fade-left" : "fade-right"}>
                  <LearningPathStep {...step} />
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal delay={600}>
            <div className="text-center mt-16">
              <Link
                to="/learning-paths"
                className="inline-flex items-center px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-semibold transition-all"
              >
                Explore Learning Paths
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Home;