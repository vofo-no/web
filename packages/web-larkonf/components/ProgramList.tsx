import { Box } from "@vofo-no/design";
import { ProgramItem } from "studio/schema";
import ProgramListEntry from "./ProgramListEntry";
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
          <ProgramListEntry key={item.title} item={item} />
        ))}
      </Box>
    </div>
  );
}

export default ProgramList;
