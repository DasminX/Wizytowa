/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "primary-color": "var(--primary-color)",
        "active-link": "var(--active-link)",
        "secondary-color": "var(--secondary-color)",
        "thumb-color": "var(--thumb-color)",
        "track-color": "var(--track-color)",
      },
    },
  },
  plugins: [],
};
