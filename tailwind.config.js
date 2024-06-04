/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        main: "#222222",
        grey: "#666666",
        red: "#ED1C24",
        bgBlack: "#333333",
      },
      screens: {
        tablet: "768px",
        // => @media (min-width: 768px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }

        deskMax: "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
