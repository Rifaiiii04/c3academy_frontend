import React from 'react';

const StatCard = ({ icon: Icon, title, value, iconColor }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center space-x-3">
        <Icon className={`w-8 h-8 ${iconColor}`} />
        <div>
          <p className="text-gray-400">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;