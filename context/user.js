// UserContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a custom hook to use the context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Create the provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: ''
  });

  // Function to update user data
  const updateUser = (newUserData) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  // Function to log out the user
  const logout = () => {
    setUser({
      isLoggedIn: false,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      profilePicture: ''
    });
  };

  const contextValue = {
    user,
    updateUser,
    logout,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
