import SectionContainer from '../SectionContainer';
import Image from 'next/image';
import blackHeartSvg from '@/app/assets/arrows/lines-heart-black.svg';
import phoneIconSvg from '@/app/assets/icons/Phone.svg';
import mailIconSvg from '@/app/assets/icons/Mail.svg';
import { maskSvg } from '@/app/utils/common';
import { ObfuscatedText } from '../ObfuscatedText';

export function RSVPSection() {
  return (
    <SectionContainer
      className="bg-weddingRed flex-col relative"
      title="RSVP i kontakt:"
      titleClassName="pt-10"
      titleImage={maskSvg(blackHeartSvg)}
      titleImageAlt="black heart"
      titleImageClassName="w-[138px] h-[123px] hover:bg-weddingRedLight transition-colors"
    >
      <ul className="items-center flex flex-col gap-y-2 mx-auto justify-center">
        <li className="flex items-center gap-[8px]">
          <Image src={phoneIconSvg} alt="phone icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">
            <ObfuscatedText data="KyAoNDgpIDUzNCA2NzIgMTY4" />
          </p>
        </li>
        <li className="flex items-center gap-[8px]">
          <Image src={phoneIconSvg} alt="phone icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">
            <ObfuscatedText data="KyAoNDgpIDY5NCA4MjUgOTgx" />
          </p>
        </li>
        <li className="flex items-center gap-[8px]">
          <Image src={mailIconSvg} alt="mail icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">
            <ObfuscatedText data="cGIubWFya293c2thQGdtYWlsLmNvbQ==" />
          </p>
        </li>
        <li className="flex items-center gap-[8px]">
          <Image src={mailIconSvg} alt="mail icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">
            <ObfuscatedText data="bS1tYWpld3NraUBvdXRsb29rLmNvbQ==" />
          </p>
        </li>
      </ul>
      <p className="text-4xl text-weddingRedDark mt-[40px] flex flex-col items-center">
        Napisz nam SMS lub maila:
      </p>
      <p className="text-center mt-[20px]">
        Potwierdź udział, nocleg, alergie pokarmowe i czy pijesz alkohol
      </p>
    </SectionContainer>
  );
}
