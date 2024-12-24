"use client";

import { ReactNode, forwardRef } from 'react';
import { Select as NextUISelect, SelectItem as NextUISelectItem } from '@nextui-org/select';
import { useFormContext } from 'react-hook-form';

interface SelectProps<T = string | number> {
    name: string;
    selectionMode?: "single" | "multiple";
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    placeholder?: string;
    labelPlaceholder?: "inside" | "outside" | "outside-left";
    label?: ReactNode;
    description?: ReactNode;
    errorMessage?: string;
    startContent?: ReactNode;
    endContent?: ReactNode;
    selectorIcon?: ReactNode;
    fullWidth?: boolean;
    defaultOpen?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    options: { label: string; value: T }[];
    className?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ name, options, ...props }, ref) => {
        const { register } = useFormContext();
        const { ref: registerRef, ...rest } = register(name);
        return (
            <NextUISelect id={name} {...rest} {...props} ref={ref || registerRef}>
                {options.map((option) => (
                    <NextUISelectItem key={option.value} value={option.value}>
                        {option.label}
                    </NextUISelectItem>
                ))}
            </NextUISelect>
        );
    }
);

Select.displayName = 'Select';