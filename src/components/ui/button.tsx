// src/components/ui/button.tsx
import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all";

    const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800",
      outline:
        "border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 focus:ring-blue-500",
      ghost:
        "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-400",
    };

    const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
        type={props.type ?? "button"}
      />
    );
  }
);

Button.displayName = "Button";