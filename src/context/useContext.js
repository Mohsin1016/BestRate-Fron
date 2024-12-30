import React, { createContext, useState } from "react";

// Rename to ResponseContext
export const ResponseContext = createContext();

// Rename to ResponseProvider
export const ResponseProvider = ({ children }) => {
  const [responseData, setResponseData] = useState(null);

  return (
    <ResponseContext.Provider value={{ responseData, setResponseData }}>
      {children}
    </ResponseContext.Provider>
  );
};
