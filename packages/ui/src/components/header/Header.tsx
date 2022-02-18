import React, { PropsWithChildren, ReactNode, useState } from "react";
import { ToggleNavButton } from "./ToggleNavButton";
import { HeaderContext } from "./HeaderContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { MobileMenu } from "./MobileMenu";
import { StaticMenu } from "./StaticMenu";

type HeaderProps = {
  logo: ReactNode;
  isResponsive?: boolean;
  navBreakpoint?: number;
};

export function Header({
  children,
  logo,
  isResponsive = false,
  navBreakpoint = 600,
}: PropsWithChildren<HeaderProps>) {
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);
  const isCollapsed = isResponsive && width < navBreakpoint;

  return (
    <HeaderContext.Provider
      value={{
        isCollapsed,
        isOpen,
      }}
    >
      <header className="bg-white shadow-sm">
        <nav className="tablet:mx-auto tablet:w-[95%] desktop:w-[90%] max-w-screen-full-hd px-3 py-3 tablet:px-4 tablet:py-3 desktop:px-5 desktop:py-4">
          <div className="flex items-stretch gap-4">
            <div>{logo}</div>
            {isCollapsed ? (
              <div className="ml-auto">
                <ToggleNavButton
                  isOpen={isOpen}
                  onClick={() => setOpen(!isOpen)}
                />
              </div>
            ) : (
              <StaticMenu>{children}</StaticMenu>
            )}
          </div>
          {isCollapsed && <MobileMenu isOpen={isOpen}>{children}</MobileMenu>}
        </nav>
      </header>
    </HeaderContext.Provider>
  );
}
