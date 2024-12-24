"use client";

import {ReactNode, forwardRef, useCallback} from 'react';
import { DateInput as NextUIDateInput} from '@nextui-org/date-input';
import { useFormContext } from 'react-hook-form';
import {DateValue, CalendarDate, CalendarDateTime, ZonedDateTime} from "@internationalized/date";

export interface DateInputProps {
    name: string;
    label?: ReactNode;
    defaultValue?: DateValue;
    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    placeholderValue?: DateValue;
    minValue?: DateValue;
    maxValue?: DateValue;
    locale?: string;
    description?: string;
    errorMessage?: string;

    startContent?: ReactNode;
    endContent?: ReactNode;

    labelPlacement?: "inside" | "outside" | "outside-left";
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    hideTimeZone?: boolean;
}

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(({ name, ...props }, ref) => {
    const {setValue } = useFormContext();

    const handleChange = useCallback((date: CalendarDate | CalendarDateTime | ZonedDateTime | null) => {
        setValue(name, date);
    }, [name, setValue]);

    return (
            <NextUIDateInput
                {...props}
                id={name}
                onChange={handleChange}
                ref={ref}
            />
    );
});

DateInput.displayName = 'DateInput';