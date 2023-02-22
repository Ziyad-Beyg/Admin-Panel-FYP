import React, { useState, createContext } from "react";

export const GlobalContext = createContext();

const ContextApi = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextApi;
