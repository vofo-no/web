import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Box, Text } from "@vofo-no/design";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { CSSProperties } from "react";
import { format, isSameDay, isSameMonth } from "date-fns";
import nb from "date-fns/locale/nb";
import CampaignBadge from "./CampaignBadge";

const builder = imageUrlBuilder(client);

export interface HeroProps {
  title: string;
  description?: string;
  image?: {
    asset: SanityImageSource;
    alt: string;
  };
  start: Date;
  end: Date;
  venue?: {
    name?: string;
  };
  campaign?: {
    title: string;
    link?: string;
    badge?: {
      asset: SanityImageSource;
      alt: string;
    };
  };
}

function humanDateRange(start: Date, end: Date): string {
  if (isSameDay(start, end)) {
    return `${format(start, "d. MMMM yyyy", { locale: nb })}`;
  }

  if (isSameMonth(start, end)) {
    return `${format(start, "d.", { locale: nb })}-${format(
      end,
      "d. MMMM yyyy",
      { locale: nb }
    )}`;
  }

  return `${format(start, "d. MMMM", { locale: nb })}-${format(
    end,
    "d. MMMM yyyy",
    { locale: nb }
  )}`;
}

function TextOnImg({ children }: { children: string }): JSX.Element {
  return (
    <span
      style={{
        display: "inline",
        padding: "0.5rem 0.7rem",
        boxDecorationBreak: "clone",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </span>
  );
}

function Hero({
  title,
  description,
  image,
  start,
  end,
  venue,
  campaign,
}: HeroProps): JSX.Element {
  const bgStyle: CSSProperties = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: image
      ? `url("${builder
          .image(image)
          .auto("format")
          .width(1400)
          .height(600)
          .url()}")`
      : undefined,
    marginBottom: "-50px",
  };

  return (
    <>
      <Box variant="dark" style={bgStyle}>
        <Box
          container
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          py={5}
          minHeight={["300px", "300px", "500px", "750px"]}
          paddingBottom="50px"
        >
          <Text as="h1" fontSize={[4, 5, 6]} mt={4} mb={0}>
            <TextOnImg>{title}</TextOnImg>
          </Text>
          <Text my={[2, 1, 0]} fontSize={[2, 3, 4]}>
            <TextOnImg>{description}</TextOnImg>
          </Text>
          <Text fontSize={[2, 3, 4]}>
            <TextOnImg>
              {[venue?.name, humanDateRange(start, end)]
                .filter(Boolean)
                .join(", ")}
            </TextOnImg>
          </Text>
        </Box>
        <CampaignBadge campaign={campaign} />
      </Box>
    </>
  );
}

export default Hero;
