import { Box, Text } from "@vofo-no/design";
import { VofoEvent } from "../types";
import Subheader from "./Subheader";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import styles from "./SpeakersList.module.css";

const builder = imageUrlBuilder(client);

function SpeakersList({ speakers }: Pick<VofoEvent, "speakers">): JSX.Element {
  if (speakers.length === 0) {
    return null;
  }

  return (
    <div id="foredragsholdere">
      <Subheader>Foredragsholdere</Subheader>
      {speakers.map((item) => (
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
              alt={item.image.alt}
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
    </div>
  );
}

export default SpeakersList;
