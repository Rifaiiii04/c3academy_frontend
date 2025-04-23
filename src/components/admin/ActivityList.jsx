import React from 'react';

const ActivityList = ({ activities }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
      <h2 className="text-xl font-semibold mb-6">Recent Activities</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between border-b border-gray-700 pb-4 hover:bg-gray-700/30 p-4 rounded-lg transition-all duration-200"
          >
            <div>
              <span className="font-medium text-white">{activity.type}</span>
              <p className="text-gray-400">{activity.name}</p>
            </div>
            <span className="text-gray-500 text-sm">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;