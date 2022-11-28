import { Disclosure, Transition } from "@headlessui/react";
import { Box } from "@vofo-no/ui";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { LarKonfQueryResult } from "../queries/larkonfQuery";
import ProgramListEntry from "./ProgramListEntry";
import Subheader from "./Subheader";

function ProgramList({
  program,
  programStatus,
}: Pick<
  LarKonfQueryResult["larkonfEvent"],
  "program" | "programStatus"
>): JSX.Element {
  if (!program || programStatus === "draft" || program.length === 0) {
    return null;
  }

  if (programStatus === "temp") {
    return (
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center gap-3 mx-auto border border-gray-400 rounded px-8 py-4 hover:bg-gray-300 font-semibold">
              <span>{open ? <FaChevronDown /> : <FaChevronRight />}</span>
              <span>Program</span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out origin-top"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out origin-top"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                <Box isContainer>
                  {program.map((item) => (
                    <ProgramListEntry
                      key={[item.start, item.title].join("@")}
                      item={item}
                    />
                  ))}
                </Box>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    );
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
