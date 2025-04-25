import React from 'react';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;