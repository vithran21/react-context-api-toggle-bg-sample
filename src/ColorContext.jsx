import React, { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);

  const toggleColor = () => setIsLight((prev) => !prev);

  return (
    <ColorContext.Provider value={{ isLight, toggleColor }}>
      {children}
    </ColorContext.Provider>
  );
};
