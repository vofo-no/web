/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");

fs.copyFile(
  path.resolve(__dirname, "../tailwind-base.js"),
  path.resolve(__dirname, "../dist/tailwind-base.js"),
  (err) => {
    if (err) throw err;
    console.log("tailwind-base.js copied to dist");
  }
);
