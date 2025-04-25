import React from 'react';

const LearningPathStep = ({ title, description, isRight }) => {
  return (
    <div className="flex items-center">
      {isRight ? (
        <>
          <div className="w-1/2 pr-8"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary border-4 border-gray-900 z-10"></div>
          <div className="w-1/2 pl-8">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
        </>
      ) : (
        <>
          <div className="w-1/2 pr-8 text-right">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary border-4 border-gray-900 z-10"></div>
          <div className="w-1/2 pl-8"></div>
        </>
      )}
    </div>
  );
};

export default LearningPathStep;