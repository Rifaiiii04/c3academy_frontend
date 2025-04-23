import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const navigation = {
    platform: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Press', href: '/press' },
    ],
    courses: [
      { name: 'All Courses', href: '/courses' },
      { name: 'Web3 Basics', href: '/courses/web3-basics' },
      { name: 'Smart Contracts', href: '/courses/smart-contracts' },
      { name: 'DeFi Development', href: '/courses/defi' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Contact Us', href: '/contact' },
    ],
    social: [
      { name: 'Twitter', href: '#', icon: 'twitter.svg' },
      { name: 'GitHub', href: '#', icon: 'github.svg' },
      { name: 'Discord', href: '#', icon: 'discord.svg' },
      { name: 'LinkedIn', href: '#', icon: 'linkedin.svg' },
    ],
  };

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-2">
              {navigation.courses.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {navigation.social.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} C3Academy. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/" className="text-2xl font-bold text-white">
              C3Academy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;