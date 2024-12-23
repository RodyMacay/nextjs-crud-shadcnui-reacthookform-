import { forwardRef } from 'react';
import { Select as NextUISelect, SelectItem as NextUISelectItem } from '@nextui-org/select';
import { useFormContext } from 'react-hook-form';

interface SelectProps<T = string | number> {
    name: string;
    options: { label: string; value: T }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ name, options, ...props }, ref) => {
        const { register } = useFormContext();
        const { ref: registerRef, ...rest } = register(name);
        return (
            <NextUISelect {...rest} {...props} ref={ref || registerRef}>
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