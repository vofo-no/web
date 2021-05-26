import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface VofoEvent {
  title: string;
  description: string;
  program: Array<{
    description: string;
    start: string;
    title: string;
  }>;
  image: SanityImageSource & { alt: string };
  speakers: Array<{
    name: string;
    title: string;
    image: SanityImageSource & { alt: string };
    bio: string;
  }>;
  schedule: {
    from: string;
    to: string;
  };
}
