import SectionContainer from '../SectionContainer';

export function GiftsSection() {
  return (
    <SectionContainer className="bg-transparent py-16" title="Gifty?">
      <div className="flex flex-col items-center text-center gap-5 mt-6 w-full max-w-md mx-auto px-4">
        <p className="text-gray-500 text-base leading-relaxed">
          Wiemy, że eldorado się skończyło, ale jeśli chcecie nas obdarować, to
          tylko 💰
        </p>
        <div className="w-16 h-px bg-weddingRedDark/30 mx-auto" />
        <p className="text-weddingRedDark text-sm tracking-wide">
          Nie kupujcie proszę kwiatów i alkoholu.
        </p>
      </div>
    </SectionContainer>
  );
}
