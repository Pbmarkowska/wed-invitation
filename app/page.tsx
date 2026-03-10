import { Metadata } from 'next';
import { CeremonySection } from './components/CeremonySection';
import { DateSection } from './components/DateSection';
import { GiftsSection } from './components/GiftsSection';
import { Hero } from './components/Hero';
import { RSVPSection } from './components/RSVPSection';
import { ThankYouSection } from './components/ThankYouSection/ThankYouSection';
import { WhatWillBeSection } from './components/WhatWillBeSection';
import { WhatWontBeSection } from './components/WhatWontBeSection';

import arrowDown2 from '@/app/assets/arrows/arrow-down-2.svg';
import { cn, maskSvg } from './utils/common';

function SectionDivider({ icon }: { icon: any }) {
  // We use object-cover equivalent behavior or precise sizing to ensure both SVG files scale to the exact same visual height/width
  return (
    <div className="flex justify-center -my-12 md:-my-16 relative z-10 pointer-events-none">
      <div
        className="bg-weddingRedDark opacity-60 w-[50px] h-[100px] md:w-[70px] md:h-[140px]"
        style={{
          ...maskSvg(icon),
          WebkitMaskSize: 'contain',
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider icon={arrowDown2} />
      <DateSection />
      <SectionDivider icon={arrowDown2} />
      <CeremonySection />
      <SectionDivider icon={arrowDown2} />
      <WhatWillBeSection />
      <SectionDivider icon={arrowDown2} />
      <WhatWontBeSection />
      <SectionDivider icon={arrowDown2} />
      <RSVPSection />
      <SectionDivider icon={arrowDown2} />
      <GiftsSection />
      <SectionDivider icon={arrowDown2} />
      <ThankYouSection />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Bierzemy ślub',
  description: 'Zaproszenie na ślub Patrycji i Marcina',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
