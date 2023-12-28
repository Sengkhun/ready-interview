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
        "secondary-dark": "#209EBC",
        tertiary: "#FFB702",
        default: "#225067",
      },
      borderRadius: {
        lg: "1rem",
      },
    },
  },
  plugins: [],
};
export default config;
