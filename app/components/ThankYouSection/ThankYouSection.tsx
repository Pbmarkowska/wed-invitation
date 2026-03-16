import SectionContainer from '../SectionContainer';
import { cn, maskSvg } from '@/app/utils/common';
import { meowScript } from '@/app/utils/fonts';
import Image from 'next/image';
import malePortrait from '@/app/assets/photos/male_portait.jpg';
import womanPortrait from '@/app/assets/photos/woman_portrait.jpg';
import redHeartSvg from '@/app/assets/arrows/lines-heart-red.svg';

export function ThankYouSection({ id }: { id: string }) {
  return (
    <SectionContainer className="bg-transparent py-16 md:py-24" id={id}>
      <div className="flex flex-col items-center justify-center mt-8 mb-20 md:mb-32 w-full max-w-4xl mx-auto relative px-4">
        {/* Portraits and Heart Container */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-12 mb-16 md:mb-24 relative z-20">
          {/* Male Portrait */}
          <div className="transform -rotate-6 transition-transform hover:scale-110 hover:z-30 cursor-pointer">
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-xl border border-gray-100">
              <Image
                src={malePortrait}
                alt="Marcin"
                className="w-[130px] md:w-[220px] object-cover rounded-sm border border-gray-50"
              />
            </div>
          </div>

          {/* Center Heart Icon */}
          <div
            className="w-[60px] h-[55px] md:w-[100px] md:h-[90px] bg-weddingRedDark hover:bg-weddingRedLight transition-colors shrink-0 z-10"
            style={maskSvg(redHeartSvg)}
          />

          {/* Woman Portrait */}
          <div className="transform rotate-6 transition-transform hover:scale-110 hover:z-30 cursor-pointer">
            <div className="bg-white p-2 md:p-3 pb-8 md:pb-12 shadow-xl border border-gray-100">
              <Image
                src={womanPortrait}
                alt="Patrycja"
                className="w-[130px] md:w-[220px] object-cover rounded-sm border border-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Overlapping Handwritten Text */}
        <div className="absolute -bottom-10 md:-bottom-16 left-0 right-0 text-center z-40">
          <p
            className={cn(
              meowScript.className,
              'text-6xl md:text-8xl text-weddingRedDark transform rotate-2 hover:scale-105 transition-transform cursor-default'
            )}
          >
            Do zobaczenia!
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
