import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import client from "../client";
import { CSSProperties } from "react";
import Link from "next/link";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { Box } from "@vofo-no/design";

export interface CampaignBadgeProps {
  campaign?: {
    title: string;
    link?: string;
    badge?: {
      asset: SanityImageSource;
      alt: string;
    };
  };
}

function CampaignBadge({ campaign }: CampaignBadgeProps): JSX.Element {
  if (!campaign || !campaign.badge) return null;

  const imageProps = useNextSanityImage(client, campaign.badge);

  const bagdeStyle: CSSProperties = {
    transform: "rotate(10deg)",
  };

  return (
    <Box
      position="absolute"
      right={[0, 0, 0, "10px"]}
      top={["10px", "-20px", "100px", "120px"]}
      overflow="hidden"
      width={[120, 170, 300]}
      height={[150, 200, 300]}
    >
      <Box
        position="relative"
        width={[150, 200, 300]}
        height={[150, 200, 300]}
        style={bagdeStyle}
      >
        <Link href={campaign.link}>
          <a title={campaign.title}>
            <Img
              src={imageProps.src}
              loader={imageProps.loader}
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </Box>
    </Box>
  );
}

export default CampaignBadge;
