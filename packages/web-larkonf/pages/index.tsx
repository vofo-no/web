import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Box, Text } from "@vofo-no/design";
import { format, parseISO } from "date-fns";

const builder = imageUrlBuilder(client);

const larKonfQuery = groq`
*[_id == "global-config"][0] {
  larkonfEvent -> { ... }
}
`;

export async function getStaticProps() {
  const props = await client.fetch(larKonfQuery);
  return { props: props["larkonfEvent"] };
}

interface HomeProps {
  title: string;
  description: string;
  program: Array<{
    description: string;
    start: string;
    title: string;
  }>;
  image: SanityImageSource & { alt: string };
  speakers: Array<{
    name: string;
    title: string;
    image: SanityImageSource & { alt: string };
    bio: string;
  }>;
}

export default function Home(props: HomeProps) {
  return (
    <Layout
      title={props.title}
      subtitle={props.description}
      image={props.image}
    >
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Text as="h2" fontSize={[3, 4]} mt={[6, 8]} textAlign="center">
          Program
        </Text>
        {props.program.map((item) => (
          <Box
            gridTemplateColumns={["80px auto", "100px auto"]}
            display="grid"
            variant="light"
            boxShadow="small"
            key={item.title}
            px={[3, 5]}
            py={[1, 5]}
            my={[1, 3]}
          >
            <Text fontSize={[3, 4]}>
              {format(parseISO(item.start), "HH:mm")}
            </Text>
            <div>
              <Text as="h3" fontSize={[2, 3]} mb={0}>
                {item.title}
              </Text>
              <Text mt={0}>{item.description}</Text>
            </div>
          </Box>
        ))}

        <Text as="h2" fontSize={[3, 4]} mt={[6, 8]} textAlign="center">
          Foredragsholdere
        </Text>
        {props.speakers.map((item) => (
          <Box
            gridTemplateColumns={["auto", "250px auto"]}
            display="grid"
            variant="light"
            boxShadow="small"
            key={item.name}
            p={5}
            my={3}
          >
            <Box mx={["auto", 0]}>
              <img
                src={builder
                  .image(item.image)
                  .auto("format")
                  .width(200)
                  .height(200)
                  .url()}
                className={[styles.image, styles.circle].join(" ")}
                alt={props.image.alt}
              />
            </Box>
            <div>
              <Text as="h3" fontSize={3} mb={0} textAlign={["center", "left"]}>
                {item.name}
              </Text>
              <Text mt={0} textAlign={["center", "left"]}>
                {item.title}
              </Text>
              <p>{item.bio}</p>
            </div>
          </Box>
        ))}
        <p>Bla bla bla, osv.</p>
      </main>
    </Layout>
  );
}
