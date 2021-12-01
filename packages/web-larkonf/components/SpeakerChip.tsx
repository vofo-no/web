import { Box, Text } from "@vofo-no/design";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";
import { EventSpeakerWithPerson } from "../queries/larkonfQuery";

import styles from "./SpeakerChip.module.css";

const builder = imageUrlBuilder(client);

function SpeakerChip({
  person: { image, name },
  role,
}: Pick<EventSpeakerWithPerson, "person" | "role">): JSX.Element {
  return (
    <Box gridTemplateColumns={"50px auto"} display="grid" my={1}>
      <Box mx={["auto", 0]}>
        {image?.asset && (
          <img
            src={builder.image(image).auto("format").width(40).height(40).url()}
            className={[styles.image, styles.circle].join(" ")}
            alt={image.alt}
          />
        )}
      </Box>
      <div>
        <Text as="h4" fontSize={[1, 2]} lineHeight={1.4} my={0}>
          {name}
        </Text>
        <Text mt={0} fontSize={1} lineHeight={1.4} my={0} color="#666">
          {role}
        </Text>
      </div>
    </Box>
  );
}

export default SpeakerChip;
