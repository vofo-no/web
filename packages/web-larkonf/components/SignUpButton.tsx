import { Box, Text } from "@vofo-no/design";
import isFuture from "date-fns/isFuture";
import Link from "next/link";

interface SignUpButtonProps {
  registerUrl?: string;
  start: Date;
}

function SignUpButton({ registerUrl, start }: SignUpButtonProps): JSX.Element {
  if (!registerUrl || !isFuture(start)) return null;

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={[2, 3]}
        my={4}
      >
        <div>
          <Link href={registerUrl}>
            <a target="_blank">
              <Text
                as="span"
                py={4}
                px={6}
                style={{ borderRadius: "5px" }}
                backgroundColor="primary"
                color="white"
                fontSize={3}
              >
                Registrer deg nå
              </Text>
            </a>
          </Link>
        </div>
      </Box>
    </>
  );
}

export default SignUpButton;
