import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Hero, Text } from "design";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { format, isSameDay, isSameMonth } from "date-fns";
import nb from "date-fns/locale/nb";
import SignUpButton from "./SignUpButton";
//import CampaignBadge from "./CampaignBadge";

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
  registerUrl?: string;
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
        display: "inline-block",
        padding: "0.5rem 0.7rem",
        boxDecorationBreak: "clone",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {children}
    </span>
  );
}

function MyHero({
  title,
  description,
  image,
  start,
  end,
  venue,
  registerUrl,
  campaign,
}: HeroProps): JSX.Element {
  return (
    <Hero
      smallImageUrl={
        image &&
        builder.image(image).auto("format").width(640).height(480).url()
      }
      mediumImageUrl={
        image &&
        builder.image(image).auto("format").width(1024).height(576).url()
      }
      largeImageUrl={
        image &&
        builder.image(image).auto("format").width(1920).height(1080).url()
      }
      alt={image?.alt}
      isStack
    >
      <div style={{ textAlign: "center" }}>
        <Text as="h1" style={{ margin: "2em 0 0" }} size="4xl">
          <TextOnImg>{title}</TextOnImg>
        </Text>
        <Text as="p" style={{ margin: 0 }} className="text-white" size="2xl">
          <TextOnImg>{description}</TextOnImg>
        </Text>

        <Text
          as="p"
          style={{ margin: "1.5rem 0 0" }}
          className="text-white"
          size="2xl"
        >
          <TextOnImg>
            {[venue?.name, humanDateRange(start, end)]
              .filter(Boolean)
              .join(", ")}
          </TextOnImg>
        </Text>
      </div>
      <div className="hidden tablet:block">
        <SignUpButton start={start} registerUrl={registerUrl} invert />
      </div>
    </Hero>
  );
}

export default MyHero;
