import sanityClient from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "website";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-10-21";
const useCdn = process.env.NODE_ENV === "production";

const client = sanityClient({ projectId, dataset, apiVersion, useCdn });

export default client;
