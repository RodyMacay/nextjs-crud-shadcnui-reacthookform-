"use client";

import {forwardRef, ReactNode} from 'react';
import {Checkbox as NextUICheckbox} from '@nextui-org/checkbox';
import { useFormContext } from 'react-hook-form';

interface CheckboxProps {
    name: string;
    label: ReactNode;
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
        const { register } = useFormContext();
        return (
            <NextUICheckbox id={name} {...register(name)} {...props} ref={ref}></NextUICheckbox>
        );
    }
);

Checkbox.displayName = 'Checkbox';