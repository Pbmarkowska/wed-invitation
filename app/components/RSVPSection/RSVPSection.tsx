import SectionContainer from '../SectionContainer';
import Image from 'next/image';
import blackHeartSvg from '@/app/assets/arrows/lines-heart-black.svg';
import phoneIconSvg from '@/app/assets/icons/Phone.svg';
import mailIconSvg from '@/app/assets/icons/Mail.svg';
import { maskSvg } from '@/app/utils/common';
import { ObfuscatedText } from '../ObfuscatedText';

export function RSVPSection({ id }: { id: string }) {
  return (
    <SectionContainer
      className="bg-transparent flex-col relative"
      title="RSVP i kontakt:"
      titleClassName="pt-10"
      titleImage={maskSvg(blackHeartSvg)}
      titleImageAlt="black heart"
      titleImageClassName="w-[138px] h-[123px] hover:bg-weddingRedLight transition-colors"
      id={id}
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
      <p className="text-xl text-center text-weddingRedDark mt-[40px] flex flex-col items-center gap-4">
        Napisz nam SMS, maila lub wypełnij ankietę do 31.07.2026
        <a
          className="px-7 py-2 border border-weddingRedDark text-weddingRedDark rounded-full text-sm tracking-widest hover:bg-weddingRedDark hover:text-white transition-all duration-300"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeIj1BhVM1A4EqLGAh_LJX95DS7N6ubaPSAxKM6Lv6l_wGp2g/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          klik!
        </a>
      </p>
      <p className="text-center text-gray-600 text-sm tracking-wide mt-[16px] max-w-md mx-auto leading-relaxed">
        Potwierdź udział, daj znać czy potrzebujesz noclegu, daj nam znać o
        swoich preferencjach żywieniowych i alergiach pokarmowych, i czy pijesz
        alkohol.
      </p>
    </SectionContainer>
  );
}
