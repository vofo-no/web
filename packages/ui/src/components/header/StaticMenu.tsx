import React, { PropsWithChildren } from "react";

export const StaticMenu = (props: PropsWithChildren<unknown>) => (
  <div className="flex grow justify-between flex-col ml-3" {...props} />
);
