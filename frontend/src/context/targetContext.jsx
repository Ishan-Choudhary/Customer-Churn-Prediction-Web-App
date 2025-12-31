import React, { createContext, useState } from "react";

export const TargetContext = createContext(null);

const TargetProvider = ({ children }) => {
  const [targetValue, setTargetValue] = useState(0);

  const store = {
    target: [targetValue, setTargetValue]
  }

  return <TargetContext.Provider value={store}>{children}</TargetContext.Provider>
}

export default TargetProvider;
