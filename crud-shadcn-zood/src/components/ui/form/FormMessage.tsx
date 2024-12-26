"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useFormField } from "../form";



interface FormMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const FormMessage = React.forwardRef<HTMLParagraphElement, FormMessageProps>(
  ({ className, children, error, ...props }, ref) => {
    const body = error || children;

    if (!body) {
      return null;
    }

    return (
      <p
        ref={ref}
        className={cn("text-sm font-medium text-red-500", className)}
        {...props}
      >
        {body}
      </p>
    );
  }
);

FormMessage.displayName = "FormMessage";
