import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        "funnel-display": ["Funnel Display", "sans-serif"],
        "funnel-sans": ["Funnel Sans", "sans-serif"],
      },
      colors: {
        "primary-accent": "#0f7490",
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
