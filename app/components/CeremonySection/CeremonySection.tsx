import { cn } from '@/app/utils/common';
import SectionContainer from '../SectionContainer';
import { meowScript } from '@/app/utils/fonts';

export function CeremonySection() {
  return (
    <SectionContainer className="bg-transparent" title="Szczegóły">
      <div className="flex flex-col items-center justify-center gap-16 mt-8 w-full max-w-2xl mx-auto">
        {/* Church Section */}
        <div className="flex flex-col items-center text-center">
          <p
            className={cn(
              meowScript.className,
              'text-5xl md:text-6xl text-weddingRedDark mb-2'
            )}
          >
            15:00
          </p>
          <p className="text-3xl md:text-4xl text-black mb-2 font-medium tracking-wide">
            Kościół pw. św. Krzyża
          </p>
          <div className="text-gray-600 text-sm md:text-base leading-relaxed">
            <p>ul. Częstochowska 16</p>
            <p>60-123 Poznań</p>
            <p className="mt-2 text-xs md:text-sm italic opacity-80 max-w-xs">
              (płatny parking przy kościele - wjazd od ul. Zgoda - lub bezpłatny
              na ul. Częstochowskiej)
            </p>
          </div>
        </div>
        {/* Reception Section */}
        <div className="flex flex-col items-center text-center">
          <p
            className={cn(
              meowScript.className,
              'text-5xl md:text-6xl text-weddingRedDark mb-2'
            )}
          >
            16:00 - 22:00
          </p>
          <p className="text-3xl md:text-4xl text-black mb-2 font-medium tracking-wide">
            Restauracja Rusalka
          </p>
          <div className="text-gray-600 text-sm md:text-base leading-relaxed">
            <p>ul. Golęcińska 27</p>
            <p>60-626 Poznań</p>
            <p className="mt-2 text-xs md:text-sm italic opacity-80">
              (płatny parking)
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
