import { Meow_Script, PT_Serif } from 'next/font/google';

export const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});

export const meowScript = Meow_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
});
