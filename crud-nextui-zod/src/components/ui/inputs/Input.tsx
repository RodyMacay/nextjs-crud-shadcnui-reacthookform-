"use client";

import { ReactNode, forwardRef } from 'react';
import { Input as NextUIInput} from '@nextui-org/input';
import { useFormContext } from 'react-hook-form';

export interface InputProps {
    name: string;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    label?: ReactNode;
    defaultValue?: string;
    placeholder?: string;
    description?: string;
    errorMessage?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    startContent?: ReactNode;
    endContent?: ReactNode;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, ...props }, ref) => {
    const { register } = useFormContext();
    const {...registerProps } = register(name);

    return (
        <NextUIInput
            {...registerProps}
            {...props}
            id={name}
            ref={ref}
        />
    );
});

Input.displayName = 'Input';