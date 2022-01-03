import { Flex } from "design";

const FooterSponsor = (): JSX.Element => (
  <Flex itemsCenter justifyCenter gap="xl">
    <div>
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
    </div>
    <div>
      <a href="https://vercel.com/?utm_source=vofo-kursinfo&utm_campaign=oss">
        <img src="/powered-by-vercel.svg" alt="Powered by Vercel" width={180} />
      </a>
    </div>
  </Flex>
);

export default FooterSponsor;
