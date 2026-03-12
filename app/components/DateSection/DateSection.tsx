import SectionContainer from '../SectionContainer';
import { meowScript } from '../../utils/fonts';
import { cn } from '../../utils/common';
import Image from 'next/image';
import couplePortrait5 from '@/app/assets/photos/couple_5.jpg';

export function DateSection() {
  return (
    <SectionContainer
      className="bg-transparent h-auto py-20 mb-8 md:mb-8"
      innerClassName="flex flex-col items-center justify-center w-full"
    >
      <div className="w-full max-w-[600px] border-y border-weddingRedDark/30 py-4">
        {/* Days Header */}
        <div className="grid grid-cols-3 text-center mb-2 text-sm md:text-base text-weddingRedDark/70 uppercase tracking-widest font-semibold">
          <div>Piątek</div>
          <div className="text-weddingRedDark">Sobota</div>
          <div>Niedziela</div>
        </div>

        {/* Months Header (September) */}
        <div className="grid grid-cols-3 text-center mb-4 text-xs md:text-sm text-gray-500 uppercase tracking-widest">
          <div>Września</div>
          <div>Września</div>
          <div>Września</div>
        </div>

        {/* Big Numbers */}
        <div className="grid grid-cols-3 text-center items-center relative z-20">
          <div className="text-6xl md:text-8xl font-light text-black/80">
            18
          </div>
          <div className="relative flex justify-center items-center">
            {/* Hand-drawn style circle using CSS border radius distortion */}
            <div className="absolute w-[120%] h-[120%] border-2 border-weddingRedDark rounded-[50%_40%_60%_50%/50%_60%_40%_50%] transform -rotate-6" />
            <div className="text-7xl md:text-[140px] font-normal text-black leading-none z-10">
              19
            </div>
            {/* Floating handwritten annotation */}
            <div
              className={cn(
                meowScript.className,
                'absolute -right-8 md:-right-16 -top-4 md:-top-8 text-2xl md:text-4xl text-weddingRedDark transform rotate-12'
              )}
            >
              ważne!
            </div>
          </div>
          <div className="text-6xl md:text-8xl font-light text-black/80">
            20
          </div>
        </div>
      </div>
      <p
        className={cn(
          meowScript.className,
          'text-5xl md:text-7xl text-weddingRedDark mt-4'
        )}
      >
        save the date!
      </p>
    </SectionContainer>
  );
}
