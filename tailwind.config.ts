import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        bounceBtn:
          "transform .3s cubic-bezier(.5,2.5,.7,.7),box-shadow .3s cubic-bezier(.5,2.5,.7,.7),background .3s cubic-bezier(.5,2.5,.7,.7)",
      },
    },
  },
  plugins: [],
}
export default config
