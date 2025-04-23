import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // TODO: Implement actual authentication
    if (email === 'admin@example.com' && password === 'admin123') {
      setUser({ email, role: 'admin' });
      return { success: true, user: { email, role: 'admin' } };
    }
    if (email === 'instructor@example.com' && password === 'instructor123') {
      setUser({ email, role: 'instructor' });
      return { success: true, user: { email, role: 'instructor' } };
    }
    if (email === 'user@example.com' && password === 'user123') {
      setUser({ email, role: 'user' });
      return { success: true, user: { email, role: 'user' } };
    }
    return { success: false };
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};