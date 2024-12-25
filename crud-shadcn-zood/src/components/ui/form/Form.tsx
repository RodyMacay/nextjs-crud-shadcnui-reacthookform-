"use client";

import { FormProvider, UseFormReturn } from "react-hook-form";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<any>;
  children: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({
  form,
  children,
  onSubmit,
  ...props
}: FormProps) => {
  console.log("Props pasados al Form:", onSubmit);
  return (
    <FormProvider {...form}>
      <form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Manejador de envío en <form>");
          if (onSubmit) {
            console.log(e); 
            onSubmit(e);
          }
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
};
