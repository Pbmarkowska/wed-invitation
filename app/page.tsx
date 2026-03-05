import { Metadata } from 'next';
import { CeremonySection } from './components/CeremonySection';
import { DateSection } from './components/DateSection';
import { GiftsSection } from './components/GiftsSection';
import { Hero } from './components/Hero';
import { RSVPSection } from './components/RSVPSection';
import { ThankYouSection } from './components/ThankYouSection/ThankYouSection';
import { WhatWillBeSection } from './components/WhatWillBeSection';
import { WhatWontBeSection } from './components/WhatWontBeSection';

export default function Home() {
  return (
    <main>
      <Hero />
      <DateSection />
      <CeremonySection />
      <WhatWillBeSection />
      <WhatWontBeSection />
      <RSVPSection />
      <GiftsSection />
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
