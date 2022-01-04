import { MdPerson } from "react-icons/md";
import { Rule } from "@sanity/types";

export default {
  name: "personDoc",
  type: "document",
  title: "Person",
  icon: MdPerson,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Tittel og organisasjon",
    },
    {
      name: "image",
      type: "mainImage",
      title: "Hovedbilde",
      description: "Bilde som kan vises ved presentasjon av personen.",
    },
    {
      name: "bio",
      type: "text",
      title: "Kort biografi",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "image",
    },
  },
};
