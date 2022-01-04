import isFuture from "date-fns/isFuture";
import { Button } from "design";

interface SignUpButtonProps {
  registerUrl?: string;
  start: Date;
  invert?: boolean;
}

function SignUpButton({
  registerUrl,
  start,
  invert,
}: SignUpButtonProps): JSX.Element {
  if (!registerUrl || !isFuture(start)) return null;

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
