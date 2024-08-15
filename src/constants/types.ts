import { AxiosResponse } from "axios";
import React, { Dispatch, SetStateAction } from "react";

//! Context Prop
export type ChildrenProp = {
  children: React.ReactNode;
};
export type GlobalContextProp = {
  form: boolean;
  setForm: Dispatch<SetStateAction<boolean>>;
  create: boolean;
  setCreate: Dispatch<SetStateAction<boolean>>;
  apiData: any[];
  setApiData: Dispatch<SetStateAction<any[]>>;
};

//! Form Prop
export type UserProp = {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
};
