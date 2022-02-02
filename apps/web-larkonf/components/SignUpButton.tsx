import { Button } from "@vofo-no/ui";

interface SignUpButtonProps {
  registerUrl?: string;
  showSignUp: boolean;
  invert?: boolean;
}

function SignUpButton({
  registerUrl,
  showSignUp,
  invert,
}: SignUpButtonProps): JSX.Element {
  if (!showSignUp) return null;

  return (
    <div
      style={{ textAlign: "center", marginTop: "24px", marginBottom: "24px" }}
    >
      <Button
        as="a"
        href={registerUrl}
        target="_blank"
        rel="noopener"
        variant={invert ? "secondary" : "primary"}
        size="xlarge"
      >
        Meld deg på
      </Button>
    </div>
  );
}

export default SignUpButton;
