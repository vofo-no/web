import { Rule } from "@sanity/types";

export default {
  name: "mainImage",
  type: "image",
  title: "Bilde",
  options: { hotspot: true },
  fields: [
    {
      name: "caption",
      type: "string",
      title: "Bildetekst",
      options: { isHighlighted: true },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternativ tekst",
      description:
        "Beskrivelse av bildet er viktig for søkemotorer og universell utforming.",
      codegen: { required: true },
      validation: (Rule: Rule) =>
        Rule.error("Alternativ tekst må oppgis.").required(),
      options: { isHighlighted: true },
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
};
