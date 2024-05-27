import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        maroon: {
          600: "#800000",
        },
      },
      keyframes: {
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
      },
      animation: {
        typing:
          "typing 4s steps(40, end) 1s 1 normal both, blink .75s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
