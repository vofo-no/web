import { Rule } from "@sanity/types";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

export default {
  name: "programItem",
  type: "object",
  title: "Programpost",
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
      name: "start",
      type: "datetime",
      title: "Tidspunkt",
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "level",
      type: "string",
      title: "Nivå",
      initialValue: "default",
      options: {
        list: [
          { title: "Standard", value: "default" },
          { title: "Underordnet", value: "sub" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      codegen: { required: true },
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "start",
      level: "level",
    },
    prepare(selection) {
      const { title, date, level } = selection;
      return {
        title: `${level === "sub" ? "→ " : ""}${title}`,
        subtitle: date && format(parseISO(date), "dd.MM.yyyy HH:mm"),
      };
    },
  },
};
