import { MdLocationOn } from "react-icons/md";

export default {
  name: "venue",
  type: "document",
  title: "Lokasjon",
  icon: MdLocationOn,
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn på lokasjon",
    },
    {
      name: "address",
      type: "string",
      title: "Adresse",
    },
    { name: "position", type: "geopoint", title: "Kartreferanse" },
    { name: "image", type: "mainImage", title: "Bilde" },
  ],
};
