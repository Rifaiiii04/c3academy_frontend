import React from 'react';
import { Link } from 'react-router-dom';
import { ClockIcon } from '@heroicons/react/24/outline';

const LearningCourseCard = ({ course, isCompleted }) => {
  return (
    <Link to={`/courses/${course.slug}/learn`} className="block">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-950 border-b border-gray-700/50">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-950/90" />
          <h2 className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white/90 drop-shadow-lg">
            {course.title.split(' ')[0]}
          </h2>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
              course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
              course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {course.level}
            </span>
            <div className="flex items-center text-yellow-400">
              <span className="ml-1 font-medium">{course.rating}</span>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
          <p className="text-gray-400 text-sm mb-3">{course.instructor}</p>
          
          {/* Progress section */}
          <div className="mt-4 pt-4 border-t border-gray-700/30">
            <div className="mb-2 flex justify-between items-center">
              <span className="text-sm font-medium text-white">
                {course.progress}% complete
              </span>
              <span className="text-xs text-gray-400 flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                {isCompleted 
                  ? `Completed: ${course.completedDate}`
                  : `Last: ${course.lastAccessed}`}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
              <div 
                className={`h-2.5 rounded-full transition-all duration-500 ease-out ${
                  course.progress < 30 ? 'bg-red-500' : 
                  course.progress < 70 ? 'bg-yellow-500' : 
                  'bg-green-500'
                }`}
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
          
          <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-medium transition-all">
            {course.progress === 100 ? 'Review Course' : 'Continue Learning'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default LearningCourseCard;