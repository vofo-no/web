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

  const { width, height, ...imageProps } = useNextSanityImage(
    client,
    campaign.badge,
    {
      enableBlurUp: true,
    }
  );

  const bagdeStyle: CSSProperties = {
    transform: "rotate(10deg)",
  };

  return (
    <Box
      position="absolute"
      right={["-20px", "-20px", 4, 10]}
      width={[150, 200, 300]}
      height={[150, 200, 300]}
      marginTop={["-370px", "-410px", "-750px"]}
      style={bagdeStyle}
    >
      <Link href={campaign.link}>
        <a title={campaign.title}>
          <Img {...imageProps} layout="fill" objectFit="contain" />
        </a>
      </Link>
    </Box>
  );
}

export default CampaignBadge;
