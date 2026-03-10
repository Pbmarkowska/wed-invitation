import SectionContainer from '@/app/components/SectionContainer';
import { cn, maskSvg } from '@/app/utils/common';
import { meowScript, ptSerif } from '@/app/utils/fonts';
import Image from 'next/image';
import redHeartSvg from '@/app/assets/arrows/lines-heart-red.svg';
import horizontalLinesSvg from '@/app/assets/arrows/lines-horizontal.svg';
import couplePortait3 from '@/app/assets/photos/couple-portrait-3.jpg';
import couplePortait4 from '@/app/assets/photos/couple-portrait-4.jpg';

export function Hero() {
  return (
    <>
      <SectionContainer className="bg-transparent flex-col relative justify-center z-20 pt-0 md:pt-4 pb-16 px-8">
        <div className="flex flex-col items-center max-w-lg mx-auto relative mt-0">
          {/* Top Decorative Heart */}
          <div
            className="w-[100px] h-[90px] md:w-[138px] md:h-[123px] bg-weddingRedDark hover:bg-weddingRedLight transition-colors mb-4"
            style={maskSvg(redHeartSvg)}
          />
          {/* Large Title Text overlapping the image */}
          <h1
            className={cn(
              meowScript.className,
              'text-7xl md:text-8xl text-center text-weddingRedDark relative z-30 mb-16 md:mb-20'
            )}
          >
            Bierzemy ślub
          </h1>
          {/* Main Couple Portrait */}
          <div className="relative z-20 mt-4 md:mt-8">
            <Image
              src={couplePortait3}
              alt="Patrycja & Marcin Portrait"
              className="rounded-[32px] w-[280px] md:w-[400px] h-auto object-cover shadow-xl border-4 border-weddingCream"
            />

            {/* Overlay Decorative Lines */}
            <div
              className="absolute bottom-[-20px] md:bottom-[-40px] right-[-30px] md:right-[-60px] w-[200px] h-[36px] md:w-[350px] md:h-[63px] bg-weddingRedDark hover:bg-weddingRedLight transition-colors z-30"
              style={maskSvg(horizontalLinesSvg)}
            />
          </div>
          <div className="mt-[60px] md:mt-[100px]" /> {/* Spacer */}
        </div>
      </SectionContainer>
    </>
  );
}
