import { isBefore } from "date-fns";
import { Rule } from "@sanity/types";

export default {
  name: "schedule",
  type: "object",
  title: "Schedule",
  validation: (Rule: Rule) =>
    Rule.custom(
      (schedule: { from: number | Date; to: number | Date }) =>
        !isBefore(schedule.from, schedule.to) ||
        "Sluttid kan ikke være før starttid."
    ),
  fields: [
    {
      name: "from",
      type: "datetime",
      title: "Start",
    },
    {
      name: "to",
      type: "datetime",
      title: "Slutt",
    },
  ],
  options: {
    columns: 2,
  },
};
