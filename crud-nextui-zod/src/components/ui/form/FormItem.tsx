import { ReactNode } from 'react';

interface FormItemProps {
    children: ReactNode;
}

export function FormItem({ children }: FormItemProps) {
    return (
        <div className="space-y-1">
            {children}
        </div>
    );
}