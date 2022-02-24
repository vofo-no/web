module.exports = {
  presets: [require("@vofo-no/ui/tailwind-base")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/@vofo-no/ui/**/*.js",
  ],
};
