import { Box } from "design";
import { LarKonfQueryResult } from "../queries/larkonfQuery";
import ProgramListEntry from "./ProgramListEntry";
import Subheader from "./Subheader";

function ProgramList({
  program,
}: Pick<LarKonfQueryResult["larkonfEvent"], "program">): JSX.Element {
  if (program?.length === 0) {
    return null;
  }

  return (
    <div id="program">
      <Subheader>Program</Subheader>
      <Box isContainer>
        {program.map((item) => (
          <ProgramListEntry
            key={[item.start, item.title].join("@")}
            item={item}
          />
        ))}
      </Box>
    </div>
  );
}

export default ProgramList;
