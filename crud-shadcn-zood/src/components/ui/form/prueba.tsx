"use client";

import React, {useContext} from "react";
import { useFormContext } from "react-hook-form";

type FormFieldContextValue = {
  name: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(
  undefined
);

export const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();
  if (!fieldContext) {
    throw new Error("useFormField debe usarse dentro de <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState); // Estado del campo
  const error = fieldState?.error || null;

  return {
    ...fieldState,
    error,
    name: fieldContext.name,
  };
};

export const FormFieldProvider: React.FC<{
  name: string;
  children: React.ReactNode;
}> = ({ name, children }) => {
  const contextValue = { name };

  return (
    <FormFieldContext.Provider value={contextValue}>
      {children}
    </FormFieldContext.Provider>
  );
};