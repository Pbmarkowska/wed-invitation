import SectionContainer from '../SectionContainer';
import { meowScript } from '../../utils/fonts';
import { cn } from '../../utils/common';

export function DateSection() {
  return (
    <SectionContainer
      className="bg-[#F8F8F8] h-[800px] !p-0"
      innerClassName="bg-weddingRed h-full relative flex flex-col items-center"
      title="15:00"
      titleClassName={cn(
        meowScript.className,
        'text-7xl italic underline font-normal relative z-20 pt-10 px-6 md:px-12'
      )}
      fullHeight
    >
      <div className="flex-1 w-full flex flex-col justify-center relative overflow-visible px-6 md:px-12">
        <div className="relative w-full">
          <div className="absolute top-[64px] md:top-[80px] left-[-24px] md:left-[-48px] w-[calc(100%+48px)] md:w-[calc(100%+96px)] h-32 bg-white/20 z-0 -translate-y-1/2" />
          <div className="grid grid-cols-3 gap-4 md:gap-12 relative z-10 w-full max-w-[800px] mx-auto">
            <div className="flex flex-col items-center">
              <div className="bg-[#F5F2EF] rounded-2xl w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-sm">
                <span className="text-5xl md:text-7xl font-normal text-weddingRedDark">
                  18
                </span>
              </div>
              <p className="text-lg md:text-2xl mt-4">piątek</p>
            </div>
            <div className="border border-weddingRedDark rounded-[32px] p-4 md:p-6 flex flex-col items-center relative bg-weddingRed h-fit scale-110 mb-[-20px]">
              <div className="bg-[#D19AA6] rounded-2xl w-36 h-36 md:w-48 md:h-48 flex items-center justify-center shadow-inner">
                <span className="text-6xl md:text-8xl font-normal text-black/70">
                  19
                </span>
              </div>
              <p
                className={cn(
                  meowScript.className,
                  'text-4xl md:text-6xl mt-4 lowercase'
                )}
              >
                sobota
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#F5F2EF] rounded-2xl w-32 h-32 md:w-40 md:h-40 flex items-center justify-center shadow-sm">
                <span className="text-5xl md:text-7xl font-normal text-weddingRedDark">
                  20
                </span>
              </div>
              <p className="text-lg md:text-2xl mt-4">niedziela</p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
