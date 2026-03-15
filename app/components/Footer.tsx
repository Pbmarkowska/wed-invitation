import { cn } from '../utils/common';
import { ptSerif, meowScript } from '../utils/fonts';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('w-full px-4 md:px-8 mb-12 mt-24', className)}>
      <div className="max-w-4xl mx-auto bg-weddingRedDark text-white py-12 px-6 rounded-t-[3rem] rounded-b-[1rem] shadow-2xl flex flex-col items-center gap-6 text-center border border-white/10">
        <div className={cn(meowScript.className, 'text-4xl md:text-5xl')}>
          Dziękujemy!
        </div>
        <div className="h-px w-16 bg-white/20" />
        <div className="text-sm opacity-90 flex flex-wrap items-center justify-center gap-3 tracking-widest font-light uppercase">
          {ptSerif.className && (
            <span className={ptSerif.className}>Patrycja & Marcin 2026</span>
          )}
          <span className="hidden sm:inline opacity-30 text-xs">|</span>
          <a
            href="https://github.com/Pbmarkowska/wed-invitation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-weddingRed transition-all duration-300 border-b border-transparent hover:border-weddingRed pb-0.5"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
