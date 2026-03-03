import { ReactNode } from 'react';
import { cn } from '../utils/common';
import { ptSerif } from '../utils/fonts';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type SectionHeaderProps = {
  children: ReactNode;
  className?: string;
  image?: StaticImageData | string;
  imageAlt?: string;
};

export default function SectionHeader({
  children,
  className,
  image,
  imageAlt,
}: SectionHeaderProps) {
  return (
    <h1
      className={cn(
        ptSerif.className,
        'text-6xl text-weddingRedDark flex flex-col items-center justify-center mb-10 pt-20',
        className
      )}
    >
      {image && (
        <Image
          src={image}
          alt={imageAlt ?? ''}
          className="mb-4 object-contain"
        />
      )}
      {children}
    </h1>
  );
}
