import { Box, Text } from "@vofo-no/design";
import Subheader from "./Subheader";

function SignUpForm(): JSX.Element {
  return (
    <>
      <Subheader>Registrer deg</Subheader>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        variant="primary"
        p={[2, 3]}
      >
        <Text textAlign="center">
          Du kan få siste nytt om konferansen rett i innboksen din:
        </Text>
        <Box mx="auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Kun demo");
            }}
          >
            <input
              type="email"
              placeholder="Din e-postadresse"
              style={{ fontSize: "1.5rem", padding: "5px 8px" }}
            />
            <button style={{ fontSize: "1.5rem", padding: "5px 8px" }}>
              Registrer
            </button>
          </form>
        </Box>
        <Text textAlign="center" fontSize={1}>
          Vi vil bruke e-postadressen til å sende deg informasjon om
          konferansen.
        </Text>
      </Box>
    </>
  );
}

export default SignUpForm;
