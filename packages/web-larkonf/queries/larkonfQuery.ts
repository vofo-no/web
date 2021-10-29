import groq from "groq";
import { Campaign, Event, Venue, Organization } from "studio/schema";

export const LarKonfQuery = groq`
*[_id == "global-config"][0] {
    larkonfEvent -> {
        title,
        description,
        schedule,
        program,
        speakers,
        image,
        info,
        registerUrl,
        venue -> {
          name,
          address {
            streetAddress,
            postalCode,
            addressLocality,
            addressCountry
          }
        },
        campaign -> { title, link, badge },
        "organizations": organizations[]->{ _id, name, logo, link }
    }
}`;

export interface LarKonfQueryResult {
  larkonfEvent?: Pick<
    Event,
    | "title"
    | "description"
    | "schedule"
    | "program"
    | "speakers"
    | "image"
    | "info"
    | "registerUrl"
  > & {
    venue?: Pick<Venue, "name" | "address">;
    campaign?: Pick<Campaign, "title" | "link" | "badge">;
    organizations?: Array<Pick<Organization, "name" | "logo" | "link">>;
  };
}
