import { Text } from "@vofo-no/design";

interface SubheaderProps {
  children: string;
}

function Subheader({ children }: SubheaderProps): JSX.Element {
  return (
    <Text as="h2" fontSize={[3, 4]} mt={[6, 8]} textAlign="center">
      {children}
    </Text>
  );
}

export default Subheader;
