import { Metadata } from 'next';
import { CeremonySection } from './components/CeremonySection';
import { DateSection } from './components/DateSection';
import { GiftsSection } from './components/GiftsSection';
import { Hero } from './components/Hero';
import { RSVPSection } from './components/RSVPSection';
import { ThankYouSection } from './components/ThankYouSection/ThankYouSection';
import { WhatWillBeSection } from './components/WhatWillBeSection';
import { WhatWontBeSection } from './components/WhatWontBeSection';

import arrowDown1 from '@/app/assets/arrows/arrow-down-1.svg';
import arrowDown2 from '@/app/assets/arrows/arrow-down-2.svg';
import horizontalLines from '@/app/assets/arrows/lines-horizontal.svg';
import { maskSvg } from './utils/common';

function SectionDivider({ icon }: { icon: any }) {
  return (
    <div className="flex justify-center -my-12 md:-my-16 relative z-10 pointer-events-none">
      <div
        className="bg-[#6A0016] opacity-90 w-[80px] h-[160px] md:w-[200px] md:h-[200px]"
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
      <DateSection />
      <SectionDivider icon={arrowDown2} />
      <CeremonySection />
      <SectionDivider icon={arrowDown2} />
      <WhatWillBeSection />
      <SectionDivider icon={arrowDown2} />
      <WhatWontBeSection />
      <RSVPSection />
      <SectionDivider icon={arrowDown2} />
      <GiftsSection />
      <SectionDivider icon={arrowDown2} />
      <ThankYouSection />
    </main>
  );
}

export const metadata: Metadata = {
  title: 'Zapraszamy Was na ślub',
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
