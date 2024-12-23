"use client";

import React from 'react';
import { ReactNode } from 'react';
import { useForm, FormProvider, UseFormProps } from 'react-hook-form';

interface FormProps extends UseFormProps {
    children: ReactNode;
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void> | void;
}

export function Form({ children, ...props }: FormProps) {
    const methods = useForm(props);
    return (
        <FormProvider {...methods}>
            <form {...props}>
                {children}
            </form>
        </FormProvider>
    );
}