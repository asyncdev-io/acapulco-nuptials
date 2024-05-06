import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        transparent: "transparent",
        black: "#000000",
        beige: "#F3EEE7",
        cream: "#FAF6F2",
        brown: "#6C4E3F",
      },
    },
  },
  plugins: [],
};
export default config;
