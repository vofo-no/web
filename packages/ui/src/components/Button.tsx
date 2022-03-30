import React, { ComponentPropsWithoutRef, ElementType } from "react";
import classNames from "classnames";

const VARIANTS = {
  DEFAULT: "default",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  OUTLINE: "outline",
  TEXT: "text",
  MENU: "menu",
} as const;

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  XLARGE: "xlarge",
} as const;

export interface ButtonProps<T extends ElementType> {
  as?: T;
  isDisabled?: boolean;
  isLoading?: boolean;
  isOpen?: boolean;
  loadingText?: string;
  size?: typeof SIZES[keyof typeof SIZES];
  variant?: typeof VARIANTS[keyof typeof VARIANTS];
}

export const Button = <T extends ElementType = "button">({
  as,
  children,
  isLoading,
  loadingText,
  variant,
  size,
  isDisabled,
  isOpen,
  ...rest
}: ButtonProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={classNames(
        "group leading-none font-semibold border-2 rounded cursor-pointer inline-block overflow-hidden relative text-center no-underline ease-out duration-200 align-top whitespace-nowrap select-none opacity-100 m-0",
        {
          "active:shadow-inset-button": !isLoading && !isDisabled,
          "cursor-progress opacity-70": isLoading,
          "disabled:cursor-not-allowed disabled:transform-none disabled:opacity-50":
            isDisabled,
          "text-xs px-4 py-2": size === "small",
          "text-base px-5 py-3": size === "medium",
          "text-lg px-6 py-4": size === "large",
          "text-xl px-8 py-6": size === "xlarge",
          "bg-primary text-white hover:text-white border-transparent hover:bg-primary-darker disabled:bg-primary":
            variant === "primary",
          "bg-secondary text-white hover:text-white border-transparent hover:bg-secondary-darker disabled:bg-secondary":
            variant === "secondary",
          "bg-white text-primary border-primary hover:text-primary-darker hover:border-primary-darker disabled:text-primary disabled:border-primary":
            variant === "outline",
          "bg-transparent text-black border-transparent hover:text-primary-darker disabled:text-primary":
            variant === "text",
          "bg-transparent text-black border-transparent uppercase -m-2 hover:text-primary-darker disabled:text-primary":
            variant === "menu",
          "bg-gray-200 text-black hover:text-black border-transparent hover:bg-gray-300 disabled:bg-gray-100":
            variant === "default",
        }
      )}
      disabled={isDisabled || isLoading}
      {...rest}
    >
      <span
        className={classNames(
          "inline-flex items-center text-center disabled:cursor-not-allowed disabled:transform-none",
          { "scale-0 opacity-0": isLoading }
        )}
      >
        {children}
        {variant === "menu" && (
          <div className="w-10">
            <div
              className={classNames(
                "rounded h-1 my-2 bg-gray-700 group-hover:bg-primary-darker ease-in-out duration-300",
                { "translate-y-3 rotate-[135deg]": isOpen }
              )}
            />
            <div
              className={classNames(
                "rounded h-1 my-2 bg-gray-700 group-hover:bg-primary-darker ease-in-out duration-300",
                { "scale-0": isOpen }
              )}
            />
            <div
              className={classNames(
                "rounded h-1 my-2 bg-gray-700 group-hover:bg-primary-darker ease-in-out duration-300",
                { "-translate-y-3 rotate-[-135deg]": isOpen }
              )}
            />
          </div>
        )}
      </span>
      <span
        className={classNames("absolute left-0 right-0", {
          "opacity-100": isLoading,
          "scale-0 opacity-0": !isLoading,
        })}
      >
        {loadingText}
      </span>
    </Component>
  );
};

Button.defaultProps = {
  variant: "default",
  size: "medium",
  isDisabled: false,
  isLoading: false,
  loadingText: "Laster...",
};
