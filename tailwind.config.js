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
        liteGrey: "#999999",
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
          "0%": { transform: "translateX(10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        hand: {
          "0%": { transform: "translateY(-120%) translateX(0%)", opacity: "0" },
          "25%": { transform: "translateY(-40%) translateX(-10%)", opacity: "0.2" },
          "75%": { transform: "translateY(0%) translateX(-25%)", opacity: "1" },
          "100%": { transform: "translateY(0) translateX(5%)", opacity: "1" },
        },
        text: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "hero-slide-in": "hero-slide-in 10s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        hand: "hand 2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards",
        text: "text 3s cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      boxShadow: {
        btnMain: "0px 0px 16px 0px rgba(39,76,91,1)",
        redButton: "0px 10px 40px 0px rgba(237,28,36,0.3)",
        upButton: "0px 0px 10px 3px rgba(237,28,36,0.3)",
        redButtonHover: "0px 10px 40px 0px rgba(237,28,36,0.6)",
        historyItem: "0px 10px 50px 0px rgba(174,174,174,0.15)",
        itemShadow: "0px 1px 12px 0px rgba(34,34,34,0.15);",
      },
      dropShadow: {
        news: "0 20px 35px rgba(167,167,167,0.25)",
        redButton: "0px 10px 40px 0px rgba(237,28,36,0.3)",
      },
    },
  },
  plugins: [],
};
