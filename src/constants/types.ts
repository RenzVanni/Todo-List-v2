import React, { Dispatch, SetStateAction } from "react";

export type ChildrenProp = {
  children: React.ReactNode;
};
export type GlobalContextProp = {
  form: boolean;
  setForm: Dispatch<SetStateAction<boolean>>;
  create: boolean;
  setCreate: Dispatch<SetStateAction<boolean>>;
};
