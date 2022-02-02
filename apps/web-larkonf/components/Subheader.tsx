import { Text } from "@vofo-no/ui";
import { PropsWithChildren } from "react";

function Subheader({ children }: PropsWithChildren<{}>): JSX.Element {
  return (
    <Text as="h2" size="3xl" style={{ textAlign: "center" }}>
      {children}
    </Text>
  );
}

export default Subheader;
