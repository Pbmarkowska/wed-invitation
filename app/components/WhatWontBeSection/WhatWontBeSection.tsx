import SectionContainer from '../SectionContainer';
import Image from 'next/image';
import anneMeme from '@/app/assets/photos/anne_hathaway_meme.jpg';
import { cn } from '@/app/utils/common';
import { meowScript } from '@/app/utils/fonts';

export function WhatWontBeSection({ id }: { id: string }) {
  const items = [
    'oczepin',
    'rzucania bukietem',
    'księgi gości',
    'typowych weselnych gier i zabaw',
    'pierwszego tańca',
    'oddzielnego stolika dla nas, chcemy siedzieć z Wami',
  ];

  return (
    <SectionContainer
      className="bg-transparent py-16"
      title="Czego nie będzie?"
      id={id}
    >
      <div className="relative mt-12 w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-center gap-12">
        {/* Floating Photo (Left Side on Desktop) */}
        <div className="md:order-first relative z-20 flex-shrink-0 transform -rotate-3 mt-8 md:mt-24">
          <div className="bg-white p-3 md:p-4 pb-12 md:pb-16 shadow-lg border border-gray-200">
            <Image
              src={anneMeme}
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
          <div className="absolute -top-3 left-[50%] -translate-x-1/2 w-16 h-6 bg-white/40 backdrop-blur-md border border-white/20 shadow-sm transform rotate-4 z-20" />
        </div>

        {/* List of items */}
        <div className="flex flex-col gap-6 w-full max-w-lg z-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center text-gray-700 text-lg md:text-xl font-light tracking-wide border-b border-weddingRedDark/20 pb-4 w-full last:border-0 hover:text-weddingRedDark transition-colors"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
