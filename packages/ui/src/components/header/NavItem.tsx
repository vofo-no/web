import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface NavItemProps {
  showDesktop?: boolean;
  showMobile?: boolean;
  variant?: "default" | "top";
}

export const NavItem = ({
  showDesktop,
  showMobile,
  variant = "default",
  ...props
}: PropsWithChildren<NavItemProps & JSX.IntrinsicElements["a"]>) => (
  <a
    className={classNames("px-2 py-1 text-black hover:text-primary-darker", {
      "hidden tablet:block": showDesktop,
      "block tablet:hidden": showMobile,
      block: !showMobile && !showDesktop,
      "hover:underline": variant === "top",
    })}
    {...props}
  />
);
