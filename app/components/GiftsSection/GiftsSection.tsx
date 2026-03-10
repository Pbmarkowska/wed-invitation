import SectionContainer from '../SectionContainer';

export function GiftsSection() {
  return (
    <SectionContainer className="bg-transparent py-16" title="Gifty?">
      <div className="flex flex-col items-center text-center gap-6 mt-8 w-full max-w-md mx-auto px-4 bg-white/50 p-8 rounded-3xl border border-weddingRedDark/10 shadow-sm">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Wiemy, że eldorado się skończyło, ale jeśli chcecie nas obdarować, to
          tylko 💰
        </p>
        <div className="w-16 h-px bg-weddingRedDark/30 mx-auto" />
        <p className="text-weddingRedDark font-medium text-base md:text-lg">
          Nie kupujcie proszę kwiatów i alkoholu.
        </p>
      </div>
    </SectionContainer>
  );
}
