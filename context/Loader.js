// LoaderContext.js
import React, { createContext, useContext, useState } from 'react';
import Loader from '@/components/Loader/Index'

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => {
    setIsLoading(true);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => {
  return useContext(LoaderContext);
};
