"use client";

import { forwardRef, ReactNode } from 'react';
import { Checkbox as NextUICheckbox } from '@nextui-org/checkbox';
import { useFormContext, useController } from 'react-hook-form';

interface CheckboxProps {
    name: string;
    label?: ReactNode;
    size?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "success" | "warning" | "danger";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    isInvalid?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ name, ...props }, ref) => {
        const { control } = useFormContext();

        const {field: { value, onChange },} = useController({
            name,
            control,
            defaultValue: false,
        });

        return (
            <NextUICheckbox
                id={name}
                checked={value}
                label={props.label ?? name}
                onChange={(e) => onChange(e.target.checked)}
                {...props}
                ref={ref}
            />
        );
    }
);

Checkbox.displayName = 'Checkbox';
