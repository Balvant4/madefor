/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // Add the DaisyUI plugin here
  ],
  daisyui: {
    themes: ["slate"], // Set the theme to "light"
  },
};
