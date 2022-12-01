import { Hero, Text } from "@vofo-no/ui";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { format, isSameDay, isSameMonth } from "date-fns";
import nb from "date-fns/locale/nb";
import SignUpButton from "./SignUpButton";
import { YouTubeVideo } from "./YouTubeVideo";
import { LayoutProps } from "./Layout";

const builder = imageUrlBuilder(client);

interface HeroProps2
  extends Pick<
    LayoutProps,
    | "title"
    | "image"
    | "start"
    | "end"
    | "mainSpeakers"
    | "location"
    | "program"
    | "registerUrl"
    | "youTubeVideoId"
    | "showSignUp"
    | "showVideoPlayer"
  > {}

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
  image,
  start,
  end,
  location,
  registerUrl,
  youTubeVideoId,
  showSignUp,
  showVideoPlayer,
}: HeroProps2): JSX.Element {
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
      isBlurred={showVideoPlayer}
    >
      {showVideoPlayer ? (
        <YouTubeVideo videoId={youTubeVideoId} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <Text as="h1" style={{ margin: "2em 0 0" }} size="4xl">
            <TextOnImg>{title}</TextOnImg>
          </Text>
          <Text
            as="p"
            style={{ margin: "1.5rem 0 0" }}
            className="text-white"
            size="2xl"
          >
            <TextOnImg>
              {[location?.name, humanDateRange(start, end)]
                .filter(Boolean)
                .join(", ")}
            </TextOnImg>
          </Text>
          <div className="hidden tablet:block">
            <SignUpButton
              showSignUp={showSignUp}
              registerUrl={registerUrl}
              invert
            />
          </div>
        </div>
      )}
    </Hero>
  );
}

export default MyHero;
