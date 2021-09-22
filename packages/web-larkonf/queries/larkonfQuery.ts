import groq from "groq";
import { Event, Venue } from "studio/schema";

export const LarKonfQuery = groq`
*[_id == "global-config"][0] {
    larkonfEvent -> {
        title,
        description,
        schedule,
        program,
        speakers,
        image,
        venue -> { name, address }
    }
}`;

export interface LarKonfQueryResult {
  larkonfEvent?: Pick<
    Event,
    "title" | "description" | "schedule" | "program" | "speakers" | "image"
  > & {
    venue?: Pick<Venue, "name" | "address">;
  };
}
