export default {
  name: "programItem",
  type: "object",
  title: "Programpost",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
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
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "start",
    },
  },
};
