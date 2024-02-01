import React, { Children, createContext, useState } from "react";

export const ExpenseUpdatingContext = createContext();

const ContextForUpdatingRecord = ({ children }) => {
  const [record, setRecord] = useState();
  const [isEditForm, setIsEditForm] = useState(false);
  return (
    <ExpenseUpdatingContext.Provider
      value={{ setRecord, record, isEditForm, setIsEditForm }}
    >
      {children}
    </ExpenseUpdatingContext.Provider>
  );
};

export default ContextForUpdatingRecord;
