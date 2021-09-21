import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "qy7enua2",
  dataset: "production",
  apiVersion: "2020-09-20",
  token: "", // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
