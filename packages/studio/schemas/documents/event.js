import { MdEvent } from "react-icons/md";

export default {
  name: "event",
  type: "document",
  title: "Arrangement",
  icon: MdEvent,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "string",
      title: "Kort beskrivelse",
    },
    {
      name: "schedule",
      type: "schedule",
      title: "Tidspunkt",
      validation: (Rule) => Rule.required(),
    },
    { name: "venue", type: "reference", to: { type: "venue" }, title: "Sted" },
    {
      name: "image",
      type: "mainImage",
      title: "Hovedbilde",
      description: "Bilde som kan vises ved presentasjon av arrangementet.",
    },
    {
      name: "speakers",
      type: "array",
      of: [{ type: "person" }],
      title: "Hovedtalere",
    },
    {
      name: "program",
      type: "array",
      title: "Programposter",
      of: [{ type: "programItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "schedule.from",
      media: "image",
    },
  },
};
