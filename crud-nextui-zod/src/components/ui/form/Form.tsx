import { ReactNode } from 'react';
import { useForm, FormProvider, UseFormProps } from 'react-hook-form';

interface FormProps extends UseFormProps {
    children: ReactNode;
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