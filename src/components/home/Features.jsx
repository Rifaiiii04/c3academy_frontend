import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Learn from Experts',
      description: 'Get taught by industry professionals and Web3 experts',
      icon: '👨‍🏫'
    },
    {
      title: 'Pay with ICP',
      description: 'Use ICP tokens for seamless course purchases',
      icon: '💰'
    },
    {
      title: 'Become an Instructor',
      description: 'Share your knowledge and earn ICP tokens',
      icon: '🎓'
    }
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {features.map((feature, index) => (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-transform hover:scale-105">
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;