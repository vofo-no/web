import { isBefore } from "date-fns";

export default {
  name: "schedule",
  type: "object",
  title: "Schedule",
  validation: (Rule) =>
    Rule.custom((schedule) => {
      !isBefore(schedule.from, schedule.to) ||
        "Sluttid kan ikke være før starttid.";
    }),
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
};
