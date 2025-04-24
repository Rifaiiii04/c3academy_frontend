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
  level, 
  slug,
  isWishlisted: defaultWishlisted = false,
  showWishlist = true,
  showRemove = false,
  onWishlist,
  onRemove,
  variant = 'default'
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

  return (
    <Link to={`/courses/${slug}`} className="block">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-950 border-b border-gray-700/50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-950/90" />
          <h2 className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/90 drop-shadow-lg">
            {title.split(' ')[0]}
          </h2>
          {showWishlist && (
            <button
              onClick={handleWishlist}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-900/50 hover:bg-gray-900 transition-all z-10"
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
              className="absolute top-4 right-4 p-2.5 rounded-full bg-gray-900/50 hover:bg-gray-900 transition-all"
            >
              <TrashIcon className="h-5 w-5 text-white hover:text-red-500" />
            </button>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
              level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
              level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {level}
            </span>
            <div className="flex items-center text-yellow-400">
              <StarIcon className="h-4 w-4" />
              <span className="ml-1 font-medium">{rating}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-400 text-sm mb-3">{instructor}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-400 text-sm">
              <UsersIcon className="h-4 w-4 mr-1" />
              <span>{students.toLocaleString()} students</span>
            </div>
            <span className="text-primary font-bold">{price} ICP</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;