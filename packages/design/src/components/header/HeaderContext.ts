import { createContext } from "react";

interface HeaderContextInterface {
  isCollapsed: boolean;
  isOpen: boolean;
}

export const defaultHeaderContext = {
  isCollapsed: false,
  isOpen: false,
};

export const HeaderContext =
  createContext<HeaderContextInterface>(defaultHeaderContext);
