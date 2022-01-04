import { Rule } from "@sanity/types";

export default {
  name: "badge",
  type: "image",
  title: "Merke",
  options: { hotspot: false },
  fields: [
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
      title: "alt",
    },
  },
};
