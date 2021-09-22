import { Box, Text } from "@vofo-no/design";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import { ProgramItem } from "studio/schema";
import Subheader from "./Subheader";

interface ProgramListProps {
  program?: Array<ProgramItem>;
}

function ProgramList({ program }: ProgramListProps): JSX.Element {
  if (program?.length === 0) {
    return null;
  }

  return (
    <div id="program">
      <Subheader>Program</Subheader>
      <Box variant="light" boxShadow="small" py={[1, 2]}>
        {program.map((item) => (
          <Box
            gridTemplateColumns={["70px auto", "90px auto"]}
            display="grid"
            key={item.title}
            px={[3, 5]}
            my={[1, 2]}
          >
            <Text fontSize={[2, 3]}>
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
      </Box>
    </div>
  );
}

export default ProgramList;
