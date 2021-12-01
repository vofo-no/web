import { Box, Text } from "@vofo-no/design";
import Subheader from "./Subheader";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import styles from "./SpeakersList.module.css";
import { LarKonfQueryResult } from "../queries/larkonfQuery";

const builder = imageUrlBuilder(client);

function SpeakersList({
  mainSpeakers,
}: Pick<LarKonfQueryResult["larkonfEvent"], "mainSpeakers">): JSX.Element {
  if (!mainSpeakers || mainSpeakers.length === 0) {
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
        {mainSpeakers.map(({ person, role, bio }) => (
          <Box
            gridTemplateColumns={["auto", "200px auto"]}
            display="grid"
            variant="light"
            boxShadow="small"
            alignItems="start"
            key={person._id}
            px={5}
            py={4}
            my={0}
          >
            <Box mx={["auto", 0]}>
              {person.image?.asset && (
                <img
                  src={builder
                    .image(person.image)
                    .auto("format")
                    .width(175)
                    .height(175)
                    .url()}
                  className={[styles.image, styles.circle].join(" ")}
                  alt={person.image.alt}
                />
              )}
            </Box>
            <div>
              <Text
                as="h3"
                fontSize={3}
                lineHeight={1.2}
                mb={1}
                textAlign={["center", "left"]}
              >
                {person.name}
              </Text>
              <Text mt={0} lineHeight={1.4} textAlign={["center", "left"]}>
                {role}
              </Text>
              <Text fontSize={2} lineHeight={1.4}>
                {bio}
              </Text>
            </div>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SpeakersList;
