import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 800,
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold });
  
  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'translate-y-10 opacity-0';
      case 'fade-down':
        return 'translate-y-[-10px] opacity-0';
      case 'fade-left':
        return 'translate-x-[-10px] opacity-0';
      case 'fade-right':
        return 'translate-x-10 opacity-0';
      case 'zoom-in':
        return 'scale-95 opacity-0';
      default:
        return 'opacity-0';
    }
  };
  
  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        transform: isVisible ? 'none' : undefined,
        opacity: isVisible ? 1 : undefined,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionProperty: 'transform, opacity',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      {...props}
    >
      <div className={isVisible ? '' : getAnimationClass()}>
        {children}
      </div>
    </div>
  );
};

export default ScrollReveal;