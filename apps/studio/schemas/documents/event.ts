import { Rule } from "@sanity/types";
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
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
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
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    { name: "venue", type: "reference", to: { type: "venue" }, title: "Sted" },
    {
      name: "image",
      type: "mainImage",
      title: "Hovedbilde",
      description: "Bilde som kan vises ved presentasjon av arrangementet.",
    },
    {
      name: "info",
      title: "Informasjon",
      description: "Brødtekst med informasjon om arrangementet",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "mainSpeakers",
      type: "array",
      of: [{ type: "eventSpeaker" }],
      title: "Hovedtalere",
    },
    {
      name: "program",
      type: "array",
      title: "Programposter",
      of: [{ type: "programItem" }],
    },
    {
      name: "registerUrl",
      type: "url",
      title: "Lenke til påmelding",
    },
    {
      name: "youTubeVideoId",
      type: "string",
      title: "YouTube video-ID",
      description: "ID til opptak eller direktesending på YouTube",
    },
    {
      name: "campaign",
      type: "reference",
      to: { type: "campaign" },
      title: "Kampanje",
      description: "Knytt arrangementet til en kampanje",
    },
    {
      title: "Organisasjoner som bidrar",
      name: "organizations",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "organization" }],
        },
      ],
    },
    {
      name: "speakers",
      type: "array",
      of: [{ type: "person" }],
      title: "Hovedtalere (ikke i bruk)",
      hidden: true,
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
