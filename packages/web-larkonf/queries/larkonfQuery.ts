import groq from "groq";
import { Campaign, Event, Venue } from "studio/schema";

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
        venue -> { name, address },
        campaign -> { title, link, badge }
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
  };
}
