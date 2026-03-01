import { ptSerif } from '@/app/utils/fonts';
import SectionContainer from '../SectionContainer';
import { cn } from '@/app/utils/common';

export function GiftsSection() {
  return (
    <SectionContainer className="bg-gray-200">
      <h1 className={cn(ptSerif.className, 'text-6xl')}>Gifty?</h1>
    </SectionContainer>
  );
}
