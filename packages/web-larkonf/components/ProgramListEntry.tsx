import { Box, Text } from "@vofo-no/design";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { ProgramItem } from "studio/schema";

interface ProgramListEntryProps {
  item: ProgramItem;
}

function ProgramListEntry({ item }: ProgramListEntryProps): JSX.Element {
  if (item.level === "sub") {
    return (
      <Box
        gridTemplateColumns={["50px auto", "70px auto"]}
        display="grid"
        px={[3, 5]}
        my={[1]}
        ml={["70px", "90px"]}
      >
        <Text fontSize={[1, 2]} mt={0}>
          {format(parseISO(item.start), "HH:mm")}
        </Text>
        <div>
          <Text as="h4" fontSize={[1, 2]} mt={0} mb={0}>
            {item.title}
          </Text>
          {item.description && <Text mt={0}>{item.description}</Text>}
        </div>
      </Box>
    );
  }

  return (
    <Box
      gridTemplateColumns={["70px auto", "90px auto"]}
      display="grid"
      px={[3, 5]}
      my={[1, 2]}
    >
      <Text fontSize={[2, 3]}>{format(parseISO(item.start), "HH:mm")}</Text>
      <div>
        <Text as="h3" fontSize={[2, 3]} mb={0}>
          {item.title}
        </Text>
        {item.description && <Text mt={0}>{item.description}</Text>}
      </div>
    </Box>
  );
}

export default ProgramListEntry;
