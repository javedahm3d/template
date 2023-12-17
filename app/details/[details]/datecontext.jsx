import React, { createContext, useContext, useState } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [selectedDateRange, setSelectedDateRange] = useState([]);

  const setDates = (dates) => {
    setSelectedDateRange(dates);
  };

  return (
    <DateContext.Provider value={{ selectedDateRange, setDates }}>
      {children}
    </DateContext.Provider>
  );
};

export const useDateContext = () => {
  return useContext(DateContext);
};