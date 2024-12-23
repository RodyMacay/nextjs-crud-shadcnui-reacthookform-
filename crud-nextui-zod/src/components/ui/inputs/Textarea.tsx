"use client";

import { forwardRef } from 'react';
import { Textarea as NextUITextarea} from '@nextui-org/input';
import { useFormContext } from 'react-hook-form';

export interface TextAreaProps {
    name: string;
    label?: string;
    placeholder?: string;
    defaultValue?: string;

    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    isInvalid?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;

    minRows?: number;
    maxRows?: number;
    description?: string;
    errorMessage?: string;
    className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ name, ...props }, ref) => {
        const { register } = useFormContext();
        const { onChange, ...registerProps } = register(name);

        return (
            <NextUITextarea
                {...registerProps}
                {...props}
                onChange={onChange}
                ref={ref}
            />
        );
    }
);

Textarea.displayName = 'Textarea';