import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Arrangement
 *
 *
 */
export interface Event extends SanityDocument {
  _type: "event";

  /**
   * Tittel — `string`
   *
   *
   */
  title: string;

  /**
   * Kort beskrivelse — `string`
   *
   *
   */
  description?: string;

  /**
   * Tidspunkt — `schedule`
   *
   *
   */
  schedule: Schedule;

  /**
   * Sted — `reference`
   *
   *
   */
  venue?: SanityReference<Venue>;

  /**
   * Hovedbilde — `mainImage`
   *
   * Bilde som kan vises ved presentasjon av arrangementet.
   */
  image?: MainImage;

  /**
   * Hovedtalere — `array`
   *
   *
   */
  speakers?: Array<SanityKeyed<Person>>;

  /**
   * Programposter — `array`
   *
   *
   */
  program?: Array<SanityKeyed<ProgramItem>>;
}

/**
 * Lokasjon
 *
 *
 */
export interface Venue extends SanityDocument {
  _type: "venue";

  /**
   * Navn på lokasjon — `string`
   *
   *
   */
  name?: string;

  /**
   * Adresse — `string`
   *
   *
   */
  address?: string;

  /**
   * Kartreferanse — `geopoint`
   *
   *
   */
  position?: SanityGeoPoint;

  /**
   * Bilde — `mainImage`
   *
   *
   */
  image?: MainImage;
}

/**
 * Konfigurasjon
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "site-config";

  /**
   * Læringskonferansen.no — `reference`
   *
   * Velg hvilket arrangement som skal vises på læringskonferansen.no
   */
  larkonfEvent?: SanityReference<Event>;
}

export type MainImage = {
  _type: "mainImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Bildetekst — `string`
   *
   *
   */
  caption?: string;

  /**
   * Alternativ tekst — `string`
   *
   * Beskrivelse av bildet er viktig for søkemotorer og universell utforming.
   */
  alt: string;
};

export type Schedule = {
  _type: "schedule";
  /**
   * Start — `datetime`
   *
   *
   */
  from?: string;

  /**
   * Slutt — `datetime`
   *
   *
   */
  to?: string;
};

export type Person = {
  _type: "person";
  /**
   * Navn — `string`
   *
   *
   */
  name: string;

  /**
   * Tittel og organisasjon — `string`
   *
   *
   */
  title?: string;

  /**
   * Hovedbilde — `mainImage`
   *
   * Bilde som kan vises ved presentasjon av personen.
   */
  image?: MainImage;

  /**
   * Kort biografi — `text`
   *
   *
   */
  bio?: string;
};

export type ProgramItem = {
  _type: "programItem";
  /**
   * Tittel — `string`
   *
   *
   */
  title?: string;

  /**
   * Kort beskrivelse — `string`
   *
   *
   */
  description?: string;

  /**
   * Tidspunkt — `datetime`
   *
   *
   */
  start?: string;
};

export type Documents = Event | Venue | SiteConfig;
