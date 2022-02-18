import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface FlexProps {
  cols?: boolean;
  colsTablet?: boolean;
  colsDesktop?: boolean;
  itemsCenter?: boolean;
  justifyCenter?: boolean;
  gap?: "none" | "sm" | "md" | "lg" | "xl";
}

export const Flex = ({
  colsDesktop,
  colsTablet,
  cols,
  itemsCenter,
  justifyCenter,
  gap = "md",
  ...props
}: PropsWithChildren<FlexProps>) => (
  <div
    className={classNames("flex gap-3", {
      "items-center": itemsCenter,
      "justify-center": justifyCenter,
      "flex-col": cols,
      "tablet:flex-col": colsTablet,
      "tablet:flex-row": !colsTablet,
      "desktop:flex-col": colsDesktop,
      "desktop:flex-row": !colsDesktop,
      "gap-0": gap === "none",
      "gap-1": gap === "sm",
      "gap-3": gap === "md",
      "gap-4": gap === "lg",
      "gap-6": gap === "xl",
    })}
    {...props}
  />
);
