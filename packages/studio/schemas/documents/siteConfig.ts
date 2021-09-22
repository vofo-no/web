export default {
  name: "site-config",
  type: "document",
  title: "Konfigurasjon",
  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "larkonfEvent",
      title: "Læringskonferansen.no",
      type: "reference",
      description:
        "Velg hvilket arrangement som skal vises på læringskonferansen.no",
      to: { type: "event" },
    },
  ],
};
