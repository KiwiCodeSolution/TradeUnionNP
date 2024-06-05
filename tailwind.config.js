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
        bgGrey: "#EEEEEE",
      },
      screens: {
        tablet: "768px",
        // => @media (min-width: 768px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }

        deskMax: "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: {
        "hero-slide-in": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "hero-slide-in": "hero-slide-in 2s ease-out forwards", // змінили тривалість на 2 секунди
      },
      boxShadow: {
        btnMain: "0px 0px 16px 0px rgba(39,76,91,1)",
        redButton: "0px 10px 40px 0px rgba(237,28,36,0.3)",
        redButtonHover: "0px 10px 40px 0px rgba(237,28,36,0.6)",
      },
      dropShadow: {
        news: "0 20px 35px rgba(167,167,167,0.25)",
        redButton: "0px 10px 40px 0px rgba(237,28,36,0.3)",
      },
    },
  },
  plugins: [],
};
