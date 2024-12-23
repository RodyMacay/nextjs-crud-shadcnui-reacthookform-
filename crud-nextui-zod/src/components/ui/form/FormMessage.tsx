import { ReactNode } from 'react';

interface FormMessageProps {
    children: ReactNode;
}

export function FormMessage({ children }: FormMessageProps) {
    return (
        <p className="text-sm text-red-500">
            {children}
        </p>
    );
}