import type { Config } from "tailwindcss"

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)"],
        script: ["var(--font-script)"],
      },
    },
  },
  plugins: [],
}

export default config