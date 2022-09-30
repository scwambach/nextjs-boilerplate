/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "1043px",
        xl: "1280px",
        xxl: "1440px",
      },
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "1043px",
        xl: "1280px",
        xxl: "1440px",
      },
    },
  },
  plugins: [],
};
