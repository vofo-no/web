import React, { ComponentPropsWithoutRef, ElementType } from "react";
import classNames from "classnames";

interface TextProps<T extends ElementType> {
  as?: T;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  noMargin?: boolean;
}

export const Text = <T extends ElementType = "p">({
  as,
  className,
  noMargin,
  size,
  ...props
}: TextProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || "p";
  return (
    <Component
      className={classNames(className, {
        "my-0": noMargin,
        "text-xs tablet:text-sm": size === "sm",
        "text-sm tablet:text-base": size === "base",
        "text-base tablet:text-lg desktop:text-xl": size === "lg",
        "text-lg tablet:text-xl desktop:text-2xl": size === "xl",
        "text-xl tablet:text-2xl desktop:text-3xl": size === "2xl",
        "text-2xl tablet:text-3xl desktop:text-4xl": size === "3xl",
        "text-3xl tablet:text-4xl desktop:text-5xl": size === "4xl",
        "text-4xl tablet:text-5xl desktop:text-6xl": size === "5xl",
      })}
      {...props}
    />
  );
};
