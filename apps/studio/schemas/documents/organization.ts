import { Rule } from "@sanity/types";
import { MdBusiness } from "react-icons/md";

export default {
  name: "organization",
  type: "document",
  title: "Organisasjon",
  icon: MdBusiness,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      options: { hotspot: true },
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "link",
      title: "Lenke til organisasjonen",
      type: "url",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "link",
      media: "logo",
    },
  },
};
