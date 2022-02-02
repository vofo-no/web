import React, { MouseEvent } from "react";
import { Button } from "../Button";

export interface ToggleNavButtonProps {
  isOpen?: boolean;
  onClick?: (event: MouseEvent) => void;
}

export const ToggleNavButton = ({ isOpen, ...props }: ToggleNavButtonProps) => {
  return (
    <Button
      variant="menu"
      {...props}
      isOpen={isOpen}
      aria-label={`${isOpen ? "Skjul" : "Vis"} navigasjon`}
    />
  );
};
