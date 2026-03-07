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
      <SectionContainer className="bg-gray-200 flex-col relative justify-center z-20">
        <div className="mt-[75px] flex flex-col items-center">
          <div
            className="absolute top-[75px] left-1/2 -translate-x-1/2 w-[138px] h-[123px] bg-[#89001D] hover:bg-weddingRedLight transition-colors"
            style={maskSvg(redHeartSvg)}
          />
          <h1
            className={cn(
              meowScript.className,
              'text-8xl relative z-10 top-[100px] right-[150px]'
            )}
          >
            Bierzemy ślub
          </h1>
          <div
            className="mt-[10px] flex flex-col items-center relative z-10 top-[100px] right-[150px] w-[535px] h-[96px] bg-[#89001D] hover:bg-weddingRedLight transition-colors"
            style={maskSvg(horizontalLinesSvg)}
          />
        </div>

        <Image
          src={couplePortait3}
          alt="couple portrait 3"
          className="rounded-[30px] w-[300px] h-auto absolute top-[15px] left-[55px]"
        />
        <Image
          src={couplePortait4}
          alt="couple portrait 4"
          className="rounded-[30px] w-[300px] h-auto absolute top-[200px] right-[55px]"
        />
      </SectionContainer>
    </>
  );
}
