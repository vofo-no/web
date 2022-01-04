import { Rule } from "@sanity/types";

export default {
  name: "address",
  type: "object",
  title: "Adresse",
  fields: [
    {
      name: "streetAddress",
      type: "string",
      title: "Gateadresse",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "postalCode",
      type: "string",
      title: "Postnummer",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "addressLocality",
      type: "string",
      title: "Poststed",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "addressCountry",
      type: "string",
      title: "Land",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.regex(/^[A-Z]{2}$/),
      initialValue: "NO",
    },
  ],
};
