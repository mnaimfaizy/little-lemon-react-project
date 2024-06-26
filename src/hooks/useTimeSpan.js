import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAPI } from './../api/api';

// Create a context
const TimeSpanContext = createContext();

// Provider component
export const TimeSpanProvider = ({ children }) => {
  const [timeSpan, setTimeSpan] = useState([]);

  useEffect(() => {
    const date = new Date();

    const result = fetchAPI(date);
    setTimeSpan(result);
}, []);

  return (
    <TimeSpanContext.Provider value={{ timeSpan, setTimeSpan }}>
      {children}
    </TimeSpanContext.Provider>
  );
};

// Custom hook to use the context
export const useTimeSpan = () => useContext(TimeSpanContext);