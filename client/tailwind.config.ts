/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // if you're using the `app` directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial -gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-CanvasGradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        themeSky: "#C3EBFA",
        themeSkyLight: "#EDF9FD",
        themePurple: "#CFCEFF",
        themePrupleLight: "#F1F0FF",
        themeYellow: "#FAE27C",
        themeYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
};
