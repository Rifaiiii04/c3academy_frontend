import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import Alert from '../../components/common/Alert';
import { UserIcon, EnvelopeIcon, LockClosedIcon, KeyIcon } from '@heroicons/react/24/outline';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // TODO: Implement registration logic
    console.log('Register:', formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-2xl shadow-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create Your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Join C3Academy and start your Web3 journey
          </p>
        </div>

        <Alert message={error} type="error" />

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <UserIcon className="h-5 w-5 text-gray-400 absolute top-[38px] left-3 pointer-events-none" />
              <Input
                label="Full Name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="pl-10"
                placeholder="Enter your full name"
              />
            </div>
            <div className="relative">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 absolute top-[38px] left-3 pointer-events-none" />
              <Input
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="pl-10"
                placeholder="Enter your email"
              />
            </div>
            <div className="relative">
              <LockClosedIcon className="h-5 w-5 text-gray-400 absolute top-[38px] left-3 pointer-events-none" />
              <Input
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="pl-10"
                placeholder="Create a password"
              />
            </div>
            <div className="relative">
              <KeyIcon className="h-5 w-5 text-gray-400 absolute top-[38px] left-3 pointer-events-none" />
              <Input
                label="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                className="pl-10"
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-primary focus:ring-primary border-gray-600 rounded bg-gray-700"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
              I agree to the{' '}
              <a href="#" className="text-primary hover:text-primary/80">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-primary hover:text-primary/80">
                Privacy Policy
              </a>
            </label>
          </div>

          <Button
            type="submit"
            variant="primary"
            fullWidth
            className="group relative flex justify-center py-3 px-4"
          >
            Create Account
          </Button>

          <p className="text-center text-sm text-gray-400">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-primary hover:text-primary/80">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;