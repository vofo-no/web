import { Flex, Grid, Text, TextStyles } from "@vofo-no/ui";
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
    <Flex>
      <div style={{ flexBasis: "68px", flexGrow: 0, flexShrink: 0 }}>
        {!isSub && (
          <Text size="xl" style={{ margin: "1em 0" }}>
            {format(parseISO(item.start), "HH:mm")}
          </Text>
        )}
      </div>
      <div style={{ paddingBottom: "1em" }}>
        <Text
          as={isSub ? "h4" : "h3"}
          style={{ margin: "1em 0 0.25em" }}
          size={isSub ? "lg" : "xl"}
        >
          {item.title}
        </Text>
        {item.description && (
          <TextStyles>
            <Text size="base" style={{ margin: "0.25em 0 0.5em" }}>
              {item.description}
            </Text>
          </TextStyles>
        )}
        <Grid colsTablet={2} colsDesktop={3}>
          {item.speakers?.map(({ person, role }) => (
            <SpeakerChip person={person} role={role} key={person._id} />
          ))}
        </Grid>
      </div>
    </Flex>
  );
}

export default ProgramListEntry;
