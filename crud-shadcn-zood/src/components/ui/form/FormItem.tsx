"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <div key={id}
        ref={ref}
        className={cn("space-y-2", className)}
        {...props}
      />
    );
  }
);
FormItem.displayName = "FormItem";
