import { ReactNode } from 'react';

interface FormLabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
    required?: boolean;
}

export function FormLabel({ children, htmlFor, className, required }: FormLabelProps) {
    return (
        <label
            htmlFor={htmlFor}
            className={`text-sm font-medium ${className ?? ''}`}
        >
            {children}
            {required && <span className="text-red-500">*</span>}
        </label>
    );
}
