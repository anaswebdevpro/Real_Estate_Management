/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Outfit",
          "Noto Sans JP",
          "Noto Sans",
          "Vazirmatn",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
