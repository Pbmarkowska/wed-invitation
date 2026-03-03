import { cn } from '@/app/utils/common';
import SectionContainer from '../SectionContainer';
import { meowScript } from '@/app/utils/fonts';

export function CeremonySection() {
  return (
    <SectionContainer className="bg-gray-200" title="Szczegóły">
      <div className="flex flex-col gap-2 relative top-[50px]">
        <p
          className={cn(
            meowScript.className,
            'text-5xl italic text-weddingRedDark'
          )}
        >
          15:00
        </p>
        <p className="text-4xl italic text-weddingRedDark">
          Kościół pw. św. Krzyża
        </p>
        <p className="flex flex-col relative top[-200px]">
          ul. Częstochowska 16
        </p>
        <p>60-123 Poznań</p>
        <p>
          (płatny parking przy kościele - wjazd od ulicy Zgoda - lub na ulicy
          Częstochowskiej)
        </p>
      </div>
      <div className="flex flex-col gap-2 relative top-[200px] left-[550px]">
        <p
          className={cn(
            meowScript.className,
            'text-5xl italic text-weddingRedDark'
          )}
        >
          16:00 - 22:00
        </p>
        <p className="text-4xl italic text-weddingRedDark">
          Restauracja "Rusałka"
        </p>
        <div className="flex flex-col relative left-[200px] gap-2">
          <p>ul. Golęcińska 27</p>
          <p>60-626 Poznań</p>
          <p>(płatny parking)</p>
        </div>
      </div>
    </SectionContainer>
  );
}
