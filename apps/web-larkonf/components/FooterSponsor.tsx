import { Flex } from "design";
import Image from "next/image";

const FooterSponsor = (): JSX.Element => (
  <Flex itemsCenter justifyCenter gap="xl">
    <div>
      <a
        href="https://www.sanity.io"
        target="_blank"
        rel="noreferrer"
        style={{ position: "relative" }}
      >
        <Image
          src="/sanity-logo.svg"
          alt="SANITY"
          title="Strukturert innhold er drevet av Sanity.io"
          width={100}
        />
      </a>
    </div>
    <div>
      <a
        href="https://vercel.com/?utm_source=vofo-kursinfo&utm_campaign=oss"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/powered-by-vercel.svg"
          alt="Powered by Vercel"
          width={180}
        />
      </a>
    </div>
  </Flex>
);

export default FooterSponsor;
