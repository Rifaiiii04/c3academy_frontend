import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  type = 'button', 
  onClick 
}) => {
  const baseStyles = "py-2 px-4 rounded-md transition-colors";
  const variants = {
    primary: "bg-primary text-white hover:bg-secondary",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;