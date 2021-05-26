import Head from "next/head";
import Layout from "../components/Layout";
import groq from "groq";
import client from "../client";
import parseISO from "date-fns/parseISO";
import ProgramList from "../components/ProgramList";
import { VofoEvent } from "../types";
import SpeakersList from "../components/SpeakersList";
import SignUpForm from "../components/SignUpForm";

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
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="program">
          <ProgramList program={props.program} />
        </div>
        <div id="foredragsholdere">
          <SpeakersList speakers={props.speakers} />
        </div>
        <div id="registrer">
          <SignUpForm />
        </div>
      </main>
    </Layout>
  );
}
