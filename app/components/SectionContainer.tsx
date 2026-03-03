import { ReactNode } from 'react';
import { cn } from '../utils/common';
import SectionHeader from './SectionHeader';
import { StaticImageData } from 'next/image';

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  titleClassName?: string;
  titleImage?: StaticImageData | string;
  titleImageAlt?: string;
};

export default function SectionContainer({
  children,
  className,
  title,
  titleClassName,
  titleImage,
  titleImageAlt,
}: SectionContainerProps) {
  return (
    <section
      className={cn('w-full h-[1024px] flex flex-col items-center', className)}
    >
      <div className="w-full max-w-[1024px] px-6 md:px-12">
        <SectionHeader
          className={titleClassName}
          image={titleImage}
          imageAlt={titleImageAlt}
        >
          {title}
        </SectionHeader>
        {children}
      </div>
    </section>
  );
}
