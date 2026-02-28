import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-serif)'],
        script: ['var(--font-script)'],
      },
      colors: {
        weddingRed: '#D8AFB8',
      },
    },
  },
  plugins: [],
};

export default config;
