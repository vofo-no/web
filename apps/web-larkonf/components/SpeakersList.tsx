import Subheader from "./Subheader";
import imageUrlBuilder from "@sanity/image-url";
import client from "../client";

import { LarKonfQueryResult } from "../queries/larkonfQuery";
import { Avatar, Box, Flex, Grid, Text } from "design";

const builder = imageUrlBuilder(client);

function SpeakersList({
  mainSpeakers,
}: Pick<LarKonfQueryResult["larkonfEvent"], "mainSpeakers">): JSX.Element {
  if (!mainSpeakers || mainSpeakers.length === 0) {
    return null;
  }

  return (
    <div id="deltakere">
      <Subheader>Konferansen ledes av</Subheader>
      <Grid isContainer cols={1} colsDesktop={2}>
        {mainSpeakers.map(({ person, role, bio }) => (
          <Box key={person._id}>
            <Flex cols colsTablet={false} itemsCenter>
              {person.image?.asset && (
                <Avatar
                  src={builder
                    .image(person.image)
                    .auto("format")
                    .width(175)
                    .height(175)
                    .url()}
                  alt={person.image.alt}
                  size="xl"
                  padding={3}
                />
              )}
              <div>
                <Text as="h3" style={{ margin: "1em 0 0" }} size="xl">
                  {person.name}
                </Text>
                <Text size="base">{role}</Text>
                <Text size="base">{bio}</Text>
              </div>
            </Flex>
          </Box>
        ))}
      </Grid>
    </div>
  );
}

export default SpeakersList;
