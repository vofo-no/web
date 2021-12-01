import { Box, Text } from "@vofo-no/design";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { LarKonfQueryResult } from "../queries/larkonfQuery";
import SpeakerChip from "./SpeakerChip";

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

interface ProgramListEntryProps {
  item: ArrayElement<LarKonfQueryResult["larkonfEvent"]["program"]>;
}

function ProgramListEntry({ item }: ProgramListEntryProps): JSX.Element {
  const isSub = item.level === "sub";

  return (
    <Box
      gridTemplateColumns={isSub ? "auto" : ["70px auto", "90px auto"]}
      display="grid"
      px={[3, 5]}
      mt={2}
      mb={3}
      ml={isSub ? ["70px", "90px"] : undefined}
    >
      {!isSub && (
        <Text fontSize={[2, 3]}>{format(parseISO(item.start), "HH:mm")}</Text>
      )}
      <div>
        <Text
          as={isSub ? "h4" : "h3"}
          fontSize={isSub ? [1, 2] : [2, 3]}
          mt={isSub ? 0 : undefined}
          mb={0}
        >
          {item.title}
        </Text>
        {item.description && (
          <Text mt={0} mb={2}>
            {item.description}
          </Text>
        )}
        {item.speakers?.map(({ person, role }) => (
          <SpeakerChip person={person} role={role} key={person._id} />
        ))}
      </div>
    </Box>
  );
}

export default ProgramListEntry;
