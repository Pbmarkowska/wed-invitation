import SectionContainer from '../SectionContainer';
import Image from 'next/image';
import blackHeartSvg from '@/app/assets/arrows/lines-heart-black.svg';
import phoneIconSvg from '@/app/assets/icons/Phone.svg';
import mailIconSvg from '@/app/assets/icons/Mail.svg';

export function RSVPSection() {
  return (
    <SectionContainer
      className="bg-weddingRed flex-col relative justify-center z-20"
      title="RSVP i kontakt:"
      titleImage={blackHeartSvg}
      titleImageAlt="black heart"
    >
      <ul className="items-center flex flex-col gap-y-2 mx-auto justify-center">
        <li className="flex items-center gap-[8px]">
          <Image src={phoneIconSvg} alt="phone icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">+ (48) 534 672 168</p>
        </li>
        <li className="flex items-center gap-[8px]">
          <Image src={phoneIconSvg} alt="phone icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">+ (48) 694 825 981</p>
        </li>
        <li className="flex items-center gap-[8px]">
          <Image src={mailIconSvg} alt="mail icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">pb.markowska@gmail.com</p>
        </li>
        <li className="flex items-center gap-[8px]">
          <Image src={mailIconSvg} alt="mail icon" className="w-5 h-5" />
          <p className="text-weddingRedDark">m-majewski@outlook.com</p>
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
