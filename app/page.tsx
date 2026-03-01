import { CeremonySection } from './components/CeremonySection';
import { DateSection } from './components/DateSection';
import { GiftsSection } from './components/GiftsSection';
import { Hero } from './components/Hero';
import { RSVPSection } from './components/RSVPSection';
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
    </main>
  );
}
