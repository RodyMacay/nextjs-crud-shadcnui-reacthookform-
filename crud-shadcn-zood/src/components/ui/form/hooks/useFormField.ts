"use client";

import * as React from "react";
import { useFormContext } from "react-hook-form";

type FormFieldContextValue = {
  name: string;
};

const FormFieldContext = React.createContext<FormFieldContextValue | undefined>(
    undefined
) as React.Context<FormFieldContextValue | undefined>;
  

export const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField debe usarse dentro de <FormField>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const error = fieldState?.error || null;

  return {
    ...fieldState,
    error,
    name: fieldContext.name,
  };
};

export const FormFieldProvider: React.FC<{ name: string }> = ({
    name,
    children,
  }) => {
    const contextValue = { name };
  
    return (
      <FormFieldContext.Provider value={contextValue}>
        {children}
      </FormFieldContext.Provider>
    );
  };
  
