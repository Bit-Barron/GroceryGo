import * as React from "react";
import { IconType } from "react-icons";

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
          className="block w-full pl-10 rounded-md border placeholder:text-inputPlaceholder border-inputBord bg-inputBg p-2.5 focus:outline-none"
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
