"use client";

import { FormProvider, UseFormReturn } from 'react-hook-form'

interface FormProps extends  React.FormHTMLAttributes<HTMLFormElement> {
    form:       UseFormReturn<any>;
    children:   React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ form, children, ...props }: FormProps) => {
  return (
    <FormProvider {...form}>
        <form {...props}>
            {children}
        </form>
    </FormProvider>
  );
};
