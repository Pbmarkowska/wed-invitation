import SectionContainer from '@/app/components/SectionContainer';
import { cn, maskSvg } from '@/app/utils/common';
import { meowScript } from '@/app/utils/fonts';
import Image from 'next/image';
import redHeartSvg from '@/app/assets/arrows/lines-heart-red.svg';
import horizontalLinesSvg from '@/app/assets/arrows/lines-horizontal.svg';
import couplePortait3 from '@/app/assets/photos/couple-portrait-3.jpg';
import couplePortait4 from '@/app/assets/photos/couple-portrait-4.jpg';

export function Hero() {
  return (
    <>
      <SectionContainer className="bg-transparent flex-col relative justify-center z-20 pt-0 md:pt-4 pb-16 px-8 md:py-4">
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
              'text-6xl md:text-8xl text-center text-weddingRedDark relative z-30 mb-16 md:mb-10'
            )}
          >
            Zapraszamy Was na ślub
          </h1>
          {/* Main Couple Portraits Collage */}
          <div className="relative z-20 mt-4 md:mt-12 w-full mx-auto">
            {/* Decorative Lines (Red Swoosh) */}
            <div
              className="absolute top-[-45px] md:top-[-60px] left-1/2 transform -translate-x-1/2 w-[150px] md:w-[250px] h-[27px] md:h-[45px] bg-weddingRedDark hover:bg-weddingRedLight transition-colors z-40"
              style={maskSvg(horizontalLinesSvg)}
            />
            <div className="flex flex-row items-start justify-center gap-4 md:gap-2">
              {/* Left Image */}
              <div className="transform -rotate-3 z-30 transition-transform hover:scale-105 hover:z-40">
                <div className="bg-white p-3 md:p-4 pb-10 md:pb-12 shadow-lg border border-gray-200 relative">
                  <Image
                    src={couplePortait4}
                    alt="Patrycja & Marcin Portrait 2"
                    className="w-[180px] md:w-[260px] h-[240px] md:h-[350px] object-cover"
                  />
                  <div className="absolute bottom-4 right-4 rtl opacity-60">
                    <span
                      className={cn(
                        meowScript.className,
                        'text-2xl text-black'
                      )}
                    >
                      19.09
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="transform rotate-3 mt-8 md:mt-12 z-20 transition-transform hover:scale-105 hover:z-40">
                <div className="bg-white p-3 md:p-4 pb-12 shadow-xl border border-gray-200">
                  <Image
                    src={couplePortait3}
                    alt="Patrycja & Marcin Portrait 1"
                    className="w-[190px] md:w-[270px] h-[250px] md:h-[360px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
