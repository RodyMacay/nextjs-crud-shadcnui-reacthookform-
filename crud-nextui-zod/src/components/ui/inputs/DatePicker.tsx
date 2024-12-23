"use client";

import React, { forwardRef } from 'react';
import { DatePicker as NextUIDatePicker } from '@nextui-org/date-picker';
import { DateValue } from "@internationalized/date";
import { useFormContext } from 'react-hook-form';
import { CalendarDate, CalendarDateTime, ZonedDateTime } from '@internationalized/date';

interface DatePickerProps {
    name: string;
    label?: string;
    placeholder?: DateValue;
    defaultValue?: DateValue;

    variant?: "flat" | "bordered" | "faded" | "underlined";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";

    isInvalid?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isDisabled?: boolean;

    description?: string;
    errorMessage?: string;
    className?: string;
}

export const DatePicker = forwardRef<HTMLElement, DatePickerProps>(({ name, ...props }, ref) => {
    const { register, setValue } = useFormContext();
    const inputProps = register(name);

    const handleChange = (value: CalendarDate | CalendarDateTime | ZonedDateTime | null) => {
        setValue(name, value);
    };

    return (
        <NextUIDatePicker
            {...inputProps}
            {...props}
            onChange={handleChange}
            ref={ref}
        />
    );
});

DatePicker.displayName = 'DatePicker';
