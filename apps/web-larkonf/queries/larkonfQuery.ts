import groq from "groq";
import {
  Campaign,
  Event,
  Venue,
  Organization,
  ProgramItem,
  PersonDoc,
  EventSpeaker,
} from "shared/schema";

export const LarKonfQuery = groq`
*[_id == "global-config"][0] {
    larkonfEvent->{
        title,
        description,
        'schedule': {'from': '2022-01-19T08:00:00.000Z', 'to': '2022-01-19T11:00:00.000Z'},
        program[]{ ..., speakers[]{ ..., person-> }},
        mainSpeakers[]{ ..., person-> },
        image,
        info,
        registerUrl,
        youTubeVideoId,
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
    | "title"
    | "description"
    | "schedule"
    | "image"
    | "info"
    | "registerUrl"
    | "youTubeVideoId"
  > & {
    program?: Array<ProgramItemWithSpeakers>;
    mainSpeakers?: Array<EventSpeakerWithPerson>;
    venue?: Venue;
    campaign?: Campaign;
    organizations?: Array<Organization>;
  };
}
