"use client";

import React from 'react';
import { forwardRef } from 'react';
import { Input as NextUIInput} from '@nextui-org/input';
import { useFormContext } from 'react-hook-form';

export interface InputProps {
    name: string;
    className?: string;
    disabled?: boolean;

    label?: string;
    placeholder?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
    defaultValue?: string;

    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    isInvalid?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;

    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    description?: string;
    errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ name, ...props }, ref) => {
    const { register } = useFormContext();
    const { onChange, ...inputProps } = register(name);
    return (
        <NextUIInput
            {...inputProps}
            {...props}
            onChange={onChange}
            ref={ref}
        />
    );
});

Input.displayName = 'Input';