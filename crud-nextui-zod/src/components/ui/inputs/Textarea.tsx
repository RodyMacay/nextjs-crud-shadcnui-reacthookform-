"use client";

import {ReactNode, forwardRef} from 'react';
import {Textarea as NextUITextarea} from '@nextui-org/input';
import {useFormContext} from 'react-hook-form';

export interface TextAreaProps {
    name: string;
    minRows?: number;
    maxRows?: number;
    cacheMeasurements?: boolean;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    label?: string;
    defaultValue?: string;
    placeholder?: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
    description?: string;
    errorMessage?: string;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({name, ...props}, ref) => {
        const {register} = useFormContext();
        const {onChange, ...registerProps} = register(name);

        return (
            <NextUITextarea
                id={name}
                {...registerProps}
                {...props}
                onChange={onChange}
                ref={ref}
            />
        );
    }
);

Textarea.displayName = 'Textarea';