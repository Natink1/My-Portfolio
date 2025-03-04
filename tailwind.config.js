/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // ✅ Small screens
      md: "768px", // ✅ Medium screens
      lg: "1024px", // ✅ Large screens
      xl: "1280px", // ✅ Extra Large screens
    },
  },
  plugins: [],
};
