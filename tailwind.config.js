import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: "'Poppins', sans-serif", // popins font family imported from google fonts
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}