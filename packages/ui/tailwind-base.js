// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

const crimson = {
  50: "#fee2e9",
  100: "#eab5c2",
  200: "#d6899b",
  300: "#c15c74",
  400: "#ad304d",
  500: "#990326",
  600: "#7c031f",
  700: "#5e0218",
  800: "#410210",
  900: "#230109",
};

module.exports = {
  mode: "jit",
  darkMode: "class",
  theme: {
    screens: {
      tablet: "640px",
      desktop: "1024px",
      "full-hd": "1920px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      crimson,
      teal: colors.teal,
      blue: colors.blue,
      amber: colors.amber,
      primary: crimson[500],
      "primary-darker": crimson[600],
      secondary: "#009890",
      "secondary-darker": colors.teal[700],
      brand: {
        salmon: "#ff8c5b",
        steel: "#00afbb",
        blue: "#0078a4",
        yellow: "#ffaa00",
        green: "#21c149",
        pink: "#ff4d4d",
        red: "#ff042a",
      },
    },
    fontFamily: {
      lato: "Lato, sans-serif",
      "open-sans": "'Open Sans', sans-serif",
    },
    extend: {
      aspectRatio: { "4/3": "4 / 3" },
      boxShadow: {
        "inset-button": "rgba(0, 0, 0, 0.1) 0 0 0 3em inset",
      },
      gridTemplateColumns: {
        "72-auto": "72px auto",
        "92-auto": "92px auto",
        "200-auto": "200px auto",
      },
      colors: {
        teal: { 600: "#009890" },
      },
      typography: ({ theme }) => ({
        gray: {
          css: {
            "--tw-prose-links": theme("colors.brand.blue"),
            "--tw-prose-links-hover": theme("colors.crimson.600"),
            "--tw-prose-invert-links": theme("colors.amber.200"),
            "--tw-prose-invert-links-hover": theme("colors.amber.400"),
          },
        },
        invert: {
          css: {
            "--tw-prose-links-hover": "var(--tw-prose-invert-links-hover)",
          },
        },
        DEFAULT: {
          css: {
            a: {
              color: "var(--tw-prose-links)",
              "&:hover": {
                color: "var(--tw-prose-links-hover)",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          fontFamily: theme("fontFamily.lato"),
          backgroundColor: theme("colors.gray.200"),
          overflowY: "auto",
          overflowX: "hidden",
          webkitFontSmoothing: "antialiased",
          mozOsxFontSmoothing: "grayscale",
          webkitTapHighlightColor: ["rgba(0, 0, 0, 0)", "transparent"],
          webkitOverflowScrolling: "touch",
        },
        ":focus:not(:focus-visible)": { outline: "none" },
        h1: { fontFamily: theme("fontFamily.open-sans") },
        h2: { fontFamily: theme("fontFamily.open-sans") },
        h3: { fontFamily: theme("fontFamily.open-sans") },
        h4: { fontFamily: theme("fontFamily.open-sans") },
        a: { color: theme("colors.brand.blue") },
        "a:hover": { color: theme("colors.crimson.600") },
        ".dark a": { color: theme("colors.amber.200") },
        ".dark a:hover": { color: theme("colors.amber.400") },
        "button, input, textarea, select": { fontFamily: "inherit" },
      });
    }),
  ],
};
