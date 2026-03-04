import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const maskSvg = (svg: StaticImageData): CSSProperties => {
  return {
    maskImage: `url(${svg.src})`,
    WebkitMaskImage: `url(${svg.src})`,
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    maskSize: 'contain',
  } as CSSProperties;
};
