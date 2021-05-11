export default {
  name: "person",
  type: "object",
  title: "Person",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn",
      validation: (Rule) => Rule.required(),
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
