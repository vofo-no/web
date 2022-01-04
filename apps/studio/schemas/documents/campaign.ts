import { Rule } from "@sanity/types";
import { MdLoyalty } from "react-icons/md";

export default {
  name: "campaign",
  type: "document",
  title: "Kampanje",
  icon: MdLoyalty,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "badge",
      type: "badge",
      title: "Merke",
      description:
        "Merke som brukes til å synliggjøre produkter tilknyttet kampanjen.",
    },
    {
      name: "link",
      title: "Lenke til kampanjen",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "link",
      media: "badge",
    },
  },
};
