import React, { PropsWithChildren } from "react";

interface NavMenuContainerProps {
  isOpen: boolean;
}

export const MobileMenu = ({
  isOpen,
  ...props
}: PropsWithChildren<NavMenuContainerProps>) =>
  isOpen ? (
    <div className="flex items-end flex-col gap-2 basis-full grow" {...props} />
  ) : (
    <div />
  );
