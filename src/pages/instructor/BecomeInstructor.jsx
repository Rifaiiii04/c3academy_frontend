import React, { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer';

const BecomeInstructor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    expertise: '',
    experience: '',
    motivation: '',
    sampleContent: '',
    portfolio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to instructor dashboard
    navigate('/instructor/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <Link to="/profile" className="flex items-center text-gray-400 hover:text-white mb-8">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Profile
        </Link>

        <div className="bg-gray-800 rounded-xl p-8">
          <h1 className="text-3xl font-bold mb-6">Become an Instructor</h1>
          <p className="text-gray-400 mb-8">
            Share your knowledge and experience with students worldwide. Fill out the application below to get started.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Area of Expertise</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="e.g., Smart Contract Development, Web3, DeFi"
                value={formData.expertise}
                onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Years of Experience</label>
              <input
                type="number"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter years of experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Why do you want to teach?</label>
              <textarea
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Tell us about your motivation to become an instructor"
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sample Course Content</label>
              <textarea
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                rows="4"
                placeholder="Provide a brief outline of a course you'd like to teach"
                value={formData.sampleContent}
                onChange={(e) => setFormData({ ...formData, sampleContent: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Portfolio/References</label>
              <input
                type="text"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Links to your work, GitHub, LinkedIn, etc."
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-medium transition-all"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BecomeInstructor;