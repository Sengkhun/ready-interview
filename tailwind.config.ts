import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#FB8502",
        "primary-dark": "#D97600",
        secondary: "#8ECAE6",
        "secondary-light": "#B3E0F2",
        "secondary-dark": "#209EBC",
        tertiary: "#FFB702",
        default: "#225067",
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
