import { forwardRef } from 'react';
import {Checkbox as NextUICheckbox} from '@nextui-org/checkbox';
import { useFormContext } from 'react-hook-form';

interface CheckboxProps {
    name: string;
    label: string;

    size?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "success" | "warning" | "danger";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    isInvalid?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;

    className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ name, label, ...props }, ref) => {
        const { register } = useFormContext();
        return (
            <NextUICheckbox {...register(name)} {...props} ref={ref}>
                {label}
            </NextUICheckbox>
        );
    }
);

Checkbox.displayName = 'Checkbox';