import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Box, Text } from "@vofo-no/design";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { CSSProperties } from "react";
import { format, isSameDay, isSameMonth } from "date-fns";
import nb from "date-fns/locale/nb";

const builder = imageUrlBuilder(client);

export interface HeroProps {
  title: string;
  subtitle: string;
  image?: SanityImageSource & { alt: string };
  start: Date;
  end: Date;
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
        backgroundColor: "black",
      }}
    >
      {children}
    </span>
  );
}

function Hero({ title, subtitle, image, start, end }: HeroProps): JSX.Element {
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
          minHeight={["300px", "300px", "75vh"]}
        >
          <Text as="h1" fontSize={[4, 5, 6]} mt={4} mb={0}>
            <TextOnImg>{title}</TextOnImg>
          </Text>
          <Text my={0} fontSize={[2, 3, 4]}>
            <TextOnImg>{subtitle}</TextOnImg>
          </Text>
          <Text fontSize={[3, 4, 5]}>
            <TextOnImg>{humanDateRange(start, end)}</TextOnImg>
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
