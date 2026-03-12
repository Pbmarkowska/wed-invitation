import SectionContainer from '../SectionContainer';
import Image from 'next/image';
import pearlImage from '@/app/assets/photos/pearl_image.jpg';
import { meowScript } from '../../utils/fonts';
import { cn } from '../../utils/common';

export function WhatWillBeSection() {
  const items = [
    'Po ceremonii w kościele zapraszamy do Restauracji “Rusałka” na obiad, kolację i słodkie.',
    'Nie będziemy tańczyć, ale wam nie zabraniamy.',
    'Okolica jest piękna, więc pewnie zaprosimy was na spacer dookoła jeziora.',
    'W ramach rozrywki oferujemy tylko jedzenie i swoje towarzystwo.',
    'Będzie tort!',
    'Niektórzy goście nie piją alkoholu i prosimy o uszanowanie tego.',
    'Świętujemy do 22:00',
  ];

  return (
    <SectionContainer className="bg-transparent py-16" title="Co będzie?">
      <div className="relative mt-12 w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
        {/* Floating Photo (Right Side on Desktop) */}
        <div className="md:order-last relative z-20 flex-shrink-0 transform rotate-3 mt-8 md:mt-24">
          <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-lg border border-gray-200">
            <Image
              src={pearlImage}
              alt="jest_git"
              className="w-[200px] md:w-[280px] h-[280px] md:h-[400px] object-cover grayscale"
            />
            <div className="absolute bottom-4 left-0 w-full text-center opacity-80">
              <span
                className={cn(
                  meowScript.className,
                  'text-3xl text-weddingRedDark'
                )}
              >
                jest git...
              </span>
            </div>
          </div>
          {/* Tape */}
          <div className="absolute -top-3 left-[50%] -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-md border border-white/20 shadow-sm transform -rotate-4 z-20" />
        </div>

        {/* List of items */}
        <div className="flex flex-col gap-6 w-full max-w-lg z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative border border-weddingRedDark/50 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md p-6 bg-weddingCream shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              {/* Number Badge */}
              <div
                className={cn(
                  meowScript.className,
                  'absolute -top-4 -left-2 bg-weddingRedDark text-weddingCream w-8 h-8 rounded-full flex items-center justify-center text-xl shadow-sm'
                )}
              >
                {index + 1}
              </div>

              <p className="text-center text-gray-800 leading-relaxed text-sm md:text-base pt-2">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
