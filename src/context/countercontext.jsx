import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [Counter, setCounter] = useState(5);
  return (
    <CounterContext.Provider
      value={{
        Counter,
        setCounter,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
