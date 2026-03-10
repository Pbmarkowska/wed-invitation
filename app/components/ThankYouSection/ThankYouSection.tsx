import SectionContainer from '../SectionContainer';
import { cn } from '@/app/utils/common';
import { meowScript } from '@/app/utils/fonts';

export function ThankYouSection() {
  return (
    <SectionContainer className="bg-transparent py-24">
      <div className="flex flex-col items-center justify-center mt-12 mb-32">
        <p
          className={cn(
            meowScript.className,
            'text-6xl md:text-8xl text-weddingRedDark transform -rotate-3 hover:scale-105 transition-transform cursor-default'
          )}
        >
          Do zobaczenia!
        </p>
      </div>
    </SectionContainer>
  );
}
