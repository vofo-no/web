import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import isFuture from "date-fns/isFuture";
import isToday from "date-fns/isToday";
import parseISO from "date-fns/parseISO";
import { Box, TextStyles } from "@vofo-no/ui";
import { NextSeo, EventJsonLd } from "next-seo";

import Layout from "../components/Layout";
import client from "../client";
import ProgramList from "../components/ProgramList";
import SpeakersList from "../components/SpeakersList";
import SignUpButton from "../components/SignUpButton";
import { LarKonfQuery, LarKonfQueryResult } from "../queries/larkonfQuery";

const builder = imageUrlBuilder(client);

export async function getStaticProps() {
  const { larkonfEvent } = await client.fetch<LarKonfQueryResult>(LarKonfQuery);
  const start =
    larkonfEvent.schedule.from && parseISO(larkonfEvent.schedule.from);

  const extra = {
    showSignUp: !!(larkonfEvent.registerUrl && start && isFuture(start)),
    showVideoPlayer: !!(
      larkonfEvent.youTubeVideoId &&
      start &&
      (isToday(start) || !isFuture(start))
    ),
  };
  return { props: { ...larkonfEvent, ...extra }, revalidate: 60 };
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
export type IndexPageProps = UnwrapPromise<
  ReturnType<typeof getStaticProps>
>["props"];

export default function Home(props: IndexPageProps) {
  const openGraphImages = props.image
    ? [
        {
          url: builder.image(props.image).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: props.image.alt,
        },
        {
          // Facebook recommended size
          url: builder.image(props.image).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: props.image.alt,
        },
        {
          // Square 1:1
          url: builder.image(props.image).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: props.image.alt,
        },
      ]
    : [];

  const start = parseISO(props.schedule.from);
  const end = parseISO(props.schedule.to);
  return (
    <Layout {...props} start={start} end={end}>
      <NextSeo
        title={props.title}
        description={props.description}
        openGraph={{ images: openGraphImages }}
      />
      {props.venue?.address && (
        <EventJsonLd
          name={props.title}
          startDate={props.schedule.from}
          endDate={props.schedule.to}
          location={{ name: props.venue.name, address: props.venue.address }}
          images={[builder.image(props.image).width(1200).height(630).url()]}
          description={props.description}
          performers={props.mainSpeakers?.map((speaker) => ({
            name: speaker.person.name,
          }))}
        />
      )}
      <main>
        {props.info && (
          <TextStyles center>
            <Box>
              <BlockContent blocks={props.info} />
            </Box>
          </TextStyles>
        )}
        <SignUpButton
          registerUrl={props.registerUrl}
          showSignUp={props.showSignUp}
        />
        <ProgramList program={props.program} />
        <SpeakersList mainSpeakers={props.mainSpeakers} />
        <SignUpButton
          registerUrl={props.registerUrl}
          showSignUp={props.showSignUp}
        />
      </main>
    </Layout>
  );
}
