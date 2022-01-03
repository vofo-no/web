import React, { PropsWithChildren, useContext } from "react";
import classNames from "classnames";
import { HeaderContext } from "./HeaderContext";

interface NavMenuProps {
  variant?: "default" | "top";
  alignRight?: boolean;
}

export const NavMenu = ({
  variant = "default",
  alignRight = false,
  ...props
}: PropsWithChildren<NavMenuProps>) => {
  const { isCollapsed } = useContext(HeaderContext);
  return (
    <div
      className={classNames("only:my-auto", {
        "flex flex-col items-end": isCollapsed,
        "-order-1 self-end": !isCollapsed && variant === "top",
        "flex flex-row items-center": !isCollapsed,
        "self-end": alignRight,
        "font-open-sans text-base font-semibold": variant === "default",
        "font-lato text-sm font-normal": variant === "top",
      })}
      {...props}
    />
  );
};
