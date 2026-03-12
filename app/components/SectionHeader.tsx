import { ReactNode, CSSProperties } from 'react';
import { cn } from '../utils/common';
import { ptSerif } from '../utils/fonts';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type SectionHeaderProps = {
  children: ReactNode;
  className?: string;
  image?: StaticImageData | string | CSSProperties;
  imageAlt?: string;
  imageClassName?: string;
};

export default function SectionHeader({
  children,
  className,
  image,
  imageAlt,
  imageClassName,
}: SectionHeaderProps) {
  return (
    <h1
      className={cn(
        ptSerif.className,
        'text-5xl font-normal tracking-wide text-weddingRedDark flex flex-col items-center justify-center mb-10 pt-10',
        className
      )}
    >
      {image &&
        (typeof image === 'object' && !('src' in image) ? (
          <div
            style={image as CSSProperties}
            className={cn('w-16 h-16 mb-4 bg-weddingRedDark', imageClassName)}
          />
        ) : (
          <Image
            src={image as any}
            alt={imageAlt ?? ''}
            className={cn('mb-4 object-contain', imageClassName)}
          />
        ))}
      {children}
    </h1>
  );
}
