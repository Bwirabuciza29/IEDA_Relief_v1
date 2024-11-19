/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      colors: {
        customLight: "#F9F9F4",
        "custom-green": "#65FF6A",
      },
      fontFamily: {
        sri: ["Sriracha"],
      },
    },
  },
  plugins: [],
};
