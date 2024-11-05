import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
  				'100': '#010103',
  				'200': '#0E0E10',
  				'300': '#1C1C21',
  				'500': '#3A3A49',
  				'600': '#1A1A1A',
  				DEFAULT: '#000'
  			},
  			white: {
  				'500': '#62646C',
  				'600': '#AFB0B6',
  				'700': '#D6D9E9',
  				'800': '#E4E4E6',
  				DEFAULT: '#FFFFFF'
  			},
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
