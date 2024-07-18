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
        'snow': '#fffafa',
        'red': '#ff0000',
      },
      letterSpacing: {
        wider2: '0.2em',  // Adding a custom letter-spacing value
      },
    },
  },
  plugins: [],
};
export default config;
