import React, { ReactNode } from 'react';
import { useForm, FormProvider, UseFormProps, FieldValues } from 'react-hook-form';

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
    children: ReactNode;
    onSubmitAction: (data: T) => void;
}


export function Form<T extends FieldValues>({children, onSubmitAction, ...props}: FormProps<T>) {
    const form = useForm<T>(props);
    const { handleSubmit } = form;

    return (
        <FormProvider {...form}>
            <form onSubmit={handleSubmit(onSubmitAction)}>
                {children}
            </form>
        </FormProvider>
    );
}
