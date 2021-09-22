import Layout from "../components/Layout";
import client from "../client";
import parseISO from "date-fns/parseISO";
import ProgramList from "../components/ProgramList";
import SpeakersList from "../components/SpeakersList";
import SignUpForm from "../components/SignUpForm";
import imageUrlBuilder from "@sanity/image-url";
import { NextSeo } from "next-seo";
import { LarKonfQuery, LarKonfQueryResult } from "../queries/larkonfQuery";

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
      <main>
        <SpeakersList speakers={props.speakers} />
        <ProgramList program={props.program} />
        <div id="registrer">
          <SignUpForm />
        </div>
      </main>
    </Layout>
  );
}
