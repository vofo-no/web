import Layout from "../components/Layout";
import client from "../client";
import parseISO from "date-fns/parseISO";
import ProgramList from "../components/ProgramList";
import SpeakersList from "../components/SpeakersList";
import SignUpButton from "../components/SignUpButton";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import { NextSeo, EventJsonLd } from "next-seo";
import { LarKonfQuery, LarKonfQueryResult } from "../queries/larkonfQuery";
import { Box } from "@vofo-no/design";
import OrganizationsLogoBand from "../components/OrganizationsLogoBand";

const builder = imageUrlBuilder(client);

export async function getStaticProps() {
  const props = await client.fetch<LarKonfQueryResult>(LarKonfQuery);
  props;
  return { props: props["larkonfEvent"] };
}

type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;
type Props = UnwrapPromise<ReturnType<typeof getStaticProps>>["props"];

export default function Home(props: Props) {
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
          performers={props.speakers.map((speaker) => ({ name: speaker.name }))}
        />
      )}
      <main>
        {props.info && (
          <Box variant="light" boxShadow="small" px={[3, 4]} py={[1, 2]}>
            <BlockContent blocks={props.info} />
          </Box>
        )}
        <SignUpButton registerUrl={props.registerUrl} start={start} />
        <SpeakersList speakers={props.speakers} />
        <OrganizationsLogoBand organizations={props.organizations} />
        <ProgramList program={props.program} />
        <SignUpButton registerUrl={props.registerUrl} start={start} />
      </main>
    </Layout>
  );
}
