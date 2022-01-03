import React from "react";

export default {
  title: "Style guide",
};

const COLORS = {
  white: "bg-white",
  "dark-red": "bg-dark-red",
  salmon: "bg-salmon",
  steel: "bg-steel",
  teal: "bg-teal",
  blue: "bg-blue",
  yellow: "bg-yellow",
  green: "bg-green",
  pink: "bg-pink",
  red: "bg-red",
  black: "bg-black",
};

export const StyleGuide = () => (
  <div className="prose desktop:prose-xl max-w-none">
    <h1>Style guide</h1>
    <h2>Colors</h2>
    <div className="grid tablet:grid-cols-6 desktop:grid-cols-8 grid-cols-4 gap-5">
      {Object.keys(COLORS).map((color) => (
        <div key={color} className="text-center">
          {color}
          <div
            className={`${
              COLORS[color as keyof typeof COLORS]
            } aspect-square rounded border`}
          ></div>
        </div>
      ))}
    </div>
    <h2>Typography</h2>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p className="lead">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);
