import { Flex } from "@vofo-no/ui";
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
          unoptimized
          alt="SANITY"
          title="Strukturert innhold er drevet av Sanity.io"
          width={100}
          height={20}
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
          unoptimized
          alt="Powered by Vercel"
          width={180}
          height={37}
        />
      </a>
    </div>
  </Flex>
);

export default FooterSponsor;
