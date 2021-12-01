import groq from "groq";
import {
  Campaign,
  Event,
  Venue,
  Organization,
  ProgramItem,
  PersonDoc,
  EventSpeaker,
} from "studio/schema";

export const LarKonfQuery = groq`
*[_id == "global-config"][0] {
    larkonfEvent->{
        title,
        description,
        schedule,
        program[]{ ..., speakers[]{ ..., person-> }},
        mainSpeakers[]{ ..., person-> },
        image,
        info,
        registerUrl,
        venue->,
        campaign->,
        organizations[]->
    }
}`;

export interface EventSpeakerWithPerson extends Omit<EventSpeaker, "person"> {
  person: PersonDoc;
}

export interface ProgramItemWithSpeakers extends Omit<ProgramItem, "speakers"> {
  speakers?: Array<EventSpeakerWithPerson>;
}

export interface LarKonfQueryResult {
  larkonfEvent?: Pick<
    Event,
    "title" | "description" | "schedule" | "image" | "info" | "registerUrl"
  > & {
    program?: Array<ProgramItemWithSpeakers>;
    mainSpeakers?: Array<EventSpeakerWithPerson>;
    venue?: Venue;
    campaign?: Campaign;
    organizations?: Array<Organization>;
  };
}
