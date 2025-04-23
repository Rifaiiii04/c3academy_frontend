import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-white rounded-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to C3Academy</h1>
      <p className="text-xl mb-8">Learn Web3 Development with Expert Instructors</p>
      <Link to="/courses">
        <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
          Browse Courses
        </Button>
      </Link>
    </section>
  );
};

export default Hero;