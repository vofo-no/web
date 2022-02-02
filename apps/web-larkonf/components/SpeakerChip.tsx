import imageUrlBuilder from "@sanity/image-url";
import { Avatar, Flex, Text } from "@vofo-no/ui";
import client from "../client";
import { EventSpeakerWithPerson } from "../queries/larkonfQuery";

const builder = imageUrlBuilder(client);

function SpeakerChip({
  person: { image, name },
  role,
}: Pick<EventSpeakerWithPerson, "person" | "role">): JSX.Element {
  return (
    <Flex itemsCenter>
      <div className="not-prose" style={{ flexShrink: 0 }}>
        {image?.asset ? (
          <Avatar
            src={builder.image(image).auto("format").width(88).height(88).url()}
            alt={image.alt}
            size="lg"
          />
        ) : (
          <div />
        )}
      </div>
      <div>
        <Text as="h4" size="base" style={{ margin: 0, whiteSpace: "nowrap" }}>
          {name}
        </Text>
        <Text className="text-gray-200" as="div" size="sm">
          {role}
        </Text>
      </div>
    </Flex>
  );
}

export default SpeakerChip;
