import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface GridProps {
  colsDesktop?: 1 | 2 | 3 | 4;
  colsTablet?: 1 | 2 | 3 | 4 | "200-auto";
  cols?: 1 | 2 | 3 | 4 | "72-auto";
  isContainer?: boolean;
}

export const Grid = ({
  colsDesktop,
  colsTablet,
  cols,
  isContainer,
  ...props
}: PropsWithChildren<GridProps>) => (
  <div
    className={classNames("grid gap-3", {
      "tablet:mx-auto tablet:w-[95%] desktop:w-[90%] max-w-screen-full-hd my-3":
        isContainer,
      "grid-cols-1": cols === 1,
      "grid-cols-2": cols === 2,
      "grid-cols-3": cols === 3,
      "grid-cols-4": cols === 4,
      "tablet:grid-cols-1": colsTablet === 1,
      "tablet:grid-cols-2": colsTablet === 2,
      "tablet:grid-cols-3": colsTablet === 3,
      "tablet:grid-cols-4": colsTablet === 4,
      "desktop:grid-cols-1": colsDesktop === 1,
      "desktop:grid-cols-2": colsDesktop === 2,
      "desktop:grid-cols-3": colsDesktop === 3,
      "desktop:grid-cols-4": colsDesktop === 4,
      "grid-cols-72-auto tablet:grid-cols-92-auto": cols === "72-auto",
      "tablet:grid-cols-200-auto": colsTablet === "200-auto",
    })}
    {...props}
  />
);
