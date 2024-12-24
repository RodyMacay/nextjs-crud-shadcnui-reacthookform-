import React from 'react';
import { FormProvider, UseFormReturn, FieldValues } from 'react-hook-form';

interface FormProps<TFormValues extends FieldValues> extends React.FormHTMLAttributes<HTMLFormElement> {
    form: UseFormReturn<TFormValues>;
    children: React.ReactNode;
}

export const Form = <TFormValues extends FieldValues>({form, children, ...props}: FormProps<TFormValues>) => {
    return (
        <FormProvider {...form}>
            <form {...props}>
                {children}
            </form>
        </FormProvider>
    );
}