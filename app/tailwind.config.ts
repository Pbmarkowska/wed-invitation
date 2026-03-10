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
        weddingRedDark: '#89001D',
        weddingRedLight: '#F1476B',
        weddingCream: '#FDFCFB',
      },
    },
  },
  plugins: [],
};

export default config;
