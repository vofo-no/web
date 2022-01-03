import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface TextStylesProps {
  fullWidth?: boolean;
}

export const TextStyles = ({
  fullWidth,
  ...props
}: PropsWithChildren<TextStylesProps>) => (
  <div
    className={classNames("prose desktop:prose-lg", {
      "max-w-none": fullWidth,
    })}
    {...props}
  />
);
