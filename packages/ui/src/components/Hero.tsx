import React, { PropsWithChildren } from "react";
import classNames from "classnames";

// Srcset is a workaround until https://drafts.csswg.org/css-images-4/#image-set-notation (issue 2) is supported.

export interface HeroProps {
  alt: string;
  isStack?: boolean;
  /** 640x480px image url */
  smallImageUrl: string;
  /** 1024x576px image url */
  mediumImageUrl: string;
  /** 1920x1080px image url */
  largeImageUrl: string;
  isBlurred?: boolean;
}

export const Hero = ({
  smallImageUrl,
  mediumImageUrl,
  largeImageUrl,
  alt,
  isBlurred,
  isStack,
  children,
}: PropsWithChildren<HeroProps>) => (
  <div className="bg-gray-800 relative">
    <div
      className={classNames(
        "aspect-4/3 tablet:aspect-video mx-auto max-w-[1920px] w-full relative overflow-hidden",
        { "tablet:-mb-10": isStack }
      )}
    >
      <picture className="not-prose">
        <source media="(min-width: 1024px)" srcSet={largeImageUrl} />
        <source media="(min-width: 640px)" srcSet={mediumImageUrl} />
        <img
          src={smallImageUrl}
          alt={alt}
          className={classNames("absolute top-0 left-0 w-full h-full", {
            "blur-sm": isBlurred,
          })}
        />
      </picture>
      <div
        className={classNames(
          "relative flex flex-col items-center justify-center h-full max-w-none prose prose-invert",
          { "tablet:pb-10": isStack }
        )}
      >
        {children}
      </div>
    </div>
  </div>
);
