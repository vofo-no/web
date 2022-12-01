import groq from "groq";
import {
  Event,
  ProgramItem,
  PersonDoc,
  EventSpeaker,
  SanityBlock,
} from "shared/dist/schema";

export const LarKonfQuery = groq`
*[_id == "siteSettings"][0] {
    larkonfEvent->{
        title,
        description,
        start,
        end,
        location,
        programStatus,
        program[]{ ..., speakers[]{ ..., person-> }},
        mainSpeakers[]{ ..., person-> },
        image,
        info,
        body,
        registerUrl,
        youTubeVideoId,
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
    "title" | "description" | "image" | "registerUrl" | "youTubeVideoId"
  > & {
    start?: string;
    end?: string;
    location?: {
      name?: string;
      address?: string;
    };
    programStatus?: "draft" | "temp" | "final";
    program?: Array<ProgramItemWithSpeakers>;
    mainSpeakers?: Array<EventSpeakerWithPerson>;
    body?: SanityBlock;
  };
}
