import React, { PropsWithChildren } from "react";
import classNames from "classnames";

const paddings = {
  no: "p-0",
  sm: "p-1 tablet:p-1.5 desktop:p-2",
  md: "px-3 py-1 tablet:px-5 tablet:py-3 desktop:px-6 desktop:py-4",
  lg: "px-4 py-2 tablet:px-8 tablet:py-5 desktop:px-10 desktop:py-7",
} as const;

export interface BoxProps {
  padding?: keyof typeof paddings;
  isContainer?: boolean;
}

export const Box = ({
  padding = "md",
  isContainer,
  ...props
}: PropsWithChildren<BoxProps>) => (
  <div
    className={classNames("bg-white shadow-sm relative z-30", {
      "tablet:mx-auto tablet:w-[95%] desktop:w-[90%] max-w-screen-full-hd my-3":
        isContainer,
      [paddings[padding]]: !!padding,
    })}
    {...props}
  />
);
