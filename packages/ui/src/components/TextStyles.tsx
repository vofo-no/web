import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface TextStylesProps {
  fullWidth?: boolean;
  center?: boolean;
}

export const TextStyles = ({
  fullWidth,
  center,
  ...props
}: PropsWithChildren<TextStylesProps>) => (
  <div
    className={classNames("prose desktop:prose-lg", {
      "max-w-none": fullWidth,
      "mx-auto": center,
    })}
    {...props}
  />
);
