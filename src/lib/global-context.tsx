import { Children, createContext, useState } from "react";
import { ChildrenProp, GlobalContextProp } from "../constants/types";

const GlobalContextObj: GlobalContextProp = {
  form: true,
  setForm: () => {},
  create: false,
  setCreate: () => {},
};

export const MainContext = createContext(GlobalContextObj);

const GlobalProvider = ({ children }: ChildrenProp) => {
  const [form, setForm] = useState(true);
  const [create, setCreate] = useState(false);
  return (
    <MainContext.Provider value={{ form, setForm, create, setCreate }}>
      {children}
    </MainContext.Provider>
  );
};

export default GlobalProvider;
