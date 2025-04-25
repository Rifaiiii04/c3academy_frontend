import React from 'react';

const StatItem = ({ value, label }) => {
  return (
    <div>
      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        {value}
      </div>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
};

export default StatItem;