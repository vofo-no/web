import React, { PropsWithChildren } from "react";

export const Footer = ({ children }: PropsWithChildren<unknown>) => (
  <footer className="bg-gray-800 prose prose-invert dark max-w-none">
    <div className="tablet:mx-auto tablet:w-[95%] desktop:w-[90%] max-w-screen-full-hd px-3 py-3 tablet:px-4 tablet:py-3 desktop:px-5 desktop:py-4 grid grid-flow-col auto-cols-auto justify-evenly">
      {children}
    </div>
  </footer>
);
