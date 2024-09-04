import React, { createContext, useState, useContext } from 'react';

const LockContext = createContext();

export const LockProvider = ({ children }) => {
  const [showLock, setShowLock] = useState(true);

  return (
    <LockContext.Provider value={{ showLock, setShowLock }}>
      {children}
    </LockContext.Provider>
  );
};

export const useLock = () => useContext(LockContext);
