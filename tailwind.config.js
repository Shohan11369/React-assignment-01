/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00F0FF",
        dark: "#0B0F19",
        textMain: "#ffffff",
        accent: "#2FF4D1",
      },
    },
  },
  plugins: [],
};
