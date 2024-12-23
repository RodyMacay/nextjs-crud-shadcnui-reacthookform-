import { ReactNode } from 'react';

interface FormLabelProps {
    children: ReactNode;
}

export function FormLabel({ children }: FormLabelProps) {
    return (
        <label className="text-sm font-medium">
            {children}
        </label>
    );
}