import { ReactNode } from 'react';
import { cn } from '../utils/common';
import SectionHeader from './SectionHeader';
import { StaticImageData } from 'next/image';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  titleImage?: StaticImageData | string | React.CSSProperties;
  titleImageAlt?: string;
  titleImageClassName?: string;
  fullHeight?: boolean;
  innerClassName?: string;
};

export default function SectionContainer({
  children,
  className,
  title,
  titleClassName,
  titleImage,
  titleImageAlt,
  titleImageClassName,
  fullHeight,
  innerClassName,
}: SectionContainerProps) {
  return (
    <section
      className={cn('w-full h-[800px] flex flex-col items-center', className)}
    >
      <div
        className={cn(
          'w-full max-w-[1024px] flex flex-col',
          !innerClassName && 'px-6 md:px-12',
          fullHeight && 'h-full',
          innerClassName
        )}
      >
        <SectionHeader
          className={titleClassName}
          image={titleImage}
          imageAlt={titleImageAlt}
          imageClassName={titleImageClassName}
        >
          {title}
        </SectionHeader>
        {children}
      </div>
    </section>
  );
}
