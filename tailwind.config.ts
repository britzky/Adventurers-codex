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
        "hero": "linear-gradient(130.23deg, rgba(19, 0, 96, 0) 46.74%, #130060 84.37%)",
        "character-builder": "radial-gradient(31.32% 57% at 54.78% 37.56%, rgba(19, 0, 96, 0) 0%, #130060 100%)",
        "character-sheet": "radial-gradient(51% 51% at 60.28% 50.78%, rgba(98, 80, 175, 0) 0%, #6250AF 100%)",
        "mystical-chatbot": "radial-gradient(55.69% 55.97% at 40.7% 54.94%, rgba(10, 0, 48, 0) 0%, #0A0030 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

