import React from 'react';
import { Link } from 'react-router-dom';

const AuthCard = ({ title, children, footerText, footerLink, footerLinkText }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      {children}
      {footerText && (
        <p className="mt-4 text-center">
          {footerText}{' '}
          <Link to={footerLink} className="text-primary hover:text-secondary">
            {footerLinkText}
          </Link>
        </p>
      )}
    </div>
  );
};

export default AuthCard;