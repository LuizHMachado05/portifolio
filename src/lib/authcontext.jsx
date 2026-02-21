import React, { createContext, useContext } from 'react';

const AuthContext = createContext();

const defaultValue = {
  user: null,
  isAuthenticated: false,
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  appPublicSettings: null,
  navigateToLogin: () => {},
};

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={defaultValue}>
    {children}
  </AuthContext.Provider>
);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
