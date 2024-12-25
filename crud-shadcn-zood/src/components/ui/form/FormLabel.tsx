"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useFormField } from "@/components/ui/form/hooks/useFormField";

interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => {
    const { error, name } = useFormField();
    return (
      <Label
        ref={ref}
        htmlFor={name}
        className={cn(error ? "text-red-500" : "", className)}
        {...props}
      />
    );
  }
);

FormLabel.displayName = "FormLabel";
