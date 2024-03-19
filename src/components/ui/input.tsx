import * as React from "react";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: IconType;
  SecondIcon?: IconType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, Icon, SecondIcon, ...props }, ref) => {
    return (
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-8 pr-8 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {SecondIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <SecondIcon className="h-5 w-5" />
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
