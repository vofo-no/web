// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

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
      white: "#FFFFFF",
      "dark-red": "#990326",
      "dark-red-darker": "#7a021e",
      salmon: "#ff8c5b",
      steel: "#00afbb",
      teal: "#009890",
      "teal-darker": "#007a73",
      blue: "#0078a4",
      yellow: "#ffaa00",
      green: "#21c149",
      pink: "#ff4d4d",
      red: "#ff042a",
      black: "#212121",
      gray: {
        900: "#e3e3e3",
        800: "#b6b6b6",
        200: "#2d2d2d",
      },
      transparent: "transparent",
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
          backgroundColor: "#e3e3e3",
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
        a: { color: theme("colors.blue") },
        "a:hover": { color: theme("colors.dark-red-darker") },
        ".dark a": { color: theme("colors.white") },
        ".dark a:hover": { color: theme("colors.yellow") },
        "button, input, textarea, select": { fontFamily: "inherit" },
      });
    }),
  ],
};
