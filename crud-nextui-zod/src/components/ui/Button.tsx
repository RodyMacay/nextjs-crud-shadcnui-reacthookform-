import React from 'react';
import { Button as NextUIButton } from "@nextui-org/button";
import { PressEvent } from "@react-types/shared";

export interface ButtonProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;

    variant?: "solid" | "bordered" | "light" | "flat" | "faded" | "shadow" | "ghost";
    color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg";

    isLoading?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;

    onPress?: (event: PressEvent) => void;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
         children,
         className = "",
         disabled = false,
         variant = "solid",
         color = "default",
         size = "md",
         isLoading = false,
         startContent,
         endContent,
         onPress,
         ...props
     }, ref) => {
        return (
            <NextUIButton
                ref={ref}
                className={`transition-all duration-200 ${className}`}
                disabled={disabled}
                variant={variant}
                color={color}
                size={size}
                isLoading={isLoading}
                startContent={startContent}
                endContent={endContent}
                onPress={onPress}
                {...props}
            >
                {children}
            </NextUIButton>
        );
    }
);

Button.displayName = "Button";

export default Button;
