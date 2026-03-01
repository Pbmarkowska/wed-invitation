import SectionContainer from '@/app/components/SectionContainer';
import { cn } from '@/app/utils/common';
import { meowScript, ptSerif } from '@/app/utils/fonts';

export function Hero() {
  return (
    <>
      <SectionContainer className="bg-gray-200">
        <h1 className={cn(meowScript.className, 'text-7xl')}>Bierzemy ślub</h1>
      </SectionContainer>
      <SectionContainer className="bg-weddingRed">
        <h1 className={cn(ptSerif.className, 'text-7xl')}>Inny napis</h1>
      </SectionContainer>
    </>
  );
}
