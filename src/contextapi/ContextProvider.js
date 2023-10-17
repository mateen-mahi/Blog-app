"use client"
import React, { createContext,useState } from 'react';

const AppContext = createContext();


const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };



  return (
    <AppContext.Provider value={{ theme, toggle }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

