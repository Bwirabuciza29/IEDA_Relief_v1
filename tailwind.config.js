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
        "custom-green": "#07AF08",
        "custom-blue": "#055FC5",
      },
      fontFamily: {
        sri: ["Sriracha"],
      },
    },
  },
  plugins: [],
};
