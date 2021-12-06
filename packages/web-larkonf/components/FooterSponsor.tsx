import { Box } from "@vofo-no/design";

const FooterSponsor = (): JSX.Element => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <Box m={3}>
      <a
        href="https://www.sanity.io"
        target="_blank"
        style={{ position: "relative" }}
      >
        <img
          src="/sanity-logo.svg"
          alt="SANITY"
          title="Strukturert innhold er drevet av Sanity.io"
          width={100}
        />
      </a>
    </Box>
    <Box m={3}>
      <a href="https://vercel.com/?utm_source=vofo-kursinfo&utm_campaign=oss">
        <img src="/powered-by-vercel.svg" alt="Powered by Vercel" width={180} />
      </a>
    </Box>
  </Box>
);

export default FooterSponsor;
