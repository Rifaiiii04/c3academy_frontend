import React from 'react';

const StatCard = ({ title, value, color, icon: Icon }) => {
  return (
    <div className={`${color} p-6 rounded-xl bg-opacity-10 backdrop-blur-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium opacity-80">{title}</h3>
          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>
        {Icon && <Icon className="h-12 w-12 opacity-80" />}
      </div>
    </div>
  );
};

export default StatCard;