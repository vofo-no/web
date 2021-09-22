import Layout from "../components/Layout";
import groq from "groq";
import client from "../client";
import parseISO from "date-fns/parseISO";
import ProgramList from "../components/ProgramList";
import { VofoEvent } from "../types";
import SpeakersList from "../components/SpeakersList";
import SignUpForm from "../components/SignUpForm";
import imageUrlBuilder from "@sanity/image-url";
import { NextSeo } from "next-seo";

const builder = imageUrlBuilder(client);

const larKonfQuery = groq`
*[_id == "global-config"][0] {
  larkonfEvent -> { ... }
}
`;

export async function getStaticProps() {
  const props = await client.fetch(larKonfQuery);
  props;
  return { props: props["larkonfEvent"] };
}

export default function Home(props: VofoEvent) {
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
    <Layout
      title={props.title}
      subtitle={props.description}
      image={props.image}
      start={start}
      end={end}
    >
      <NextSeo
        title={props.title}
        description={props.description}
        openGraph={{ images: openGraphImages }}
      />
      <main>
        <div id="foredragsholdere">
          <SpeakersList speakers={props.speakers} />
        </div>
        <div id="program">
          <ProgramList program={props.program} />
        </div>
        <div id="registrer">
          <SignUpForm />
        </div>
      </main>
    </Layout>
  );
}
