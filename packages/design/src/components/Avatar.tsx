import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface AvatarProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  padding?: 1 | 2 | 3;
  src: string;
  alt: string;
}

export const Avatar = ({
  size = "base",
  padding,
  ...props
}: PropsWithChildren<AvatarProps>) => (
  <img
    className={classNames("rounded-full m-0", {
      "w-4": size === "xs",
      "w-8": size === "sm",
      "w-10 desktop:w-12 p-1": size === "base",
      "w-20 desktop:w-24 p-2": size === "lg",
      "w-40 desktop:w-44 p-3": size === "xl",
      "p-1": padding === 1,
      "p-2": padding === 2,
      "p-3": padding === 3,
    })}
    {...props}
  />
);
