import { Box, Text } from "@vofo-no/design";
import { Person } from "studio/schema";
import Subheader from "./Subheader";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import styles from "./SpeakersList.module.css";

const builder = imageUrlBuilder(client);

interface SpeakersListProps {
  speakers?: Array<Person>;
}

function SpeakersList({ speakers }: SpeakersListProps): JSX.Element {
  if (speakers.length === 0) {
    return null;
  }

  return (
    <div id="deltakere">
      <Subheader>Du møter disse</Subheader>
      <Box
        display="grid"
        gridTemplateColumns={["100%", "100%", "100%", "50% 50%"]}
        gridGap={3}
      >
        {speakers.map((item) => (
          <Box
            gridTemplateColumns={["auto", "200px auto"]}
            display="grid"
            variant="light"
            boxShadow="small"
            alignItems="start"
            key={item.name}
            px={5}
            py={4}
            my={0}
          >
            <Box mx={["auto", 0]}>
              <img
                src={builder
                  .image(item.image)
                  .auto("format")
                  .width(175)
                  .height(175)
                  .url()}
                className={[styles.image, styles.circle].join(" ")}
                alt={item.image.alt}
              />
            </Box>
            <div>
              <Text
                as="h3"
                fontSize={3}
                lineHeight={1.2}
                mb={1}
                textAlign={["center", "left"]}
              >
                {item.name}
              </Text>
              <Text mt={0} lineHeight={1.4} textAlign={["center", "left"]}>
                {item.title}
              </Text>
              <Text fontSize={2} lineHeight={1.4}>
                {item.bio}
              </Text>
            </div>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SpeakersList;
