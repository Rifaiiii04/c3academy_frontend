import React, { useState } from 'react';
import { StarIcon, UsersIcon } from '@heroicons/react/24/solid';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const CourseCard = ({ 
  title, 
  instructor, 
  price, 
  rating, 
  students, 
  image, 
  level, 
  slug,
  isWishlisted: defaultWishlisted = false,
  showWishlist = true,
  showRemove = false,
  onWishlist,
  onRemove,
  variant = 'default' // 'default', 'wishlist', 'learning'
}) => {
  const [isWishlisted, setIsWishlisted] = useState(defaultWishlisted);

  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    if (onWishlist) onWishlist(!isWishlisted);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    if (onRemove) onRemove();
  };

  const renderActionButton = () => {
    if (variant === 'learning') {
      return (
        <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-2 rounded-lg">
          Continue Learning
        </button>
      );
    }
    return null;
  };

  return (
    <Link to={`/courses/${slug}`} className="block">
      <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {showWishlist && (
            <button
              onClick={handleWishlist}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900 transition-all"
            >
              {isWishlisted ? (
                <HeartIconSolid className="h-5 w-5 text-red-500" />
              ) : (
                <HeartIcon className="h-5 w-5 text-white" />
              )}
            </button>
          )}
          {showRemove && (
            <button
              onClick={handleRemove}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-900/50 hover:bg-gray-900 transition-all"
            >
              <TrashIcon className="h-5 w-5 text-white hover:text-red-500" />
            </button>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs px-3 py-1 rounded-full ${
              level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
              level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {level}
            </span>
            <div className="flex items-center text-yellow-400">
              <StarIcon className="h-4 w-4" />
              <span className="ml-1 text-sm">{rating}</span>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">{instructor}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400">
              <UsersIcon className="h-4 w-4 mr-1" />
              <span className="text-sm">{students} students</span>
            </div>
            <span className="text-primary font-semibold">{price} ICP</span>
          </div>
          {renderActionButton()}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;