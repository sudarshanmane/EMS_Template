import React, { Children, createContext, useState } from "react";

export const ExpenseUpdatingContext = createContext();

const ContextForUpdatingRecord = ({ children }) => {
  const [record, setRecord] = useState();
  return (
    <ExpenseUpdatingContext.Provider value={{ setRecord, record }}>
      {children}
    </ExpenseUpdatingContext.Provider>
  );
};

export default ContextForUpdatingRecord;
