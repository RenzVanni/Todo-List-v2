import { createContext, useState } from "react";
import { ChildrenProp, GlobalContextProp } from "../constants/types";

const GlobalContextObj: GlobalContextProp = {
  form: true,
  setForm: () => {},
  create: false,
  setCreate: () => {},
  apiData: [],
  setApiData: () => [],
};

export const MainContext = createContext(GlobalContextObj);

const GlobalProvider = ({ children }: ChildrenProp) => {
  const [form, setForm] = useState(true);
  const [create, setCreate] = useState(false);
  const [apiData, setApiData] = useState<{}>({});
  return (
    <MainContext.Provider
      value={{ form, setForm, create, setCreate, apiData, setApiData }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default GlobalProvider;
